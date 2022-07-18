const dataPie = {
  labels: ['JavaScript', 'Python', 'Ruby'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(133, 105, 241)',
        'rgb(164, 101, 241)',
        'rgb(101, 143, 241)',
      ],
      hoverOffset: 4,
    },
  ],
};

const configPie = {
  type: 'pie',
  data: dataPie,
  options: {
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#fff',
          font: {
            family: 'Roboto',
            size: '18',
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.parsed + '%';
          },
        },
      },
    },
  },
};

var chartBar = new Chart(document.getElementById('chartPie'), configPie);
