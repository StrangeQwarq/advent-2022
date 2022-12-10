var count = 0;
var position = 1;
document.getElementsByTagName('pre')[0].textContent.split("").every((x, i) => (count += x == '(' ? Math.sign(position++) : -Math.sign(position++)) >= 0);
console.log(position-1);