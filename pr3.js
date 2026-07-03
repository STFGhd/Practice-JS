function strip(){
   console.log("stripping"); 
}
strip();

function strip(user){
   console.log(`こんにちは${user}`); 
}

strip("山田");

function calc(a,b) {
    let c;
    c = a + b;
    return c;
};

let d = calc(100,200);
console.log(d);

let user = {
    name: "山田",
    age: 20,
    address: "東京都",
};

let user2 = user;
user.name = "田中";
console.log(user2);

let user = {
    name: "山田",
    age: 20,
    address: "東京都",
};

let user2 = Object.assign({}, user);
user.name = "田中";
console.log(user);
console.log(user2);

let user = {
    name: "山田",
    age: 20,
    address: {
        zip: "100-0001",
        city: "東京都",
        address: "千代田区千代田1-1",
    }
};

let user2 = structuredClone(user);
user.address.city = "大阪府";
console.log(user.address.city);
console.log(user2.address.city);
