/* BEAM LENGTH CHANGE ON INPUT */

// Text Input
function handleWidthInput(input) {
    input.value = input.value.replace(/^1+/, '') || 1;
    input.previousElementSibling.value = input.value
    if (input.value < 0) {
        input.value = 0;
    }
    if (parseInt(input.value) > 100) {
        input.value = 100;
    }
    document.getElementById("beam").style.width = (input.value*5) + 40 + "px";
}

// Slider Input
function handleWidthSlider(input) {
    input.nextElementSibling.value = input.value;
    document.getElementById("beam").style.width = (input.value*5) + 40 + "px";
}

// Disabling Beam Length Change after Submit clicked
document.getElementById("beamSubmit").addEventListener("click", function () {
    document.getElementById('beamLength').setAttribute('disabled','');
    document.getElementById('beamLength').style.opacity = '0.5';
    document.getElementById('beamLengthVal').setAttribute('disabled','');
    document.getElementById('beamLengthVal').style.opacity = '0.5';
    document.getElementById('pointer').hidden = false;
    document.getElementById('line').hidden = false;
    document.getElementById('pointLoad').removeAttribute('disabled');
    document.getElementById('pointLoadVal').removeAttribute('disabled');
    document.getElementById('pointLoadDist').removeAttribute('disabled');
    document.getElementById('pointLoadDistVal').removeAttribute('disabled');
    let max = document.getElementById('beamLength').value;
    document.getElementById('pointLoadDist').max = max;
    document.getElementById('pointLoadDistVal').max = max;
  });
  



/* POINT LOAD CHANGE ON INPUT */

// Point Load Distance Change : 

// Text Input
function handlePDistInput(input) {
    input.value = input.value.replace(/^0+/, '') || 0;
    input.previousElementSibling.value = input.value;
    if (input.value < 0) {
        input.value = 0;
    }
    let max = document.getElementById('beamLength').value;
    if (parseInt(input.value) > max) {
        input.value = max;
    }
    document.getElementById("pointer").style.marginLeft = (input.value*5) - 10 + "px";
    document.getElementById("line").style.marginLeft = (input.value*5) + "px";
}

// Slider Input
function handlePDistSlider(input) {
    input.nextElementSibling.value = input.value;
    document.getElementById("pointer").style.marginLeft = (input.value*5) - 10 + "px";
    document.getElementById("line").style.marginLeft = (input.value*5) + "px";
}

// Point Load Value Change : 
function handlePLoadInput(input) {
    input.value = input.value.replace(/^1+/, '') || 1;
    input.previousElementSibling.value = input.value
    if (input.value < 0) {
        input.value = 0;
    }
    if (parseInt(input.value) > 80) {
        input.value = 80;
    }
    document.getElementById("line").style.height = input.value + "px";
}

// Slider Input
function handlePLoadSlider(input) {
    input.nextElementSibling.value = input.value;
    document.getElementById("line").style.height = input.value + "px";
}

// Disabling Point Load Change after Submit clicked
document.getElementById("pointLoadSubmit").addEventListener("click", function () {
    document.getElementById('pointLoad').setAttribute('disabled','');
    document.getElementById('pointLoad').style.opacity = '0.5';
    document.getElementById('pointLoadVal').setAttribute('disabled','');
    document.getElementById('pointLoadVal').style.opacity = '0.5';
    document.getElementById('pointLoadDist').setAttribute('disabled','');
    document.getElementById('pointLoadDist').style.opacity = '0.5';
    document.getElementById('pointLoadDistVal').setAttribute('disabled','');
    document.getElementById('pointLoadDistVal').style.opacity = '0.5';
    document.getElementById('pointercont').hidden = false;
    document.getElementById('udl').removeAttribute('disabled');
    document.getElementById('udlVal').removeAttribute('disabled');
    document.getElementById('udlMinDist').removeAttribute('disabled');
    document.getElementById('udlMinDistVal').removeAttribute('disabled');
    document.getElementById('udlMaxDist').removeAttribute('disabled');
    document.getElementById('udlMaxDistVal').removeAttribute('disabled');
  });