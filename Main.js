const panels = document.querySelectorAll('.panel');
function toggleopen () {
     console.log('hello');
    this.classList.toggle('open')
}
function showname (e){
    console.log(e.propertyName)
    if(e.propertyName.includes('flex')){
        this.classList.toggle('openActive');
    }


}
panels.forEach(panel => panel.addEventListener('click', toggleopen));
panels.forEach(panel => panel.addEventListener('transitionend', showname));