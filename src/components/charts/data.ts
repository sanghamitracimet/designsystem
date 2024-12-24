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
      borderColor: "#D6CFB4",
      backgroundColor: 'transparent',
      tension: 0.4,
      pointRadius: 0
    },
    {
        fill: true,
        label: "Visitors",
        data: [220, 50, 370, 80, 180],
        borderColor: '#5DB996',
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
      "IE", 
      "Fire Fox", 
      "Safari", 
      "Opera", 
      "Navigator",
      
    ],
    datasets: [
      {
        label: "Colors Distribution",
        data: [
          50, 25, 25, 80, 120, 
          150, 170, 190, 210, 250,
        ],
        backgroundColor: [
          "rgb(245 105 84)", 
          "rgb(0 166 90)", 
          "rgb(243 156 18)", 
          "rgb(0 192 239)", 
          "rgb(60 141 188)", 
          "rgb(210 214 222)",   
          "rgb(210 214 222)",   
          
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
        backgroundColor: "rgba(79, 152, 195, 1)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 0,
      },
      {
        label: "Digital Goods", 
        data: [ 250, 550, 350, 650, 150, 450,  650, ],
        backgroundColor: "rgba(210, 214, 222, 1)",
        borderColor: "rgba(255, 99, 132, 1)",
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
