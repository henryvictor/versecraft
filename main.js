//const titreField = document.getElementById('titre-field');
let main = document.getElementById("main");

let checkSyllabes = 8;

//let textFields = document.getElementsByClassName("text-field");
//let fields = document.querySelectorAll('.text-field');
//let counts = document.querySelectorAll('.count');
initializeFields();

//Fonction pour initialiser les champs et les counts
function initializeFields() {
    titreField = document.getElementById('titre-field');
    textFields = document.getElementsByClassName("text-field");
    fields = document.querySelectorAll('.text-field');
    counts = document.querySelectorAll('.count');
    fields.forEach(field => {
        field.addEventListener('keydown', function handleClick() {
            countAll(field);
        });
        countAll(field);
    });
}

//Afficher bouton de validation du titre lorsque le champ est en focus
let confirmTitleButton = document.getElementById("confirm-title-button");
titreField.addEventListener('input', (e) => {
    confirmTitleButton.style.display = "flex";
    confirmTitleButton.addEventListener('click', (e) => {
        titreField.blur();
        confirmTitleButton.style.display = "none";
    })
    titreField.addEventListener('focusout', (e) => {
        confirmTitleButton.style.display = "none";
    })
});

//Remettre le placeholder si le titre est vide quand on quitte l'édition ne marche pas en l'état
titreField.addEventListener('keyDown', (e) => {
    console.log(e.code);
    value = titreField.innerText;
    if (value == "") {
        titreField.innerText = "Titre de votre poème";
    }
});

//Empêcher saut de ligne dans le titre
titreField.addEventListener('keypress', (e) => {
    console.log(e.code);
    if (e.code === "Enter") {
        e.preventDefault();
     }
});

//Limite de caractères dans le titre
titreField.addEventListener('keypress', (e) => {
    let limite = 30;
    let titleLenght = titreField.innerText.length;
    if (titleLenght > limite) {
        e.preventDefault();
    }
});

//Select format
let formats = ["Sonnet","Balade"];
let selectFormat = document.getElementById("select-format");

selectFormat.addEventListener('change', function () {
    console.log(this.selectedIndex);
    if (this.selectedIndex == 0) {
        console.log("sonnet sélectionné");
        main.innerHTML = `<input type="text" id="titre-field" placeholder="Titre de votre poème">
        <div>
            <div> 
                <input type="text" class="text-field"> 
                <span class="count">0</span>
            </div> 
            <div> 
                <input type="text" class="text-field"> 
                <span class="count">0</span>
            </div> 
            <div> 
                <input type="text" class="text-field"> 
                <span class="count">0</span>
            </div> 
            <div> 
                <input type="text" class="text-field"> 
                <span class="count">0</span>
            </div> 
            <br />
            <div> 
                <input type="text" class="text-field"> 
                <span class="count">0</span>
            </div> 
            <div> 
                <input type="text" class="text-field"> 
                <span class="count">0</span>
            </div> 
            <div> 
                <input type="text" class="text-field"> 
                <span class="count">0</span>
            </div> 
            <div> 
                <input type="text" class="text-field"> 
                <span class="count">0</span>
            </div> 
            <br />
            <div> 
                <input type="text" class="text-field"> 
                <span class="count">0</span>
            </div> 
            <div> 
                <input type="text" class="text-field"> 
                <span class="count">0</span>
            </div> 
            <div> 
                <input type="text" class="text-field"> 
                <span class="count">0</span>
            </div> 
            <br />
            <div> 
                <input type="text" class="text-field"> 
                <span class="count">0</span>
            </div> 
            <div> 
                <input type="text" class="text-field"> 
                <span class="count">0</span>
            </div> 
            <div> 
                <input type="text" class="text-field"> 
                <span class="count">0</span>
            </div>
        </div>`;

            initializeFields();
    }
    if (this.selectedIndex == 1) {
        console.log("balade sélectionné");
        main.innerHTML = `<input type="text" id="titre-field" placeholder="Titre de votre poème">
        <div>
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div> 
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div> 
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div> 
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div>
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div> 
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div> 
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div> 
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div>
        </div>
        
        <div>
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div> 
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div> 
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div> 
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div>
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div> 
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div> 
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div> 
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div>
        </div>
        
        <div>
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div> 
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div> 
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div> 
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div>
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div> 
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div> 
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div> 
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div>
        </div>
        
        <div>
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div> 
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div> 
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div> 
            <div> 
                <input type=\"text\" class=\"text-field\"> 
                <span class=\"count\">0</span>
            </div>
        </div>`;

            initializeFields();
    }
    if (this.selectedIndex == 2) {
        console.log("haïku sélectionné");
        main.innerHTML = `
        <div>
            <div> 
                <input type="text" class="text-field"> 
                <span class="count">0</span>
            </div> 
            <div> 
                <input type="text" class="text-field"> 
                <span class="count">0</span>
            </div> 
            <div> 
                <input type="text" class="text-field"> 
                <span class="count">0</span>
            </div> 
        </div>`;

            initializeFields();
    }
});

//Toggle spellcheck
const spellCheckCheckbox = document.getElementById('toggle-spellcheck');
spellCheckCheckbox.addEventListener('change', () => {
    if (spellCheckCheckbox.checked) {
        for (const item in textFields) {
            textFields[item].setAttribute('spellcheck', 'true');
            tempValue = textFields[item].value
            textFields[item].value = ""
            textFields[item].value = tempValue
        }
    }
    else {
        for (const item in textFields) {
            textFields[item].setAttribute('spellcheck', 'false');
            tempValue = textFields[item].value
            textFields[item].value = ""
            textFields[item].value = tempValue
        }
    }
});

//Partager via Twitter
const buttonShareTwitter = document.getElementsByClassName('twitter-hashtag-button')[0];

window.addEventListener("load", () => {
    tweetButton1 = document.getElementById('twitter-widget-0');
    tweetButton2 = document.getElementById('b');
    console.log(tweetButton1);
    console.log(tweetButton2);
});

//Change syllabes count limit
const buttonSyllabes8 = document.getElementById('syllabes8');
const buttonSyllabes10 = document.getElementById('syllabes10');
const buttonSyllabes12 = document.getElementById('syllabes12');

let changeSyllabes = 1;
buttonSyllabes8.disabled = true;

buttonSyllabes8.addEventListener('click', () => {
    changeSyllabes = 1;
    changeSyllabesFunc(changeSyllabes);
});

buttonSyllabes10.addEventListener('click', () => {
    changeSyllabes = 2;
    changeSyllabesFunc(changeSyllabes);
});

buttonSyllabes12.addEventListener('click', () => {
    changeSyllabes = 3;
    changeSyllabesFunc(changeSyllabes);
});


function changeSyllabesFunc(changeSyllabes) {
    if (changeSyllabes == 1) {
        buttonSyllabes8.disabled = true;
        buttonSyllabes10.disabled = false;
        buttonSyllabes12.disabled = false;
        checkSyllabes = 8;
        initializeFields();
    }
    if (changeSyllabes == 2) {
        buttonSyllabes8.disabled = false;
        buttonSyllabes10.disabled = true;
        buttonSyllabes12.disabled = false;
        checkSyllabes = 10;
        initializeFields();
    }
    if (changeSyllabes == 3) {
        buttonSyllabes8.disabled = false;
        buttonSyllabes10.disabled = false;
        buttonSyllabes12.disabled = true;
        checkSyllabes = 12;
        initializeFields();
    }
}

/*
fields.forEach(field => {
    field.addEventListener("change", () => {
        let poem = joinPoem();
        tweetButton2.setAttribute("data-text", poem);
        console.log("attribut modifié");

        let attributeTwitter = tweetButton2.getAttribute("data-text");
        console.log(attributeTwitter);

        console.log(tweetButton2.getAttribute("url"));

    })
});*/

//Toggle font serif/sans serif
const buttonSansSerif = document.getElementById('toggle-sans-serif');
const buttonSerif = document.getElementById('toggle-serif');

let toggle = true;
buttonSansSerif.disabled = true;

buttonSansSerif.addEventListener('click', () => {
    toggle = true;
    toggleFont(toggle);
});

buttonSerif.addEventListener('click', () => {
    toggle = false;
    toggleFont(toggle);
});

function toggleFont(toggle) {
    if (toggle == true) {
        buttonSansSerif.disabled = true;
        buttonSerif.disabled = false;
        document.getElementById('main').classList.remove('serif');
    }
    if (toggle == false) {
        buttonSansSerif.disabled = false;
        buttonSerif.disabled = true;
        document.getElementById('main').classList.add('serif');
    }
}

//Toggle thème et favicon
const buttonCouleur1 = document.getElementById('toggle-couleur-1');
const buttonCouleur2 = document.getElementById('toggle-couleur-2');

const faviconTag = document.getElementById('favicon-tag');

let toggleThemeCouleur = 1;
buttonCouleur1.disabled = true;

buttonCouleur1.addEventListener('click', () => {
    toggleThemeCouleur = 1;
    toggleTheme(toggleThemeCouleur);
});

buttonCouleur2.addEventListener('click', () => {
    toggleThemeCouleur = 2;
    toggleTheme(toggleThemeCouleur);
});

function toggleTheme(toggleThemeCouleur) {
    if (toggleThemeCouleur == 1) {
        buttonCouleur1.disabled = true;
        buttonCouleur2.disabled = false;
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        faviconTag.setAttribute("href", "/versecraft/assets/favicon_dark.svg");
    }
    if (toggleThemeCouleur == 2) {
        buttonCouleur1.disabled = false;
        buttonCouleur2.disabled = true;
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        faviconTag.setAttribute("href", "/versecraft/assets/favicon_light.svg");
    }
}

//Exporter en png
const buttonExportPng = document.getElementById('export-png');
const exportZone = document.getElementById('main');

buttonExportPng.addEventListener('click', function() {

    toggleBorders();

    setTimeout(() => { 
        html2canvas(exportZone, allowTaint=false, backgroundColor=null).then(function(canvas) {
            saveAs(canvas.toDataURL(), 'poème.png');
            toggleBorders();
            console.log(canvas);
        }) 
    }, 1000);
});

function toggleBorders() {
    fields.forEach(field => {
        field.classList.toggle("no-border");
        console.log("toggleBorders working");
    });
}

//Exporter en png - fonction pour créer le lien de téléchargement et simuler le clic dessus
function saveAs(uri, filename) {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;
        //Firefox requires the link to be in the body
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    } else {

        window.open(uri);

    }
}

//Copier le texte
const buttonCopy = document.getElementById('copy-text');
const buttonCopyText = document.getElementById('copy-text-text');
buttonCopy.addEventListener('click', () => {
    poemeEntier = joinPoem();
    navigator.clipboard.writeText(poemeEntier);
    /*
    buttonCopyText.innerText = "Texte copié !";
    setTimeout(() => {
        buttonCopyText.innerText = 'Copier le texte';
    }, 1000);*/
});


function joinPoem() {
    fields.forEach(field => {
        content = field.innerText;
    });
    poeme = [];
    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value == "") {
            poeme.push(fields[i].value);
        }
    }
    poeme.unshift(titreField.value);
    let poemeEntier = poeme.join(" ");
    return poemeEntier
}

/*
fields.forEach(field => {
    field.addEventListener('keydown', function handleClick() {
        countAll(field);
    });
});*/

//Appelée pour colorer le compteur de syllabes en rouge si le total dépasse 8 
function color() { 
    counts.forEach(count => {
        count.addEventListener('keydown', function colorCount() {
            if (parseInt(count.innerText)>8) {
                if (!count.classList.contains("color-red")) {
                    count.classList.toggle("color-red");
                }
            }
            if (!parseInt(count.innerText)>8) {
                if (count.classList.contains("color-red")) {
                    count.classList.toggle("color-red");
                }
            }
        });
    });
}

//Comptage des syllabes
function countAll(field) {
    let texte = field.value;
    let voyelle = "aàâeëéèêiïouùy";
    let consonne = "bcçdfghjklmnpqrstvwxyz";
    let ponctuation = ",;:!?.";
    let tailleInitiale=0;

    //exception  ch, ph, gn et th sont inséparables et  bl, cl, fl, gl, pl, br, cr, dr, fr, gr, pr, tr, vr
    let reg=new RegExp("([cpg]h|[bcfgp]l|[bcdfgptv]r)","g");
    texte = texte.replace(reg,"X");
    
    //le tiret sépare 2 mots
    reg=new RegExp("-","g");
    texte = texte.replace(reg,"|");
    //la ponctuation est remplacer par des espaces
    reg=new RegExp("["+ponctuation+"]","g");
    texte = texte.replace(reg," ");
        
    //on enlève les espaces en fin de ligne    
    reg=new RegExp("([ ]+\n)|([ ]+$)","g");    
    texte = texte.replace(reg,"\n");    
        
    //le e est muet en fin de vers cas ambigu ent non traité
    reg=new RegExp("(e|es|ent)\n|e$|es$|ent$","g");
    texte = texte.replace(reg,"'\n");
    
    //Toute syllabe terminée par un E muet s’élide devant un mot commençant par une voyelle ou un H muet. ( je considère tout les H muet...)
    reg=new RegExp("(e|es|ent)[ ]+(["+voyelle+"h])","g");
    texte = texte.replace(reg,"' $2");
    
    //Une consonne placée entre deux voyelles introduit une nouvelle syllabe
    reg=new RegExp("(["+voyelle+"])(["+consonne+"X])(["+voyelle+"])", "g");
    
    do{
        tailleInitiale  = texte.length;
        texte = texte.replace(reg,"$1|$2$3");
    }while(tailleInitiale <  texte.length);
    
    //De deux consonnes placées entre deux voyelles, la première appartient à la syllabe précédente, la seconde, à la syllabe suivante
    reg=new RegExp("(["+voyelle+"])(["+consonne+"X])(["+consonne+"X])(["+voyelle+"])", "g");
    
    do{
        tailleInitiale  = texte.length;
        texte = texte.replace(reg,"$1$2|$3$4");
    }while(tailleInitiale <  texte.length);
    
    //Quand il y a trois consonnes consécutives à l’intérieur d’un mot, ordinairement les deux premières terminent une syllabe, l’autre commence une nouvelle syllabe :
    reg=new RegExp("(["+voyelle+"])(["+consonne+"X])(["+consonne+"X])(["+consonne+"X])(["+voyelle+"])", "g");
    
    do{
        tailleInitiale  = texte.length;
        texte = texte.replace(reg,"$1$2$3|$4$5");
    }while(tailleInitiale <  texte.length);
    
    //les espace sont remplacé par |
    reg=new RegExp("[ ]+","g");
    texte = texte.replace(reg,"|");
    
    let res = texte.split("\n");
    let res2;
    let resultatSomme="";
    let i=0;

    for(i=0;i < res.length; i++)
    {
        res2 = res[i].split("|");
        
        if(res2.length > 1)
            resultatSomme += res2.length/*+ " " + res[i] + "\n"*/;
        else
            resultatSomme += "\n";
    }

    let container = field.closest('div');

    if (container) {
        const countSpan = container.querySelector('.count');

        if (countSpan) {
            countSpan.textContent = resultatSomme;
        }
    }

    //Coloration rouge si nombre de voyelles > 8
    if (resultatSomme > checkSyllabes) {
        //Si la bordure n'était pas déjà rouge (si la classe red-border n'est PAS dans la liste), toggle la classe pour la passer en rouge, ne fait rien sinon
        if (!field.classList.contains("red-border")) {
            field.classList.toggle("red-border");
            console.log("toggle red");
        }
    }
    else {
        //Si la bordure était rouge, toggle la classe pour la retirer, ne fait rien sinon
        if (field.classList.contains("red-border")) {
            field.classList.toggle("red-border");
            console.log("toggle normal");
        }

    }
}

function colorationRouge(resultatSomme) {
    let container = field.closest('div');

    if (container) {
        const countSpan = container.querySelector('.count');

        if (countSpan) {
            countSpan.textContent = resultatSomme;
        }
    }

    if (resultatSomme > checkSyllabes) {
        //Si la bordure n'était pas déjà rouge (si la classe red-border n'est PAS dans la liste), toggle la classe pour la passer en rouge, ne fait rien sinon
        if (!field.classList.contains("red-border")) {
            field.classList.toggle("red-border");
            console.log("toggle red");
        }
    }
    else {
        //Si la bordure était rouge, toggle la classe pour la retirer, ne fait rien sinon
        if (field.classList.contains("red-border")) {
            field.classList.toggle("red-border");
            console.log("toggle normal");
        }

    }
}