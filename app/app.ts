import { 
partieManuelle, partieAuto, form1, form2, form3,form4
,btnValider , numberInput1 , numberInput2 ,infoBtn,addButton1, subButton1, subButton2, addButton2, submitBtn
,levelRange,selectedScore ,selectedLevel,valeurParDefaut,numberP ,nomInput,prenomInput, ChampBtn, 
} from './elements';

import {  checkInputs, invalidInput, desequilibreInput, validInput, enableButton, transitionForms , generationChampionnat} from './functions';

partieManuelle.addEventListener("click", function() {
  form1.style.display="block";
  partieManuelle.style.display="none";
  partieAuto.style.display="none";
  localStorage.clear(); // Vider le localStorage
});

export let currentNumber1 = 0;
export let currentNumber2 = 0;

numberInput1.value = currentNumber1.toString();
numberInput2.value = currentNumber2.toString();

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

// Bouton pour basculer entre les form



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
    transitionForms(form2,form3);

    const joueurs: { nom: string, prenom: string, niveau: number }[] = JSON.parse(localStorage.getItem("DataDesJoeurs") || '[]');
    const boutonsAjoutes: HTMLButtonElement[] = [];
    const Tableaux:{ NombreDeJoueurs: number, NombreDTeams: number } []= JSON.parse(localStorage.getItem("DateJE") || '[]');
    const nombreTeams: number = Tableaux[0].NombreDTeams;
    const nombreJoueurs: number = Tableaux[0].NombreDeJoueurs;
    const divTableaux =document.getElementById("tableauEquipes");

    function creerBoutonJoueur(joueur: any): HTMLButtonElement {
      const joueurButton = document.createElement('button');
      joueurButton.innerHTML = joueur.nom;
      joueurButton.draggable = true;
      joueurButton.addEventListener('dragstart', (e) => {
        e.dataTransfer?.setData('text/plain', JSON.stringify(joueur));
      });
      return joueurButton;
    }

    const joueursDiv = document.getElementById("listeJoueurs");

    for (const joueur of joueurs) {
      //je cree pour chaque joueur un boutton et je le mets dans un div
      const joueurButton = creerBoutonJoueur(joueur);

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
      nomColonne.textContent=`Team ${tableauDiv.id.slice(-1)}`;

      tableauDiv.appendChild(nomColonne);
      document.body.appendChild(tableauDiv);

      tableauDiv.addEventListener('dragover', (e) => {
      e.preventDefault();
      });

      tableauDiv.addEventListener('drop', (e) => {
      e.preventDefault();
      const data = e.dataTransfer?.getData("text/plain");

      if (data) {

        const joueur = JSON.parse(data);
        const joueurButton = creerBoutonJoueur(joueur);

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
  else{
    console.log("Pas de div tableau Equipes!! verifiez divTableaux");
  }
  }
}
else{
  alert("Veuillez remplir les champs !");
}
});





//3-partie input range pour niveau

// partie 2 sélecteur niveau 

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


window.addEventListener("load", () => {
 
  const valeurParDefaut="Débutant";
  levelRange.value = "0";
  selectedLevel.innerText= valeurParDefaut;
  selectedScore.innerText= "0";
  nomInput.focus();
  nomInput.value="";
  prenomInput.value="";
  btnValider.disabled=true;
  localStorage.clear();
  });

 
 
  //partie 4 afficher le championnat 

  ChampBtn.addEventListener("click", (e) => {
	  e.preventDefault();
	  transitionForms(form3,form4);
	  const divChamp =document.getElementById("afficheChamp");
     const matches = generationChampionnat(currentNumber2); // obtenir le tableau des matchs générés
     const nbJournees = matches.length; // obtenir le nombre de journées dans le championnat
    // boucle à travers chaque journée
	
	console.log('nombre de journées'+nbJournees);
	console.log('nombre d équipes'+currentNumber2);
	var htmlchamp='liste des matchs <br><br><table><tr>';
	for (let head=0 ;head<currentNumber2;head++){var num=head+1;
		htmlchamp+='<th>journée '+num+'</th>';
	}htmlchamp+='</tr><tr>';
	
	
    for (let i = 0; i < nbJournees; i++) {
     const journee = matches[i]; // obtenir le tableau des matchs pour la journée i
     const nbMatches = journee.length; // obtenir le nombre de matchs dans la journée i
    localStorage.setItem(`Journée ${i+1}`, JSON.stringify(journee)); 
	
	
	 
	
    
	htmlchamp+='<td>';
	  for (let j = 0; j < nbMatches; j++) {
		  
		  
       const match = journee[j]; 
       localStorage.setItem(`Match ${j+1}`, match);
	   
	   
	   htmlchamp+='<li>'+journee[j]+'</li>';
	   console.log(journee[j]);
      
	  }htmlchamp+='</td>';
	  
    }
	htmlchamp+='</tr></table>';
	console.log(htmlchamp);
	console.log(localStorage);
	divChamp.innerHTML= htmlchamp;
    
    
    });

    
