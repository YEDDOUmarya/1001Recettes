function quiafficher(i) {
        lediv = document.getElementById("affiche");
            // create an <a> tag
            /*let*/ link = document.createElement("a");
            // set the href attribute to the target page URL
            link.setAttribute("href", "detail.html?lediv=" + recettesDB[i].id);
        
            divtexte = document.createElement("div");
            
  photo = document.createElement("img");
  nImg = Math.floor(Math.random() * 4) + 1;
  photo.setAttribute(
        "src",
        "../assets/recettes/" + recettesDB[i].id + "/" + nImg + ".png"
  );
  photo.setAttribute("alt", recettesDB[i].name);
  link.appendChild(photo);
            nom = document.createElement("div");
            categorie = document.createElement("div");
            origine = document.createElement("div");
            duree = document.createElement("div");
            note = document.createElement("div");

            nom.innerText = recettesDB[i].name;
            categorie.innerText = "catégorie : " + recettesDB[i].category;
            origine.innerText = "origine : " + recettesDB[i].country;
            duree.innerText = "durée : " + recettesDB[i].duration;
            notesum = 0;
            for (j = 0; j < recettesDB[i].comments.length; j++) {
                notesum = notesum + recettesDB[i].comments[j].rating;
            }
            noteavrg = notesum / recettesDB[i].comments.length;
            note.innerText = "note globale : " + noteavrg;

            // add class names to elements
            divtexte.classList.add('divtexte');
            nom.classList.add('nom');
            categorie.classList.add('categorie');
            origine.classList.add('origine');
            duree.classList.add('duree');
            note.classList.add('note');
            
            divtexte.appendChild(nom);
            divtexte.appendChild(categorie);
            divtexte.appendChild(origine);
            divtexte.appendChild(duree);
            divtexte.appendChild(note);
            // append the divtexte element to the <a> tag
            link.appendChild(divtexte);
            // append the <a> tag to the parent element
            console.log("lediv"+lediv);
            lediv.appendChild(link);
            console.log("link"+link);
}

function affichecat() {
    for (i = 0; i < recettesDB.length; i++) {       
        quiafficher(i);
}
}



//---------------------------afficher recherche---------------------------------
function filterRecipes() {
    recherche = document.getElementById("search-input").value;
    larecherche = recherche.toUpperCase();

    // Get the container where the filtered recipes will be displayed
    var container = document.getElementById("affiche");

  // Clear the container
    container.innerHTML = "";


    for (i = 0; i < recettesDB.length; i++){
        larecette = recettesDB[i].name.toUpperCase();
        if (larecette.includes(larecherche)) {
            quiafficher(i);
        }
    }
}


//---------------affichage par catégorie ----------------
function filterRecipesCATEGORIE() {
var categorySelect = document.getElementById("category-select");
var selectedCategory = categorySelect.value;

  // Get the container where the filtered recipes will be displayed
    var container = document.getElementById("affiche");

  // Clear the container
    container.innerHTML = "";

  // Loop through the recipes and display only the ones that match the selected category
    
for (var i = 0; i < recettesDB.length; i++) {
    var recipe = recettesDB[i];
    if (selectedCategory == "" || recipe.category == selectedCategory) {
        quiafficher(i);
    }
}
}

