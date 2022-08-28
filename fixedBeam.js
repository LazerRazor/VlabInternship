var fixedForcePosition = pointLoadDist, fixedForceMagnitude = pointLoad, theta = 90;
var UDLstart = udlMinDist, UDLend = udlMaxDist, UDLmagnitude = udl;
var UVLstart = uvlMinValDist, UVLend = uvlMaxValDist, UVLmagnitude = (uvlMaxVal-uvlMinVal);
var UVLUDLstart = uvlMinValDist, UVLUDLend = uvlMaxValDist, UVLUDLmagnitude = uvlMinVal;
var CurrentForce = 0, CurrentMoment = 0;

// Beam Length
import { beamLength } from "./simulation";

// Point Load
import { pointLoad } from "./simulation";
import { pointLoadDist } from "./simulation";

// Uniformly Distributed Load
import { udl } from "./simulation";
import { udlMaxDist } from "./simulation";
import { udlMinDist } from "./simulation";

// Uniformly Varying Load
import { uvlMaxVal } from "./simulation";
import { uvlMinVal } from "./simulation";
import { uvlMaxValDist } from "./simulation";
import { uvlMinValDist } from "./simulation";

var xValues = [];
var yValues = [];
var MomentValues = []

for (var x = beamLength; x >= 0 ; x -= 0.1) {
  xValues.push(x);
  MomentValues.push(CurrentMoment);
  if(x == fixedForcePosition) CurrentForce += fixedForceMagnitude*Math.sin(theta);
  if(x >= UDLstart && x <= UDLend) CurrentForce += UDLmagnitude*0.1;
  if(x >= UVLUDLstart && x <= UVLUDLend) CurrentForce += UVLUDLmagnitude*0.1;
  else if(x <= UVLUDLstart && x >= UVLUDLend) CurrentForce += UVLUDLmagnitude*0.1;
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