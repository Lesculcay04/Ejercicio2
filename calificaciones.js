let calificaciones=[100,69,70,54,86,54,49,30];
calificaciones.length;
for(let i=0; i<calificaciones.length; i++){
    if(calificaciones[i]>=70){
        console.log(calificaciones[i],'Aprueba')
    }
    else{
        console.log(calificaciones[i],"Reprueba")
    }
}