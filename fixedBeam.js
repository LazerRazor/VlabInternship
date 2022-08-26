var fixedForcePosition = 3, fixedForceMagnitude = 10, theta = 90;
var UDLstart = 10, UDLend = 15, UDLmagnitude = 10;
var UVLstart = 20, UVLend = 30, UVLmagnitude = 7;
var CurrentForce = 0, CurrentMoment = 0;

var xValues = [];
var yValues = [];
var MomentValues = []

for (var x = 100; x >= 0 ; x -= 0.1) {
  xValues.push(x);
  MomentValues.push(CurrentMoment);
  if(x == fixedForcePosition) CurrentForce += fixedForceMagnitude*Math.sin(theta);
  if(x >= UDLstart && x <= UDLend) CurrentForce += UDLmagnitude*0.1;
  if(x >= UVLstart && x <= UVLend) CurrentForce += ((x+0.05) - UVLstart)*((UVLmagnitude)/(UVLend - UVLstart))*0.1;
  else if(x >= UVLend && x <= UVLstart) CurrentForce += ((x+0.05) - UVLend)*((UVLmagnitude)/(UVLstart - UVLend))*0.1;
  yValues.push(-CurrentForce);
  CurrentMoment += CurrentForce*0.1;
}

yValues.reverse()
xValues.reverse()
MomentValues.reverse()

var data = [{
  x: xValues,
  y: yValues,
  mode:"lines"
}];

var layout = {
  title: "Shear Force Diagram",
  annotations: [
    {
      x: 0,
      y: -85,
      xref: 'x',
      yref: 'y',
      showarrow: true,
      text: '-85',
      arrowhead: 7,
      ax: 0,
      ay: -10
    }
  ],
  xaxis: {
    title: 'Beam Length',
    range: [-3,100],
  },
  yaxis: {
    title: 'Shear Force'
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
  annotations: [
    {
      x: 40,
      y: 0,
      xref: 'x',
      yref: 'y',
      showarrow: true,
      text: '0',
      arrowhead: 7,
      ax: 0,
      ay: -10
    }
  ],
  xaxis: {
    title: 'Beam Length',
    range: [-3,100]
  },
  yaxis: {
    title: 'Bending Moment'
  }
};

Plotly.newPlot("bending", data, layout, {displayModeBar: false});