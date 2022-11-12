
// changing body to background color
let body = document.body;
    body.style.backgroundColor = `bisque`

// This allowed me to change color and font of H1 title

let topHeader = document.querySelector(`h1`);
    topHeader.style.color = `red`;
    topHeader.style.fontFamily = `cursive`

// I am able to select all P tags and change the text

let pTags = document.querySelectorAll(`p`);
    for (let i = 0; i < pTags.length; i++) {
        pTags[i].innerHTML = "This is a paragraph";
        }

//Here I was able to change a H3 title to a button A tag

let nestedTag = document.getElementById(`SubHeader`);
    nestedTag.innerHTML = `<a href ="tel:5552223434"><button>Call us</button></a>`;

let newTag = document.getElementsByClassName(`footer`);
    newTag.insertAdjacentHTML(`afterBegin`,`<p>This para comes before the footer!</p>`);

let changeTag = document.getElementById(`secondPara`);
        changeTag.outerHTML = `<h6>This is now a Header!</h6>`;

