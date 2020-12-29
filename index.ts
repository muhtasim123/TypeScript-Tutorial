import { Rabbit } from "./rabbit"

let x:number = 5

let y = 5

let s:string

let b:boolean

let arr:number[] = [0, 10, 20]

let keyValue: [string, object] = ["name", {}]

let xypos: [number, number]

let n:null

let un:undefined

let func: (f)=>void

function func1 (x:number, y:number = 1){
    return x*2
}


//any turns type into a js type
let js:any = "string"
js = 10
js = null
js = {}

let multiArr = ["string", 10]
let multiArr2: (string | number)[]

let z: number & string

let peterRabbit:Rabbit = new Rabbit()

console.log(peterRabbit.sleep())