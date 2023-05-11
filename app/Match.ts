import { Equipe } from './equipe';

export class Match {
    private identifiant :number;//identifiant
    Equipe1: Equipe;
    Equipe2: Equipe;

     
  
    constructor (id:number, Equipe1: Equipe, Equipe2: Equipe)
    {
        this.Equipe1=Equipe1;
        this.Equipe2=Equipe2;
    }
  
    public getIdentifiant():number
     {
        return this.identifiant;
     }
     public getEquipe1():string
     {
        return this.Equipe1.getIdentifiant()+"";
     }
     
     public getEquipe2():string
     {
        return this.Equipe2.getIdentifiant()+"";;
     }
    }
  