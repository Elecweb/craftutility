export class Cat{
    hp:number;
    constructor(hp:number){
        this.hp = hp;
    }

    meow(name:String):void{
        console.log(this.hp," meow","meowwww "+name);
    }
}