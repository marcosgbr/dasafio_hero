class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    attack(){
       if (this.type === "Mago"){
            return "magia"
        }else if(this.type === "Guerreiro"){
            return "espada"
        }else if(this.type === "Monge"){
            return "artes marciais"
        }else{
            return "shuriken"
        }
        }
    message(){
        console.log(`O ${this.type} atacou usando ${this.attack()}`)
    }
}

let heroOne = new hero("Creudio",24,"Mago")
let heroTwo = new hero("Floudo", 15, "Guerreiro")

heroOne.message()
heroTwo.message()