function activeButton(index){
    var buttons = document.querySelectorAll('[data-bs-target="#carouselIndicator"]');
    buttons.forEach(function (button){
        button.classList.remove('active');
        button.classList.add('inactive');
    });
    buttons[index].classList.remove('inactive');
    buttons[index].classList.add('active');
}
function activeButton2(index){
    var buttons = document.querySelectorAll('[data-bs-target="#carouselIndicator2"]');
    buttons.forEach(function (button){
        button.classList.remove('active');
        button.classList.add('inactive');
    });
    buttons[index].classList.remove('inactive');
    buttons[index].classList.add('active');
}