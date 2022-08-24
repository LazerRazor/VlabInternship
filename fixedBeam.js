var exp = "x + 17";

var fixedForcePosition = 3, fixedForceMagnitude = 10, theta = 90;
var UDLstart = 10, UDLend = 15, UDLmagnitude = 10;
var UVLstart = 20, UVLend = 30, UVLmagnitude = 7;
var CurrentForce = 0, CurrentMoment = 0;

var xValues = [];
var yValues = [];
var MomentValues = []

for (var x = 100; x  > 0 ; x -= 1) {
  xValues.push(x);
  MomentValues.push(CurrentMoment); 
  if(x == fixedForcePosition) CurrentForce += fixedForceMagnitude*Math.sin(theta);
  if(x >= UDLstart && x <= UDLend) CurrentForce += UDLmagnitude;
  if(x >= UVLstart && x <= UVLend) CurrentForce += (x - UVLstart)*((UVLmagnitude)/(UVLend - UVLstart));
  yValues.push(-CurrentForce);
  CurrentMoment += CurrentForce;
}

yValues.reverse()
xValues.reverse()
MomentValues.reverse()

var data = [{
  x: xValues,
  y: yValues,
  mode:"lines"
}];

var layout = {title: "Shear Force Diagram"};

Plotly.newPlot("shear", data, layout);

var data = [{
    x: xValues,
    y: MomentValues,
    mode:"lines"
  }];

var layout = {title: "Bending Moment Diagram"};

Plotly.newPlot("bending", data, layout);