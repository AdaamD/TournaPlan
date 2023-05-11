import {btnValider , numberInput1 , numberInput2 ,infoBtn, TestButton, submitBtn, nomInput, prenomInput, levelRange} from './elements' ;
import { Equipe } from './equipe';
import { Joueur } from './joueur';

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

export function transitionForms(formDisparaitre : HTMLFormElement, formApparaitre : HTMLFormElement) {
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

export function generationChampionnat(numTeams: number): string[][] {
  const teams: string[] = []; // tableau pour stocker les noms d'équipe
  
const matches: string[][] = []; // tableau pour stocker les matchs

  // Remplir le tableau des noms d'équipe avec des noms génériques
  for (let i = 1; i <= numTeams; i++) {
    teams.push(`Equipe ${i}`);     //changer avec noms equipe  
  }

  // Si le nombre d'équipes est impair, ajouter une équipe fictive pour que chaque équipe ait un adversaire à chaque tour
  if (numTeams % 2 !== 0) {
    teams.push("Bye");
    numTeams++;
  }

  // Générer les matchs pour chaque tour
  for (let i = 0; i < numTeams - 1; i++) {
    const journee: string[] = []; // tableau pour stocker les matchs du tour

    for (let j = 0; j < numTeams / 2; j++) {
      // Si l'équipe j est l'équipe "Bye", alors elle joue contre la première équipe qui n'a pas encore joué contre elle
      if (teams[j] === "Bye" || teams[numTeams-j-1]==="Bye") {
        console.log("Bye");
      }
      // Sinon, générer un match normal entre les équipes j et (numTeams - j - 1) pour assurer que chaque équipe rencontre toutes les autres une fois
      if(teams[j]!== "Bye" && teams[numTeams-j-1]!=="Bye" && teams[j]!==teams[numTeams-j-1]) {
        journee.push(`${teams[j]} vs. ${teams[numTeams - j - 1]}`);
      }
	  
	  if(teams[j]!== "Bye" && teams[numTeams-j-1]!=="Bye" && teams[j]!==teams[numTeams-j-1])
		console.log(teams[j]+ " ne peut pas s'affronter elle-meme");
   }

    // Déplacer la dernière équipe du tableau vers la deuxième position pour faire tourner les équipes
    teams.splice(1, 0, teams.pop() as string);

    // Ajouter les matchs du tour au tableau des matchs
    matches.push(journee);
  }

  // Retourner le tableau des matchs
  return matches;
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
  export function generationTableauAffichage(equipe: Equipe, tableau: HTMLTableElement, entete: HTMLTableRowElement): void {
    const table = document.createElement('table');
    const entete1 = document.createElement('tr');
    entete1.classList.add('pEntete2');
    const nomEquipe = document.createElement('th');
    nomEquipe.textContent = 'Equipe '+equipe.getIdentifiant();
    entete1.appendChild(nomEquipe);
    const nivEquipe = document.createElement('th');
    nivEquipe.textContent = 'Niveau '+equipe.getScore();
    entete1.appendChild(nivEquipe);
    table.appendChild(entete1);
    
    // Ajout des données des joueurs
    for (const joueur of equipe.getJoueurs()) {
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
      table.appendChild(ligne);
    }
    entete.appendChild(table);
    tableau.appendChild(entete);
    
  }
