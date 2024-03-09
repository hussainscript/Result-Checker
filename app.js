
function myfunc(){
    let chem = +document.querySelector('#chm').value;
let phy = +document.querySelector('#phy').value;
let Maths = +document.querySelector('#eng').value;
let com = +document.querySelector('#com').value;

var obtain=chem+phy+Maths+com;
    var percentage = (obtain/400)*100;
    var gd='';
    if(percentage>80 && percentage<100){
        gd='A+'
    }
    else if(percentage>70 && percentage<80){
        gd='A'
    }
    else if(percentage>60 && percentage<70){
        gd='B'
    }
    else if(percentage>50 && percentage<60){
        gd='c'
    }
    else{
        gd='fail'
    }
    console.log(`Total obtained marks: ${obtain}`);
    console.log(`Your percentage is: ${percentage}`);

    var obtainedmarks = document.querySelector('.Totalmarks')
    obtainedmarks.innerHTML=`obtained marks : ${obtain}`
    var percentage1 = document.querySelector('.perc')
    percentage1.innerHTML=`Your percentage : ${percentage}%`
    var grade = document.querySelector('.Grade')
    grade.innerHTML=`Your grade : ${gd}`
}