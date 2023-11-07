//Example of read only properties, getters, and setters

/*const game = {
status: "In progress",
scoreHistory: [4, 1, 8, 2],
areas: [1, 2, 4, 5, 6]
};


//read-only property
Object.defineProperty(game, "maxPlayers",{
    value: 2,
    writable: false


})
console.log(game)

Object.defineProperty(game, "Deaths",{
    value: 100,
    writable: false
})

//getter
Object.defineProperty(game, "highScore", {
    get(){
        return Math.max(...this.scoreHistory);
    }  
})

Object.defineProperty(game, "area", {
    get(){
        return Math.max(...this.areas)
    }
})

//setter
Object.defineProperty(game, "completed",{
    set(v){
        v ? this.status='completed' : this.status
    }
})


game.completed = false;

game.maxPlayers = 5


//Example of inserting new properties into an object

const apples = {
    type: "red",
    region: 'Fiji',
}

apples.flavor = "good"

console.log(apples)

const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  //console.log(recordCollection[2548]['artist'])
  
   Only change code below this line
  function updateRecords(records, id, prop, value) {
    if(value === ''){
        delete records[id][prop]
    }else if (prop !== 'tracks' && value !== ''){
        records[id][prop] = value
    }else if (prop === 'tracks' && value !== '' && !records[id].hasOwnProperty('tracks')){
        records[id].tracks = [value]
    }else if (prop === 'tracks' && value !== '' && records[id].hasOwnProperty('tracks')){
        records[id][prop].push(value)
    }
    return records;
  }
  console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));

  console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
  
  console.log(updateRecords(recordCollection, 2468, "tracks", "Free"))



  


  function plusOne(num){
    for(let i = num.length - 1; i >= 0; i--){
    if(num[i] < 9){
        num[i] = num[i] + 1
        return num
    }else {
        num[i] = 0
    }
  }
    num.unshift(1);
    return num;
  };


  const cloths = {
    pants: 'none'
  }

 Object.defineProperty(cloths, 'Shirt',{
    value: 'blue'
 })



  const addNumber = (a, b = 3) => a + b;

//console.log(  addNumber(3, ))


const sum = (...args) => {
    let total = 0;
    for(let i =0; i < args.length; i++){
        total += args[i]
    }
    return total
}

//console.log(sum(45,345,32,5654,676,345))




function fibonacci(n){
  let a = 0;
  let b = 1;

  if(n === 0){
    return a;
  }


for(let i = 2; i <= n; i++){
  let c = a + b;
  a = b;
  b = c;
}

return b;
}

console.log(fibonacci())


function count7(n){
  if(n === 0){
    return 0
  } else if (n % 10 === 7){
    return 1 + count7(Math.floor(n/10))
  }else {
    return count7(Math.floor(n/10))
  }
}

console.log(count7(777))


function checkX(str){
  if(str === ''){
    return 0;
  }
  const firstChar = str.charAt(0)

    if(firstChar === 'x'){
      return 1 + checkX(str.slice(1))
    } else {
      return checkX(str.slice(1))
    }
  }


console.log(checkX(''))


function changePi(str){
  if(str === ''){
    return 0;
  }

}

function bunnyEars(n){
  if(n === 0){
    return 0
  }else {
    let ears = n % 2 === 0 ? 3 : 2
    return bunnyEars(n-1) + ears
  }
}

console.log(bunnyEars(2))

function check7(n){
  if(n === 0){
    return 0
  } 

  if(n % 10 === 7){
    return check7(Math.floor(n/10)) + 1
  } else {
    return check7(Math.floor(n/10))
  }
}

console.log(check7(717))



function checkX(str){
  if(str === ''){
    return 0;
  }
  if(str.charAt(0).toUpperCase() === 'X'){
    console.log(str)
    return checkX(str.slice(1)) + 1
  }else {
    console.log(str)
    return checkX(str.slice(1))
  }

}

console.log(checkX('XxXxXXxx'))


function changePi(str){
  if(str === '' || !str.includes('pi')){
    return str;
  }

  const indexOfPi = str.indexOf('pi')
  return str.slice(0, indexOfPi) + '3.14' + changePi(str.slice(indexOfPi + 2))
}

console.log(changePi('pi'))


const originalArray = [1, 2, 3, 4, 5];
const newArray = originalArray.slice(1, 3); // newArray will be [2, 3, 4]
console.log(newArray)

const array = [1, 2, 3, 4, 5]
const newArr = array.splice(1,3)
console.log(array)
console.log(newArr)

function array11(array){
  if(array.length ===  0){
    return 0
  }

  if(array[array.length - 1] === 11){
    return array11(array.slice(0, array.length-1)) + 1
  }else{
    return array11(array.slice(0, array.length-1))
  }
}

console.log(array11([11, 2, 5 ]))

const array= [11, 2]
console.log(array.splice(0, array.length-1))*/

class temperature {
  constructor(f){
    this.temp =  f
  }

  get celsius(){
    return 5/9 * (this.temp - 32)
  }

  set celsius (c){
    return this.temp = (c * 9/5) + 32
  }
}


const temp = new temperature(78)
console.log(temp.celsius)

let newTemp = temp.celsius

temp.celsius = 20

newTemp = temp.celsius

console.log(newTemp)



console.log(0.5464 * 0.242)





class william {
  constructor(likes){
    this.hobby = likes
  }
}

let William = new william('penis')

console.log(William)

William.loves = 'dick'

console.log(William)