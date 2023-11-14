/// <reference types="node" />
import { Buffer } from "buffer";
import { Poly } from "./poly";
export declare class Indcpa {
    paramsK: number;
    poly: Poly;
    constructor(paramsK: number);
    /**
     * Generates public and private keys for the CPA-secure public-key
     * encryption scheme underlying Kyber.
     */
    indcpaKeyGen(): number[][];
    /**
     * Encrypt the given message using the Kyber public-key encryption scheme
     *
     * @param publicKey
     * @param msg
     * @param coins
     * @return
     */
    indcpaEncrypt(publicKey: number[], msg: number[], coins: number[]): number[];
    /**
     * Decrypt the given byte array using the Kyber public-key encryption scheme
     *
     * @param packedCipherText
     * @param privateKey
     * @return
     */
    indcpaDecrypt(packedCipherText: number[], privateKey: number[]): number[];
    /**
     * Generate a polynomial vector matrix from the given seed
     *
     * @param seed
     * @param transposed
     * @return
     */
    generateMatrix(seed: number[], transposed: boolean): number[][][];
    /**
     * Runs rejection sampling on uniform random bytes to generate uniform
     * random integers modulo `Q`
     *
     * @param buf
     * @param bufl
     * @param len
     * @return
     */
    generateUniform(buf: Buffer, bufl: number, len: number): number[][];
}
