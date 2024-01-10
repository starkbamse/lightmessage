import { Kyber768Service } from "./services/kyber768.service";
import { Kyber } from './data/kyber-handshake';

export class Kyber768 extends Kyber {
    constructor() {
        super(new Kyber768Service());
    }
}