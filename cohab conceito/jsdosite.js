function menuShow(){
    let ul = document.querySelector('.navbar ul');

    if (ul.classList.contains("open")) {
        ul.classList.remove("open");
    }else{
        ul.classList.add("open");
    }
}