var fsupportpos = 2.5, rsupportpos = 7.5, fsupportmag = 0, rsupportmag = 0;
var uvlstart = 0, uvlend = 0, uvlstartmag = 0, uvlendmag = 0;
var udlstart = 5, udlend = 6, udlmag = 40;
var pointdist = 0, pointmag =20, pointinc = Math.PI/2;
var beamlength;

var condenseduvlpos = 0, condenseduvlbasepos = 0, condenseduvlmag = 0, condenseduvlbasemag = 0;
var condensedudlpos = 0, condensedudlmag = 0;
var momentfsupport = 0;

if(uvlstartmag > uvlendmag) condenseduvlpos = 1/3 * (uvlend - uvlstart) + uvlstart;
else condenseduvlpos = 2/3 * (uvlend - uvlstart) + uvlstart;

condenseduvlmag = 1/2 * (uvlend - uvlstart) * Math.abs(uvlstartmag - uvlendmag);

condenseduvlbasemag = (uvlend - uvlstart)* Math.min(uvlendmag,uvlstartmag);

condenseduvlbasepos = 1/2 * (uvlend - uvlstart) + uvlstart;

condensedudlmag = (udlend - udlstart) * udlmag;

condensedudlpos = (udlend - udlstart) * 1/2 + udlstart;

momentfsupport = (condensedudlpos - fsupportpos)*condensedudlmag + (condenseduvlpos - fsupportpos)*condenseduvlmag + (condenseduvlbasepos - fsupportpos)*condenseduvlbasemag + (pointdist - fsupportpos)*pointmag*Math.sin(pointinc);

rsupportmag = momentfsupport/(fsupportpos - rsupportpos);

fsupportmag = -(rsupportmag + condensedudlmag + condenseduvlbasemag + condenseduvlmag + pointmag)

console.log(rsupportmag,fsupportmag);






