import moment from 'moment';

const current = moment();
var today = current.format("MMM DD");

export const data = {
  labels: [ current.subtract(6, "day").format("MMM DD"), current.add(1, "day").format("MMM DD"), current.add(1, "day").format("MMM DD"), current.add(1, "day").format("MMM DD"), current.add(1, "day").format("MMM DD"), current.add(1, "day").format("MMM DD"), today ],
  datasets: [
    {
      label: 'This week',
      backgroundColor: '#438397',
      data: [18, 5, 19, 27, 29, 19, 20]
    },
    {
      label: 'Last week',
      backgroundColor: '#C0C0C0',
      data: [11, 20, 12, 29, 30, 25, 13]
    }
  ]
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  legend: { display: false },
  cornerRadius: 20,
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#444b58',
    titleFontColor: 'white',
    bodyFontColor: 'white',
    footerFontColor: 'white'
  },
  layout: { padding: 0 },
  scales: {
    xAxes: [
      {
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        ticks: {
          fontColor: 'white'
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: 'white',
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: 'black',
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: 'black'
        }
      }
    ]
  }
};
