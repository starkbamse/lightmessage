import { KyberService } from "./kyber.service";
/**
 * Kyber KEM 768 implementation
 */
export declare class Kyber768Service extends KyberService {
    private static paramsK;
    constructor();
    /**
     * String representation of the Kyber version
     */
    getAlgorithm(): string;
}
