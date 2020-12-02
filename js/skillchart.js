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

// Keep this in the order that they should show on the website
const skills = ['cpp', 'python', 'java', 'bash', 'linux', 'matlab'];

const skillDetails = {
  'cpp': {
    label: 'C/C++',
    id: 'skill-canvas-cpp',
    score: 8, // out of 10
  },
  'python': {
    label: 'Python',
    id: 'skill-canvas-python',
    score: 8, // out of 10
  },
  'java': {
    label: 'Java',
    id: 'skill-canvas-java',
    score: 7, // out of 10
  },
  'bash': {
    label: 'Bash',
    id: 'skill-canvas-bash',
    score: 7, // out of 10
  },
  'linux': {
    label: 'Linux',
    id: 'skill-canvas-linux',
    score: 7, // out of 10
  },
  'matlab': {
    label: 'Matlab',
    id: 'skill-canvas-matlab',
    score: 5, // out of 10
  },
}

// 10 colours
var allbgcolors = ['#fd676095','#ffa05995','#ffc15795','#ffd54e95','#c7db3995','#9ccc6495','#66bb6a95','#4db68995','#15b49395','#129d7595'];
var bgcolor = ['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'];

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

skills.map((skill) => {
  const skillScore = skillDetails[skill].score;
  const skillColors = [...allbgcolors].splice(0, skillScore).concat(bgcolor);

  const datalist = [...new Array(skillScore).fill(1), 10-skillScore];
  var data = {
    datasets: [{
      label: skillDetails[skill].label,
      data: datalist,
      backgroundColor: skillColors,
      borderWidth: 0,
      hoverBackgroundColor: skillColors,
      hoverBorderWidth: 0 
    }]
  };
  
  var chartCpp = new Chart($(`#${skillDetails[skill].id}`), {
      type: 'doughnut',
      data: data,
      options: options, 
  });
  chartCpp.options.elements.center.text = data.datasets[0].label;
});