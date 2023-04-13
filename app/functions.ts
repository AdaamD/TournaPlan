import {btnValider , numberInput1 , numberInput2 ,infoBtn,  } from './elements' ;



export function checkInputs() {
  // Code pour la fonction checkInputs
  btnValider.disabled = true;
  const nbJoueurs = Number(numberInput1.value);
  const nbTeams = Number(numberInput2.value);

  if(nbTeams>0 && nbJoueurs>0){
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
  infoBtn.setAttribute('title', 'saisie invalide ! le nombre de joueur/equipes ne doit pas etre nul ou nombre de joueur < nombre dequipes');
  
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
    formApparaitre.style.display = "block";
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
      if (teams[j] === "Bye") {
        journee.push(`${teams[numTeams - 1]} vs. ${teams[j + numTeams / 2]}`);
      }
      // Sinon, générer un match normal entre les équipes j et (numTeams - j - 1) pour assurer que chaque équipe rencontre toutes les autres une fois
      else {
        journee.push(`${teams[j]} vs. ${teams[numTeams - j - 1]}`);
      }
    }

    // Déplacer la dernière équipe du tableau vers la deuxième position pour faire tourner les équipes
    teams.splice(1, 0, teams.pop() as string);

    // Ajouter les matchs du tour au tableau des matchs
    matches.push(journee);
  }

  // Retourner le tableau des matchs
  return matches;
}
