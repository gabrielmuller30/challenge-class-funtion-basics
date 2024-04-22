class personagem {
    constructor (name, age, type, atack){
        this.name = name
        this.age = age
        this.type = type
        this.atack = atack
    }
    atacar(){
        if (this.type == "mago"){
            this.atack = "magia"
        }else if(this.type == "guerreiro"){
            this.atack = "uma espada"
        }else if (this.type == "monge"){
            this.atack = "artes marciais"
        }else if (this.type == "ninja"){
            this.atack = "shuriken"
        }
        console.log(`O ${this.type} atacou usando ${this.atack}`)
    }

}

//saida 
let goku = new personagem ("Goku", "41", "guerreiro")
goku.atacar()

let naruto = new personagem ("Naruto", "41", "ninja")
naruto.atacar()