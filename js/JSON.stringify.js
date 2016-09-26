var obj = {
    name: 'miaozhirui',
    age:100
}
//JSON.stringify
//1.================
// // console.log(JSON.stringify(obj,['name'],true))
// var obj1 = JSON.stringify(obj, function(key, value){
//
//     // return undefined
//     console.log(key);
//     return value;
//     // switch (key){
//     //     case 'name':
//     //         return 'name';
//     //     break;
//     //     default:
//     //         return value;
//     // }
//
// })

//2.==============
// console.log(JSON.stringify(obj, null ,4))

// console.log(obj)

//3.================
// console.log(JSON.stringify(obj, null, '==========='))



//4.=========
var obj = {
    name: 'miaozhirui',
    age: 100,
    toJSON: function() {

        // return this.name
        var arr = [this.name, this.age];
        return arr;
    }
}

console.log(typeof JSON.stringify(obj))




