/*
A simple substitution cipher replaces one character from 
an alphabet with a character from an alternate alphabet, 
where each character's position in an alphabet is mapped 
to the alternate alphabet for encoding or decoding.

Example:
  let abc1 = "abcdefghijklmnopqrstuvwxyz";
  let abc2 = "etaoinshrdlucmfwypvbgkjqxz";
    
  let sub = new SubstitutionCipher(abc1, abc2);
  sub.encode("abc") // => "eta"
  sub.encode("xyz") // => "qxz"
  sub.encode("aeiou") // => "eirfg"
    
  sub.decode("eta") // => "abc"
  sub.decode("qxz") // => "xyz"
  sub.decode("eirfg") // => "aeiou"

If a character provided is not in the opposing alphabet, simply leave it as be.
*/