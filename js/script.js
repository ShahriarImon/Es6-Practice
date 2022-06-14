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

const fruits = ['banana', 'jackFruit', 'lichi', 'mango', 'guava','apple'];
const flowers = ['sapla', 'beli', 'joba', 'rose'];
const all = [...fruits,...flowers]
const [f1, f2, ...fRest] = fruits;
console.log(all);
console.log(f1);
console.log(typeof(f1));
console.log(f2);
console.log(fRest);
console.log(fruits);


const pakaFruits = fruits.map((element,index) => `${index+1} paka ${element}`);
console.log(pakaFruits);

const fiveLetterFruits = fruits.filter(element => element.length<=5)
console.log(fiveLetterFruits);

const actors = [
    {name: 'Amir Khan', age : 60},
    {name: 'Salman Khan', age : 49},
    {name: 'Sharukh Khan', age : 48},
    {name: 'NTR', age : 43}
]

const newArray = [];
for(let i =0; i<actors.length; i++){
    newArray.push(actors[i].name);
}
console.log(newArray);

const ActorsName = actors.map((element, index) => `No ${index+1} - ${element.name} is ${element.age} years old`);
console.log(ActorsName);


console.log(actors.filter(element => element.age<50));
console.log(actors.find(element => element.age<50));

function ceil(){
    var he = "Hridoy";
    var she = "Rony";
    console.log(he);
}
ceil();