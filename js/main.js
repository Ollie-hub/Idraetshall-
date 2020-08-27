/* SLIDE SHOW  */

let i = 0 // Sætter variablen i til 0
let images = [] // Variable som heder images med et tomt array
let time = 3000; // Variable time som styrer hvornår bilderne skiftes

// Image liste
images[0] = '/img/image1.jpg';
images[1] = '/img/image2.jpg';
images[2] = '/img/image3.jpg'; 
images[3] = '/img/image4.jpg'; 
 
// Skift Image
function changeImg(){
    document.slide.src = images[i]; //Sætter Image i htmlen til det 'i' som er det første image

    if( i < images.length - 1){ // hvis 'i' er mindre end images længde så pluser det med 1 
        i++; 
    } else { // hvis den er på sidste så bliver det satt til 0 
        i = 0
    }

    setTimeout("changeImg()", time); // Går igennom function hver længde på 'time' variablen.
}

window.onload = changeImg; 
