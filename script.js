//DOM on récupère les éléments du DOM
const touchs = [...document.querySelectorAll('.btn')];//Faire un console log des touche afin de voir la node liste qui n'est pas peratique nous allons donc faire un tableau )
//on va recuperer chaque element de notre tableau touche et enrecupérer la key de data key
const listeKeycode = touchs.map(touch => touch.dataset.key);// map est une fonction JS prend chaque élement d'un tableau fait quelque chose a cette élément (fonction callback) et retourne le résultat sous forme de nvx tableau
const screen = document.querySelector('.screen')
// exemple  touche 6: keycode 102


//=======================Deux évenement==========================//
document.addEventListener('keydown', (e) =>{
    const valeur = e.keycode.toString();
    calculer(valeur)
})

document.addEventListener('click',(e)=>{
    const valeur = e.target.dataset.key;
    calculer(valeur)
})

const calculer = (valeur)  =>{
    if (listeKeycode.includes(valeur)){
            switch(valeur) {
                case'8':
                screen.textContent = "";
                break;
            case'13':
                const calcul = eval(screen.textContent);
                screen.textContent = calcul;       
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur)
                const touch = touchs[indexKeycode];
                screen.textContent += touch.innerHTML;
        }
    }
}

window.addEventListener('error', (e) =>{
    alert('Une erreur est survenue dans votre calcul :' + e.message);
})