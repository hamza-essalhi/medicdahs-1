import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const generateRandomData = () => {
    const data = [];
    for (let i = 0; i < 12; i++) {
      data.push(Math.floor(Math.random() * 301)); // Generate random value between 0 and 300
    }
    return data;
  };
  
  const MyChart = ({ title }) => {
    const chartRef = useRef(null);
  
    useEffect(() => {
      if (chartRef && chartRef.current) {
        const randomData = generateRandomData();
  
        const myChart = new Chart(chartRef.current, {
          type: 'line', // Set your chart type here
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
              {
                label: title,
                data: randomData,
                fill: false,
                borderColor: '#1F6E8C', // Set your line color here
              },
            ],
          },
          options: {
            maintainAspectRatio: false, // Disable aspect ratio to set custom height and width
            responsive: true,
            height: 300, // Set your desired height here
            width: 400, // Set your desired width here
            plugins: {
              legend: {
                display: true,
              },
              title: {
                display: true,
                text: title,
              },
            },
            scales: {
              x: {
                type: 'category',
              },
              y: {
                beginAtZero: true,
              },
            },
            cubicInterpolationMode: 'monotone', // Set to 'monotone' for smooth interpolation
            interaction: {
                intersect: false,
                mode: 'index',
              },
              tooltips: {
                mode: 'index',
              },
          },
        });
  
        // Optionally, you can return a cleanup function to destroy the chart when the component unmounts
        return () => myChart.destroy();
      }
    }, [title]);
    return (

        <div className="  flex flex-wrap  chart backdrop-blur-sm p-4 mt-20  mx-3 ">
            <div className='main-row flex md:flex-wrap lg:flex-wrap md:justify-between lg:justify-between items-center w-full   sm:flex-nowrap '>
                <h1 className='title-font text-2xl font-bold '>{title}</h1>
                <div className='flex lg:justify-between row sm:justify-end'>
                    <span className='m-3'>Weekly</span>
                    <span className='m-3'>Monthly</span>
                    <span className='m-3'>Yearly</span>
                </div>
                
            </div>
            <canvas ref={chartRef} className='canvas-row !sm:h-52 md:w-1/3 lg:w-2/4 !lg:h-2/4' />
           
        </div>

    );
};

export default MyChart;
