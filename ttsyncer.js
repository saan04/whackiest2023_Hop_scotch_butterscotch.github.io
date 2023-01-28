
function ttsy(){


const bt5X = [[0,0,1,0,0,1,0,1,1],[0,0,1,0,0,1,0,1,1],[0,0,1,0,0,1,0,1,1],[0,0,1,0,0,1,0,0,1],[1,0,1,0,0,1,0,0,0],[0,0,1,0,0,0,0,0,0]];
const cse4A = [[0,0,1,0,0,1,0,0,1],[0,0,1,0,0,1,0,0,1],[0,0,1,0,0,1,0,0,1],[0,0,1,0,0,1,0,1,1],[0,0,1,0,0,1,0,0,0],[0,0,1,0,0,1,1,1,1]];
const second_var = {0:"first hour",1:"second hour",2:"15 minute break",3:"third hour",4:"fourth hour",5:"break",6:"fifth hour",7:"sixth hour",8:"seventh hour"};

const first_var = {"monday":0,"tuesday":1,"wednesday":2,"thursday":3,"friday":4,"saturday":5};

const day = prompt("enter day: ");
const value = first_var[day];
console.log(value);

for (let j = 0; j < 9; j++) {
    if(bt5X[value][j] === 1) {
        if(cse4A[value][j] === 1) {
            const x = second_var[j];
            window.alert(x);
        }
    }
}
}