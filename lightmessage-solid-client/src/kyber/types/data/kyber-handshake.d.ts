import { KyberService } from "../services/kyber.service";
/**
 * Kyber Handshake
 */
export declare class KyberHandshake {
    private kyberService;
    private _publicKey;
    private _privateKey;
    private _remotePublicKey;
    private _cipherText;
    private _sharedSecret;
    private _remoteSharedSecret;
    private _remoteCipherText;
    constructor(kyberService: KyberService);
    /**
     * Process the remote public key to create a cipher text and shared
     * secret
     * @param remotePublicKey
     * @return cipherText
     */
    generateCipherTextAndSharedSecret(remotePublicKey: number[]): number[];
    /**
     * Process the remote cipher text to generate the same shared
     * secret
     * @param remoteCipherText
     * @return remoteSharedSecret
     */
    generateRemoteSharedSecret(remoteCipherText: number[]): number[];
    get sharedSecret(): number[];
    set sharedSecret(value: number[]);
    get publicKey(): number[];
    set publicKey(value: number[]);
    get remoteSharedSecret(): number[];
    set remoteSharedSecret(value: number[]);
    get cipherText(): number[];
    set cipherText(value: number[]);
    get remoteCipherText(): number[];
    set remoteCipherText(value: number[]);
    get privateKey(): number[];
    set privateKey(value: number[]);
    get remotePublicKey(): number[];
    set remotePublicKey(value: number[]);
}
