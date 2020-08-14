
function first_button_clear() {
    document.getElementById('textOne').value = '';
}

function second_button_clear() {
    document.getElementById('textTwo').value = '';
}
const text = 'Привет, <i>меня</i> зовут <b>Гарри</b>';
document.getElementById('textOne').value = text;

function button_convert() {
    document.getElementById('textTwo').innerHTML = document.getElementById('textOne').value;
}

function selectChooseColor() {
const color = document.getElementById('chooseColor').value;
const list = document.getElementById('textTwo');
list.style.color = color;
}