
function handleWidthInput(input) {
    input.value = input.value.replace(/^1+/, '');
    input.previousElementSibling.value = input.value
    if (input.value < 1) {
        input.value = 1;
    }
    if (parseInt(input.value) > 100) {
        input.value = 100;
    }
    document.getElementById("beam").style.width = (input.value*5) + "px";
}

// Slider Input
function handleWidthSlider(input) {
    input.nextElementSibling.value = input.value;
    document.getElementById("beam").style.width = (input.value*5) + "px";
}

// Disabling Beam Length Change after Submit clicked
document.getElementById("beamSubmit").addEventListener("click", function () {
    document.getElementById('lengthvalue').style.display = "none";
    document.getElementById('pointloadvalue').style.display = "inline-block";

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
    document.getElementById('pointLoadInc').removeAttribute('disabled');
    document.getElementById('pointLoadInc').style.opacity = '1';
    document.getElementById('pointLoadIncVal').removeAttribute('disabled');
    document.getElementById('pointLoadIncVal').style.opacity = '1';



    let max = document.getElementById('beamLength').value;
    document.getElementById('pointLoadDist').max = max;
    document.getElementById('pointLoadDistVal').max = max;
    document.getElementById('udlMaxDist').max = max;
    document.getElementById('udlMaxDistVal').max = max;
    document.getElementById('uvlMaxDist').max = max;
    document.getElementById('uvlMaxDistVal').max = max;
    document.getElementById('uvlMinDist').max = max;
    document.getElementById('uvlMinDistVal').max = max;

    document.getElementById('fsupportDist').max = max;
    document.getElementById('fsupportDistVal').max = max;
    document.getElementById('rsupportDist').max = max;
    document.getElementById('rsupportDistVal').max = max;
    document.getElementById('fsupportDist').removeAttribute('disabled');
    document.getElementById('fsupportDist').style.opacity = '1';
    document.getElementById('fsupportDistVal').removeAttribute('disabled');
    document.getElementById('fsupportDistVal').style.opacity = '1';
    document.getElementById('rsupportDist').removeAttribute('disabled');
    document.getElementById('rsupportDist').style.opacity = '1';
    document.getElementById('rsupportDistVal').removeAttribute('disabled');
    document.getElementById('rsupportDistVal').style.opacity = '1';

    document.getElementById('beamSubmit').setAttribute('disabled','');

  });

function supportfInput(input) {
    input.value = input.value.replace(/^0+/, '') || 0;
    input.previousElementSibling.value = input.value;
    if (input.value < 0) {
        input.value = 0;
    }
    let max = document.getElementById('beamLength').value;
    if (parseInt(input.value) > max) {
        input.value = max;
    }
    document.getElementById("fsupport").style.marginLeft = (input.value*5)  - 15 + "px";
}
function supportfSlider(input) {
    input.nextElementSibling.value = input.value;
    document.getElementById("fsupport").style.marginLeft = (input.value*5)  - 15 + "px";
}

function supportrInput(input) {
    input.value = input.value.replace(/^0+/, '') || 0;
    input.previousElementSibling.value = input.value;
    if (input.value < 0) {
        input.value = 0;
    }
    let max = document.getElementById('beamLength').value;
    if (parseInt(input.value) > max) {
        input.value = max;
    }
    document.getElementById("rsupport").style.marginLeft = (input.value*5)  - 15 + "px";
}
function supportrSlider(input) {
    input.nextElementSibling.value = input.value;
    document.getElementById("rsupport").style.marginLeft = (input.value*5)  - 15 + "px";
}

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

function handlePILoadSlider(input) {
    input.nextElementSibling.value = input.value;
    document.getElementById("line").style.transform = "rotate(" + (90 - input.value) + "deg)";
    document.getElementById("line").style.transformOrigin = "50% 100%";
    document.getElementById("pointer").style.transform = "rotate(" + (90 -input.value) + "deg)";
    document.getElementById("pointer").style.transformOrigin = "50% 100%";
}

// Disabling Point Load Change after Submit clicked
document.getElementById("pointLoadSubmit").addEventListener("click", function () {
    document.getElementById('pointloadvalue').style.display = "none";
    document.getElementById('udlvalue').style.display = "inline-block";

    document.getElementById('pointLoadInc').setAttribute('disabled','');
    document.getElementById('pointLoadInc').style.opacity = '0.5';
    document.getElementById('pointLoadIncVal').setAttribute('disabled','');
    document.getElementById('pointLoadIncVal').style.opacity = '0.5';
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
    document.getElementById('udlvalue').style.display = "none";
    document.getElementById('uvlvalue').style.display = "inline-block";

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
    document.getElementById("uvltriangle").style.bottom = "calc(" + input.value + "px + 70%)";
}

// Slider Input
function handleuvlMinSlider(input) {
    input.nextElementSibling.value = input.value;
    document.getElementById("uvlminline").style.height = input.value + "px";
    document.getElementById("uvlrectangle").style.height = input.value + "px";
    document.getElementById("uvltriangle").style.height = (document.getElementById('uvlMax').value-input.value) + "px";
    document.getElementById("uvltriangle").style.bottom = "calc(" + input.value + "px + 70%)";
}

// uvl Load setting after submit pressed.
function getRandomInt() {
    console.log(items)
    // return Math.floor(Math.random() * max);
    return items[Math.floor(Math.random()*items.length)];
  }

var newindex, newindex1;

document.getElementById("postLabButton").addEventListener("click", function(){

    document.getElementsByClassName("postLabQuestions").height = "100%";
    document.getElementById('uvlvalue').style.display = "none";
    document.getElementById('postLabButton').style.display = "none";
    console.log(data1[0].x.length)
    // var index = getRandomInt(data1[0].x.length);
    var t = getRandomInt()
    console.log(t)
    if ((t+1)*16>data1[0].x.length){
        var index = (t-1)*16;
    } else {
        var index = (t+1)*16;
    }
    console.log(index)

    var options1 = [data1[0].y[index], data1[0].y[index] - Math.floor(Math.random()*1000),data1[0].y[index] + Math.floor(Math.random()*1000),data1[0].y[index] - Math.floor(Math.random()*10000)];
    var options = [data[0].y[index], data[0].y[index] - Math.floor(Math.random()*1000),data[0].y[index] + Math.floor(Math.random()*1000),data[0].y[index] - Math.floor(Math.random()*10000)];

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }

    options = shuffleArray(options)
    options1 = shuffleArray(options1)

    let class0 = document.getElementById("postLabQuestions");
    let class1 = document.getElementById("postLabq1");
    let class2 = document.getElementById("postLabq2");

    document.getElementById("postLabq2").innerHTML = "What is the bending moment at distance " + data[0].x[index] + "? ";
    document.getElementById("postLabq1").innerHTML = "What is the shear force at distance " + data1[0].x[index] + "? ";

    let ul = document.createElement("ul");
    let ul1 = document.createElement("ul");

    options.forEach((item)=>{
        let li = document.createElement("input");
        let liName = document.createElement("label")
        li.setAttribute('type','radio')
        li.setAttribute('name','options')
        li.setAttribute('id',item)
        li.setAttribute('value',item)
        liName.innerText = item.toFixed(2) + "\n"
        liName.setAttribute("for",item)
        ul.appendChild(li)
        ul.appendChild(liName)
    })

    options1.forEach((item)=>{
        let li = document.createElement("input");
        let liName = document.createElement("label")
        li.setAttribute('type','radio')
        li.setAttribute('name','options1')
        li.setAttribute('id',item)
        li.setAttribute('value',item)
        liName.innerText = item.toFixed(2) + "\n"
        liName.setAttribute("for",item)
        ul1.appendChild(li)
        ul1.appendChild(liName)
    })

    class1.append(ul);
    class2.append(ul1);

    document.getElementById("postSubmit").removeAttribute('hidden','');
    newindex = data[0].y[index], newindex1 = data1[0].y[index];
});

let ans = 'false'
let ans1 = 'false'
document.getElementById("postSubmit").addEventListener("click", function(){
    var ele = document.getElementsByName('options');
    var ele1 = document.getElementsByName('options1');
    console.log(newindex)
    console.log(newindex1)
    for(i = 0; i < 4; i++) {
        if(ele[i].checked){
            var nvalue = document.querySelector('label[for="'+ele[i].id+'"]').innerHTML;
            var newvalue = parseFloat(nvalue)
            console.log(newvalue);
            console.log(newindex)
            if(Math.abs(newvalue-newindex)<=1){
                ans = 'true'
            }}
        if(ele1[i].checked){
            var nvalue1 = document.querySelector('label[for="'+ele1[i].id+'"]').innerHTML;
            var newvalue1 = parseFloat(nvalue1)
            console.log(newvalue1);
            console.log(newindex1)
            if(Math.abs(newvalue1-newindex1)<=1){
                ans1 = 'true'
            }}
    }
    if (ans=='true' && ans1=='true'){
        document.getElementById("newText").textContent = "Correct!"
    } else {
        document.getElementById("newText").textContent = "Wrong!"
    }
    document.getElementById("newText").removeAttribute('hidden','')
});

var data = Array();
var data1 = Array();
var layout = Object();
var layout1 = Object();
var items = Array();
document.getElementById("uvlMinSubmit").addEventListener("click", function () {
    document.getElementById('uvlMin').setAttribute('disabled','');
    document.getElementById('uvlMin').style.opacity = '0.5';
    document.getElementById('uvlMinVal').setAttribute('disabled','');
    document.getElementById('uvlMinVal').style.opacity = '0.5';
    document.getElementById("uvlMinSubmit").setAttribute('disabled','');
    document.getElementById("postLabButton").style.opacity = 1;

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

    var fixedForcePosition = pointLoadDist, fixedForceMagnitude = pointLoad;
    var theta = document.getElementById('pointLoadIncVal').value * Math.PI / 180;
    var UDLstart = udlMinDist, UDLend = udlMaxDist, UDLmagnitude = udl;
    var UVLstart = uvlMinValDist, UVLend = uvlMaxValDist, UVLmagnitude = (uvlMaxVal-uvlMinVal);
    var UVLUDLstart = uvlMinValDist, UVLUDLend = uvlMaxValDist, UVLUDLmagnitude = uvlMinVal;
    items = [uvlMaxValDist,uvlMinValDist,udlMinDist,udlMaxDist,pointLoadDist];
    var CurrentForce = 0, CurrentMoment = 0;
    var fsupportmag = 0, rsupportmag = 0, fsupportpos = 0, rsupportpos = 0;
    const fsupportDistVal = document.getElementById("fsupportDistVal").className;
    console.log(fsupportDistVal)
    if (fsupportDistVal == 'slider-value') {
        let hingePos = document.getElementById('fsupportDist').value;
        let rollPos = document.getElementById('rsupportDist').value;
        fsupportpos = parseInt(hingePos), rsupportpos = parseInt(rollPos);
        var uvlstart = parseInt(UVLstart), uvlend = parseInt(UVLend), uvlstartmag = parseInt(uvlMinVal), uvlendmag = parseInt(uvlMaxVal);
        var udlstart = parseInt(UDLstart), udlend = parseInt(UDLend), udlmag = parseInt(UDLmagnitude);
        var pointdist = parseInt(fixedForcePosition), pointmag = parseInt(fixedForceMagnitude), pointinc = parseInt(theta);

        var condenseduvlpos = 0, condenseduvlbasepos = 0, condenseduvlmag = 0, condenseduvlbasemag = 0;
        var condensedudlpos = 0, condensedudlmag = 0;
        var momentfsupport = 0;

        if(uvlend > uvlstart) condenseduvlpos = 2/3 * (uvlend - uvlstart) + uvlstart;
        else condenseduvlpos = 1/3 * (uvlstart - uvlend) + uvlend;
        console.log(condenseduvlpos);

        condenseduvlmag = 1/2 * Math.abs(uvlend - uvlstart) * (uvlendmag - uvlstartmag);
        console.log(condenseduvlmag);

        condenseduvlbasemag = Math.abs(uvlend - uvlstart)* uvlstartmag;
        console.log(condenseduvlbasemag);

        condenseduvlbasepos = 1/2 * (uvlend + uvlstart);
        console.log(condenseduvlbasepos);

        condensedudlmag = (udlend - udlstart) * udlmag;
        console.log(condensedudlmag,UDLend,udlend,UDLstart,udlstart, parseInt(udlend)+parseInt(udlstart));

        condensedudlpos = (udlend + udlstart) * 1/2;
        console.log(UDLend,UDLstart,udlend,udlstart,condensedudlpos);

        momentfsupport = (fsupportpos - condensedudlpos)*condensedudlmag + (fsupportpos - condenseduvlpos)*condenseduvlmag + (fsupportpos - condenseduvlbasepos)*condenseduvlbasemag + (fsupportpos - pointdist)*pointmag*Math.sin(pointinc);
        console.log(momentfsupport);

        rsupportmag = momentfsupport/(rsupportpos - fsupportpos);
        console.log(rsupportmag);

        fsupportmag = -(rsupportmag + condensedudlmag + condenseduvlbasemag + condenseduvlmag + pointmag*Math.sin(pointinc))

        console.log(rsupportmag,fsupportmag)
    }

    var xValues = [beamLength];
    var yValues = [0];
    var MomentValues = [0]

    for (var x = beamLength; x >= 0 ; x -= 0.0625) {
    xValues.push(x);
    if(x==rsupportpos) CurrentForce += rsupportmag;
    if(x==fsupportpos) CurrentForce += fsupportmag;
    if(x==fixedForcePosition) CurrentForce += fixedForceMagnitude*Math.sin(theta);
    if(x >= UDLstart && x < UDLend) CurrentForce += UDLmagnitude*0.0625;
    if(x >= UVLUDLstart && x < UVLUDLend) CurrentForce += UVLUDLmagnitude*0.0625;
    else if(x < UVLUDLstart && x >= UVLUDLend) CurrentForce += UVLUDLmagnitude*0.0625;
    // if(x >= UVLstart && x < UVLend) CurrentForce += ((x+0.03125) - UVLstart)*((UVLmagnitude)/(UVLend - UVLstart))*0.0625;
    // else if(x >= UVLend && x < UVLstart) CurrentForce += ((x+0.03125) - UVLend)*((UVLmagnitude)/(UVLstart - UVLend))*0.0625;
    if(x >= UVLstart && x < UVLend) CurrentForce += ((x+0.03125) - UVLstart)*((UVLmagnitude)/(UVLend - UVLstart))*0.0625;
    else if(x >= UVLend && x < UVLstart) CurrentForce += (UVLstart-(x+0.03125))*((UVLmagnitude)/(UVLstart - UVLend))*0.0625;
    yValues.push(CurrentForce);
    // console.log(CurrentForce,x);
    CurrentMoment += -CurrentForce*0.0625;
    MomentValues.push(CurrentMoment);
    }

    let shearMin = 0;
    let bendingMax = 0;
    if (fsupportDistVal == 'slider-value') {
        xValues.push(0);
        yValues.push(0);
        MomentValues.push(0);
    }

    yValues.reverse()
    xValues.reverse()
    MomentValues.reverse()

    data = [{
    x: xValues,
    y: yValues,
    mode:"lines"
    }];

    layout = {
    title: "Shear Force Diagram",
    hovermode: true,
    margin: {
        b: 50,
        l: 50,
        r: 20,
        t: 40
    },
    // annotations: [
    //     {
    //     x: 0,
    //     y: shearMin,
    //     xref: 'x',
    //     yref: 'y',
    //     showarrow: true,
    //     text: shearMin,
    //     font: {
    //         family: 'Courier New, monospace',
    //         size: 16,
    //         color: '#ffffff'
    //       },
    //       align: 'center',
    //       arrowhead: 2,
    //       arrowsize: 1,
    //       arrowwidth: 2,
    //       arrowcolor: '#636363',
    //       ax: 20,
    //       ay: -30,
    //       bordercolor: '#c7c7c7',
    //       borderwidth: 2,
    //       borderpad: 4,
    //       bgcolor: '#ff7f0e',
    //       opacity: 0.8
    //     }
    // ],
    xaxis: {
        title: 'Beam Length',
        range: [-1,101],
        fixedrange: true,
        ticks: 'outside',
        dtick: 5
    },
    yaxis: {
        title: 'Shear Force',
        autorange: true,
        fixedrange: true,
    }
    };

    Plotly.newPlot("shear", data, layout, {displayModeBar: false});

    data1 = [{
        x: xValues,
        y: MomentValues,
        mode:"lines"
    }];

    layout1 = {
    title: "Bending Moment Diagram",
    hovermode: true,
    margin: {
        b: 50,
        l: 50,
        r: 20,
        t: 40
    },
    // annotations: [
    //     {
    //     x: 0,
    //     y: bendingMax,
    //     xref: 'x',
    //     yref: 'y',
    //     showarrow: true,
    //     text: bendingMax,
    //     font: {
    //         family: 'Courier New, monospace',
    //         size: 16,
    //         color: '#ffffff'
    //       },
    //       align: 'center',
    //       arrowhead: 2,
    //       arrowsize: 1,
    //       arrowwidth: 2,
    //       arrowcolor: '#636363',
    //       ax: 20,
    //       ay: -30,
    //       bordercolor: '#c7c7c7',
    //       borderwidth: 2,
    //       borderpad: 4,
    //       bgcolor: '#ff7f0e',
    //       opacity: 0.8
    //     }
    // ],
    xaxis: {
        title: 'Beam Length',
        range: [-1,101],
        ticks: 'outside',
        dtick: 5
    },
    yaxis: {
        title: 'Bending Moment',
        autorange: true,
        fixedrange: true
    }
    };

    Plotly.newPlot("bending", data1, layout1, {displayModeBar: false});
});


