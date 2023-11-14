import { Indcpa } from "../lib/indcpa";
/**
 * Abstract class for Kyber implementation
 */
export declare abstract class KyberService {
    paramsK: number;
    indcpa: Indcpa;
    static nttZetas: number[];
    static nttZetasInv: number[];
    static paramsN: number;
    static paramsQ: number;
    static paramsQinv: number;
    static paramsSymBytes: number;
    static paramsPolyBytes: number;
    static paramsETAK512: number;
    static paramsETAK768K1024: number;
    static paramsPolyvecBytesK512: number;
    static paramsPolyvecBytesK768: number;
    static paramsPolyvecBytesK1024: number;
    static paramsPolyCompressedBytesK512: number;
    static paramsPolyCompressedBytesK768: number;
    static paramsPolyCompressedBytesK1024: number;
    static paramsPolyvecCompressedBytesK512: number;
    static paramsPolyvecCompressedBytesK768: number;
    static paramsPolyvecCompressedBytesK1024: number;
    static paramsIndcpaPublicKeyBytesK512: number;
    static paramsIndcpaPublicKeyBytesK768: number;
    static paramsIndcpaPublicKeyBytesK1024: number;
    static paramsIndcpaSecretKeyBytesK512: number;
    static paramsIndcpaSecretKeyBytesK768: number;
    static paramsIndcpaSecretKeyBytesK1024: number;
    static Kyber512SKBytes: number;
    static Kyber768SKBytes: number;
    static Kyber1024SKBytes: number;
    static Kyber512PKBytes: number;
    static Kyber768PKBytes: number;
    static Kyber1024PKBytes: number;
    static KyberEncoded512PKBytes: number;
    static KyberEncoded768PKBytes: number;
    static KyberEncoded1024PKBytes: number;
    static Kyber512CTBytes: number;
    static Kyber768CTBytes: number;
    static Kyber1024CTBytes: number;
    static KyberEncoded512CTBytes: number;
    static KyberEncoded768CTBytes: number;
    static KyberEncoded1024CTBytes: number;
    static KyberSSBytes: number;
    static KyberEncodedSSBytes: number;
    /**
     * Default constructor that is called by the implementing Kyber service
     * @param paramsK
     */
    constructor(paramsK: number);
    /**
     * Return a string representation of the Kyber algorithm type
     */
    abstract getAlgorithm(): string;
    /**
     * Generate local Kyber Keys
     */
    generateKyberKeys(): number[][];
    /**
     * Generate a shared secret and cipher text from the given
     * public key
     * @param publicKey
     */
    encrypt(publicKey: number[]): number[][];
    /**
     * Decrypt the given cipher text to create the same shared secret with
     * the local private key
     * @param cipherText
     * @param privateKey
     */
    decrypt(cipherText: number[], privateKey: number[]): number[];
}
