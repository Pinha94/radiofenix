document.addEventListener("DOMContentLoaded", function(event) {
    background();
});

function background() {
    const content = document.getElementById('content');

    for (let i = 1; i <= 4; i++) { // Fondos dinamicos
        let fondos = document.createElement('div');
        fondos.classList.add('fondo-'+i, 'fondo', 'running');
        content.append(fondos);

        setTimeout(() => {
            fondos.classList.remove('running');
            fondos.classList.add('finished');
        }, 3000);
    }
}

// Mostrar multimedia
document.addEventListener("DOMContentLoaded", function(event) {
    const gateTop = document.querySelector('.fondo-2');
    const gateBotton = document.querySelector('.fondo-3');
    const btnRadio = document.getElementById('btnRadio');
    const btnTv = document.getElementById('btnTv');
    const btnInfo = document.getElementById('btnInfo');
    const radio = document.getElementById('radio');
    const tv = document.getElementById('repVideo');
    const info = document.getElementById('cardInfo');

    btnRadio.addEventListener('click', mostrarContenido);
    btnTv.addEventListener('click', mostrarContenido);
    btnInfo.addEventListener('click', mostrarContenido);
    
    function mostrarContenido() {
        let id = this.id;
        gateTop.classList.add('closing');
        gateBotton.classList.add('closing');
        gateTop.classList.remove('finished');
        gateBotton.classList.remove('finished');
        selectContent(id);
        setTimeout(() => {
            gateTop.classList.remove('closing');
            gateTop.classList.add('finished');
            gateTop.classList.add('showing-info');
            gateBotton.classList.remove('closing');
            gateBotton.classList.add('finished');
            gateBotton.classList.add('showing-info');
        }, 2000);
        return false;
    }
    function selectContent(value) {
        console.log(value);
        switch (value) {
            case 'btnRadio':
                setTimeout(() => {
                    radio.classList.add('visible');
                    tv.classList.remove('visible');
                    info.classList.remove('visible');
                }, 1000);
                break;
            case 'btnTv':
                setTimeout(() => {
                    tv.classList.add('visible');
                    radio.classList.remove('visible');
                    info.classList.remove('visible');
                }, 1000);
                break;
            case 'btnInfo':
                setTimeout(() => {
                    info.classList.add('visible');
                    radio.classList.remove('visible');
                    tv.classList.remove('visible');
                }, 1000);
                break;
            default:
                break;
        }
    }
});