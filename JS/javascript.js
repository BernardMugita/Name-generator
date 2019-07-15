var century,year,month,day,gender, days, maleNames, femaleNames;
days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
maleNames=["Kwasi","Kwado","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function workout(){
   century = document.getElementById("century").value;
   year = document.getElementById("year").value;
   month = document.getElementById("month").value;
   day = document.getElementById("day").value;
   dayOfTheWeek = (((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+day-2)%7;
   return(Math.floor(dayOfTheWeek));
}
