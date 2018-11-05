var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        document.getElementById('btnPrueba').addEventListener('click',this.onClickbtnPrueba, false);
        console.log('Received Event: ' + id);
    },
    onClickbtnPrueba: function()
    {
        alert('esta alerta se lanzo desde el boton desde afuera de la funcion');
        var contenido=document.querySelector('#contenido');
        app.traer(contenido);
    },
    traer: function(contenido)
    {
        alert('dentro de la funcion');
        fetch('https://randomuser.me/api/')
        //fetch('http://127.0.0.1:8000/conductores')
        .then(res=>res.json())
        .then(data =>{
            console.log(data.results['0'])
            contenido.innerHTML=`
            <img src="${data.results['0'].picture.large}" width= "100px" class="img-fluid rounded-circle">
            <p>nombre: ${data.results['0'].name.last}</p>
            `
        })
    },
};

