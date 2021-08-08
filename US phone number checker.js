function telephoneCheck(num) {

  const format = /^1{0,1} {0,1}[0-9]{3} {0,1}-{0,1}[0-9]{3} {0,1}-{0,1}[0-9]{4}$/;
  const formatBrackets = /^1{0,1} {0,1}\([0-9]{3}\) {0,1}-{0,1}[0-9]{3} {0,1}-{0,1}[0-9]{4}$/;

  const testNoBrackets = format.test(num);
  const testBrackets = formatBrackets.test(num);
  
  if (testBrackets === true || testNoBrackets === true) {
    return true;
  } else {
    return false;
  }
}
  console.log(telephoneCheck("1 (555)-555-5555"));
  