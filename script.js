function oblicz(){
    var waga = document.getElementById("waga").value;
    waga = parseInt(waga);
    var wzrost = document.getElementById("wzrost").value;
    wzrost = parseInt(wzrost)/100;
    var BMI = waga / (wzrost * wzrost);
    document.getElementById('wynik').innerHTML = BMI.toFixed(2);
    
    if (BMI < 16){
        document.getElementById('slownie').innerHTML = 'wygłodzenie'
     }

     else if ((BMI <= 16) && (BMI<17)){
        document.getElementById('slownie').innerHTML = 'wychudzenie'
     }

     else if ((BMI <= 17) && (BMI<18.5)){
        document.getElementById('slownie').innerHTML = 'niedowaga'
     }
     else if ((BMI <= 18.5) && (BMI<25)){
        document.getElementById('slownie').innerHTML = 'wartość prawidłowa'
     }
     else if ((BMI <= 25) && (BMI<30)){
        document.getElementById('slownie').innerHTML = 'nadwaga'
     }
     else if ((BMI <= 30) && (BMI<35)){
        document.getElementById('slownie').innerHTML = 'I stopień otyłości'
     }
     else if ((BMI <= 35) && (BMI<40)){
        document.getElementById('slownie').innerHTML = 'II stopień otyłości'
     }
     else if (BMI >= 40){
        document.getElementById('slownie').innerHTML = 'III stopień otyłości'
     }
}
