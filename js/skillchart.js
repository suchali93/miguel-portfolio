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

var ctx1 = $("#skill-canvas1");
var ctx2 = $("#skill-canvas2");
var ctx3 = $("#skill-canvas3");
var ctx4 = $("#skill-canvas4");
var ctx5 = $("#skill-canvas5");
var ctx6 = $("#skill-canvas6");

var cpp = 8.5;
var python = 7.5;
var java = 6;
var matlab = 6;
var bash = 6;
var linux = 8;

var allbgcolors = ['#fd6760','#fd6760','#ffa059','#ffa059','#ffc157','#ffc157','#ffd54e','#ffd54e','#fff176','#fff176','#d4e157','#d4e157','#c7db39','#c7db39','#9ccc64','#9ccc64','#66bb6a','#66bb6a','#4db6ac','#4db6ac','#159f92','#159f92'];
var bgcolor = ['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'];

var bgcolor1 = bgcolor.slice();
var datalist1 = [];
for(var i=0; i<2*cpp; i++) {
  datalist1[i] = 0.5;
  bgcolor1[i] = allbgcolors[i];
}
datalist1.push(10-cpp);

var bgcolor2 = bgcolor.slice();
var datalist2 = [];
for(var i=0; i<2*python; i++) {
  datalist2[i] = 0.5;
  bgcolor2[i] = allbgcolors[i];
}
datalist2.push(10-python);

var bgcolor3 = bgcolor.slice();
var datalist3 = [];
for(var i=0; i<2*java; i++) {
  datalist3[i] = 0.5;
  bgcolor3[i] = allbgcolors[i];
}
datalist3.push(10-java);

var bgcolor4 = bgcolor.slice();
var datalist4 = [];
for(var i=0; i<2*matlab; i++) {
  datalist4[i] = 0.5;
  bgcolor4[i] = allbgcolors[i];
}
datalist4.push(10-matlab);

var bgcolor5 = bgcolor.slice();
var datalist5 = [];
for(var i=0; i<2*bash; i++) {
  datalist5[i] = 0.5;
  bgcolor5[i] = allbgcolors[i];
}
datalist5.push(10-bash);

var bgcolor6 = bgcolor.slice();
var datalist6 = [];
for(var i=0; i<2*linux; i++) {
  datalist6[i] = 0.5;
  bgcolor6[i] = allbgcolors[i];
}
datalist6.push(10-linux);

var data1 = {
  datasets: [{
    label: 'C/C++',
    data: datalist1,
    backgroundColor: bgcolor1,
    borderWidth: 0,
    hoverBackgroundColor: bgcolor1,
    hoverBorderWidth: 0 }]
};
var data2 = {
  datasets: [{
    label: 'Python',
    data: datalist2,
    backgroundColor: bgcolor2,
    borderWidth: 0,
    hoverBackgroundColor: bgcolor2,
    hoverBorderWidth: 0 }]
};
var data3 = {
  datasets: [{
    label: 'Java',
    data: datalist3,
    backgroundColor: bgcolor3,
    borderWidth: 0,
    hoverBackgroundColor: bgcolor3,
    hoverBorderWidth: 0 }]
};
var data4 = {
  datasets: [{
    label: 'Matlab',
    data: datalist4,
    backgroundColor: bgcolor4,
    borderWidth: 0,
    hoverBackgroundColor: bgcolor4,
    hoverBorderWidth: 0 }]
};
var data5 = {
  datasets: [{
    label: 'Bash',
    data: datalist5,
    backgroundColor: bgcolor5,
    borderWidth: 0,
    hoverBackgroundColor: bgcolor5,
    hoverBorderWidth: 0 }]
};
var data6 = {
  datasets: [{
    label: 'Linux',
    data: datalist6,
    backgroundColor: bgcolor6,
    borderWidth: 0,
    hoverBackgroundColor: bgcolor6,
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
  tooltips: false,
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

var chart1 = new Chart(ctx1, {
    type: 'doughnut',
    data: data1,
    options: options
});
chart1.options.elements.center.text = data1.datasets[0].label;

var chart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: data2,
    options: options
});
chart2.options.elements.center.text = data2.datasets[0].label;

var chart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: data3,
    options: options
});
chart3.options.elements.center.text = data3.datasets[0].label;

var chart4 = new Chart(ctx4, {
    type: 'doughnut',
    data: data4,
    options: options
});
chart4.options.elements.center.text = data4.datasets[0].label;

var chart5 = new Chart(ctx5, {
    type: 'doughnut',
    data: data5,
    options: options
});
chart5.options.elements.center.text = data5.datasets[0].label;

var chart6 = new Chart(ctx6, {
    type: 'doughnut',
    data: data6,
    options: options
});
chart6.options.elements.center.text = data6.datasets[0].label;

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
