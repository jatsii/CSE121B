/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Jatsiri Martinez',
    photo: 'images/me.jpg',
    favoriteFoods: [
        'Enchiladas verdes',
        'Chilaquiles',
        'Tostadas',
        'Tacos',
        'Pozole'
    ],
    hobbies: [
        'Sing',
        'Play the piano',
        'Write',
        'Read',
        'Watch K-dramas',
        'Shopping'
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
        place: 'Chalco, Mexico State',
        length : '18 years'   
});
myProfile.placesLived.push({
    place: 'Tlaquepaque, Guadalajara State',
    length : '9 months'   
});
myProfile.placesLived.push({
    place: 'Morelia, Michoacan State',
    length : '6 months'   
});
myProfile.placesLived.push({
    place: 'Zamora, Michoacan State',
    length : '3 months'   
});
myProfile.placesLived.push({
    place: 'Queretaro, Queretaro State',
    length : '10 years'   
});


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute("src", 'images/me.jpg');
document.querySelector('#photo').setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
let listTwo = document.getElementById("hobbies")
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.innerText = hobbie;
    listTwo.append(li);
});

/* Places Lived DataList */
var dlElement = document.getElementById('places-lived');

myProfile.placesLived.forEach(function(placeInfo) {
    var dtElement = document.createElement('dt');
   
    dtElement.textContent = placeInfo.place;

    var ddElement = document.createElement('dd');

    ddElement.textContent = placeInfo.length;

    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);
});


















