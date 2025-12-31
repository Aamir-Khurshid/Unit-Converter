const inputEl = document.getElementById('input-el');
const convertBtn = document.getElementById('convert-btn');
const outputCont = document.getElementById('output-container');

let inputValue = '';

convertBtn.addEventListener('click',()=>{
    inputValue = inputEl.value;
    renderOutput(inputValue);
    inputEl.value = '';
})

/*
1 meter = 3.281 feet;
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
function renderOutput(val){
    outputCont.innerHTML = `
    <div class = "card">
        <h2>Length(Meter/Feet)</h2>
        <h4>${val} meter = ${(val*3.281).toFixed(2)} feet |
         ${val} feet  = ${(val/3.281).toFixed(2)} meter</h4>
    </div>
    <div class = "card">
        <h2>Volume(Liters/Gallon)</h2>
        <h4>${val} liter = ${(val*0.264).toFixed(2)} gallons |
         ${val} gallons  = ${(val/0.264).toFixed(2)} liter</h4>
    </div>
    <div class = "card">
        <h2>Mass(Kg/Pounds)</h2>
        <h4>${val} kilos = ${(val*2.204).toFixed(2)} ponds |
         ${val} ponds  = ${(val/2.204).toFixed(2)} kilos</h4>
    </div>
    `
}