/**
 * Kyber Handshake
 */
export class KyberHandshake {
    constructor(kyberService) {
        this.kyberService = kyberService;
        const kyberKeys = this.kyberService.generateKyberKeys();
        this._publicKey = kyberKeys[0];
        this._privateKey = kyberKeys[1];
    }
    /**
     * Process the remote cipher text to generate the same shared
     * secret
     * @param remoteCipherText
     * @return remoteSharedSecret
     */
    encryptc(remotePublicKey,m) {
        return this.kyberService.encryptc(remotePublicKey,m);
    }    
    /**
     * Process the remote cipher text to generate the same shared
     * secret
     * @param remoteCipherText
     * @return remoteSharedSecret
     */
    decryptc(m) {
        return this.kyberService.decryptc(m,this.privateKey);
    }        

    get publicKey() {
        return this._publicKey;
    }
    set publicKey(value) {
        this._publicKey = value;
    }
    
    get privateKey() {
        return this._privateKey;
    }
    set privateKey(value) {
        this._privateKey = value;
    }

}
