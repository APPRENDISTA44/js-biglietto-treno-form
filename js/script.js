//elementi form
var formGenera = document.getElementById('form-genera');
var formAnnulla = document.getElementById('form-annulla');
var formName = document.getElementById('form-nome');
var formKm = document.getElementById('form-km');
var formEta = document.getElementById('form-eta');

//elementi biglietti
var biglNome = document.getElementById('bigl-nome');
var biglOfferta = document.getElementById('bigl-offerta');
var biglCarrozza = document.getElementById('bigl-carrozza');
var biglCp = document.getElementById('bigl-cp');
var biglCosto = document.getElementById('bigl-costo');

//altre variabili
var formKmValue;
var formEtaValue;
var visibilita = document.getElementById('visibilita');
var errore = document.getElementById('errore');

//evento click su genera
formGenera.addEventListener('click',
  function(){
    formKmValue = formKm.value;
    formEtaValue = formEta.value;
    forNameValue = formName.value;
    //se clicca su genera senza avere annullato prima scompare la scritta di errore
    errore.className = 'hidden'
    visibilita.className = 'hidden'
    //controllo dati utente
    if ((isNaN(formKmValue)) || !(isNaN(forNameValue)) || (formKmValue == '')) {
      errore.className = 'visible'
    }else {
      //calcolo
      var prezzo = 0.21 * formKmValue;
      var offerta = 'Prezzo standard'
      if (formEtaValue == 'minorenne') {
        prezzo = prezzo - (prezzo/100)*20;
        offerta = 'Sconto Silver'
      } else if (formEtaValue == 'over') {
        prezzo = prezzo - (prezzo/100)*40;
        offerta = 'Sconto Gold'
      }
      biglNome.innerHTML = formName.value;
      biglOfferta.innerHTML = offerta;
      biglCarrozza.innerHTML = Math.floor(Math.random()*10)+1;
      biglCp.innerHTML = Math.floor(Math.random()*100000)+1; ;
      biglCosto.innerHTML = prezzo.toFixed(2) + ' Euro';
      visibilita.className = 'visible'
    }

  }
);

//evento click su annulla
formAnnulla.addEventListener('click',
  function(){
  formName.value = '';
  formKm.value = '';
  formEta.value = 'maggiorenne'
  visibilita.className = 'hidden'
  errore.className = 'hidden'
  }
);
