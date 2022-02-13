// Projekt lev3_4: Einkommenstuer-Berechnung

// "zu versteuernedes Einkommen" (zvE) Formel

// zvE(Person1) falls Grundtarif
// zve(Person1 + Person2) / 2 falls Splittingtarif


//-----------zu versteuerndes Einkommens Rechner--------

let year = document.getElementById('year')

let zvE1 = document.getElementById('zvE1')
let zvE2 = document.getElementById('zvE2')
let zvE3 = document.getElementById('zvE3')

let singleInvest = document.getElementById('singleInvest')
let multiInvest = document.getElementById('multiInvest')

let einkomContain = document.getElementById('einkomContain')

let zvEsum = document.getElementById('zvEsum')


function radioCheck1() {
    
    if(singleInvest.checked){
        console.log('test1');

        einkomContain.innerHTML = `<label for="zvE1" >Einkommen:</label>
        <input type="number" name="123" id="zvE1" step="00.01"><span>Euro</span>`
    } 
}

function radioCheck2() {
    
    if(multiInvest.checked){
        console.log('test2');

        einkomContain.innerHTML = `<label for="zvE1">Einkommen Person1:</label>
        <input type="number" name="123" id="zvE1" step="00.01"><span>Euro</span><label for="zvE2">Einkommen Person2:</label>
        <input type="number" name="123" id="zvE2" step="00.01"><span>Euro</span>`
    }
}



zvEcalculator = () => { 
    let year = document.getElementById('year')
    let zvE1 = document.getElementById('zvE1')
    let zvE2 = document.getElementById('zvE2')

    if (year.value == 0 && singleInvest.checked && Number(zvE1.value) < 9168){
        zvEsum.innerHTML =  0 + " €";
        console.log(typeof Number(zvE1.value)); 
        console.log('value2019');
    } 
    
    else if(year.value == 0 && singleInvest.checked && Number(zvE1.value) >= 9169 && Number(zvE1.value)  <= 14254){
        let y = Number(Number((Number(zvE1.value) - 9168).toFixed(2) / 10000)).toFixed(2)
        let NewzvE1 = (980 * y + 1400) * y;
        console.log(NewzvE1);
        // console.log(y);
        console.log('Miau');
        zvEsum.innerHTML = `${Number(NewzvE1).toFixed(2)}`;    
    }

    else if(year.value == 0 && singleInvest.checked && Number(zvE1.value) >= 14255 && Number(zvE1.value) <= 55960){
        let y = Number(Number((Number(zvE1.value) - 14254).toFixed(2) / 10000)).toFixed(2)
        let NewzvE1 = (216 * y + 2397) * y + 965;
        console.log(NewzvE1);
        // console.log(y);
        console.log("Hiya");
        zvEsum.innerHTML = `${Number(NewzvE1).toFixed(2)}`;    
    }

    else if(year.value == 0 && singleInvest.checked && Number(zvE1.value) >=  55961  && Number(zvE1.value) <= 265326){
        // let y = Number(Number((Number(zvE1.value) - 14254).toFixed(2) / 10000)).toFixed(2)
        console.log('TeamRocket');
        let a = '0.42';
        a = a.replace(/\,/g,'');
        a = Number(a,10);
        
        let NewzvE1 = a * Number(zvE1.value) - 8780
        console.log(NewzvE1);
        // console.log(y);
        zvEsum.innerHTML = `${Number(NewzvE1).toFixed(2)}`;    
    }
    else {

        console.log('Rich');
        let a = '0.45';
        a = a.replace(/\,/g,'');
        a = Number(a,10);
        
        let NewzvE1 = a * Number(zvE1.value) - 16740;
        console.log(NewzvE1);
        // console.log(y);
        zvEsum.innerHTML = `${Number(NewzvE1).toFixed(2)}`;    
    }
    
    // else if (year.value == 1 && singleInvest.checked){
    //     zvEsum.innerHTML = `${zvE1.value} €`
    //     console.log(2); 
    // } else if ( year.value == 2 && singleInvest.checked){
    //     zvEsum.innerHTML = `${zvE1.value} €`
    // } else if ( year.value == 3 && singleInvest.checked){
    //     zvEsum.innerHTML = `${zvE1.value} €`
    // }  

    // else if(year.value == 0 && multiInvest.checked){
    //     zvEsum.innerHTML = ((Number(zvE1.value) + Number(zvE2.value)) / 2)
    //     console.log('multi1');
    // }
}







//------------------------Eikommenssteuerrechner-------

// let entgeldErsatz = document.getElementById('entgeldErsatz')
// let entgeldSpan = document.getElementById('entgeldSpan')
// let entgeldNumber = document.getElementById('entgeldNumber')

// function entgeldCheck() {
//     if(entgeldErsatz.checked){
//         entgeldSpan.innerHTML = `<input type="number" name="" id="entgeldNumber" step="00.01"><span>€</span>`;
//     }
// }