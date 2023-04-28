import{Joueur} from './joueur';

export class Equipe {
    private identifiant :number;//identifiant
     listejou:Array<Joueur>;//liste des joueurs de l'esuipe
     private score:number;//Scorre de l'equipe initalise a 0
  
    constructor (id:number,maliste:Array<Joueur>)
    {
        this.identifiant=id;
        this.score=0;
        this.listejou=maliste;
    }
  
    public getIdentifiant():number
     {
        return this.identifiant;
     }
     public getScore():number
     {
        return this.score;
     }
  
     public getJoueurs():Array<Joueur>
     {
        return this.listejou;
     }
  
  
     public setIdentifiant(id:number):void
     {
         this.identifiant=id;
     }
     public setScore(lescore:number):void
     {
         this.score=lescore;
     }
     
  
     public setJoueurs(maliste:Array<Joueur> ):void
     {
        this.listejou=maliste;
     }
      //Fonctions qui renvoie le niveau du groupe
      public getNiveau():number
      {
        let x:number;
        let i:number;
        x=0;
        for(i=0;i<this.listejou.length;i++)
        {
          x+=this.listejou[i].getniveau();
        }
        return x;
      }
    }
  