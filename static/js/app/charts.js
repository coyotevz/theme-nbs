

function flotchart() {
  var data1 = [
    [1, 43],
    [2, 35],
    [3, 49],
    [4, 31],
    [5, 45],
    [6, 54],
    [7, 52],
    [8, 62],
    [9, 59],
    [10, 66],
    [11, 48],
    [12, 42],
  ];
  var data2 = [
    [1, 18],
    [2, 23],
    [3, 15],
    [4, 26],
    [5, 19],
    [6, 35],
    [7, 41],
    [8, 46],
    [9, 32],
    [10, 34],
    [11, 31],
    [12, 25],
  ];

  var plot = $.plot($("#chart"), [{
    data: data1,
    label: "2012"
  }, {
    data: data2,
    label: "2013"
  }], {
    series: {
      lines: {
        show: true,
        lineWidth: 1,
        fill: true,
        fillColor: {
          colors: [{
            opacity: 0.05
          }. {
            opacity: 0.09
          }]
        }
      },
      points: {
        show: true,
        lineWidth: 2,
        radius: 3
      },
      shadowSize: 0,
      stack: true
    },
    grid: {
      hoverable: true,
      clickable: true,
      tickColor: "#f9f9f9",
      borderWidth: 0
    },
    legend: {
      //show: false,
      labelBoxBorderColor: "#fff"
    },
    colors: ["#94aec4", "#3473a9"],
    xaxis: {
      ticks: [
        [1, "ENE"],
        [2, "FEB"],
        [3, "MAR"],
        [4, "ABR"],
        [5, "MAY"],
        [6, "JUN"],
        [7, "JUL"],
        [8, "AGO"],
        [9, "SEP"],
        [10, "OCT"],
        [11, "NOV"],
        [12, "DIC"]
      ],
      font: {
        size: 12,
        family: "OpenSans,arial,sans-serif",
        variant: "small-caps",
        color: "#9da3a9"
      }
    },
    yaxis : {
      ticks: 3,
      tickDecimals: 0,
      font: {
        size: 12,
        color: "#9da3a9"
      }
    }
  });
}
