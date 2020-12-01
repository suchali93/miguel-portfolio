// http://www.chartjs.org/docs/latest/charts/doughnut.html for usage examples
Chart.pluginService.register({
  beforeDraw: function (chart) {
    if (chart.config.options.elements.center) {
      //Get ctx from string
      var ctx = chart.chart.ctx;

      //Get options from the center object in options
      var centerConfig = chart.config.options.elements.center;
      var fontStyle = centerConfig.fontStyle || 'Arial';
      var txt = centerConfig.text;
      var color = centerConfig.color || '#000';
      var sidePadding = centerConfig.sidePadding || 20;
      var sidePaddingCalculated = (sidePadding/100) * (chart.innerRadius * 2)
      //Start with a base font of 30px
      ctx.font = "30px " + fontStyle;

      //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
      var stringWidth = ctx.measureText(txt).width;
      var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

      // Find out how much the font can grow in width.
      var widthRatio = elementWidth / stringWidth;
      var newFontSize = Math.floor(30 * widthRatio);
      var elementHeight = (chart.innerRadius * 2);

      // Pick a new font size so it will not be larger than the height of label.
      var fontSizeToUse = Math.min(newFontSize, elementHeight);

      //Set font settings to draw it correctly.
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
      var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
      ctx.font = fontSizeToUse+"px " + fontStyle;
      ctx.fillStyle = color;

      //Draw text in center
      ctx.fillText(txt, centerX, centerY);
    }
  }
});

var ctxCpp = $("#skill-canvas-cpp");
var ctxPython = $("#skill-canvas-python");
var ctxJava = $("#skill-canvas-java");
var ctxMatlab = $("#skill-canvas-matlab");
var ctxBash = $("#skill-canvas-bash");
var ctxLinux = $("#skill-canvas-linux");

var cpp = 8;
var python = 8;
var java = 7;
var matlab = 5;
var bash = 7;
var linux = 8;

var allbgcolors = ['#fd676095','#fd676095','#ffa05995','#ffa05995','#ffc15795','#ffc15795','#ffd54e95','#ffd54e95','#c7db3995','#c7db3995','#9ccc6495','#9ccc6495','#66bb6a95','#66bb6a95','#4db68995','#4db68995','#15b49395','#15b49395','#129d7595','#129d7595'];
var bgcolor = ['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'];

var bgcolorCpp = bgcolor.slice();
var datalistCpp = [];
for(var i=0; i<2*cpp; i++) {
  datalistCpp[i] = 0.5;
  bgcolorCpp[i] = allbgcolors[i];
}
datalistCpp.push(10-cpp);

var bgcolorPython = bgcolor.slice();
var datalistPython = [];
for(var i=0; i<2*python; i++) {
  datalistPython[i] = 0.5;
  bgcolorPython[i] = allbgcolors[i];
}
datalistPython.push(10-python);

var bgcolorJava = bgcolor.slice();
var datalistJava = [];
for(var i=0; i<2*java; i++) {
  datalistJava[i] = 0.5;
  bgcolorJava[i] = allbgcolors[i];
}
datalistJava.push(10-java);

var bgcolorMatlab = bgcolor.slice();
var datalistMatlab = [];
for(var i=0; i<2*matlab; i++) {
  datalistMatlab[i] = 0.5;
  bgcolorMatlab[i] = allbgcolors[i];
}
datalistMatlab.push(10-matlab);

var bgcolorBash = bgcolor.slice();
var datalistBash = [];
for(var i=0; i<2*bash; i++) {
  datalistBash[i] = 0.5;
  bgcolorBash[i] = allbgcolors[i];
}
datalistBash.push(10-bash);

var bgcolorLinux = bgcolor.slice();
var datalistLinux = [];
for(var i=0; i<2*linux; i++) {
  datalistLinux[i] = 0.5;
  bgcolorLinux[i] = allbgcolors[i];
}
datalistLinux.push(10-linux);

var dataCpp = {
  datasets: [{
    label: 'C/C++',
    data: datalistCpp,
    backgroundColor: bgcolorCpp,
    borderWidth: 0,
    hoverBackgroundColor: bgcolorCpp,
    hoverBorderWidth: 0 }]
};
var dataPython = {
  datasets: [{
    label: 'Python',
    data: datalistPython,
    backgroundColor: bgcolorPython,
    borderWidth: 0,
    hoverBackgroundColor: bgcolorPython,
    hoverBorderWidth: 0 }]
};
var dataJava = {
  datasets: [{
    label: 'Java',
    data: datalistJava,
    backgroundColor: bgcolorJava,
    borderWidth: 0,
    hoverBackgroundColor: bgcolorJava,
    hoverBorderWidth: 0 }]
};
var dataMatlab = {
  datasets: [{
    label: 'Matlab',
    data: datalistMatlab,
    backgroundColor: bgcolorMatlab,
    borderWidth: 0,
    hoverBackgroundColor: bgcolorMatlab,
    hoverBorderWidth: 0 }]
};
var dataBash = {
  datasets: [{
    label: 'Bash',
    data: datalistBash,
    backgroundColor: bgcolorBash,
    borderWidth: 0,
    hoverBackgroundColor: bgcolorBash,
    hoverBorderWidth: 0 }]
};
var dataLinux = {
  datasets: [{
    label: 'Linux',
    data: datalistLinux,
    backgroundColor: bgcolorLinux,
    borderWidth: 0,
    hoverBackgroundColor: bgcolorLinux,
    hoverBorderWidth: 0 }]
};

// var data8 = {
//   datasets: [{
//     label: 'Linux',
//     data: [9, 1],
//     backgroundColor: ['#76323f','#fff'],
//     borderWidth: 0,
//     hoverBackgroundColor: ['#76323f' ,'#fff'],
//     hoverBorderWidth: 0 }]
// };

var options = {
  tooltips: {
    enabled: false
  },
  cutoutPercentage : 70,
  responsive: true,
  maintainAspectRatio: true,
  elements: {
    center: {
      color: '#3c3c3c', //Default black
      fontStyle: 'Montserrat', //Default Arial
      sidePadding: 0 //Default 20 (as a percentage)
    }
  }
};

var chartCpp = new Chart(ctxCpp, {
    type: 'doughnut',
    data: dataCpp,
    options: options
});
chartCpp.options.elements.center.text = dataCpp.datasets[0].label;

var chartPython = new Chart(ctxPython, {
    type: 'doughnut',
    data: dataPython,
    options: options
});
chartPython.options.elements.center.text = dataPython.datasets[0].label;

var chartJava = new Chart(ctxJava, {
    type: 'doughnut',
    data: dataJava,
    options: options
});
chartJava.options.elements.center.text = dataJava.datasets[0].label;

var chartMatlab = new Chart(ctxMatlab, {
    type: 'doughnut',
    data: dataMatlab,
    options: options
});
chartMatlab.options.elements.center.text = dataMatlab.datasets[0].label;

var chartBash = new Chart(ctxBash, {
    type: 'doughnut',
    data: dataBash,
    options: options
});
chartBash.options.elements.center.text = dataBash.datasets[0].label;

var chartLinux = new Chart(ctxLinux, {
    type: 'doughnut',
    data: dataLinux,
    options: options
});
chartLinux.options.elements.center.text = dataLinux.datasets[0].label;

// var chart7 = new Chart(ctx7, {
//     type: 'doughnut',
//     data: data7,
//     options: options
// });
// chart7.options.elements.center.text = data7.datasets[0].label;

// var chart8 = new Chart(ctx8, {
//     type: 'doughnut',
//     data: data8,
//     options: options
// });
// chart8.options.elements.center.text = data8.datasets[0].label;
