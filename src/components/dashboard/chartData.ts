
export const gridOptions = {
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
            display: true,
          },
        },
      },
    
  }
  
  export const salesGraphChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
    datasets: [
      {
          fill: true,
          label: "Visitors",
          data: [100, 130, 120, 180, 140, 220, 200, 400, 270, 300],
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'transparent',
          tension: 0,
          borderWidth: 2,
          pointRadius: 3
        }
    ],
  };
  