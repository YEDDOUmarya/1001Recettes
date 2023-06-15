const params = new URLSearchParams(window.location.search);
const id = params.get("lediv");

nom = document.getElementById("nomDeLaRecette");
nom.innerHTML = recettesDB[id - 1].name;

categorie = document.getElementById("RCategorie");
categorie.innerHTML = recettesDB[id - 1].category;

pays = document.getElementById("Rpays");
pays.innerHTML = recettesDB[id - 1].country;

duree = document.getElementById("Rduree");
duree.innerHTML = recettesDB[id - 1].duration;

note = document.getElementById("Rnote");
notesum = 0;
for (j = 0; j < recettesDB[id-1].comments.length; j++) {
    notesum = notesum + recettesDB[id-1].comments[j].rating;
}
noteavrg = notesum / recettesDB[id].comments.length;
note.innerHTML = "note globale : " + noteavrg;


det = document.getElementById("detaille");

ingredient = document.getElementById("ingri");
for (j = 0; j < recettesDB[id - 1].ingredients.length; j++){
    ing = document.createElement("li");
    ing.innerHTML = recettesDB[id - 1].ingredients[j];
    ingredient.appendChild(ing);
}

instruction = document.getElementById("inst");
for (j = 0; j < recettesDB[id - 1].instructions.length; j++){
    ins = document.createElement("li");
    ins.innerHTML = recettesDB[id - 1].instructions[j];
    instruction.appendChild(ins);
}

var img = document.createElement('img');
nImg = Math.floor(Math.random() * 4) + 1;
img.setAttribute('src','../assets/recettes/' + recettesDB[id-1].id + '/' + nImg + '.png');
var div =document.getElementById('image');
div.appendChild(img);


commentaire = document.getElementById("commen");
for (i = 0; i < recettesDB[id - 1].comments.length; i++){
    nomcom = document.createElement("p");
    nomcom.innerHTML = recettesDB[id - 1].comments[i].user;
    rating = document.createElement("p");
    rating.innerHTML = recettesDB[id - 1].comments[i].rating;
    lecom = document.createElement("p");
    lecom.innerHTML = recettesDB[id - 1].comments[i].content;
    commentaire.appendChild(nomcom);
    commentaire.appendChild(rating);
    commentaire.appendChild(lecom);
}
det.appendChild(ingredient);
det.appendChild(instruction);
det.appendChild(commentaire);