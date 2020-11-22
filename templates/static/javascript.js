
function ValidateForm(event){
    event.preventDefault();

    const GDP= document.prediction.GDP.value;
    const Status= document.prediction.Status.value;
    const HIV= document.prediction.HIV.value;
    const ICR = document.prediction.ICR.value;
    const Schooling= document.prediction.Schooling.value;
    const AM= document.prediction.AM.value;
    const Alcohol= document.prediction.Alcohol.value;
    const PE= document.prediction.PE.value;   
    
    console.log(GDP, Status, HIV, Schooling, AM, Alcohol, PE,"test")
    
    if(GDP>5000||GDP<100){
        alert("GDP: entrez un nombre compris entre 100 et 5000")
    return false
    }

    if(Status != 1 && Status != 0){
        alert("Status: entrez 1 ou 0")
        return false
    }

    if(HIV<1||HIV>51)
        alert("HIV: entrez une valeur comprise entre 1 et 51")

    if(ICR>1||ICR<0){
        alert("ICR: entrez un nombre compris entre 0 et 1")
        return false
    }

    if(Schooling>21 || Schooling<7){
        alert("Schooling: entrez un nombre compris entre 7 et 21")
        return false
    }

    if(AM>10||AM<-10){
        alert("AM: entrez un nombre compris entre -10 et 10")
        return false
    }

    if(Alcohol>10 || Alcohol<-10){
        alert("Alcohol: entrez un nombre compris entre -10 et 10")
        return false
    }

    if(PE % 10 != 0 || ( PE > 500 || PE < 10 ) ){
        alert("PE: entrez un nombre compris entre 10 et 500")
        return false
    }

    return true
} 