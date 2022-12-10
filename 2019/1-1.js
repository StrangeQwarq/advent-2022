console.log(document.getElementsByTagName('pre')[0].textContent.split("\n").filter(x => x.length).map(x => parseInt(x)).reduce((acc, fuel) => acc + Math.floor(fuel / 3) - 2, 0));
