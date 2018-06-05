// als op een link met een submenu geklikt wordt,
// moet ik niet naar de koppeling gaan

let heeftSub = document.querySelectorAll('.submenu_fabio > a');
console.log(heeftSub);

for(let i=0; 1<heeftSub.length; i++) {
  heeftSub[i].addEventListener('click', (e)=> e.preventDefault());
}
