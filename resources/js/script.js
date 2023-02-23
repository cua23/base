function fechaActual(){
    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth()+1;
    var yyyy = hoy.getFullYear();
    if(dd<10){
        dd="0"+dd;
    }
    if(mm<10){
        mm="0"+mm;
    }
    hoy=dd+"/"+mm+"/"+yyyy
    alert(hoy);
}