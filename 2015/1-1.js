var count = 0;
document.getElementsByTagName('pre')[0].textContent.split("").forEach((x) => count += x == '(' ? 1 : -1);
console.log(count);