const tv = {
    vol: 0,
    chanel: 0,
    estado: false,
    muteEstado:false
}
function encender() {
    if (tv.estado == true) {
        tv.chanel = 7;
        tv.vol = 3;
        
        const on = document.getElementById('on');
        const volmas = document.getElementById('vol+');
        const chanelmas = document.getElementById('chanel+');
        const mute = document.getElementById('mute');
        const volmenos = document.getElementById('vol-');
        const chanelmenos = document.getElementById('chanel-');

        volmas.disabled = false;
        volmas.style.opacity = 1;

        chanelmas.disabled = false;
        chanelmas.style.opacity = 1;

        volmas.disabled = false;
        volmas.style.opacity = 1;

        mute.disabled = false;
        mute.style.opacity = 1;

        volmenos.disabled = false;
        volmenos.style.opacity = 1;

        chanelmenos.disabled = false;
        chanelmenos.style.opacity = 1;

        datos()
        tv.estado = false;
    }else{
        tv.chanel = 0;
        tv.vol = 0;

        const on = document.getElementById('on');
        const volmas = document.getElementById('vol+');
        const chanelmas = document.getElementById('chanel+');
        const mute = document.getElementById('mute');
        const volmenos = document.getElementById('vol-');
        const chanelmenos = document.getElementById('chanel-');

        volmas.disabled = true;
        volmas.style.opacity = 0.7;

        chanelmas.disabled = true;
        chanelmas.style.opacity = 0.7;

        volmas.disabled = true;
        volmas.style.opacity = 0.7;

        mute.disabled = true;
        mute.style.opacity = 0.7;

        volmenos.disabled = true;
        volmenos.style.opacity = 0.7;

        chanelmenos.disabled = true;
        chanelmenos.style.opacity = 0.7;

        tv.estado = true;
    }

    
}
function subirVol() {
    if (tv.vol <= 9) {
        tv.vol = tv.vol + 1;
        datos()
    }
}
function bajarVol() {
    if (tv.vol > 1) {
        tv.vol = tv.vol - 1;
        console.log("El volumen es: "+tv.vol);
        datos()
    }
}

function subirChanel() {
    if (tv.chanel <= 99) {
        tv.chanel = tv.chanel + 1;
        datos()
    }
}

function bajarChanel() {
    if (tv.chanel > 1) {
        tv.chanel = tv.chanel - 1;
        datos()
    }
}
function mute() {
    let volactual = tv.vol
    if (tv.muteEstado == false) {
        tv.vol=0;
        datos();
        tv.muteEstado = true;
    }else{
        tv.vol = volactual;
        datos();
        tv.muteEstado = false
    }
   
}

function datos() {
    console.log("-------------------------------")
    console.log("El volumen es: "+tv.vol);
    console.log("El canal es: "+tv.chanel);
    console.log("El estado de la TV es: "+tv.estado);
    console.log("-------------------------------")
}