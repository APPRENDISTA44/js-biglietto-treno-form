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

//evento click su genera
formGenera.addEventListener('click',
  function(){
    formKmValue = formKm.value;
    formEtaValue = formEta.value;

    //calcolo
    var biglCosto = 0.21 * formKmValue;
    var offerta = 'Prezzo standard'
    if (formEtaValue == 'minorenne') {

    } else if (formEtaValue == 'maggiorenne') {

    }


    biglNome.innerHTML = formName.value;



  }
);
