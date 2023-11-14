import { KyberService } from "./kyber.service";
/**
 * Kyber KEM 768 implementation
 */
export class Kyber768Service extends KyberService {
    constructor() {
        super(Kyber768Service.paramsK);
    }
    /**
     * String representation of the Kyber version
     */
    getAlgorithm() {
        return "Kyber768";
    }
}
// Indicates the Kyber version to the rest of the algorithm
Kyber768Service.paramsK = 3;
//# sourceMappingURL=kyber768.service.js.map