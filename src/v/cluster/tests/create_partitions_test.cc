#include "cluster/tests/rebalancing_tests_fixture.h"
#include "model/fundamental.h"
#include "model/namespace.h"
#include "model/timeout_clock.h"

#include <seastar/core/sstring.hh>

#include <boost/test/tools/old/interface.hpp>

#include <system_error>

model::topic_namespace make_tp_ns(const ss::sstring& tp) {
    return model::topic_namespace(model::kafka_namespace, model::topic(tp));
}

FIXTURE_TEST(test_creating_partitions, rebalancing_tests_fixture) {
    start_cluster(3);
    create_topic(create_topic_cfg("test-1", 3, 1));
    create_topic(create_topic_cfg("test-2", 4, 3));

    cluster::create_partititions_configuration cfg_test_1(
      make_tp_ns("test-1"), 3);
    cluster::create_partititions_configuration cfg_test_2(
      make_tp_ns("test-2"), 5);

    auto res = (*get_leader_node_application())
                 ->controller->get_topics_frontend()
                 .local()
                 .create_partitions({cfg_test_1, cfg_test_2}, model::no_timeout)
                 .get();

    BOOST_REQUIRE_EQUAL(res.size(), 2);
    BOOST_REQUIRE_EQUAL(
      res[0].ec, cluster::make_error_code(cluster::errc::success));
    auto& topics
      = (*get_leader_node_application())->controller->get_topics_state();
    auto tp_1_md = topics.local().get_topic_metadata(make_tp_ns("test-1"));
    auto tp_2_md = topics.local().get_topic_metadata(make_tp_ns("test-2"));

    // total 6 partitions
    BOOST_REQUIRE_EQUAL(tp_1_md->partitions.size(), 3 + 3);
    for (auto i = 0; i < 6; ++i) {
        BOOST_REQUIRE_EQUAL(tp_1_md->partitions[i].id, model::partition_id(i));
    }

    // total 9 partitions
    BOOST_REQUIRE_EQUAL(tp_2_md->partitions.size(), 4 + 5);
    for (auto i = 0; i < 9; ++i) {
        BOOST_REQUIRE_EQUAL(tp_2_md->partitions[i].id, model::partition_id(i));
    }
}
