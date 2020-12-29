import {ISleepable, IFrolicable} from './interface'

export class Rabbit implements ISleepable, IFrolicable {
    name:string
    age:number
    numberOfLegs:number

    frolic(){
        return "Little bunny Fufu, frolicing through the forest"
    }

    sleep(){
        return "Bunny is sleeping"
    }
}