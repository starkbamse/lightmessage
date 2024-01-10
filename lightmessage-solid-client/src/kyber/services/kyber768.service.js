import { KyberService } from "./kyber.service";
export class Kyber768Service extends KyberService {
    constructor() {
        super(Kyber768Service.paramsK);
    }
}
Kyber768Service.paramsK = 3;
