// Code generated by v/tools/ts-generator/rpcgen_js.py
// import Buffer Functions
import BF, {Optional} from "./functions";
import {IOBuf} from "../../../src/js/modules/utilities/IOBuf";

export class Class2 {

    public numberSigned8: number;
    public numberSigned16: number;
    public numberSigned32: number;

    /**
     * transform bytes into a buffer to Class2
     * @param buffer is the place where the binary data is stored
     * @param offset is the position where the function will start to
     *        read into buffer
     * @return a tuple, where first element is a Class2 and
     *        second one is the read last position in the buffer
     */
    static fromBytes(buffer: Buffer, offset = 0): [Class2, number] {
        const numberSigned8 =
            (() => {
                const [value, newOffset] = BF.readInt8LE(buffer, offset);
                offset = newOffset;
                return value;
            })()
        const numberSigned16 =
            (() => {
                const [value, newOffset] = BF.readInt16LE(buffer, offset);
                offset = newOffset;
                return value;
            })()
        const numberSigned32 =
            (() => {
                const [value, newOffset] = BF.readInt32LE(buffer, offset);
                offset = newOffset;
                return value;
            })()

        return [{
            numberSigned8,
            numberSigned16,
            numberSigned32,
        }, offset]
    }

    /**
     * transform from Class2 to binary version with Redpanda
     * standard
     * @param value is a Class2 instance
     * @param buffer is the binary array where the Class2 binary
     *        will save
     * @param offset is the position where the toBytes function starts to write
     *        in the buffer
     * @return the last position of the offset
     */
    static toBytes(
        value: Class2,
        buffer: IOBuf
    ): number {
        let writtenBytes = 0;

        writtenBytes += BF.writeInt8LE(value.numberSigned8, buffer)
        writtenBytes += BF.writeInt16LE(value.numberSigned16, buffer)
        writtenBytes += BF.writeInt32LE(value.numberSigned32, buffer)

        return writtenBytes
    }
}

export class Class3 {

    public numberUSigned8: number;
    public numberUSigned16: number;
    public numberUSigned32: number;
    public optional: Optional<Class2>;

    /**
     * transform bytes into a buffer to Class3
     * @param buffer is the place where the binary data is stored
     * @param offset is the position where the function will start to
     *        read into buffer
     * @return a tuple, where first element is a Class3 and
     *        second one is the read last position in the buffer
     */
    static fromBytes(buffer: Buffer, offset = 0): [Class3, number] {
        const numberUSigned8 =
            (() => {
                const [value, newOffset] = BF.readUInt8LE(buffer, offset);
                offset = newOffset;
                return value;
            })()
        const numberUSigned16 =
            (() => {
                const [value, newOffset] = BF.readUInt16LE(buffer, offset);
                offset = newOffset;
                return value;
            })()
        const numberUSigned32 =
            (() => {
                const [value, newOffset] = BF.readUInt32LE(buffer, offset);
                offset = newOffset;
                return value;
            })()
        const optional =
            (() => {
                const [optional, newOffset] = BF.readOptional(buffer, offset,
                    (auxBuffer, auxOffset) =>
                        BF.readObject(auxBuffer, auxOffset, Class2))
                offset = newOffset
                return optional;
            })()

        return [{
            numberUSigned8,
            numberUSigned16,
            numberUSigned32,
            optional,
        }, offset]
    }

    /**
     * transform from Class3 to binary version with Redpanda
     * standard
     * @param value is a Class3 instance
     * @param buffer is the binary array where the Class3 binary
     *        will save
     * @param offset is the position where the toBytes function starts to write
     *        in the buffer
     * @return the last position of the offset
     */
    static toBytes(
        value: Class3,
        buffer: IOBuf
    ): number {
        let writtenBytes = 0;

        writtenBytes += BF.writeUInt8LE(value.numberUSigned8, buffer)
        writtenBytes += BF.writeUInt16LE(value.numberUSigned16, buffer)
        writtenBytes += BF.writeUInt32LE(value.numberUSigned32, buffer)

        writtenBytes += BF.writeOptional(buffer, value.optional, (item, auxBuffer) =>
            BF.writeObject(auxBuffer, Class2, item))

        return writtenBytes
    }
}

export class Class1 {

    public stringValue: string;
    public booleanValue: boolean;
    public bigint: bigint;
    public varintValue: bigint;
    public bufferValue: Buffer;
    public arrayValue: Array<string>;
    public classSigned: Class2;
    public classUSigned: Class3;

    /**
     * transform bytes into a buffer to Class1
     * @param buffer is the place where the binary data is stored
     * @param offset is the position where the function will start to
     *        read into buffer
     * @return a tuple, where first element is a Class1 and
     *        second one is the read last position in the buffer
     */
    static fromBytes(buffer: Buffer, offset = 0): [Class1, number] {
        const stringValue =
            (() => {
                const [value, newOffset] = BF.readString(buffer, offset);
                offset = newOffset;
                return value;
            })()
        const booleanValue =
            (() => {
                const [value, newOffset] = BF.readBoolean(buffer, offset);
                offset = newOffset;
                return value;
            })()
        const bigint =
            (() => {
                const [value, newOffset] = BF.readInt64LE(buffer, offset);
                offset = newOffset;
                return value;
            })()
        const varintValue =
            (() => {
                const [value, newOffset] = BF.readVarint(buffer, offset);
                offset = newOffset;
                return value;
            })()
        const bufferValue =
            (() => {
                const [value, newOffset] = BF.readBuffer(buffer, offset);
                offset = newOffset;
                return value;
            })()
        const arrayValue =
            (() => {
                const [array, newOffset] = BF.readArray()(buffer, offset,
                    (auxBuffer, auxOffset) => BF.readString(auxBuffer, auxOffset))
                offset = newOffset
                return array;
            })()
        const classSigned =
            (() => {
                const [value, newOffset] =
                    BF.readObject(buffer, offset, Class2);
                offset = newOffset;
                return value;
            })()
        const classUSigned =
            (() => {
                const [value, newOffset] =
                    BF.readObject(buffer, offset, Class3);
                offset = newOffset;
                return value;
            })()

        return [{
            stringValue,
            booleanValue,
            bigint,
            varintValue,
            bufferValue,
            arrayValue,
            classSigned,
            classUSigned,
        }, offset]
    }

    /**
     * transform from Class1 to binary version with Redpanda
     * standard
     * @param value is a Class1 instance
     * @param buffer is the binary array where the Class1 binary
     *        will save
     * @param offset is the position where the toBytes function starts to write
     *        in the buffer
     * @return the last position of the offset
     */
    static toBytes(
        value: Class1,
        buffer: IOBuf
    ): number {
        let writtenBytes = 0;

        writtenBytes += BF.writeString(value.stringValue, buffer)
        writtenBytes += BF.writeBoolean(value.booleanValue, buffer)
        writtenBytes += BF.writeInt64LE(value.bigint, buffer)
        writtenBytes += BF.writeVarint(value.varintValue, buffer)
        writtenBytes += BF.writeBuffer(value.bufferValue, buffer)

        writtenBytes +=
            BF.writeArray(true)(value.arrayValue,
                buffer, (item, auxBuffer) =>
                    BF.writeString(item, auxBuffer)
            )
        writtenBytes += BF.writeObject(buffer, Class2, value.classSigned)
        writtenBytes += BF.writeObject(buffer, Class3, value.classUSigned)

        return writtenBytes
    }
}