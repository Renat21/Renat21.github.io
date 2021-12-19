function unhideenter() {
    let headingElement = document.querySelector('#hideenter');
    headingElement.style.display = 'flex';
    document.body.style.position = 'fixed';
}

function hideenter(){
    var slide= document.getElementById("newnameenter");
    name = slide.value;
    document.body.style.position = "absolute";

    if (name)
        document.querySelector('#nameofplayer').innerHTML = name;

    let headingElement = document.querySelector('#hideenter');
    headingElement.style.display = 'none';
}



function unhideregistr() {
    let headingElement = document.querySelector('#hideregistration');
    headingElement.style.display = 'flex';
    document.body.style.position = 'fixed';
}

function hideregistr(){
    var slide= document.getElementById("newnamereg");
    name = slide.value;
    document.body.style.position = "absolute";

    if (name)
        document.querySelector('#nameofplayer').innerHTML = name;

    let headingElement = document.querySelector('#hideregistration');
    headingElement.style.display = 'none';
}


function unhidegame() {
    let headingElement = document.querySelector('#hide');
    headingElement.style.display = 'flex';
    document.body.style.position = 'fixed';
}

function hidegame(){
    let headingElement = document.querySelector('#hide');
    headingElement.style.display = 'none';
    document.body.style.position = '';
}