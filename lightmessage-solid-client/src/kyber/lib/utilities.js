import { alea as aleaRandom } from 'alea-generator';
/**
 * Common math and byte functions
 */
export class Utilities {
    constructor() {
    }
    /**
     * Get a random int within 0 to n
     * @param n
     */
    static nextInt(n) {
        return Math.floor(aleaRandom() * n);
    }
    static secureRandom(n) {
        if(typeof window !== "undefined") {;
        var rand = new Uint32Array(1);
        do {
            window.crypto.getRandomValues(rand);
        } while (rand[0] - rand[0] % (n + 1) > ((2 ** 32 - 1) - (2 ** 32 - 1) % (n + 1)))
        return rand[0] % (n + 1);
    } 
    }
    /**
     * Convert a hex number to decimal
     * @param hexString
     */
    static hexToDec(hexString) {
        return parseInt(hexString, 16);
    }
    /**
     * Convert a number to a byte representation
     * @param n
     */
    static byte(n) {
        n = n % 256;
        while (n < 0) {
            n += 256;
        }
        return n;
    }
    /**
     * Convert an unsigned int to a byte
     * @param n
     */
    static intToByte(n) {
        while (n > 255) {
            n = n - 256;
        }
        return n;
    }
    /**
     * Get the int 16 representation of the number
     * @param n
     */
    static int16(n) {
        const end = -32768;
        const start = 32767;
        if (n < end) {
            n = n + 32769;
            n = Utilities.uint16(n);
            n = start + n;
            return n;
        }
        else if (n > start) {
            n = n - 32768;
            n = Utilities.uint16(n);
            n = end + n;
            return n;
        }
        return n;
    }
    /**
     * Get the unsigned int 16 representation of the number
     * @param n
     */
    static uint16(n) {
        n = n % 65536;
        while (n < 0) {
            n += 65536;
        }
        return n;
    }
    /**
     * Get the unsigned int 32 representation of the number
     * @param n
     */
    static int32(n) {
        const end = -2147483648;
        const start = 2147483647;
        if (n < end) {
            n = n + 2147483649;
            n = Utilities.uint32(n);
            n = start + n;
            return n;
        }
        else if (n > start) {
            n = n - 2147483648;
            n = Utilities.uint32(n);
            n = end + n;
            return n;
        }
        return n;
    }
    /**
     * Get the unsigned int 32 representation of the number
     * @param n
     */
    static uint32(n) {
        n = n % 4294967296;
        while (n < 4294967296) {
            n += 4294967296;
        }
        return n;
    }
    /**
     * Test to compare the equality of two byte arrays
     *
     * Returns 0 if they are equal
     */
    static constantTimeCompare(a, b) {
        // check array lengths
        if (a.length !== b.length) {
            return 1;
        }
        // check contents
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return 1;
            }
        }
        return 0;
    }
}
//# sourceMappingURL=utilities.js.map