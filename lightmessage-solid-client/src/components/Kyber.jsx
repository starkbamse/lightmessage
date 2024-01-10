import {Kyber768} from "../kyber/index";


export default function Kyber() {
    tryKyber()
    function splitStringIntoUint8Arrays(str) {
        var strArray = Array.from(str);
        var arrays = [];
        var i,j,tempArray;
        var chunk = 32;
     
        for (i=0,j=strArray.length; i<j; i+=chunk) {
            tempArray = strArray.slice(i,i+chunk);
            var uint8array = new Uint8Array(chunk);
    
            for(let k=0;k<tempArray.length;k++) {
                uint8array[k] = tempArray[k].charCodeAt(0);
            }
    
            arrays.push(uint8array);
        }
        
        return arrays;
    }
    function mergeArraysIntoString(arrays) {
        var string = "";
        for (var i = 0; i < arrays.length; i++) {
            for (var j = 0; j < arrays[i].length; j++) {
                string += String.fromCharCode(arrays[i][j]);
            }
        }
        return string;
    }
    function hexToBytes(hex) {
        let bytes = [];
        for (let i = 0; i < hex.length; i += 2) {
            bytes.push(parseInt(hex.substring(i, i + 2), 16));
        }
        console.log(bytes)
        return bytes;
    }
    async function tryKyber() {
        console.log("Trying kyber")
        let input=splitStringIntoUint8Arrays("Hello world. How are you, today?, I am feeling prettyy good. The encryption is working very well and I am thinking of publishing this live");
        console.log(input)
    /**
    * Generate 2 key agreements, one for Bob and one for Alice
    */
    const bobHandshake = new Kyber768Handshake();
    let test1=bobHandshake.passwordToKeyPair(hexToBytes("07123e1f482356c415f684407a3b8723e10b2cbbc0b8fcd6282c49d37c9c1abc"))
    let test2=bobHandshake.passwordToKeyPair(hexToBytes("07123e1f482356c415f684407a3b8723e10b2cbbc0b8fcd6282c49d37c9c1abc"))




    console.log(test1)
    console.log(test2)
    const aliceHandshake = new Kyber768Handshake();
    let messages=[]
    let start=Date.now()
    console.log("publickey")
    console.log(bobHandshake.publicKey)
    for(let i=0;i<input.length;i++){
        let encrypted_msg=bobHandshake.encryptc(aliceHandshake.publicKey,input[i])
        messages.push(encrypted_msg)
    }
    let decrypted_messages=[]
    for(let i=0;i<messages.length;i++){
        let decrypted_msg=aliceHandshake.decryptc(messages[i])
        decrypted_messages.push(decrypted_msg)
    }
    let string_representation=mergeArraysIntoString(decrypted_messages)
    console.log("decrypted:")
    console.log(string_representation)
    console.log("Time taken: "+(Date.now()-start)+" ms")
    }
    return (

     <div>
        <script>

        </script>
     </div>
    );
  }
  