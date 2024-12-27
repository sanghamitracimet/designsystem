export  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  export const noGridOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        position: 'top',
      },
    scales: {
        
        x: {
           
          grid: {
            display: false,
          },
        },
        y: {
            
          grid: {
            display: false,
          },
        },
      },
    
  }

  export const noAxisOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        position: 'top',
      },
    scales: {
        
        x: {
            display: false,
          grid: {
            display: false,
          },
        },
        y: {
            display: false,
          grid: {
            display: false,
          },
        },
      },
    
  }

export const lineChartData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Revenue",
      data: [100, 200, 150, 300, 250],
      fill: true,
      borderColor: 'rgb(75, 192, 100, 0.8)',
      backgroundColor: 'transparent',
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 2
    },
    {
        fill: true,
        label: "Visitors",
        data: [220, 55, 370, 80, 180],
        // backgroundColor: "rgba(210, 214, 222, 1)",
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'transparent',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0
      },
  ],
};

export const areaChartData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      fill: true,
      label: "Visitors",
      data: [220, 50, 370, 80, 180],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.4,
      borderWidth: 2,
      pointRadius: 0
    },
    {
        fill: true,

        label: "Revenue",
        data: [100, 200, 150, 300, 250],
        borderColor: 'rgb(75, 192, 100)',
        backgroundColor: 'rgba(45, 152, 102, 0.4)',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0
      },
  ],
};

export const donutChartData = {
    labels: [
      "Chrome",
      "Safari",
      "Firefox",
      "Edge",
      "Opera",
      "Others",
      
    ],
    datasets: [
      {
        label: "Browser Market Share",
        data: [35, 20, 25, 20, 15, 25],
        backgroundColor: [
          "rgb(171 214 194)",
          "rgb(54, 162, 235)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(255, 159, 64)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 0,
        
      },
    ],
  };
  

export const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Electronics",
        data: [ 300, 400, 200, 500, 300, 600, 200,  ], 
        borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 0,
      },
      {
        label: "Digital Goods", 
        data: [ 250, 550, 350, 650, 150, 450,  650, ],
        borderColor: 'rgb(75, 192, 100)',
        backgroundColor: 'rgba(45, 152, 102, 0.4)',
        borderWidth: 0,
      },
    ],
  };
  

export const pieChartData = {
  labels: ["Red", "Green", "Blue"],
  datasets: [
    {
      label: "Color Distribution",
      data: [40, 30, 30],
      backgroundColor: ["red", "green", "blue"],
      borderWidth: 0,
    },
  ],
};

export const lineChartOptions = [];
