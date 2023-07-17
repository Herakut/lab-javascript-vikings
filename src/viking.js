// Soldier
class Soldier {
    constructor (health, strength){
        this.health =health;
        this.strength= strength;
    }
    attack(){
        return this.strength
        //si quiero que me devuelva esta propiedad en concreto debo de usar this, de lo contrario, me peude devolver el strenght de cualquier lado
    }
    receiveDamage(damage){
        //no es con push, utiliza las modificaciones de variable
        this.health-=damage
    }
   
}

//de aqui hacia arriba todo bien


// Viking, el extend este no me habia enterado. Se utiliza para clonar. 
//Al hacer un extend, clono sus propiedades. La diferencia es que si quiero añadir una nueva, enmarco las existentes en super para a continuacion crear la nueva
//crear un condicional de this.health(recuerda la propiedad a la que llamas)<0, entonces A. Else, b
class Viking extends Soldier {
    constructor(name, health, strength){ //lamada a las propiedaes
        super(health, strength);//propiedades a manternr
        this.name=name;//propiedades a cambiar
    }
    receiveDamage(damage){
        this.health-=damage ;
        if(this.health> 0){
          return `${this.name} has received ${damage} points of damage`;
        }else{
          return `${this.name} has died in act of combat`;
        }
      }
    battleCry(){
        return "Odin Owns You All!"
    constructor(name)
    }
    }

    //vale, jo-der. Siguiente, el sajon
// Saxon
class Saxon extends Soldier{
    //lamada a las propiedades
    constructor(health, strength,){
        //propiedades a mantener
        super(health,strength);    
    }

    receiveDamage(damage){
        this.health-=damage;
        //copia y pega del anterior
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`;
        }else{
            return "A Saxon has died in combat";
        }
    }
}

// War


//pasa las tarjetas a construtores de magic con fuerza y resistencia



class War {
  constructor (){
    this.vikingArmy=[]
    this.saxonArmy=[]

  }

  addViking(Viking){
this.vikingArmy.push(Viking)
  }
  addSaxon(Saxon){
this.saxonArmy.push(Saxon)
  }

  vikingAttack(){
this.healt=Saxon.
  }
  saxonAttack(){





    receiveDamage(damage){
        //no es con push, utiliza las modificaciones de variable
        this.health-=damage
    }


  }
  
  showStatus(){

  }
}
