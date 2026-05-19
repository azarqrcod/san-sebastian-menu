const hour = new Date().getHours();

if(hour >= 6 && hour < 12){

    document.body.style.filter =
    "brightness(1.05) saturate(1.05)";

}

else if(hour >= 12 && hour < 18){

    document.body.style.filter =
    "brightness(1) saturate(1)";

}

else if(hour >= 18 && hour < 23){

    document.body.style.filter =
    "brightness(0.92) sepia(0.08)";

}

else{

    document.body.style.filter =
    "brightness(0.82) sepia(0.15)";

}
