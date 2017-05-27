var myArr = process.argv.slice(2,process.argv.length);

console.log(myArr.reduce((acc, val) => +acc + Number(val)))
