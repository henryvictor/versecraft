let count1 = document.getElementById('count1'); 
let text1 = document.getElementById('text1'); 

const titreField = document.getElementById('titre-field');
let textFields = document.getElementsByClassName("text-field");
let main = document.getElementById("main");

const fields = document.querySelectorAll('.text-field');

const counts = document.querySelectorAll('.count');

//Partager via Twitter
const buttonShareTwitter = document.getElementsByClassName('twitter-hashtag-button')[0];
//

window.addEventListener("load", () => {
    tweetButton1 = document.getElementById('twitter-widget-0');
    tweetButton2 = document.getElementById('b');
    console.log(tweetButton1);
    console.log(tweetButton2);
});

tweetButton.addEventListener('click', () => {
    /*let poemeTwitter;
    poemeTwitter = joinPoem();
    console.log(tweetButton);
    console.log("clic sur share tweet");*/
    let test = tweetButton.getAttribute('text');
    console.log(test);
    /*buttonShareTwitter.setAttribute("data-text", poemeTwitter);
    buttonShareTwitter.data = poemeTwitter;*/
});


fields.forEach(field => {
    field.addEventListener("change", () => {
        let poem = joinPoem();
        tweetButton2.setAttribute("data-text", poem);
        console.log("attribut modifié");

        let attributeTwitter = tweetButton2.getAttribute("data-text");
        console.log(attributeTwitter);

        console.log(tweetButton2.getAttribute("url"));

    })
});

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
        console.log('passage en sans serif');
    }
    if (toggle == false) {
        buttonSansSerif.disabled = false;
        buttonSerif.disabled = true;
        document.getElementById('main').classList.add('serif');
        console.log('passage en serif');
    }
}

//Toggle thème
const buttonCouleur1 = document.getElementById('toggle-couleur-1');
const buttonCouleur2 = document.getElementById('toggle-couleur-2');

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
    }
    if (toggleThemeCouleur == 2) {
        buttonCouleur1.disabled = false;
        buttonCouleur2.disabled = true;
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }
}

//Effacer le placeholder du titre à la saisie
titreField.addEventListener('keydown', () => {
    titreField.value = "a";
});

//Remettre le placeholder si le titre est vide quand on quitte l'édition
titreField.addEventListener('change', (e) => {
    console.log(e.code);
    value = titreField.value;
    if (value == "") {
        titreField.value = "Titre de votre poème";
    }
});

//Empêcher saut de ligne dans le titre
document.getElementById('titre-field').addEventListener('keypress', (e) => {
    console.log(e.code);
    if (e.code === "Enter") {
        e.preventDefault();
    }
});

//Limite de caractères dans le titre
document.getElementById('titre-field').addEventListener('keypress', (e) => {
    let limite = 30;
    let titleLenght = document.getElementById('titre-field').innerText.length;
    if (titleLenght > limite) {
        e.preventDefault();
    }
});

//Exporter en png
const buttonExportPng = document.getElementById('export-png');
const exportZone = document.getElementById('main');

buttonExportPng.addEventListener('click', function() {

    toggleBorders();

    setTimeout(() => { 
        html2canvas(main, allowTaint=false, backgroundColor=null).then(function(canvas) {
            saveAs(canvas.toDataURL(), 'poème.png');
            toggleBorders();
        }) 
    }, 1000);
});

function toggleBorders() {
    fields.forEach(field => {
        field.classList.toggle("no-border");
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
    /*fields.forEach(field => {
        content = field.innerText;
    });
    poeme = [];
    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value == "") {
            poeme.push(fields[i].value);
        }
    }
    poeme.unshift(document.getElementById('titre-field').innerText);
    let poemeEntier = poeme.join(" ");*/
    poemeEntier = joinPoem();
    navigator.clipboard.writeText(poemeEntier);
    
    buttonCopyText.innerText = "Texte copié !";
    setTimeout(() => {
        buttonCopyText.innerText = 'Copier le texte';
    }, 1000);
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
    poeme.unshift(document.getElementById('titre-field').innerText);
    let poemeEntier = poeme.join(" ");
    return poemeEntier
}


fields.forEach(field => {
    field.addEventListener('keydown', function handleClick() {
        countAll(field);
    });
});

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


 
function count_words() { 
    let text = text1.value; 
    if (text !== "") { 
        const myArray = text.split(" "); 
 
        let syllabes = 0; 
        for (let i = 0; i < myArray.length; i++) { 
            console.log(myArray[i]); 
            syllabes += new_count(myArray[i]); 
        } 
        count1.innerHTML = syllabes; 
        console.log(syllabes); 
    } 
    else if (text == "") { 
        myArray = []; 
        console.log("array vide :"); 
        console.log(myArray); 
        syllabes = 0; 
        count1.innerHTML = syllabes; 
    } 
} 
 
function new_count(word) { 
    word = word.toLowerCase();                                     //word.downcase! 
    if(word.length <= 3) { return 1; }                             //return 1 if word.length <= 3 
      word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '') 
      word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '') 
      word = word.replace(/,/g, '');
      console.log(word);
      return word.match(/[aeiouy]{1,2}/g).length;                    //word.scan(/[aeiouy]{1,2}/).size 
}


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

    const container = field.closest('div');

    if (container) {
        const countSpan = container.querySelector('.count');

        if (countSpan) {
            countSpan.textContent = resultatSomme;
        }
    }

    //Coloration rouge si nombre de voyelles > 8
    if (resultatSomme > 8) {
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