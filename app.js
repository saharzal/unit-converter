const convertBtn = document.querySelector("#convertbtn");
const toInput = document.querySelector("#to");
const fromInput = document.querySelector("#from");
const testText = document.querySelector("#testText");
const testText2 = document.querySelector("#testText2");
const fromUnit = document.querySelector("#fromUnit");
const toUnit = document.querySelector("#toUnit");

convertBtn.onclick = function(){
    let fromVal = 0 , finalVal = 0;
    fromVal = convertToMeter();
    finalVal = convertToFinal(fromVal);
    console.log(finalVal);
    toInput.value = finalVal;
}
const convertToMeter = () => {
    const fromU = fromUnit.value;
    const fromValue = fromInput.value; 
    let meterVal = 0;
    switch(fromU){
        case 'meter':
            meterVal = fromValue;
            break;
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
        case 'inch':
            meterVal = fromValue*0.0254 ;
            break;
    }
    
    return meterVal;
}

const convertToFinal = (val)=> {
    const toU = toUnit.value;
    let finalVal = 0;
    switch(toU){
        case 'meter':
            finalVal = val ;
            break;
        case 'kilo':
            finalVal = val*0.001 ;
            break;
        case 'centi':
            finalVal = val*100 ;
            break;
        case 'mili':
            finalVal = val*1000 ;
            break;
        case 'micro':
            finalVal = val*1000000 ;
            break;
        case 'foot':
            finalVal = val*3.28084 ;
            break;
        case 'yard':
            finalVal = val*1.09361 ;
            break;
        case 'mile':
            finalVal = val*0.000621371 ;
            break;
        case 'inch':
            finalVal = val*39.3701 ;
            break;
    }
    return finalVal;
}
