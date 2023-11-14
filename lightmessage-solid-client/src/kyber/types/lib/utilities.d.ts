/**
 * Common math and byte functions
 */
export declare class Utilities {
    constructor();
    /**
     * Get a random int within 0 to n
     * @param n
     */
    static nextInt(n: number): number;
    /**
     * Convert a hex number to decimal
     * @param hexString
     */
    static hexToDec(hexString: string): number;
    /**
     * Convert a number to a byte representation
     * @param n
     */
    static byte(n: number): number;
    /**
     * Convert an unsigned int to a byte
     * @param n
     */
    static intToByte(n: number): number;
    /**
     * Get the int 16 representation of the number
     * @param n
     */
    static int16(n: number): number;
    /**
     * Get the unsigned int 16 representation of the number
     * @param n
     */
    static uint16(n: number): number;
    /**
     * Get the unsigned int 32 representation of the number
     * @param n
     */
    static int32(n: number): number;
    /**
     * Get the unsigned int 32 representation of the number
     * @param n
     */
    static uint32(n: number): number;
    /**
     * Test to compare the equality of two byte arrays
     *
     * Returns 0 if they are equal
     */
    static constantTimeCompare(a: number[], b: number[]): number;
}
