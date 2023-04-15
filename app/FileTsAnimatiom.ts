// Tableau de sports
const sports: string[] = ["Rugby", "Football", "Volleyball", "Handball", "Basketball","Badminton", "Tennis", "Water-Polo", "Fifa"];

let sportCourantIndex: number = 0;

// Fonction pour choisir le sport suivant
function choisirSportSuivant(): string {
  const sportSuivant: string = sports[sportCourantIndex];
  sportCourantIndex = (sportCourantIndex + 1) % sports.length; // réinitialiser l'indice du tableau des sports s'il dépasse la fin du tableau
  return sportSuivant;
}

// Fonction pour mettre à jour le sport affiché
function mettreAJourSport(): void {
  const sportElement: HTMLElement = document.getElementById("texte-sport");
  const nomSportElement: HTMLElement = sportElement.querySelector(".nomSport");
  nomSportElement.textContent = choisirSportSuivant();
}

// Mettre à jour le sport toutes les 1.5s secondes
setInterval(mettreAJourSport, 1500);