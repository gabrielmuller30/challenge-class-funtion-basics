class personagem {
    constructor (name, age, type, atack){
        this.name = name
        this.age = age
        this.type = type
        this.atack = atack
    }
    atacar(){
        //while (this.type != mago ) //Iria começar o loop para enquanto fosse diferente de uma destas resposta, porém, se fizer isso irei entrar em um loop infinito
        if (this.type == "mago"){
            this.atack = "magia"
        }else if(this.type == "guerreiro"){
            this.atack = "uma espada"
        }else if (this.type == "monge"){
            this.atack = "artes marciais"
        }else if (this.type == "ninja"){ //usado o "else if" por conta do else aceitar qualquer coisa diferente dos outros ifs, o qual não é o objetivo
            this.atack = "shuriken"
        }
        console.log(`O ${this.type} atacou usando ${this.atack}`)
    }
}

//saida 
let gandalf = new personagem ("Gandalf", "73", "mago")
gandalf.atacar()

let goku = new personagem ("Goku", "41", "guerreiro")
goku.atacar()

let poo = new personagem ("Pooh", "26", "monge")
poo.atacar()

let naruto = new personagem ("Naruto", "41", "ninja")
naruto.atacar()