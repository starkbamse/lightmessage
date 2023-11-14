/*
 * Public API Surface of crystals-kyber-ts
 */
import { Kyber768Service } from "./services/kyber768.service";
import { KyberHandshake } from './data/kyber-handshake';
export class Kyber512Handshake extends KyberHandshake {
    constructor() {
        super(new Kyber512Service());
    }
}
export class Kyber768Handshake extends KyberHandshake {
    constructor() {
        super(new Kyber768Service());
    }
}
export class Kyber1024Handshake extends KyberHandshake {
    constructor() {
        super(new Kyber1024Service());
    }
}
//# sourceMappingURL=index.js.map