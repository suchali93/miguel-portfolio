// http://www.chartjs.org/docs/latest/charts/doughnut.html for usage examples
$(function(){
  var ctx1 = $("#skill-canvas1");
  var ctx2 = $("#skill-canvas2");
  var ctx3 = $("#skill-canvas3");
  var ctx4 = $("#skill-canvas4");

  var data1 = {
    datasets: [{
      label: 'Skill1',
      data: [9, 1],
      backgroundColor: ['#76323f','#fff'],
      borderWidth: 0,
      hoverBackgroundColor: ['#76323f' ,'#fff'],
      hoverBorderWidth: 0 }]
  };
  var data2 = {
    datasets: [{
      label: 'Skill1',
      data: [9, 1],
      backgroundColor: ['#76323f','#fff'],
      borderWidth: 0,
      hoverBackgroundColor: ['#76323f' ,'#fff'],
      hoverBorderWidth: 0 }]
  };
  var data3 = {
    datasets: [{
      label: 'Skill1',
      data: [9, 1],
      backgroundColor: ['#76323f','#fff'],
      borderWidth: 0,
      hoverBackgroundColor: ['#76323f' ,'#fff'],
      hoverBorderWidth: 0 }]
  };
  var data4 = {
    datasets: [{
      label: 'Skill1',
      data: [9, 1],
      backgroundColor: ['#76323f','#fff'],
      borderWidth: 0,
      hoverBackgroundColor: ['#76323f' ,'#fff'],
      hoverBorderWidth: 0 }]
  };

  var options = {
    tooltips: false,
    cutoutPercentage : 70,
    responsive: true,
    maintainAspectRatio: true };

  var chart1 = new Chart(ctx1, {
      type: 'doughnut',
      data: data1,
      options: options
  });
  var chart2 = new Chart(ctx2, {
      type: 'doughnut',
      data: data2,
      options: options
  });
  var chart3 = new Chart(ctx3, {
      type: 'doughnut',
      data: data3,
      options: options
  });
  var chart4 = new Chart(ctx4, {
      type: 'doughnut',
      data: data4,
      options: options
  });
});
