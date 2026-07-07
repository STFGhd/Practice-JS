const input = require('fs').readFileSync(0, 'utf8').trim();
console.log(input);

const input = require('fs').readFileSync(0, 'utf8').trim();
const len = input.length;

console.log(len);
if (len > 10) {
    console.log("10文字以下で入力してください")
}else{
    console.log(input);
}

const input = require('fs').readFileSync(0, 'utf8').trim();
const val = parseFloat(input);

console.log(val);
if (val > 100) {
    console.log("100以下の数値を入力してください")
}else{
    console.log(input);
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

let total = 0;
for (let i = 1; i <= 100; i++) {
    total += i;
    if(total > 30){
        break;
    }
}
console.log(total);

const a = [50, 120, 30, 21,30];
for (const val of a) {
    console.log(val);
}

const a = [50, 120, 30, 21,30];
const b = [...a];


