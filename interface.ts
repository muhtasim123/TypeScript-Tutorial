export interface IFrolicable {
    frolic:()=>string
}

export interface ISleepable {
    sleep:()=>string
}

let myObj:IFrolicable = {
    frolic:()=>{
        return "The hills are alive"
    }
}

let myObj2:IFrolicable & ISleepable = {
    frolic:()=>{
        return "Frolic & "
    },
    sleep:()=>{
        return "Sleep"
    }
}