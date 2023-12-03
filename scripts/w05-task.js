/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList       = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) =>{
        //console.log(temple);
        //console.log(temple.templeName);
        const createArticle  = document.createElement('article');
        const createH3       = document.createElement('h3');
        const createImg      = document.createElement('img');

        createH3.textContent = temple.templeName;
        createImg.src        = temple.imageUrl;
        createImg.alt        = temple.location;

        createArticle.appendChild(createH3);
        createArticle.appendChild(createImg);

        templesElement.appendChild(createArticle);

    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const temples  = await response.json();
    //console.log(temples);
    templeList.push(...temples);
    displayTemples(templeList);

}

/* reset Function */
const reset = function () {
    const templeElement = document.querySelector('#temples');
    while(templeElement.firstChild){
        templeElement.removeChild(templeElement.firstChild);
    }
};

/* sortBy Function */
const sortBy = function (temples){
    reset();
    let filter = document.querySelector('#sortBy').value;
    switch(filter){
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;

        case 'notutah':
             displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
             break;

        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
             break;

        case 'all':
        default:
            displayTemples(temples);
            break;
  }
    
};

/* Event Listener */
document.querySelector('#sortBy').addEventListener("change", () => {
    sortBy(templeList);
});

getTemples();