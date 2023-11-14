/// <reference types="node" />
import { Buffer } from "buffer";
/**
 * Utility class for byte operations
 */
export declare class ByteOps {
    paramsK: number;
    constructor(paramsK: number);
    /**
     * Generate a polynomial with coefficients distributed according to a
     * centered binomial distribution with parameter eta, given an array of
     * uniformly random bytes.
     *
     * @param buff
     * @param paramsK
     * @return
     */
    generateCBDPoly(buff: Buffer, paramsK: number): any[];
    /**
     * Returns a 24-bit unsigned integer as a long from byte x
     *
     * @param x
     * @return
     */
    convertByteTo24BitUnsignedInt(x: any): number;
    /**
     * Returns a 24-bit unsigned integer as a long from byte x
     *
     * @param x
     * @return
     */
    convertByteTo32BitUnsignedInt(x: Buffer): number;
    /**
     * Computes a Barrett reduction given a 16 Bit Integer
     *
     * @param a
     * @return
     */
    barrettReduce(a: number): number;
    /**
     * Multiply the given shorts and then run a Montgomery reduce
     *
     * @param a
     * @param b
     * @return
     */
    modQMulMont(a: number, b: number): number;
    /**
     * Computes a Montgomery reduction given a 32 Bit Integer
     *
     * @param a
     * @return
     */
    byteopsMontgomeryReduce(a: number): number;
}
