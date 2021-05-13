$(document).on("click", "#alerta", function(){
  navigator.notification.alert("Minha mensagem.", null, "Aviso!", "Aceito");
});

$(document).on("click", "#confirm", function(){
  function confirma(buttonIndex){
    if(buttonIndex == 1){
      navigator.notification.alert("Escolheu a opção A");
    }else if(buttonIndex == 2){
      navigator.notification.alert("Escolheu a opção B");
    }
  }
  navigator.notification.confirm("Escolha A ou B.", confirma, "Escolha", ["A", "B"]);
});

$(document).on("click", "#beep", function(){
  navigator.notification.beep(3);
});

$(document).on("click", "#vibrar", function(){
  navigator.vibrate(2000);
});

function MostraMapa(lat, long){
  L.mapquest.key = 'iqYVreHtWwwtD3JMMs4ca8ZDkQqCkgoS';
    var map = L.mapquest.map('map', {
    center: [lat, long],
    layers: L.mapquest.tileLayer('map'),
    zoom: 15
  });
  map.addControl(L.mapquest.control());
}

$(document).on("click", "#local", function(){
   var onSuccess = function(position) {
      function MostraMapa(position.coords.latitude, position.coords.longitude);
    }

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});