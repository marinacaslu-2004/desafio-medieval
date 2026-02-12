class Hero { 
    constructor(name, age, type) { 
        this.name = name;
        this.age = age;
        this.type = type;
    }

    
    atacar() {
        let ataque = "";

        if (this.type === "Mago") {
            ataque = "magia";
        } else if (this.type === "Guerreiro") {
            ataque = "espada";
        } else if (this.type === "Monge") {
            ataque = "artes marciais";
        } else if (this.type === "Ninja") { 
            ataque = "shuriken";
        } else {
            ataque = "um ataque genérico";
        }

        
        console.log(`o ${this.type} atacou usando ${ataque}`);
    }
}


let marina = new Hero("Marina", 36, "Mago"); 
let jorge = new Hero("Jorge", 36, "Guerreiro");

marina.atacar(); 
jorge.atacar();

