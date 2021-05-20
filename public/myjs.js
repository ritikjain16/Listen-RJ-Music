function myFunction() {
    // Declare variables
    var input, filter, ul, i, txtValue, div, h1;

    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();

    ul = document.getElementById("myUL");
    div = ul.getElementsByTagName("div");



    for (i = 0; i < div.length; i++) {
        h1 = div[i].getElementsByTagName("h1")[0];
        txtValue = h1.textContent || h1.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "flex";
        } else {
            div[i].style.display = "none";
        }
    }
}


var myDate = new Date();

myHour = myDate.getHours();

if(myHour>7 && myHour<20){

    document.getElementById("light").style.display="none"
    document.getElementById("dark").style.display="block"
    document.getElementById("dark").style.animation="ButtonAnimation 2s 1"


    // document.getElementById("myBody").style.animation="bodyanimation1 2s 1"
    document.getElementById("myBody").style.backgroundColor="white"
    document.getElementById("title").style.color = "black"

    
    var myElements = document.getElementsByTagName('h3');
    
    for (var i = 0; i < myElements.length; i++) {
        myElements[i].style.color = 'black';
    }    

    var musicdow = document.getElementsByClassName('dow');
    for(var i=0;i<musicdow.length;i++){
        musicdow[i].style.color='black';
    }

}
else{
    document.getElementById("light").style.display="block"
    document.getElementById("dark").style.display="none"
    document.getElementById("light").style.animation="ButtonAnimation 2s 1"

    // document.getElementById("myBody").style.animation="bodyanimation 2s 1"
    document.getElementById("myBody").style.backgroundColor="black"
    document.getElementById("title").style.color = "white"
    
    var myElements = document.getElementsByTagName('h3');

    
    for (var i = 0; i < myElements.length; i++) {
        myElements[i].style.color = 'white';
    }    

    var musicdow = document.getElementsByClassName('dow');
    for(var i=0;i<musicdow.length;i++){
        musicdow[i].style.color='white';
    }
}


function light() {

    document.getElementById("light").style.display="none"
    document.getElementById("dark").style.display="block"
    document.getElementById("dark").style.animation="ButtonAnimation 2s 1"

    document.getElementById("myBody").style.animation="bodyanimation1 2s 1"
    document.getElementById("myBody").style.backgroundColor="white"
    document.getElementById("title").style.color = "black"
    
    var myElements = document.getElementsByTagName('h3');

    
    for (var i = 0; i < myElements.length; i++) {
        myElements[i].style.color = 'black';
    }    

    var musicdow = document.getElementsByClassName('dow');
    for(var i=0;i<musicdow.length;i++){
        musicdow[i].style.color='black';
    }
}

function dark() {

    document.getElementById("light").style.display="block"
    document.getElementById("dark").style.display="none"
    document.getElementById("light").style.animation="ButtonAnimation 2s 1"

    document.getElementById("myBody").style.animation="bodyanimation 2s 1"
    document.getElementById("myBody").style.backgroundColor="black"
    document.getElementById("title").style.color = "white"
    
    var myElements = document.getElementsByTagName('h3');

    
    for (var i = 0; i < myElements.length; i++) {
        myElements[i].style.color = 'white';
    }

    var musicdow = document.getElementsByClassName('dow');
    for(var i=0;i<musicdow.length;i++){
        musicdow[i].style.color='white';
    }
}


