// Write code that checks whether the string byteSequence contains the character x.
let byteSequence = "TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu";

console.log(byteSequence.includes("x"));

function includes(string, char) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      return true;
    }
  }
  return false;
}

console.log(includes(byteSequence, "x"));
