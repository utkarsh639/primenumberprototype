Array.prototype.checkprime = function (){

    for(let i = 2; i < this.length; i++){
        if(this[i]%i == 0){
            return false;
        }
        else{
            return true;
        }
    }
    return false
}



const arr1  = [22,4,6,8];
let r = arr1.checkprime();
console.log(r);

const arr2  = [1,3,5,7,9,11];
let s = arr2.checkprime();
console.log(s);

const arr3  = [0,-1,-2,-3];
let u = arr3.checkprime();
console.log(u);