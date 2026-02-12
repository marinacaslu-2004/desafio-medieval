class Hero { 
    
    constructor(name, age, type) { 
        this.name = name;
        this.age = age;
        this.type = type;
        
    }

    atack() {
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
            console.log("Você não possui poderes!!");
            return;
        }

        
        console.log(`O ${this.type} atacou usando ${ataque} e causou ${this.damage} de dano!`);
    }
}


let marina = new Hero("Marina", 36, "Mago" ); 
let jorge = new Hero("Jorge", 36, "", 800);

marina.atack();
jorge.atack();

