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
    const fromU = fromUnit.value;
    const toU = toUnit.value;
    const fromValue = fromInput.value; 
    let meterVal = 0;
    switch(fromUnit.value){
        case 'kilo':
            meterVal = fromValue*1000 ;
            break;
        case 'centi':
            meterVal = fromValue*0.01 ;
            break;
        case 'mili':
            meterVal = fromValue*0.001 ;
            break;
        case 'micro':
            meterVal = fromValue*0.000001 ;
            break;
        case 'foot':
            meterVal = fromValue*0.3048 ;
            break;
        case 'yard':
            meterVal = fromValue*0.91 ;
            break;
        case 'mile':
            meterVal = fromValue*1609.34 ;
            break;
        case 'mile':
            meterVal = fromValue*0.0254 ;
            break;
    }
    console.log(meterVal);
}