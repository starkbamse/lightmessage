/// <reference types="node" />
import { Buffer } from "buffer";
import { ByteOps } from "./byte-ops";
export declare class Poly {
    paramsK: number;
    byteOps: ByteOps;
    constructor(paramsK: number);
    /**
     * Applies the inverse number-theoretic transform (NTT) to all elements of a
     * vector of polynomials and multiplies by Montgomery factor 2^16
     * @param r
     */
    polyVectorInvNTTMont(r: number[][]): number[][];
    /**
     * Applies Barrett reduction to each coefficient of each element of a vector
     * of polynomials.
     *
     * @param r
     * @return
     */
    polyVectorReduce(r: number[][]): number[][];
    /**
     * Computes an in-place inverse of a negacyclic number-theoretic transform
     * (NTT) of a polynomial
     *
     * Input is assumed bit-revered order
     *
     * Output is assumed normal order
     *
     * @param r
     * @return
     */
    polyInvNTTMont(r: number[]): number[];
    /**
     * Applies forward number-theoretic transforms (NTT) to all elements of a
     * vector of polynomial
     *
     * @param r
     * @return
     */
    polyVectorNTT(r: number[][]): number[][];
    /**
     * Deserialize a byte array into a polynomial vector
     *
     * @param a
     * @return
     */
    polyVectorFromBytes(a: number[]): number[][];
    /**
     * Serialize a polynomial in to an array of bytes
     *
     * @param a
     * @return
     */
    polyToBytes(a: Array<number>): number[];
    /**
     * Check the 0xFFF
     * @param a
     */
    polyFromBytes(a: number[]): number[];
    /**
     * Convert a polynomial to a 32-byte message
     *
     * @param a
     * @return
     */
    polyToMsg(a: Array<number>): number[];
    /**
     * Convert a 32-byte message to a polynomial
     *
     * @param msg
     * @return
     */
    polyFromData(msg: number[]): number[];
    /**
     * Generate a deterministic noise polynomial from a seed and nonce
     *
     * The polynomial output will be close to a centered binomial distribution
     *
     * @param seed
     * @param nonce
     * @param paramsK
     * @return
     */
    getNoisePoly(seed: number[], nonce: number, paramsK: number): any[];
    /**
     * Pseudo-random function to derive a deterministic array of random bytes
     * from the supplied secret key object and other parameters.
     *
     * @param l
     * @param key
     * @param nonce
     * @return
     */
    generatePRFByteArray(l: number, key: number[], nonce: number): Buffer;
    /**
     * Perform an in-place number-theoretic transform (NTT)
     *
     * Input is in standard order
     *
     * Output is in bit-reversed order
     *
     * @param r
     * @return
     */
    ntt(r: number[]): number[];
    /**
     * Apply Barrett reduction to all coefficients of this polynomial
     *
     * @param r
     * @return
     */
    polyReduce(r: Array<number>): number[];
    /**
     * Performs an in-place conversion of all coefficients of a polynomial from
     * the normal domain to the Montgomery domain
     *
     * @param polyR
     * @return
     */
    polyToMont(r: Array<number>): number[];
    /**
     * Pointwise-multiplies elements of the given polynomial-vectors ,
     * accumulates the results , and then multiplies by 2^-16
     *
     * @param a
     * @param b
     * @return
     */
    polyVectorPointWiseAccMont(a: number[][], b: number[][]): number[];
    /**
     * Multiply two polynomials in the number-theoretic transform (NTT) domain
     *
     * @param a
     * @param b
     * @return
     */
    polyBaseMulMont(a: number[], b: number[]): number[];
    /**
     * Performs the multiplication of polynomials
     *
     * @param a0
     * @param a1
     * @param b0
     * @param b1
     * @param zeta
     * @return
     */
    nttBaseMuliplier(a0: number, a1: number, b0: number, b1: number, zeta: number): number[];
    /**
     * Add two polynomial vectors
     *
     * @param a
     * @param b
     * @return
     */
    polyVectorAdd(a: number[][], b: number[][]): number[][];
    /**
     * Add two polynomials
     *
     * @param a
     * @param b
     * @return
     */
    polyAdd(a: Array<number>, b: Array<number>): number[];
    /**
     * Subtract two polynomials
     *
     * @param a
     * @param b
     * @return
     */
    subtract(a: Array<number>, b: Array<number>): number[];
    /**
     * Perform an in-place inverse number-theoretic transform (NTT)
     *
     * Input is in bit-reversed order
     *
     * Output is in standard order
     *
     * @param r
     * @return
     */
    invNTT(r: Array<number>): number[];
    /**
     * Perform a lossly compression and serialization of a vector of polynomials
     *
     * @param a
     * @param paramsK
     * @return
     */
    compressPolyVector(a: number[][]): number[];
    /**
     * Performs lossy compression and serialization of a polynomial
     *
     * @param polyA
     * @return
     */
    compressPoly(polyA: number[]): number[];
    /**
     * De-serialize and decompress a vector of polynomials
     *
     * Since the compress is lossy, the results will not be exactly the same as
     * the original vector of polynomials
     *
     * @param a
     * @return
     */
    decompressPolyVector(a: number[]): number[][];
    /**
     * Applies the conditional subtraction of Q (KyberParams) to each coefficient of
     * each element of a vector of polynomials.
     */
    polyVectorCSubQ(r: number[][]): number[][];
    /**
     * Apply the conditional subtraction of Q (KyberParams) to each coefficient of a
     * polynomial
     *
     * @param r
     * @return
     */
    polyConditionalSubQ(r: Array<number>): number[];
    /**
     * De-serialize and decompress a vector of polynomials
     *
     * Since the compress is lossy, the results will not be exactly the same as
     * the original vector of polynomials
     *
     * @param a
     * @return
     */
    decompressPoly(a: number[]): number[];
}
