export class Joueur{
    nom:string;
    prenom:string;
    niveau:number;
    
    constructor(nom:string,prenom:string,niveau:number){
      this.nom=nom;
      this.prenom=prenom;
      this.niveau=niveau;   
    }


    public getniveau():number
    { return this.niveau;}

    public getNom():string
    { return this.nom;}

    public getPrenom():string
    { return this.prenom;}
  
  }
  