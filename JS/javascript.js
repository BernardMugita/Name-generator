function makeArray(n){
    this.length=n;
    var i;
    for (i=1, i<=n; i++;){
        this[i]=0;
    }
 }
 var days=["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
 
 var months=["undefined","January","February","March","April","May","June","July","August","September","October","November","December"];

function calculate(form){
   var val1=parseInt(form.day.value,10);
   if((val1<=0)||(val1>31)){
       alert("Invalid! Please enter the correct day")
   }
   var val2=parseInt(form.month.value,10);
   if ((val2<=0)||(val2>12)){
       alert("Invalid! Please enter the correct month")
   }
   var val2x=parseInt(form.month.value,10);
   var val3=parseInt(form.year.value,10);
   if (val3<1900){
       alert("You can't be that old!")
   }
}