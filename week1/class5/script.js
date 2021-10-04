
function changecolor() {
const x = document.getElementById('select');
console.log(x)
const cor = x.options[x.selectedIndex].value;
console.log(cor)
document.body.style.backgroundColor = cor
}