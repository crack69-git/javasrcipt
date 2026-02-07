// const num=40;
// function solve(){
//     console.log('hello world');
//     return num;
// }
// let res=solve();
// console.log(res);


// var n;
// function square(n){
//     console.log(n*n);
// }
// square(20);

//sum of digits

// function sumOfDigits(arr,n){
//     let sum=0;
//     while(n--){
//         sum+=arr[n];
//     }

//     console.log('Sum of digits is: ',sum);
// }
// const arr=[1,2,3,4,5,6,7,8,9,10];
// let cnt=arr.length;
// sumOfDigits(arr,cnt);

function sumOfDigits(arr,n){
    let sum=0;
    for(let i=0;i<n;i++){
        if(arr[i]%2===0){
            console.log(arr[i],' is even');
        }
        else{
            console.log(arr[i],' is odd');
        }
    }
}
const arr=[1,2,3,4,5,6,7,8,9,10];
let cnt=arr.length;
sumOfDigits(arr,cnt);