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
    document.getElementById('pointLoad').style.opacity = '1';
    document.getElementById('pointLoadVal').removeAttribute('disabled');
    document.getElementById('pointLoadVal').style.opacity = '1';
    document.getElementById('pointLoadDist').removeAttribute('disabled');
    document.getElementById('pointLoadDist').style.opacity = '1';
    document.getElementById('pointLoadDistVal').removeAttribute('disabled');
    document.getElementById('pointLoadDistVal').style.opacity = '1';
    document.getElementById('pointLoadSubmit').removeAttribute('disabled');
    let max = document.getElementById('beamLength').value;
    document.getElementById('pointLoadDist').max = max;
    document.getElementById('pointLoadDistVal').max = max;
    document.getElementById('udlMaxDist').max = max;
    document.getElementById('udlMaxDistVal').max = max;
    document.getElementById('uvlMaxDist').max = max;
    document.getElementById('uvlMaxDistVal').max = max;
    document.getElementById('uvlMinDist').max = max;
    document.getElementById('uvlMinDistVal').max = max;
    document.getElementById('beamSubmit').setAttribute('disabled','');
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
    document.getElementById("line").style.marginLeft = (input.value*5) - 1.25 + "px";
}

// Slider Input
function handlePDistSlider(input) {
    input.nextElementSibling.value = input.value;
    document.getElementById("pointer").style.marginLeft = (input.value*5) - 10 + "px";
    document.getElementById("line").style.marginLeft = (input.value*5) - 1.25 + "px";
}

// Point Load Value Change : 
function handlePLoadInput(input) {
    input.value = input.value.replace(/^0+/, '') || 0;
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
    document.getElementById('udlmaxpointer').hidden = false;
    document.getElementById('udlMaxDist').removeAttribute('disabled');
    document.getElementById('udlMaxDist').style.opacity = '1';
    document.getElementById('udlMaxDistVal').removeAttribute('disabled');
    document.getElementById('udlMaxDistVal').style.opacity = '1';
    document.getElementById('udlMaxSubmit').removeAttribute('disabled');
    document.getElementById('pointLoadSubmit').setAttribute('disabled','');
  });

  /* UDL CHANGE ON INPUT */

// udl Maximum Distance Change : 

// Text Input
function handleudlMaxDistInput(input) {
    input.value = input.value.replace(/^0+/, '') || 0;
    input.previousElementSibling.value = input.value;
    if (parseInt(input.value) < 0) {
        input.value = 0;
    }
    let max = document.getElementById('beamLength').value;
    if (parseInt(input.value) > max) {
        input.value = max;
    }
    document.getElementById("udlmaxpointer").style.marginLeft = (input.value*5) - 10 + "px";
    document.getElementById("udlmaxline").style.marginLeft = (input.value*5) - 1 + "px";
}

// Slider Input
function handleudlMaxDistSlider(input) {
    input.nextElementSibling.value = input.value;
    document.getElementById("udlmaxpointer").style.marginLeft = (input.value*5) - 10 + "px";
    document.getElementById("udlmaxline").style.marginLeft = (input.value*5) - 1 + "px";
}

// udl Max limit setting after submit pressed.
document.getElementById("udlMaxSubmit").addEventListener("click", function () {
    document.getElementById('udlMaxDist').setAttribute('disabled','');
    document.getElementById('udlMaxDist').style.opacity = '0.5';
    document.getElementById('udlMaxDistVal').setAttribute('disabled','');
    document.getElementById('udlMaxDistVal').style.opacity = '0.5';
    document.getElementById('udlminpointer').hidden = false;
    document.getElementById('udlMinDist').removeAttribute('disabled');
    document.getElementById('udlMinDist').style.opacity = '1';
    document.getElementById('udlMinDistVal').removeAttribute('disabled');
    document.getElementById('udlMinDistVal').style.opacity = '1';
    document.getElementById("udlMinSubmit").removeAttribute('disabled');
    let udlmax = document.getElementById('udlMaxDist').value;
    document.getElementById('udlMinDist').max = udlmax;
    document.getElementById('udlMinDistVal').max = udlmax;
    document.getElementById("udlMaxSubmit").setAttribute('disabled','');
});

// udl Minimum Distance Change : 

// Text Input
function handleudlMinDistInput(input) {
    input.value = input.value.replace(/^0+/, '') || 0;
    input.previousElementSibling.value = input.value;
    if (parseInt(input.value) < 0) {
        input.value = 0;
    }
    let udlmax = document.getElementById('udlMaxDist').value;
    if (parseInt(input.value) > udlmax) {
        input.value = udlmax;
    }
    document.getElementById("udlminpointer").style.marginLeft = (input.value*5) - 10 + "px";
    document.getElementById("udlminline").style.marginLeft = (input.value*5) - 1 + "px";
}

// Slider Input
function handleudlMinDistSlider(input) {
    input.nextElementSibling.value = input.value;
    document.getElementById("udlminpointer").style.marginLeft = (input.value*5) - 10 + "px";
    document.getElementById("udlminline").style.marginLeft = (input.value*5) - 1 + "px";
}

// udl limits setting after submit pressed.
document.getElementById("udlMinSubmit").addEventListener("click", function () {
    document.getElementById('udlMinDist').setAttribute('disabled','');
    document.getElementById('udlMinDist').style.opacity = '0.5';
    document.getElementById('udlMinDistVal').setAttribute('disabled','');
    document.getElementById('udlMinDistVal').style.opacity = '0.5';
    document.getElementById('udlminline').hidden = false;
    document.getElementById('udlmaxline').hidden = false;
    document.getElementById('udlarea').hidden = false;
    document.getElementById("udlSubmit").removeAttribute('disabled');
    document.getElementById('udl').removeAttribute('disabled');
    document.getElementById('udl').style.opacity = '1';
    document.getElementById('udlVal').removeAttribute('disabled');
    document.getElementById('udlVal').style.opacity = '1';
    let udlmax = document.getElementById('udlMaxDist').value;
    let udlmin = document.getElementById('udlMinDist').value;
    document.getElementById('udlarea').style.marginLeft = (udlmin*5) + 'px';
    document.getElementById('udlarea').style.width = ((udlmax-udlmin)*5) + 'px';
    document.getElementById("udlMinSubmit").setAttribute('disabled','');
});

// udl Load Change : 

// Text Input
function handleudlInput(input) {
    input.value = input.value.replace(/^0+/, '') || 0;
    input.previousElementSibling.value = input.value
    if (input.value < 0) {
        input.value = 0;
    }
    if (parseInt(input.value) > 80) {
        input.value = 80;
    }
    document.getElementById("udlminline").style.height = input.value + "px";
    document.getElementById("udlmaxline").style.height = input.value + "px";
    document.getElementById("udlarea").style.height = input.value + "px";
}

// Slider Input
function handleudlSlider(input) {
    input.nextElementSibling.value = input.value;
    document.getElementById("udlminline").style.height = input.value + "px";
    document.getElementById("udlmaxline").style.height = input.value + "px";
    document.getElementById("udlarea").style.height = input.value + "px";
}

// Disabling udl Change after Submit clicked
document.getElementById("udlSubmit").addEventListener("click", function () {
    document.getElementById('udl').setAttribute('disabled','');
    document.getElementById('udl').style.opacity = '0.5';
    document.getElementById('udlVal').setAttribute('disabled','');
    document.getElementById('udlVal').style.opacity = '0.5';
    document.getElementById('uvlmaxpointer').hidden = false;
    document.getElementById("uvlMaxDistSubmit").removeAttribute('disabled');
    document.getElementById('uvlMaxDist').removeAttribute('disabled');
    document.getElementById('uvlMaxDist').style.opacity = '1';
    document.getElementById('uvlMaxDistVal').removeAttribute('disabled');
    document.getElementById('uvlMaxDistVal').style.opacity = '1';
    document.getElementById("udlSubmit").setAttribute('disabled','');
  });


/* UVL CHANGE ON INPUT */

// uvl Maximum Load Distance Change : 

// Text Input
function handleuvlMaxDistInput(input) {
    input.value = input.value.replace(/^0+/, '') || 0;
    input.previousElementSibling.value = input.value;
    if (parseInt(input.value) < 0) {
        input.value = 0;
    }
    let max = document.getElementById('beamLength').value;
    if (parseInt(input.value) > max) {
        input.value = max;
    }
    document.getElementById("uvlmaxpointer").style.marginLeft = (input.value*5) - 10 + "px";
    document.getElementById("uvlmaxline").style.marginLeft = (input.value*5) - 1 + "px";
}

// Slider Input
function handleuvlMaxDistSlider(input) {
    input.nextElementSibling.value = input.value;
    document.getElementById("uvlmaxpointer").style.marginLeft = (input.value*5) - 10 + "px";
    document.getElementById("uvlmaxline").style.marginLeft = (input.value*5) - 1 + "px";
}

// uvl Max Dist limit setting after submit pressed.
document.getElementById("uvlMaxDistSubmit").addEventListener("click", function () {
    document.getElementById('uvlMaxDist').setAttribute('disabled','');
    document.getElementById('uvlMaxDist').style.opacity = '0.5';
    document.getElementById('uvlMaxDistVal').setAttribute('disabled','');
    document.getElementById('uvlMaxDistVal').style.opacity = '0.5';
    document.getElementById('uvlminpointer').hidden = false;
    document.getElementById('uvlMinDistSubmit').removeAttribute('disabled');
    document.getElementById('uvlMinDist').removeAttribute('disabled');
    document.getElementById('uvlMinDist').style.opacity = '1';
    document.getElementById('uvlMinDistVal').removeAttribute('disabled');
    document.getElementById('uvlMinDistVal').style.opacity = '1';
    document.getElementById("uvlMaxDistSubmit").setAttribute('disabled','');
});

// uvl Minimum Load Distance Change : 

// Text Input
function handleuvlMinDistInput(input) {
    input.value = input.value.replace(/^0+/, '') || 0;
    input.previousElementSibling.value = input.value;
    if (parseInt(input.value) < 0) {
        input.value = 0;
    }
    let max = document.getElementById('beamLength').value;
    if (parseInt(input.value) > max) {
        input.value = max;
    }
    document.getElementById("uvlminpointer").style.marginLeft = (input.value*5) - 10 + "px";
    document.getElementById("uvlminline").style.marginLeft = (input.value*5) - 1 + "px";
}

// Slider Input
function handleuvlMinDistSlider(input) {
    input.nextElementSibling.value = input.value;
    document.getElementById("uvlminpointer").style.marginLeft = (input.value*5) - 10 + "px";
    document.getElementById("uvlminline").style.marginLeft = (input.value*5) - 1 + "px";
}

// uvl Dist limit setting after submit pressed.
document.getElementById("uvlMinDistSubmit").addEventListener("click", function () {
    document.getElementById('uvlMinDist').setAttribute('disabled','');
    document.getElementById('uvlMinDist').style.opacity = '0.5';
    document.getElementById('uvlMinDistVal').setAttribute('disabled','');
    document.getElementById('uvlMinDistVal').style.opacity = '0.5';
    document.getElementById('uvlmaxline').hidden = false;
    document.getElementById('uvlrectangle').hidden = false;
    document.getElementById('uvltriangle').hidden = false;
    document.getElementById('uvlMaxSubmit').removeAttribute('disabled');
    document.getElementById('uvlMax').removeAttribute('disabled');
    document.getElementById('uvlMax').style.opacity = '1';
    document.getElementById('uvlMaxVal').removeAttribute('disabled');
    document.getElementById('uvlMaxVal').style.opacity = '1';
    let uvlDist = (document.getElementById('uvlMaxDist').value - document.getElementById('uvlMinDist').value);
    if (uvlDist >= 0) {
        document.getElementById('uvlrectangle').style.marginLeft = (document.getElementById('uvlMinDist').value*5) + 'px';
        document.getElementById('uvltriangle').style.marginLeft = (document.getElementById('uvlMinDist').value*5) + 'px';
        document.getElementById('uvlrectangle').style.width = ((document.getElementById('uvlMaxDist').value-document.getElementById('uvlMinDist').value)*5) + 'px';
        document.getElementById('uvltriangle').style.width = ((document.getElementById('uvlMaxDist').value-document.getElementById('uvlMinDist').value)*5) + 'px';
        document.getElementById('uvltriangle').style.transform = 'scaleX(-1)';
    } else {
        document.getElementById('uvlrectangle').style.marginLeft = (document.getElementById('uvlMaxDist').value*5) + 'px';
        document.getElementById('uvltriangle').style.marginLeft = (document.getElementById('uvlMaxDist').value*5) + 'px';
        document.getElementById('uvlrectangle').style.width = ((document.getElementById('uvlMinDist').value-document.getElementById('uvlMaxDist').value)*5) + 'px';
        document.getElementById('uvltriangle').style.width = ((document.getElementById('uvlMinDist').value-document.getElementById('uvlMaxDist').value)*5) + 'px';
    }
    document.getElementById("uvlMinDistSubmit").setAttribute('disabled','');
});

// uvl Max Load Change : 

// Text Input
function handleuvlMaxInput(input) {
    input.value = input.value.replace(/^0+/, '') || 0;
    input.previousElementSibling.value = input.value
    if (input.value < 0) {
        input.value = 0;
    }
    if (parseInt(input.value) > 80) {
        input.value = 80;
    }
    document.getElementById("uvlmaxline").style.height = input.value + "px";
    document.getElementById("uvltriangle").style.height = input.value + "px";
}

// Slider Input
function handleuvlMaxSlider(input) {
    input.nextElementSibling.value = input.value;
    document.getElementById("uvlmaxline").style.height = input.value + "px";
    document.getElementById("uvltriangle").style.height = input.value + "px";
}

// uvl Max limit setting after submit pressed.
document.getElementById("uvlMaxSubmit").addEventListener("click", function () {
    document.getElementById('uvlMax').setAttribute('disabled','');
    document.getElementById('uvlMax').style.opacity = '0.5';
    document.getElementById('uvlMaxVal').setAttribute('disabled','');
    document.getElementById('uvlMaxVal').style.opacity = '0.5';
    document.getElementById('uvlminline').hidden = false;
    document.getElementById('uvlMinSubmit').removeAttribute('disabled');
    document.getElementById('uvlMin').removeAttribute('disabled');
    document.getElementById('uvlMin').style.opacity = '1';
    document.getElementById('uvlMinVal').removeAttribute('disabled');
    document.getElementById('uvlMinVal').style.opacity = '1';
    let uvlmax = document.getElementById('uvlMax').value;
    document.getElementById('uvlMin').max = uvlmax;
    document.getElementById('uvlMinVal').max = uvlmax;
    document.getElementById("uvlMaxSubmit").setAttribute('disabled','');
});

// uvl Min Load Change : 

// Text Input
function handleuvlMinInput(input) {
    input.value = input.value.replace(/^0+/, '') || 0;
    input.previousElementSibling.value = input.value
    if (input.value < 0) {
        input.value = 0;
    }
    let uvlmax = document.getElementById('uvlMax').value;
    if (parseInt(input.value) > uvlmax) {
        input.value = uvlmax;
    }
    document.getElementById("uvlminline").style.height = input.value + "px";
    document.getElementById("uvlrectangle").style.height = input.value + "px";
    document.getElementById("uvltriangle").style.height = (document.getElementById('uvlMax').value-input.value) + "px";
    document.getElementById("uvltriangle").style.bottom = "calc(" + input.value + "px + 80%)";
}

// Slider Input
function handleuvlMinSlider(input) {
    input.nextElementSibling.value = input.value;
    document.getElementById("uvlminline").style.height = input.value + "px";
    document.getElementById("uvlrectangle").style.height = input.value + "px";
    document.getElementById("uvltriangle").style.height = (document.getElementById('uvlMax').value-input.value) + "px";
    document.getElementById("uvltriangle").style.bottom = "calc(" + input.value + "px + 80%)";
}

// uvl Load setting after submit pressed.
document.getElementById("uvlMinSubmit").addEventListener("click", function () {
    document.getElementById('uvlMin').setAttribute('disabled','');
    document.getElementById('uvlMin').style.opacity = '0.5';
    document.getElementById('uvlMinVal').setAttribute('disabled','');
    document.getElementById('uvlMinVal').style.opacity = '0.5';
    document.getElementById("uvlMinSubmit").setAttribute('disabled','');
    // Beam Length
    var beamLength = document.getElementById('beamLength').value;

    // Point Load
    var pointLoad = document.getElementById('pointLoad').value;
    var pointLoadDist = document.getElementById('pointLoadDist').value;
    // var pointLoadAngle = document.getElementById('pointLoadAngle').value;

    // Uniformly Distributed Load
    var udl = document.getElementById('udl').value;
    var udlMinDist = document.getElementById('udlMinDist').value;
    var udlMaxDist = document.getElementById('udlMaxDist').value;

    // Uniformly Varying Load
    var uvlMinVal = document.getElementById('uvlMin').value;
    var uvlMaxVal = document.getElementById('uvlMax').value;
    var uvlMinValDist = document.getElementById('uvlMinDist').value;
    var uvlMaxValDist = document.getElementById('uvlMaxDist').value;

    var fixedForcePosition = pointLoadDist, fixedForceMagnitude = pointLoad, theta = Math.PI /2;
    var UDLstart = udlMinDist, UDLend = udlMaxDist, UDLmagnitude = udl;
    var UVLstart = uvlMinValDist, UVLend = uvlMaxValDist, UVLmagnitude = (uvlMaxVal-uvlMinVal);
    var UVLUDLstart = uvlMinValDist, UVLUDLend = uvlMaxValDist, UVLUDLmagnitude = uvlMinVal;
    var CurrentForce = 0, CurrentMoment = 0;

    var xValues = [];
    var yValues = [];
    var MomentValues = []

    for (var x = beamLength; x >= 0 ; x -= 0.1) {
    xValues.push(x);
    MomentValues.push(CurrentMoment);
    if(x - fixedForcePosition >= 0 && (x-fixedForcePosition)<=1e-9) CurrentForce += fixedForceMagnitude*Math.sin(theta);
    if(x >= UDLstart && x <= UDLend) CurrentForce += UDLmagnitude*0.1;
    if(x >= UVLUDLstart && x <= UVLUDLend) CurrentForce += UVLUDLmagnitude*0.1;
    else if(x <= UVLUDLstart && x >= UVLUDLend) CurrentForce += UVLUDLmagnitude*0.1;
    if(x >= UVLstart && x <= UVLend) CurrentForce += ((x+0.05) - UVLstart)*((UVLmagnitude)/(UVLend - UVLstart))*0.1;
    else if(x >= UVLend && x <= UVLstart) CurrentForce += ((x+0.05) - UVLend)*((UVLmagnitude)/(UVLstart - UVLend))*0.1;
    yValues.push(-CurrentForce);
    console.log(CurrentForce,x);
    CurrentMoment += CurrentForce*0.1;
    }

    yValues.reverse()
    xValues.reverse()
    MomentValues.reverse()

    let shearMin = Math.min(...yValues).toFixed(2);
    let bendingMax = Math.max(...MomentValues).toFixed(2);

    var data = [{
    x: xValues,
    y: yValues,
    mode:"lines"
    }];

    var layout = {
    title: "Shear Force Diagram",
    hovermode: false,
    margin: {
        b: 50,
        l: 50,
        r: 20,
        t: 40
    },
    annotations: [
        {
        x: 0,
        y: shearMin,
        xref: 'x',
        yref: 'y',
        showarrow: true,
        text: shearMin,
        font: {
            family: 'Courier New, monospace',
            size: 16,
            color: '#ffffff'
          },
          align: 'center',
          arrowhead: 2,
          arrowsize: 1,
          arrowwidth: 2,
          arrowcolor: '#636363',
          ax: 20,
          ay: -30,
          bordercolor: '#c7c7c7',
          borderwidth: 2,
          borderpad: 4,
          bgcolor: '#ff7f0e',
          opacity: 0.8
        }
    ],
    xaxis: {
        title: 'Beam Length',
        rangemode: 'tozero',
        autorange: true,
        fixedrange: true,
        ticks: 'outside',
        dtick: 5
    },
    yaxis: {
        title: 'Shear Force',
        rangemode: 'tozero',
        autorange: true,
        fixedrange: true
    }
    };

    Plotly.newPlot("shear", data, layout, {displayModeBar: false});

    var data = [{
        x: xValues,
        y: MomentValues,
        mode:"lines"
    }];

    var layout = {
    title: "Bending Moment Diagram",
    hovermode: false,
    margin: {
        b: 50,
        l: 50,
        r: 20,
        t: 40
    },
    annotations: [
        {
        x: 0,
        y: bendingMax,
        xref: 'x',
        yref: 'y',
        showarrow: true,
        text: bendingMax,
        font: {
            family: 'Courier New, monospace',
            size: 16,
            color: '#ffffff'
          },
          align: 'center',
          arrowhead: 2,
          arrowsize: 1,
          arrowwidth: 2,
          arrowcolor: '#636363',
          ax: 20,
          ay: -30,
          bordercolor: '#c7c7c7',
          borderwidth: 2,
          borderpad: 4,
          bgcolor: '#ff7f0e',
          opacity: 0.8
        }
    ],
    xaxis: {
        title: 'Beam Length',
        rangemode: 'tozero',
        autorange: true,
        fixedrange: true,
        ticks: 'outside',
        dtick: 5
    },
    yaxis: {
        title: 'Bending Moment',
        rangemode: 'tozero',
        autorange: true,
        fixedrange: true
    }
    };

    Plotly.newPlot("bending", data, layout, {displayModeBar: false});
});
