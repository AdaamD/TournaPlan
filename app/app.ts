import { partieManuelle, partieAuto, form1, form2, form3 ,form4
,btnValider , numberInput1 , numberInput2 ,infoBtn,addButton1, subButton1, subButton2, addButton2, submitBtn
,levelRange,selectedScore ,selectedLevel,valeurParDefaut,numberP ,nomInput,prenomInput, ChampBtn, TestButton,accueilDiv, indexDiv, commencerTournoi
,bouttonAdmin, ButtonManuelle,ButtonAuto,footer,divAutoManuelle,pManuelle,pAuto,profilBtn,profilLi,profilDiv,divGeneral,newJoueur,btnClassement,classementLi,divClassement,btnCalendrier,calendrierLi,aproposLi,contactLi,divChampionnat,submitBtnNew,divchoixequipe,divTableauxJ,menuNavigation,pForm4
} from './elements';

import {animationAccueil,checkInputs, invalidInput, desequilibreInput, validInput, enableButton, transitionForms ,generationTableauAffichage,turnNone, generationChampionnat,creerEquipes,trierParPoints} from './functions';
import{Joueur} from './joueur';
import{Equipe} from './equipe';

let ListeEquipe:Array<Equipe>=Array<Equipe>();
let JoueurNom;
let parentBoutton;


animationAccueil();

//---------------------------------------------------------------------------------------//
export let currentNumber1 = 0;
export let currentNumber2 = 0;

numberInput1.value = currentNumber1.toString();
numberInput2.value = currentNumber2.toString();

profilLi.style.display="none";
profilDiv.style.display="none";
calendrierLi.style.display="none";
classementLi.style.display="none";

/* Verificattion si Admin pour accèder à la partie Auto*/
let IsAdmin = false;

bouttonAdmin.addEventListener("click", function() {
  IsAdmin=!IsAdmin;
  if(IsAdmin){
    partieAuto.style.display = "block";
  }
  console.log(IsAdmin);
});

commencerTournoi.addEventListener("click", function(event) {
  event.preventDefault();
  menuNavigation.style.display="none";
  bouttonAdmin.disabled=true;
  profilLi.style.display="none";
  calendrierLi.style.display="none";
  classementLi.style.display="none";
  accueilDiv.style.display="none";
  indexDiv.style.display="block";
  if(!IsAdmin){
    partieManuelle.click();
  }
  if(footer){
    footer.style.display="none";
  }
});

partieManuelle.addEventListener("click", function() {
  localStorage.clear(); // Vider le localStorage
  form1.style.display="flex";
  partieManuelle.style.display="none";
  partieAuto.style.display="none";
});

partieAuto.addEventListener("click", function() {
  localStorage.clear(); // Vider le localStorage
  form1.style.display="block";
  btnValider.style.display="none";
  partieManuelle.style.display="none";
  partieAuto.style.display="none";
  TestButton.style.display="inline-block";
  TestButton.disabled=false;


  TestButton.addEventListener("click", function() {
  const prenoms= ["Liam", "Emma", "Noah", "Olivia", "William", "Ava", "James", "Isabella", "Logan", "Sophia", "Benjamin", "Mia", "Lucas", "Charlotte", "Henry", "Amelia", "Alexander", "Evelyn", "Michael", "Abigail"];
  const noms = ["Martin", "Lavoie", "Tremblay", "Gagnon", "Roy", "Côté", "Bouchard", "Gauthier", "Morin", "Lefebvre", "Girard", "Pelletier", "Leclerc", "Bergeron", "Leblanc", "Beaulieu", "Caron", "Cloutier", "Dion", "Bélanger"];
  
  numberInput1.value = currentNumber1.toString();
  numberInput2.value = currentNumber2.toString();
  let test=false;
       
    if (numberInput1.value == "0"||numberInput1.value == "1")  {//le cas: aucun nombre de joueur n'est inscrit manuellement 
      if (numberInput2.value == "0"||numberInput2.value == "1")  {//le cas: aucun nombre d'equipe n'est inscrit manuellement
  
        currentNumber1=20;
        numberInput1.value = currentNumber1.toString();
  
        currentNumber2=4;
        numberInput2.value = currentNumber2.toString();
  
        test=true;
        checkInputs();
        
      }else{//le cas:  nombre d'equipe  inscrit manuellement 
          numberInput1.value = (Number(numberInput2.value)*4).toString();
          currentNumber1=(Number(numberInput2.value)*4);// chaque equipe avec 4 joueurs
          if(Number(numberInput1.value )<=20){//<=20 car mon tab a 20 joueurs
            test=true;
          }
          else{
            numberInput1.value ="20";
            currentNumber1=Number(numberInput1.value);
            test=true;
          }
          checkInputs();
        }
  
      }
    else{//le cas: nombre de joueur est inscrit manuellement 
     
      if (numberInput2.value == "0"||numberInput2.value == "1")  {//le cas: aucun nombre d'equipe n'est inscrit manuellement mais le nombre de joueur si
        
        if(Number(numberInput1.value)<=20){//<=20 car mon tab a 20 joueurs
          
          numberInput2.value = (Math.round(Number(numberInput1.value)/2)).toString();
          currentNumber2=(Math.round(Number(numberInput1.value)/2));
          test=true;
        }
        else{
          numberInput1.value ="20";
          currentNumber1=Number(numberInput1.value);
          test=true;
        }
        checkInputs();
      }
      else{
        numberInput1.value = currentNumber1.toString();
        numberInput2.value = currentNumber2.toString();
        checkInputs();
        test=true
      }
  
    }// le cas ou les deux sont inscrit c'est le cas de base 
  
      if(test) {
        checkInputs();
        btnValider.click();
        TestButton.style.display ="none";
  
        for (let i = 0; i < Number(numberInput1.value); i++) {
          nomInput.value=noms[i];
          prenomInput.value=prenoms[i];
          let c=(Math.floor(Math.random() * 16) * 10);
          levelRange.value=(Object) (Math.floor(Math.random() * 16) * 10);  
          submitBtn.click();   
        }
    }
});
});

addButton1.addEventListener("click", () => {
  currentNumber1 += 1;
  numberInput1.value = currentNumber1.toString();
  subButton1.disabled=false;
  checkInputs();
});

subButton1.addEventListener("click", () => {
  if (currentNumber1>0) {
    currentNumber1 -= 1;
    numberInput1.value = currentNumber1.toString();
    if (currentNumber1==0) {
      subButton1.disabled=true;  
    }
  }
  else{
    subButton1.disabled=true;
  }
  checkInputs();
});

addButton2.addEventListener("click", () => {
  currentNumber2 += 1;
  numberInput2.value = currentNumber2.toString();
  subButton2.disabled=false;
  checkInputs();
});

subButton2.addEventListener("click", () => {
  if (currentNumber2>0) {
    currentNumber2 -= 1;
    numberInput2.value = currentNumber2.toString();
    if (currentNumber2==0) {
      subButton2.disabled=true;  
    }
  }
  else{
    subButton2.disabled=true;
  }
  checkInputs();
});

numberInput1.addEventListener("input", () => {
  checkInputs();
});

numberInput2.addEventListener("input", () => {
  checkInputs();
});

btnValider.addEventListener("animationend", () => {
  btnValider.classList.remove("enable");
});

//PARTI FORM2
let i:number=0;

btnValider.addEventListener("click", () => {
transitionForms(form1,form2);
let dataForm1 = { NombreDeJoueurs: currentNumber1 , NombreDTeams: currentNumber2 };
localStorage.setItem("DateJE", JSON.stringify([dataForm1]));

//2-partie recuperation des inputs du formulaire pour ensuite les stocker dans localStorage
interface DataForm1 {
  NombreDeJoueurs: number;
  NombreDTeams: number;
}
// Récupérer les champs input
const nomInput = document.getElementById("nom") as HTMLInputElement;
const prenomInput = document.getElementById("prenom") as HTMLInputElement;
const numberP = document.getElementById("nbActuel") as HTMLSpanElement ;

const DataF1 = localStorage.getItem("DateJE");
let nombreDeJoueurs;

if(DataF1){
  const formData: DataForm1[] = JSON.parse(DataF1);
  nombreDeJoueurs = formData[0].NombreDeJoueurs;
}
// Récupérer le bouton input button
numberP.innerText=((i+1).toString().concat("/",nombreDeJoueurs.toString()));

let iActuelNum= i+1;
localStorage.setItem("IActuel", JSON.stringify(iActuelNum));

// recuperer le num du joueur actuel
//dans cette partie le form3 sera traiter

let ListeJoueurs: Array<Joueur>=Array<Joueur>();

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if(nomInput.value!=="" && prenomInput.value!==""){
  let iActuelStr: string | null = localStorage.getItem("IActuel");

  if (iActuelStr !=null) {
    let iActuelNum: number = parseInt(iActuelStr);

    if (!isNaN(iActuelNum)) {
      iActuelNum++;
      localStorage.setItem("IActuel", JSON.stringify(iActuelNum));

      numberP.innerText = `${iActuelNum.toString()}/${nombreDeJoueurs.toString()}`;
    } else {
      alert("ERROR!!");
    }
  }
  
  // Récupération des valeurs des champs input
  const nom = nomInput.value;
  const prenom = prenomInput.value;

  let j: Joueur;
  j=new Joueur(nom,prenom,Number(levelRange.value));
  ListeJoueurs.push(j);

  // utiliser l'objet enregistrer pour le mettre dans le localStorage
  let getdata = localStorage.getItem("DataDesJoeurs");
  let dataJoueur = { nom: nom, prenom: prenom, niveau: Number(levelRange.value) };
  
  if (getdata) {
    let parsedData = JSON.parse(getdata);
    localStorage.setItem("DataDesJoeurs", JSON.stringify([...parsedData, dataJoueur]));
  } else {
    localStorage.setItem("DataDesJoeurs", JSON.stringify([dataJoueur]));
  }

  nomInput.focus();
  nomInput.value="";
  prenomInput.value="";
  levelRange.value="0";
  selectedScore.innerText= "0";

  //verifier si on a atteint le nombre de joueurs inscrit ex:4/4
  iActuelStr= localStorage.getItem("IActuel");

  if (iActuelStr !=null) {
    iActuelNum= parseInt(iActuelStr);}

  if(iActuelNum>nombreDeJoueurs){

    //------- passer a la page des joueurs from3 -------// 
    transitionForms(form2,divAutoManuelle);
        //const joueurs: { nom: string, prenom: string, niveau: number }[] = JSON.parse(localStorage.getItem("DataDesJoeurs") || '[]');
        const boutonsAjoutes: HTMLButtonElement[] = [];
        const Tableaux:{ NombreDeJoueurs: number, NombreDTeams: number } []= JSON.parse(localStorage.getItem("DateJE") || '[]');
        const nombreTeams: number = Tableaux[0].NombreDTeams;
        const nombreJoueurs: number = Tableaux[0].NombreDeJoueurs;
        const divTableaux =document.getElementById("tableauEquipes");
        
        
    ButtonManuelle.addEventListener("click", function() {
      
      transitionForms(divAutoManuelle,form3);
      
    function creerBoutonJoueur(joueur: string): HTMLButtonElement {
      const joueurButton = document.createElement('button');
      joueurButton.addEventListener("click", function(event) {
      event.preventDefault();});
      joueurButton.innerHTML = joueur;
      joueurButton.draggable = true;
      joueurButton.style.backgroundColor="rgba(245,245,245, 0.667)";
      joueurButton.style.borderRadius="10px";
      joueurButton.style.cursor="pointer"
      joueurButton.draggable=true;
      
      joueurButton.addEventListener('dragstart', (e) => {
        e.dataTransfer?.setData('text/plain', JSON.stringify(joueur));
        const button = e.target as HTMLButtonElement;
        JoueurNom = button.textContent;
        parentBoutton=joueurButton.parentElement;
      });
      return joueurButton;
    }

    const joueursDiv = document.getElementById("listeJoueurs");

    for (const joueur of ListeJoueurs) {
      //je cree pour chaque joueur un boutton et je le mets dans un div
      const joueurButton = creerBoutonJoueur(joueur.getNom());

      joueurButton.addEventListener('dragend', (e) => {
        const joueurButton = e.target as HTMLButtonElement;
        const joueursDiv = document.getElementById("listeJoueurs");

        const elementCible = document.elementFromPoint(e.clientX, e.clientY);

        if (!elementCible || (elementCible.nodeName !== "TABLE" && elementCible.nodeName !== "TH" && elementCible.nodeName !== "TR" && elementCible.nodeName !== "TD"&& elementCible.nodeName !== "BUTTON")) {
          alert("Vous ne pouvez pas lâcher le bouton en dehors des cases des "+nombreTeams+" tableaux");
        } 
        else if (joueursDiv) {
          joueursDiv.removeChild(joueurButton);
        }
      });

      const joueursDiv = document.getElementById("listeJoueurs");
      if (joueursDiv) {
        joueursDiv.appendChild(joueurButton);
      } else {
        console.error('Erreur : l\'élément "joueurs" n\'a pas été trouvé.');
        break;
      }
    }
    
    if(divTableaux){
    for (let i = 0; i < nombreTeams; i++) {
      const tableauDiv = document.createElement("table");
      tableauDiv.id = `tableau${i+1}`;
      tableauDiv.classList.add("tableau");
      const nomColonne = document.createElement("th");
      let idColonne = tableauDiv.id.match(/\d+/)![0];
      nomColonne.textContent = `Equipe ${idColonne}`;

      let equipe:Equipe;
      //let ListeEJ: Array<Joueur>;
      equipe=new Equipe(i+1,Array<Joueur>());
      ListeEquipe.push(equipe);

      tableauDiv.addEventListener('dragover', (e) => {
        e.preventDefault();
        });

      tableauDiv.appendChild(nomColonne);
      document.body.appendChild(tableauDiv);

      tableauDiv.addEventListener('drop', (e) => {
      e.preventDefault();
  
      const data = e.dataTransfer?.getData("text/plain");

      if (data) {
        let joueur:Joueur;
        //joueur = JSON.parse(data);
        let trouve=false;
        let j=0;
        let index;
        let k;
        let joueurButton: HTMLButtonElement= document.createElement('button');
        let ListeJoueurAjouter :Array<Joueur>=Array<Joueur>(); 
        
        for(j = 0; j < ListeEquipe.length; j++){  
          ListeJoueurAjouter= ListeEquipe[j].getJoueurs();
          for (index = 0; index < ListeJoueurAjouter.length; index++) {
            if((ListeJoueurAjouter[index].getNom())==JoueurNom){
                trouve=true;
                ListeJoueurAjouter.splice(index,1);
                parentBoutton.remove(index);
                break;
            }
        }
          if (trouve) {
            break;
          }
        }
      
        let equipe:Equipe;
        equipe=ListeEquipe[i];
        ListeJoueurAjouter =Array<Joueur>(); 
        ListeJoueurAjouter= equipe.getJoueurs();

        const TableauJoueurs:{ nom: string, prenom: string, niveau: number} []=JSON.parse(localStorage.getItem("DataDesJoeurs")|| '[]');

        for (let k = 0; k < TableauJoueurs.length; k++) {

            if(TableauJoueurs[k].nom==JoueurNom){
              joueur= new Joueur(TableauJoueurs[k].nom,TableauJoueurs[k].prenom,TableauJoueurs[k].niveau);
              ListeJoueurAjouter.push(joueur);
              joueurButton=creerBoutonJoueur(joueur.getNom());
              break;
            }
        }
        
        const rangee = document.createElement("tr");
        const cellule = document.createElement("td");

        cellule.appendChild(joueurButton);
        rangee.appendChild(cellule);
        tableauDiv.appendChild(rangee);
      }
      });
       divTableaux.appendChild(tableauDiv);
       
    }
  }
  }
  )};
}
else{
  alert("Veuillez remplir les champs !");
}
});

function onButtonAutoClick() {
  const Tableaux: { NombreDeJoueurs: number, NombreDTeams: number }[] = JSON.parse(localStorage.getItem("DateJE") || '[]');
  const nombreTeams: number = Tableaux[0].NombreDTeams;
  const divTableaux =document.getElementById("tableauEquipes");

  transitionForms(divAutoManuelle, form3);
 
  ListeEquipe = creerEquipes(ListeJoueurs, nombreTeams);

  // Supprimer l'écouteur d'événement après la première exécution
  ButtonAuto.removeEventListener("click", onButtonAutoClick);

  pManuelle.style.display="none";
  pAuto.style.display="block";

  if(divTableaux){
    for (let i = 0; i < nombreTeams; i++) {
      const tableauDiv = document.createElement("table");
      tableauDiv.id = `tableau${i+1}`;
      tableauDiv.classList.add("tableau");
      const nomColonne = document.createElement("th");
      let idColonne = tableauDiv.id.match(/\d+/)![0];
      nomColonne.textContent = `Equipe ${idColonne}`;

      tableauDiv.appendChild(nomColonne);
      document.body.appendChild(tableauDiv);

      const joueur : Joueur[] = ListeEquipe[i].getJoueurs();

      for (let j = 0; j < ListeEquipe[i].getJoueurs().length; j++) {
       
        const rangee = document.createElement("tr");
        const cellule = document.createElement("td");
        const nomJoueur = document.createTextNode(joueur[j].getNom());
        
        cellule.appendChild(nomJoueur);
        rangee.appendChild(cellule);
        tableauDiv.appendChild(rangee);
      }
      divTableaux.appendChild(tableauDiv);
      }
      }

    };

  ButtonAuto.addEventListener("click", onButtonAutoClick);

//3-partie input range pour niveau

selectedLevel.innerText= valeurParDefaut;
selectedScore.innerText= "0"


levelRange.addEventListener("input", function() {
  switch (true) {
    case (Number(levelRange.value) >= 0 && Number(levelRange.value) <= 50):
      selectedLevel.innerText = "Débutant";
      selectedScore.innerText= levelRange.value;
      break;
    case (Number(levelRange.value) >= 51 && Number(levelRange.value) <= 100):
      selectedLevel.innerText = "Semi-pro";
      selectedScore.innerText= levelRange.value;
      break;
    case (Number(levelRange.value) >= 101 && Number(levelRange.value) <= 150):
      selectedLevel.innerText = "Pro";
      selectedScore.innerText= levelRange.value;
      break;
    default:
      selectedLevel.innerText = valeurParDefaut;
      selectedScore.innerText= "0";
      break;
  }
});
});

//PARTI FORM3
window.addEventListener('beforeunload', (event) => {
  // Affiche une boîte de dialogue de confirmation avant que la page ne soit actualisée
  event.preventDefault();
  event.returnValue = 'Attention, si vous actualisez la page, vous perdrez toutes vos données. Êtes-vous sûr de vouloir continuer ?';
});

window.addEventListener("load", () => {
 
  const valeurParDefaut="Débutant";
  levelRange.value = "0";
  selectedLevel.innerText= valeurParDefaut;
  selectedScore.innerText= "0";
  nomInput.focus();
  nomInput.value="";
  prenomInput.value="";
  btnValider.disabled=true;
});

  //parti 4
  let indexinput=0;
  ChampBtn.addEventListener("click", (e) => {
	  e.preventDefault();

    menuNavigation.style.display="block";
    profilLi.style.display="block";
    classementLi.style.display="block";
    contactLi.style.display="none";
    aproposLi.style.display="none";
	  transitionForms(form3,form4);
	  const divChamp =document.getElementById("listeMatches");
     const matches = generationChampionnat(ListeEquipe); // obtenir le tableau des matchs générés
     const nbJournees = matches.length; // obtenir le nombre de journées dans le championnat
    // boucle à travers chaque journée

  let tableauDivJournee;
  let input1, input2;
	
	if (currentNumber2%2==0){
	for (let head=0 ;head<currentNumber2-1;head++){
    tableauDivJournee = document.createElement("table");
    tableauDivJournee.id = `tableau${head+1}`;
    tableauDivJournee.classList.add("tableau");
    const nomColonne = document.createElement("th");
    let idColonne = tableauDivJournee.id.match(/\d+/)![0];
    nomColonne.textContent = `Journée ${idColonne}`;

    tableauDivJournee.appendChild(nomColonne);

    if(divTableauxJ){
      divTableauxJ.appendChild(tableauDivJournee);
    }

    const journee = matches[head]; // obtenir le tableau des matchs pour la journée i
    const nbMatches = journee.length; // obtenir le nombre de matchs dans la journée i
    localStorage.setItem(`Journée ${head+1}`, JSON.stringify(journee)); 

    for (let j = 0; j < nbMatches; j++) {		 
     const rangee = document.createElement("tr");
     const cellule = document.createElement("td"); 

     const match = journee[j]; 
     localStorage.setItem(`Match ${j+1}`, match.getEquipe1()+" vs."+match.getEquipe2()); 
     input1=document.createElement("input");
     input1.type="number";
     input1.min="0";
     indexinput++;
     input1.id="input"+(indexinput);

     input2=document.createElement("input");
     input2.type="number";
     input2.min="0";
     indexinput++;
     input2.id="input"+(indexinput);

     if(IsAdmin){
      input1.value=Math.floor(Math.random() * (5+ 1));
      input2.value=Math.floor(Math.random() * (5+ 1));
  }
     const divMatch = document.createElement("div");
     divMatch.id=`divMatch${j+1}`;

     const matchJ = document.createTextNode("Equipe "+journee[j].getEquipe1()+" vs. "+"Equipe "+journee[j].getEquipe2());

     divMatch.appendChild(input1);
     divMatch.appendChild(matchJ);
     divMatch.appendChild(input2);
     
     cellule.appendChild(divMatch);
     rangee.appendChild(cellule);

     if(tableauDivJournee){
       tableauDivJournee.appendChild(rangee);
     }   
   }
	}
	}
	else {
		for (let head=0 ;head<currentNumber2;head++){
      tableauDivJournee = document.createElement("table");
      tableauDivJournee.id = `tableau${head+1}`;
      tableauDivJournee.classList.add("tableau");
      const nomColonne = document.createElement("th");
      let idColonne = tableauDivJournee.id.match(/\d+/)![0];
      nomColonne.textContent = `Journée ${idColonne}`;

      tableauDivJournee.appendChild(nomColonne);
      if(divTableauxJ){
        divTableauxJ.appendChild(tableauDivJournee);
      }
        const journee = matches[head]; // obtenir le tableau des matchs pour la journée i
        const nbMatches = journee.length; // obtenir le nombre de matchs dans la journée i
        localStorage.setItem(`Journée ${head+1}`, JSON.stringify(journee)); 
    
        for (let j = 0; j < nbMatches; j++) {		 
         const rangee = document.createElement("tr");
         const cellule = document.createElement("td"); 
    
         const match = journee[j]; 
         localStorage.setItem(`Match ${j+1}`, match.getEquipe1()+" vs."+match.getEquipe2()); 
         input1=document.createElement("input");
         input1.type="number";
         input1.min="0";
         indexinput++;
         input1.id="input"+(indexinput);
    
         input2=document.createElement("input");
         input2.type="number";
         input2.min="0";
         indexinput++;
         input2.id="input"+(indexinput);

         if(IsAdmin){
          input1.value=Math.floor(Math.random() * (10+ 1));
          input2.value=Math.floor(Math.random() * (10+ 1));
        }
    
         const divMatch = document.createElement("div");
         divMatch.id=`divMatch${j+1}`;
    
         const matchJ = document.createTextNode("Equipe "+journee[j].getEquipe1()+" vs. "+"Equipe "+journee[j].getEquipe2());
    
         divMatch.appendChild(input1);
         divMatch.appendChild(matchJ);
         divMatch.appendChild(input2);
         
         cellule.appendChild(divMatch);
         rangee.appendChild(cellule);
    
         if(tableauDivJournee){
           tableauDivJournee.appendChild(rangee);
         }
      }
       }
	}	
    
   });

//partie profil
profilBtn.addEventListener("click", () =>{
  form4.style.display="none";
  turnNone();
  profilDiv.style.display="block";
  newJoueur.style.display="flex";
  profilLi.style.display="none";
  const pTabDiv = document.createElement('div');
  pTabDiv.style.display="flex";
  pTabDiv.style.flexWrap="wrap";
  pTabDiv.style.justifyContent="center";
  classementLi.style.display="block";
  calendrierLi.style.display="block";

  // Appel de la fonction avec la liste de joueurs, le tableau et l'en-tête créés à l'extérieur
  for (const equipe of ListeEquipe) {
    if(equipe.getIdentifiant()!=999)
    {
    generationTableauAffichage(equipe, pTabDiv);
    }}


// Ajout du tableau au DOM
profilDiv.appendChild(pTabDiv);
divGeneral.style.display="block";
pTabDiv.style.display="flex";



  
});
//Ajout pour le nouveau joueur
newJoueur.addEventListener("click", () =>{
  profilDiv.style.display="none";
  transitionForms(form4,form2);
  form2.style.top="60%";
  submitBtn.style.display="none";
  submitBtnNew.style.display="block";
  numberP.textContent = "Nouveau Joueur";
  divchoixequipe.style.display="block";

  nomInput.focus();
  nomInput.value="";
  prenomInput.value="";
  levelRange.value="0";
  selectedScore.innerText= "0";
  divchoixequipe.innerHTML = "";
  const labels = ListeEquipe;



const group = "myCheckboxGroup";

function handleCheckboxSelection(event: Event) {
  const selectedCheckbox = event.target as HTMLInputElement;

  // Désélectionner toutes les autres cases à cocher du groupe
  const checkboxes = document.getElementsByName(group) as NodeListOf<HTMLInputElement>;
  checkboxes.forEach((checkbox) => {
    if (checkbox !== selectedCheckbox) {
      checkbox.checked = false;
    }
  });
}

// Boucle pour créer et ajouter chaque case à cocher

for (let i = 0; i < labels.length; i++) {
  // Créer la case à cocher

  if(labels[i].getIdentifiant()!=999)
  {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `${i+1}`;
  checkbox.name = group; // Associer la case à cocher au groupe
  if (i==0) {
    checkbox.checked=true;
  }

  // Créer une étiquette pour la case à cocher
  const label = document.createElement("label");
  label.htmlFor = `checkbox${i}`;
  label.textContent ="Equipe "+labels[i].getIdentifiant().toString();

  checkbox.addEventListener("change", handleCheckboxSelection);

  // Ajouter la case à cocher et l'étiquette à l'élément parent
  divchoixequipe.appendChild(checkbox);
  divchoixequipe.appendChild(label);
}}
});

submitBtnNew.addEventListener("click", () =>{

  //Ajout joueur 

  if(nomInput.value!=="" && prenomInput.value!==""){
   
    submitBtnNew.disabled=false;
    // Récupération des valeurs des champs input
    const nom = nomInput.value;
    const prenom = prenomInput.value;

    // Obtenez toutes les cases à cocher du groupe
const checkboxes = document.getElementsByName("myCheckboxGroup") as NodeListOf<HTMLInputElement>;

// Variable pour stocker le contenu de la case à cocher sélectionnée
let equipeselect:number=-1;

// Parcours des cases à cocher pour trouver celle qui est sélectionnée
for (let i = 0; i < checkboxes.length; i++) {
  const checkbox = checkboxes[i];
  
  if (checkbox.checked) {
    // La case à cocher est sélectionnée, récupérer son contenu
    equipeselect =parseInt(checkbox.id, 10) ;
    break;
  }
}
    
for(let i=0;i<ListeEquipe.length;i++)
{
  if(ListeEquipe[i].getIdentifiant()==equipeselect){
    let j:Joueur;
    j=new Joueur(nom,prenom,Number(levelRange.value));
    ListeEquipe[i].getJoueurs().push(j);
    break;
  }
      
}


//Affichage du profil
form2.style.display="none";

profilBtn.click();
}
else{
  window.alert("Veuillez remplir les champs avant d'enregistrer !!!");
}});

btnCalendrier.addEventListener("click",(e)=>{

  classementLi.style.display="block";
	calendrierLi.style.display="none";
	profilLi.style.display="block";
  form4.style.display="flex";
  divTableauxJ.style.display="flex";
  const tdElements = divTableauxJ.querySelectorAll("td");
  let t:number=0;

  tdElements.forEach(td => {
    const divElements = td.querySelectorAll("div");
    
    divElements.forEach(div => {
      div.style.display = "block";
    });
  });

	
  if(divClassement.style.display=="block"){
	  transitionForms(divClassement,divChampionnat);
  }else if(profilDiv.style.display=="block"){
	  transitionForms(profilDiv,divChampionnat);
  }
});

btnClassement.addEventListener("click", (e) => {
	   
  e.preventDefault();
  transitionForms(divChampionnat,divClassement);
  form4.style.display="flex";
  divClassement.style.display="block";
  classementLi.style.display="none";
  calendrierLi.style.display="block";
  profilLi.style.display="block";
  profilDiv.style.display="none";
  let cpt:number=1;
  const matches = generationChampionnat(ListeEquipe);
  divClassement.innerHTML="";
  
  
  //matches.length envoie le nombre de journées
 //ici on récupère alors le nombre de matchs dans une journée
 //NB: chaque journée a le meme nombre de matchs
 for (let i=0;i<matches.length;i++){
  for (let j=0;j<matches[0].length;j++){
    
    let scoree1=document.getElementById("input"+cpt).value;
    let scoree2=document.getElementById("input"+(cpt+1)).value;
    if (scoree1!='' && scoree2!=''){ 

    if (scoree1>scoree2){
      matches[i][j].getTeam1().win();
      matches[i][j].getTeam2().lose();
    }

    if (scoree1<scoree2){
      matches[i][j].getTeam1().lose();
      matches[i][j].getTeam2().win();			   
    }

    if (scoree1==scoree2){
      matches[i][j].getTeam1().draw();
      matches[i][j].getTeam2().draw();
    }}
    cpt+=2;
  }
 }
 
  let ListeEquipeTrier= ListeEquipe;
  trierParPoints(ListeEquipeTrier);
 
  let classement;
  const divCl=document.createElement("div");
  divCl.id='idClassement'
  classement=document.createElement("table");
  classement.id='tabClassement';
  classement.classList.add("tableau");

  const thead=document.createElement("thead");
  const trhead=document.createElement("tr");
  
  const th1=document.createElement("th");
  const th2=document.createElement("th");
  const th3=document.createElement("th");
  
  th1.setAttribute('colspan','1');
  th2.setAttribute('colspan','1');
  th3.setAttribute('colspan','1');
  
  th1.appendChild(document.createTextNode('Equipes'));
  th2.appendChild(document.createTextNode('Matchs joués'));
  th3.appendChild(document.createTextNode('Points'));
  
  trhead.appendChild(th1);
  trhead.appendChild(th2);
  trhead.appendChild(th3);

  thead.appendChild(trhead);

  classement.appendChild(thead);

  const tablebody=document.createElement("tbody");
  
  if(ListeEquipeTrier[ListeEquipeTrier.length-1].getIdentifiant()!=999){
  for (let i=0; i<ListeEquipeTrier.length;i++){
   const rangee=document.createElement("tr");
   const cellule1=document.createElement("td");
   const cellule2=document.createElement("td");
   const cellule3=document.createElement("td");

   const scoreEquipe=ListeEquipeTrier[i].getScore();
   const matchEquipe=ListeEquipeTrier[i].getNbMatchs();

   cellule1.appendChild(document.createTextNode("Equipe "+ListeEquipeTrier[i].getIdentifiant()));
   cellule2.appendChild(document.createTextNode(matchEquipe.toString()));
   cellule3.appendChild(document.createTextNode(scoreEquipe.toString()));
   rangee.appendChild(cellule1);
   rangee.appendChild(cellule2);
   rangee.appendChild(cellule3);
   tablebody.appendChild(rangee);	
  }
  }
  else{
    for (let i=0; i<ListeEquipeTrier.length-1;i++){
        const rangee=document.createElement("tr");
        const cellule1=document.createElement("td");
        const cellule2=document.createElement("td");
        const cellule3=document.createElement("td");

        const scoreEquipe=ListeEquipeTrier[i].getScore();
        const matchEquipe=ListeEquipeTrier[i].getNbMatchs();

        cellule1.appendChild(document.createTextNode("Equipe "+ListeEquipeTrier[i].getIdentifiant()));
        cellule2.appendChild(document.createTextNode(matchEquipe.toString()));
        cellule3.appendChild(document.createTextNode(scoreEquipe.toString()));
        rangee.appendChild(cellule1);
        rangee.appendChild(cellule2);
        rangee.appendChild(cellule3);
        tablebody.appendChild(rangee);
    }
  }

  classement.appendChild(tablebody);
  divCl.appendChild(classement);
  divClassement.appendChild(divCl);
  for (let i=0;i<ListeEquipe.length;i++){
        ListeEquipe[i].setZero();
        } 
});