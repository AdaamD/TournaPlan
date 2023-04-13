import {  generationChampionnat} from './functions';
import {  currentNumber2} from './app';



export const partieManuelle = document.getElementById("BouttonManuel") as HTMLButtonElement;
export const partieAuto = document.getElementById("BouttonAuto") as HTMLButtonElement;
export const form1 = document.getElementById("form1") as HTMLFormElement;
export const form2 = document.getElementById("form2") as HTMLFormElement;
export const form3 = document.getElementById("form3") as HTMLFormElement;

// Parti du 1er formulaire (nombres joueurs et équipes )
//1- script pour incrementer et decrementer le nombre tot de joueurs et de joueurs par eq 
export const numberInput1 = document.getElementById("nbTotale") as HTMLInputElement;
export const numberInput2 = document.getElementById("nbEquipe") as HTMLInputElement;
export const addButton1 = document.getElementById("ButtonIncre1") as HTMLInputElement;
export const subButton1 = document.getElementById("ButtonDecre1") as HTMLInputElement;
export const addButton2 = document.getElementById("ButtonIncre2") as HTMLInputElement;
export const subButton2 = document.getElementById("ButtonDecre2") as HTMLInputElement;
export const infoBtn = document.querySelector(".btn-info") as HTMLButtonElement;
export const btnValider = document.getElementById("validerbtn") as HTMLButtonElement;

export const nomInput = document.getElementById("nom") as HTMLInputElement;
export const prenomInput = document.getElementById("prenom") as HTMLInputElement;
export const levelRange = document.getElementById("levelRange") as HTMLInputElement; ;
export const submitBtn = document.getElementById("subB") as HTMLInputElement;

//partie 2 
//3-partie input range pour niveau
export const selectedLevel = document.getElementById("selectedLevel") as HTMLSpanElement;
export const selectedScore = document.getElementById("selectedScore") as HTMLSpanElement;

export const valeurParDefaut="Débutant";

//partie 3

export const numberP = document.getElementById("nbActuel") as HTMLSpanElement ;


//partie 4 pour générer le championnat 
export const afficherChampionnat = document.getElementById("Boutton-Afficher") as HTMLButtonElement;


export const ChampBtn = document.getElementById("Boutton-Afficher") as HTMLInputElement;


