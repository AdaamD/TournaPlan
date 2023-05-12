# **TournaPlan**

Ce fichier fournit un aperçu du projet informatique, en mettant en évidence les principales lignes directrices et informations importantes pour les développeurs et les utilisateurs.

## **Description du projet**

Ce projet a pour objectif de créer un gestionnaire de tournoi en équipes. Il s'agit d'un projet  Typescript et HTML qui permet aux participants de s'inscrirent, de former les équipes, de renseigner les scores de chaque match et d'afficher le classement final.


## **Installation**

Avant de commencer, veuillez prendre en compte les prérequis suivants :
<br>
1. **Prérequis :** Installer TypeScript avec NPM :  
NPM est téléchargé avec Node.js, pour l'installer il faut simplement télécharger Node.js sur votre système d'exploitation.Pour installer Node.js rendez-vous sur le site officiel (https://nodejs.org/fr/download).  

    Pour vérifier l’installation de Node.js exécuter la commande suivante:  <pre><code>node -v</code></pre>
Après avoir installer Node.js, vérifier l’existence de NPM sur votre pc avec la commande suivante :   <pre><code>npm -v</code></pre>
Finalement pour installer TypeScript avec npm utilisez une des commandes suivantes :      
    - Pour installer le compilateur TypeScript localement dans votre projet
  <code><pre>npm install typescript --save-dev</code></pre>

    - Pour installer TypeScript en tant que module global
  <code><pre>npm install typescript -g</code></pre>

    - Si vous avez une version plus ancienne vous pouvez faire un upgrade pour la dernière version   <code><pre>npm install typescript@latest -g </code></pre>

    Pour vérifier que l’installation a réussi, entrez la commande suivante : 
<code><pre>tsc -v</code></pre>

 <br>
 
  2. **Clonage du projet :**  Exécutez la commande suivante dans votre terminal pour cloner le projet :  

      <code><pre>git clone git@gitlab.com:projet_-tournaplan/tournaplan.git</code></pre>

<br>

3. **Installation des dépendances :** Accédez au répertoire du projet et exécutez la commande suivante pour installer les dépendances requises :    

    <code><pre>npm install</code></pre>
   
   <br>

## **Utilisation**  
<br>

1. **Démarrage :** Exécutez la commande suivante pour démarrer le projet :  

    <code><pre>npm run dev</code></pre>
    
<br>

2. **Accès :** Une fois le projet construit avec succès ouvrez un navigateur et rendez-vous sur l'adresse [http://localhost:1234].

<br>

3. **Fonctionnalités principales :**  
    - Cliquer sur "Commencer mon tournoi" pour démarer le tournoi.
    - Ajoutez le nombre de joueurs et d'équipes souhaités et valider vos choix. Du moment que le nombre de joueurs est supérieur au nombre d'équipes, ils peuvent être impairs. 
    - Renseignez les noms, prénoms et niveaux de vos joueurs ( par défaut, le niveau est à 0 s'il n'est pas défini) et enregistrez votre saisie.
    - Il y a deux choix possible qui s'offrent à nous : former les équipes automatiquement, ou les former manuellement. Dans ce cas formez vos équipes (elles peuvent être déséquilibrées) et cliquez sur "Afficher le championnat".
    - Renseignez les scores de vos différent matchs et cliquez sur "Afficher le classement".
    - Le classement des équipes sera affiché.
 
 <br>

## **Structure du projet**
<br>

- **tournaplan**
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style="color: gray;">Répertoire principal contenant le code source de l'application</span>
  - *.cache*
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span style="color: gray;">Dossier de cache </span>
  - *.parcel-cache*  
  - **app**
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style="color :gray;">Répertoire contenant les fichiers sources de l'application </span>
    - *.gitkeep* 
    - *app.ts*
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style="color :gray;">Fichier source principal de l'application </span>
    - *elements.ts*
            <span style="color :gray;">Fichier contenant les éléments de l'application</span>
    - *equipe.ts*
            <!-- Fichier contenant la logique de gestion des équipes -->
    - *functions.ts*
            <span style="color:gray;">Fichier contenant des fonctions utilitaires</span>
    - *joueur.ts*
             <!-- Fichier contenant la logique de gestion des joueurs -->
    - *joueur.ts*
            <!-- Fichier contenant la logique de gestion des matchs -->
  - **dist**
            <!-- Dossier de distribution (contient les fichiers prêts pour la production) -->
  - **img**
            <!-- Répertoire contenant les images utilisées -->
  - **node_modules**
            <!-- Dossier contenant les modules Node.js téléchargés -->
  - **src**
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style="color:gray;">Répertoire source</span>  
      - *index.html*
            &nbsp;
            <span style="color:gray;">Fichier HTML</span> 
      - *style.css*
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style="color:gray;">Fichier style CSS</span> 
  - *.gitignore*
            <!-- Fichier spécifiant les fichiers/dossiers à ignorer dans le contrôle de version Git -->
  - *package-lock.json*
            <!-- Fichier de verrouillage des dépendances NPM -->
  - *package.json*
            <!-- Fichier de configuration NPM -->
  - *README.md*
            <!-- Fichier README du projet -->

<br>

## **Auteurs**

- Adam DAIA  ([Adaam_](https://gitlab.com/Adaam_)) : Responsable du développement initial
- Laurencia DOVI LATE  ([Laurencia](https://gitlab.com/Laurencia)) : Responsable du développement initial
- Melissa OUADA  ([melissa.ouada](https://gitlab.com/melissa.ouada)) : Responsable du développement initial
- Saddek OUYAHIA  ([saddek.ouyahia](https://gitlab.com/saddek.ouyahia)) : Responsable du développement initial
-  Michel Steeven BE  ([besteeven](https://gitlab.com/besteeven)) : Responsable du développement initial

