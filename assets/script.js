const generate = document.querySelector('#generate');

var firstNameBoolean, lastNameBoolean, firstName, lastName;

var firstNameArray = [
    'Kaysie',
    'Matt',
    'Luke',
    'Maxwell',
    'Evan',
    'Froto',
    'Harry',
    'Kratos'
];


var lastNameArray = [
    'Atkinson',
    'Potter',
    'Baggins',
    'Anderson',
    'Clevenger',
    'Lemke',
    'Torv',
    'Spartan'
];



function init() {
    firstNameBoolean = confirm("Do You Want A First Name? Click 'Ok' for Yes, and 'Cancel' for No.")


    lastNameBoolean = confirm("Do You Want A Last Name? Click 'Ok' for Yes, and 'Cancel' for No.")


    if (firstNameBoolean === false && lastNameBoolean === false) {
        alert('Must Choose a Name');
         init();
    }


    if (firstNameBoolean === true) {
        firstName = (firstNameArray[Math.floor(Math.random() * 4)]);
    } 
    
    if (lastNameBoolean === true) {
         lastName = (lastNameArray[Math.floor(Math.random() * 4)]);
     }


}


function writeName() {
    init();

    var nameText = document.querySelector('#name')

    if(firstName !== undefined && lastName === undefined){
        nameText.innerHTML = firstName;
    } else if(firstName === undefined && lastName !== undefined) {
        nameText.innerHTML = lastName;
    } else  {
        nameText.innerHTML = firstName.concat(' ').concat(lastName);
    }

}

generate.addEventListener('click', writeName) 