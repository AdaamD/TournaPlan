export const accueilDiv = document.getElementById("accueil") as HTMLFormElement;
export const sportElement = document.getElementById("texte-sport") as HTMLElement;
export const nomSportElement = sportElement.querySelector(".nomSport") as HTMLElement;
export const commencerTournoi= document.querySelector(".bouton-container") as HTMLButtonElement
export const menuNavigation = document.getElementById("menu_nav") as HTMLElement;

//export const barre_recherche= document.getElementById("BarreDeRecherche") as HTMLFormElement ;
//export const rechercheBtn = document.getElementById("SubmitBarreRecherche");

export const divGeneral = document.getElementById("divForms") as HTMLDivElement;
export const indexDiv = document.getElementById("index") as HTMLFormElement;
export const partieManuelle = document.getElementById("BouttonManuel") as HTMLButtonElement;
export const partieAuto = document.getElementById("BouttonAuto") as HTMLButtonElement;
export const form1 = document.getElementById("form1") as HTMLFormElement;
export const form2 = document.getElementById("form2") as HTMLFormElement;
export const form3 = document.getElementById("form3") as HTMLFormElement;
export const form4 = document.getElementById("form4") as HTMLFormElement;
export const bouttonAdmin= document.querySelector(".button-no-style") as HTMLButtonElement

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
export const TestButton =  document.getElementById("remplirAuto") as HTMLInputElement;

export const nomInput = document.getElementById("nom") as HTMLInputElement;
export const prenomInput = document.getElementById("prenom") as HTMLInputElement;
export const levelRange = document.getElementById("levelRange") as HTMLInputElement; ;
export const submitBtn = document.getElementById("subB") as HTMLInputElement;
export const submitBtnNew = document.getElementById("subnewjoueur") as HTMLInputElement;

export const pManuelle = document.getElementById("pForm3") as HTMLParagraphElement;
export const pAuto = document.getElementById("pForm31") as HTMLParagraphElement;
export const divAutoManuelle = document.getElementById("divChoixMode") as HTMLDivElement;

export const ButtonManuelle = document.getElementById("Boutton-Manuelle") as HTMLButtonElement;
export const ButtonAuto = document.getElementById("Boutton-Auto") as HTMLButtonElement;

//partie 2 
//3-partie input range pour niveau
export const selectedLevel = document.getElementById("selectedLevel") as HTMLSpanElement;
export const selectedScore = document.getElementById("selectedScore") as HTMLSpanElement;

export const valeurParDefaut="Débutant";

//partie 3

export const numberP = document.getElementById("nbActuel") as HTMLSpanElement ;


//partie 4 pour générer le championnat 
export const afficherChampionnat = document.getElementById("Boutton-Afficher") as HTMLButtonElement;
export const pForm4 = document.getElementById("pForm4") as HTMLParagraphElement;
export const pTabDiv = document.getElementById("divEquipesInfo") as HTMLDivElement;


export const ChampBtn = document.getElementById("Boutton-Afficher") as HTMLButtonElement;

//Partie profil -affichage de la fiche de match-
export const profilBtn = document.getElementById("profilBtn") as HTMLButtonElement;
export const profilLi = document.getElementById("profilLi") as HTMLButtonElement;
export const profilDiv = document.getElementById("profilDiv") as HTMLButtonElement;
export const newJoueur = document.getElementById("newJoueur") as HTMLButtonElement;

export const divchoixequipe = document.getElementById("EquipenewJou") as HTMLDivElement;




//footer
export const footer = document.querySelector('footer');


