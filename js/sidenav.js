function navfold(){
    let btnFold = document.getElementById('btn-fold');
    let navigation = document.getElementById('nav');

    if (btnFold.checked == true){
        navigation.classList.add("nav-big");
      } else {
        navigation.classList.remove("nav-big");
      }
}