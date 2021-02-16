//changes bg when i reache 1.5 section of the page

//add active backgroung from css file

//remove active bg from css file

// use add and remove methods

//add event listeners, scroll

function changeBg() {
    if (this.scrollY > this.innerHeight / 1.5) {
        document.body.classList.add('bg-active');
    } else {
        document.body.classList.remove('bg-active');
    }


}
window.addEventListener('scroll', changeBg)