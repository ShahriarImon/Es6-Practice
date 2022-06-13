const factorial = (n,t) =>{
    if(n == 1){
        return 1;
    }else{
        return t*n*factorial(n-1, t);
    }
}

console.log(factorial(6,1));

let me = 100
let you = 50
let your = "Okk Boss"
let yours = "Okk no Boss"

console.log(`${your} ${yours} ${me + you}`)

class Vehicle{
    constructor(){
        this.type = 'BMW';
        this.price = '$12M';
    }
    
}

class Air extends Vehicle{
    constructor(fuelType, setu){
        super();
        this.fuel = fuelType;
        this.road = setu
    }
    getSum(num1, num2){
        return `${num1} ${num2}`;
    }
} 
const bike = new Vehicle();
const plane = new Air("petrol", 'padmaSetu');
const {road} = plane
console.log(plane.getSum(plane.fuel,plane.road));
console.log(plane);

const fruits = ['banana', 'lichi', 'mango', 'guava'];
const flowers = ['sapla', 'beli', 'joba', 'rose'];
const all = [...fruits].concat( [...flowers]);
const [f1, f2, ...fRest] = fruits;
console.log(all);