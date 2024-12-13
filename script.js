//DOM on récupère les éléments du DOM
const touchs = [...document.querySelectorAll('.btn','btnDelete')]; //Faire un console log des touche afin de voir la node liste qui n'est pas peratique nous allons donc faire un tableau )
//on va recuperer chaque element de notre tableau touche et enrecupérer la key de data key
const listeKeycode = touchs.map(touch => touch.dataset.key); // map est une fonction JS prend chaque élement d'un tableau fait quelque chose a cette élément (fonction callback) et retourne le résultat sous forme de nvx tableau
const screen = document.querySelector('.screen'); // L'élement de l'écran qui va afficher les résultats

//=======================Deux évenement==========================//
// Gére l'appuie sur les touches du clavier
document.addEventListener('keydown', (e) =>{
    const valeur = e.keycode.toString(); // Récupère le code de la touche appuyée sous forme de chaîne
    calculer(valeur); // Appel la fonction calculer pour effectuer les actions nécéssaires
})

// Gére le clic sur les boutons de la calculatrice
document.addEventListener('click',(e)=>{
    const valeur = e.target.dataset.key; // Récupère la valeur de data-key associée au bouton cliqué
    calculer(valeur); // Appel la fonction calculer avec cette valeur
})

// Fonction qui traite la valeur entrée (clavier ou bouton)
const calculer = (valeur)  =>{
    if (listeKeycode.includes(valeur)){ // Vérifie si la valeur fait partie de la liste des keycodes
        switch(valeur) {
            case '8': // Cas de la touche "C" (effacer)
                screen.textContent = ""; // Vide l'écran
                break;
            case '13': // Cas de la touche "Entrer" (calculer)
                const calcul = eval(screen.textContent); // Calcule l'expression affichée
                screen.textContent = calcul; // Affiche le résultat sur l'écran
                break;
            default: // Cas des autres touches (chiffres ou opérateurs)
                const indexKeycode = listeKeycode.indexOf(valeur); // Trouve l'index de la touche dans la liste
                const touch = touchs[indexKeycode]; // Récupère l'élement correspondant à cet index
                screen.textContent += touch.innerHTML; // Ajoute la valeur du bouton à l'écran
        }
    }
}

// Affiche une alerte en cas d'erreur dans les calculs
window.addEventListener('error', (e) =>{
    alert('Une erreur est survenue dans votre calcul :' + e.message); // Message d'alerte en cas d'erreur
})
