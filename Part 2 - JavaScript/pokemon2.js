class Pokemon {
		
  		constructor(name, type, hp, def, atk, legend){
			
			if (
				typeof name === 'string' &&
				typeof type === 'string' &&
				typeof hp === 'number' &&
				typeof def === 'number' &&
				typeof atk === 'number' &&
				typeof legend === 'boolean'
			)
			{	
				this.name = name;
				this.type = type;
				this.hp = hp;
				this.def = def;
				this.atk = atk;
				this.legend = legend;
				
              	Pokemon.all.push(this);
			}
			else {
				console.log("Invalid Pokemon. Check Types");
			}
		}
		
		attack(enemy){
			damage = this.atk - enemy.def;
          	if (damage < 0){
              	damage = 0;
            }
          	enemy.hp = enemy.hp - damage;
          	if (enemy.hp < 0){
              enemy.hp = 0;
            }
          
          	console.log(this.name + " attacked " + enemy.name + " for " + damage + " damage.");
          	if (!enemy.aliveCheck()){
              console.log(enemy.name +" has fainted!");
			}
        }
		
		aliveCheck(){
			if (this.hp > 0) {
              return true;
            }
          	else {
              return false;
            }
		}

		static get all(){
          	if (!this._all){
              this._all = [];
            }
			return this._all;
		}

}