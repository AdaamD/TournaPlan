import {btnValider , numberInput1 , numberInput2 ,infoBtn, TestButton, submitBtn, nomInput, prenomInput, levelRange} from './elements' ;
import { Joueur } from './joueur';
import { Equipe } from './equipe';
import { Match } from './Match';

const sports: string[] = ["Rugby", "Football", "Volleyball", "Handball", "Basketball","Badminton", "Tennis", "Water-Polo", "Fifa"];

let sportCourantIndex: number = 0;

// Fonction pour choisir le sport suivant
export function animationAccueil(): string {
  const sportSuivant: string = sports[sportCourantIndex];
  sportCourantIndex = (sportCourantIndex + 1) % sports.length; // réinitialiser l'indice du tableau des sports s'il dépasse la fin du tableau
  return sportSuivant;
}

// Fonction pour mettre à jour le sport affiché
function mettreAJourSport(): void {
  const sportElement: HTMLParagraphElement | null = document.getElementById("texte-sport") as HTMLParagraphElement;
  const nomSportElement: HTMLSpanElement | null = sportElement.querySelector(".nomSport") as HTMLSpanElement;
  nomSportElement.textContent = animationAccueil();
}

// Mettre à jour le sport toutes les 1.5s secondes
setInterval(mettreAJourSport, 1500);

export function checkInputs() {
  // Code pour la fonction checkInputs
  btnValider.disabled = true;
  const nbJoueurs = Number(numberInput1.value);
  const nbTeams = Number(numberInput2.value);
 
  
  if(nbTeams>1 && nbJoueurs>1){
    if((nbJoueurs%nbTeams)===0){
      validInput(numberInput1);
      validInput(numberInput2);
      enableButton(btnValider);
    }  
    else if(nbJoueurs>nbTeams){
      desequilibreInput(numberInput1);
      desequilibreInput(numberInput2);
      enableButton(btnValider);
    }
    else{
      invalidInput(numberInput1);
      invalidInput(numberInput2);
    }
  }
else{
  invalidInput(numberInput1);
  invalidInput(numberInput2);
}
}

export function invalidInput(inputElement: HTMLInputElement) {
  // Code pour la fonction invalidInput
  const originalBorderColor = inputElement.style.borderColor;
  infoBtn.style.display="inline-block";
  infoBtn.style.backgroundColor="red";
  infoBtn.setAttribute('title', 'saisie invalide ! le nombre de joueur/equipes doit etre >1 ou nombre de joueur < nombre dequipes');
  
  infoBtn.addEventListener('mouseover', () => {});
  
  inputElement.style.border = "2px solid red";

  inputElement.addEventListener("input", () => {
    if (inputElement.checkValidity()) {
      inputElement.style.border = "2px solid red";
    } else {
      inputElement.style.border = originalBorderColor;
    }
    inputElement.removeEventListener("input", () => {});
  });
}

export function desequilibreInput(inputElement: HTMLInputElement) {
  // Code pour la fonction desequilibreInput
  const originalBorderColor = inputElement.style.borderColor;

  infoBtn.style.display="inline-block";
  infoBtn.style.backgroundColor="orange";
  infoBtn.setAttribute('title', 'les equipes vont etre desiquilibres !');
  infoBtn.addEventListener('mouseover', () => {});
  
  inputElement.style.border = "2px solid orange";

  inputElement.addEventListener("input", () => {
    if (inputElement.checkValidity()) {
      inputElement.style.border = "2px solid orange";
    } else {
      inputElement.style.border = originalBorderColor;
    }
    inputElement.removeEventListener("input", () => {});
  });
}

export function validInput(inputElement: HTMLInputElement) {
  // Code pour la fonction validInput
  const originalBorderColor = inputElement.style.borderColor;

  infoBtn.style.display="inline-block";
  infoBtn.style.backgroundColor="green";
  infoBtn.setAttribute('title', 'les equipes vont etre equilibres ! Parfait');
  infoBtn.addEventListener('mouseover', () => {});

  inputElement.style.border = "2px solid green";

  inputElement.addEventListener("input", () => {
    if (inputElement.checkValidity()) {
      inputElement.style.border = "2px solid green";
    } else {
      inputElement.style.border = originalBorderColor;
    }
    inputElement.removeEventListener("input", () => {});
  });
}

export function enableButton(button: HTMLButtonElement) {
  // Code pour la fonction enableButton
  button.disabled = false;
  button.classList.add("enable");
}

//focntion pour le form 2
//passer du form1 a form2, et meme le form3 sera traiter ici

export function transitionForms(formDisparaitre : HTMLElement, formApparaitre : HTMLElement) {
  formDisparaitre.style.display = "none";

  if (formDisparaitre.style.display=="none") {
    formApparaitre.style.display = "flex";
    formApparaitre.style.flexDirection="column";
    formApparaitre.style.justifyContent="center";
    formApparaitre.style.alignItems="center";
    formApparaitre.style.height="100%";
    formApparaitre.classList.add("slide-right");
  }

  setTimeout(() => {
    formApparaitre.classList.remove("slide-right");
  }, 1000);
}

//parti 4 

export function generationChampionnat(Equipes: Array<Equipe>): Match[][] {
  
  const matches: Match[] []= []; // tableau pour stocker les matchs
  let x : number=0;
  
  
  if (Equipes.length % 2 !== 0) {
    Equipes.push(new Equipe(999,[])); // Ajout d'une équipe fictive
  }
  
  const nbTours = Equipes.length - 1;
  const mid = Math.floor(Equipes.length / 2);
  
  for (let i = 0; i < nbTours; i++) {
    let journee: Match[] = [];
    for (let j = 0; j < mid; j++) {
      if (Equipes[j].getIdentifiant() != 999 && Equipes[Equipes.length-j-1].getIdentifiant() !== 999 && Equipes[j] !== Equipes[Equipes.length-j-1]) {
        let match = new Match(x, Equipes[j], Equipes[Equipes.length - j - 1]);
        journee.push(match);
        x++;
      }
    }
  
    // Rotation des équipes
    const equipe: Equipe | undefined = Equipes.pop();
    if (equipe instanceof Equipe) {
      Equipes.splice(1, 0, equipe);
    }
  
      matches.push(journee);
    }
  
    // Retourner le tableau des matchs
    return matches;
  }
  

//fonction repartion automatique des joueurs



export function creerEquipes(joueurs: Joueur[], nombreEquipes: number): Equipe[] {

 const equipes: Equipe[] = [];
 
  const sortedPlayers = joueurs.sort((a, b) => b.niveau - a.niveau);

  
  
  for (let i = 0; i < nombreEquipes; i++) {
    equipes.push(new Equipe(i+1,[]));
   
  }

 
  for (let i = 0; i < sortedPlayers.length; i++) {
    const player = sortedPlayers[i];
    const weakestTeam = equipes.reduce((a, b) => a.getNiveau()< b.getNiveau() ? a : b);
    weakestTeam.getJoueurs().push(player);
  
    
 }



  return equipes;
}

//partie profil
  //fonction pour mettre tous les div en cours a none
  export function turnNone(){
    const divsVisibles: HTMLDivElement[] = Array.from(document.querySelectorAll('div')).filter((div: HTMLDivElement) => {
      const styles = window.getComputedStyle(div);
      return styles.display !== 'none' ;
    });
    for (const div of divsVisibles) {
      div.style.display='none';
      
    }
  }

  //fonction pour cree les tableaux 
  export function generationTableauAffichage(equipe: Equipe, tableau: HTMLElement): void {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const entete = document.createElement('tr');
    const nomEquipe1 = document.createElement('th');
    nomEquipe1.setAttribute('colspan', '3');
    nomEquipe1.innerHTML = 'Equipe ' + equipe.getIdentifiant() + '<br/>Niveau: ' + equipe.getNiveau();
    entete.appendChild(nomEquipe1)
    thead.appendChild(entete);
    table.appendChild(thead);
    
    const tbody = document.createElement('tbody');
    // Ajout des données des joueurs
    for (const joueur of (equipe.triListJoueur())) {
      const ligne = document.createElement('tr');
      const nomJoueur = document.createElement('td');
      nomJoueur.textContent = joueur.nom;
      ligne.appendChild(nomJoueur);
      const prenomJoueur = document.createElement('td');
      prenomJoueur.textContent = joueur.prenom;
      ligne.appendChild(prenomJoueur);
      const nivJoueur = document.createElement('td');
      nivJoueur.textContent = joueur.niveau.toString();
      ligne.appendChild(nivJoueur);
      tbody.appendChild(ligne);
    }
    table.appendChild(tbody);
    tableau.appendChild(table);
    
  }

