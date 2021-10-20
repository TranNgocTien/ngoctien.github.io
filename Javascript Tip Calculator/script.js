const amount=document.querySelector('.amount');
const percentage=document.querySelector('.percentage');
const btnCalc=document.querySelector('.addup');
const tip=document.querySelector('.tip');
const total=document.querySelector('.total');

btnCalc.addEventListener('click',function(e){
    e.preventDefault();
    let tipCalc=amount.value*(percentage.value/100);
    let totalCalc=Number(amount.value)+Number(tipCalc);
    console.log(tipCalc);
    console.log(totalCalc);
    tip.value=`${tipCalc}`;
    total.value=`${totalCalc}`;
});