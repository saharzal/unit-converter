const convertBtn = document.querySelector("#convertbtn");
const toInput = document.querySelector("#to");
const fromInput = document.querySelector("#from");
const testText = document.querySelector("#testText");
const testText2 = document.querySelector("#testText2");
const fromUnit = document.querySelector("#fromUnit");
const toUnit = document.querySelector("#toUnit");

// convertBtn.onclick = function(){
    
// }
convertBtn.addEventListener('click',()=>{
    toInput.value = "23";
    convertToMeter();
});

function convertToMeter(){
    console.log(fromUnit.value);
    console.log(toUnit.value);
    switch(fromUnit){
        
    }
}