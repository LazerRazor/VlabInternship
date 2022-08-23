// Beam Length
const beamLength = document.querySelector('#beamLength');

// Point Load
const pointLoad = document.querySelector('#pointLoad');
const pointLoadDist = document.querySelector('#pointLoadDist');
const pointLoadAngle = document.querySelector('#pointLoadAngle');

// Uniformly Distributed Load
const udl = document.querySelector('#udl');
const udlMinDist = document.querySelector('#udlMinDist');
const udlMaxDist = document.querySelector('#udlMaxDist');

// Uniformly Varying Load
const uvlMinVal = document.querySelector('#uvlMinVal');
const uvlMaxVal = document.querySelector('#uvlMaxVal');
const uvlMinValDist = document.querySelector('#uvlMinValDist');
const uvlMaxValDist = document.querySelector('#uvlMaxValDist');

// Couple
const coupleVal = document.querySelector('#coupleVal');
const coupleDist = document.querySelector('#coupleDist');


// CONVERSIONS //

// Converting UDL to Point Load
var udlPointLoad = udl*(udlMaxDist - udlMinDist);
var udlPointLoadDist = (udlMaxDist + udlMinDist)/2;

// Converting UVL to Point Load
var uvlDist, uvlPointLoad, uvlPointLoad1, uvlPointLoadDist, uvlPointLoad1Dist;
// if (uvlMaxValDist > uvlMinValDist) {
uvlDist = Math.abs(uvlMaxValDist - uvlMinValDist);
// } else if (uvlMinValDist > uvlMaxValDist) {
//     uvlDist = uvlMinValDist - uvlMaxValDist;
// }
// if (uvlMinVal == 0) {
//     uvlPointLoad1 = 0
//     uvlPointLoad1Dist = 0
//     if (uvlMaxValDist > uvlMinValDist) {
//         uvlDist = uvlMaxValDist - uvlMinValDist;
//         uvlPointLoad = 0.5*uvlMaxVal*uvlDist;
//         uvlPointLoadDist = uvlMinValDist + ((2/3)*uvlDist);
//     } else if (uvlMinValDist > uvlMaxValDist) {
//         uvlDist = uvlMinValDist - uvlMaxValDist;
//         uvlPointLoad = 0.5*uvlMaxVal*uvlDist;
//         uvlPointLoadDist = uvlMaxValDist + ((1/3)*uvlDist);
//     }
// } else {
uvlPointLoad1 = uvlMinVal*uvlDist;
uvlPointLoad1Dist = (uvlMaxValDist + uvlMinValDist)/2;
if (uvlMaxValDist > uvlMinValDist) {
    uvlDist = uvlMaxValDist - uvlMinValDist;
    uvlPointLoad = 0.5*(uvlMaxVal - uvlMinVal)*uvlDist;
    uvlPointLoadDist = uvlMinValDist + ((2/3)*uvlDist);
} else if (uvlMinValDist > uvlMaxValDist) {
    uvlDist = uvlMinValDist - uvlMaxValDist;
    uvlPointLoad = 0.5*(uvlMaxVal - uvlMinVal)*uvlDist;
    uvlPointLoadDist = uvlMaxValDist + ((1/3)*uvlDist);
}
// }


// CALCULATIONS //
var shearArr = [], bendingArr = [];
var loadPosArr = [pointLoadDist, udlMinDist, udlPointLoadDist, udlMaxDist, uvlMinValDist, uvlMaxValDist, uvlPointLoad1Dist, uvlPointLoadDist];
loadPosArr.sort(function(a,b) {
    return a - b  //Ascending Sort
});

var loadArr = [[pointLoadDist, pointLoad],[udlPointLoadDist,udlPointLoad],[uvlPointLoadDist,uvlPointLoad],[uvlPointLoad1Dist,uvlPointLoad1]];
loadArr.sort(function(a,b) {
    return a[0] - b[0]  //Ascending Sort
});

var loadArr1 = loadArr;
var loadPosArr1 = loadPosArr

var n1 = loadPosArr1.length;
var n2 = loadArr1.length;
var sum = 0;
for (i=(n1-1);i>=0;i--) {
    if (loadPosArr1[i] == udlMinDist || loadPosArr1[i] == udlMaxDist || loadPosArr1[i] == uvlMinValDist || loadPosArr1[i] == uvlMaxValDist) {
        shearArr.push(sum);
    } else {
        for (t=(n2-1);t>=0;t--) {
            if (loadPosArr1[i] == loadArr1[t][0]) {
                sum += loadArr1[t][1];
                loadPosArr1.splice(i,1);
            }
        }
        shearArr.push(sum);
    }
};