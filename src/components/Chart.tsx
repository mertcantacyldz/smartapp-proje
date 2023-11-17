import 'chart.js/auto';
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from  'chart.js'
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)
  
  



export default function Chart() {

    const bar_data = {
        labels: ["x","x","x","x","x","x", "x","x","x"],
        datasets: [{
            label: "Number of reviews",
            data: ['26','26','22','16','20','22','16'],
            backgroundColor :'tranparent',
            borderColor: '#ffffff',
            pointBorderColor:'#ffffff',
            tension: 0.5
           
          
        }]

    }

    const options = {
      plugins: {
        legend: {
          display: false, // legend'ı gizle
        },
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
          min:2,
         
          ticks:{
            stepSize: 2,
            
          }
        },
      },
      elements: {
        point: {
          radius: 0, // noktaları gizle
        },
        line: {
          fill: false, // çizgi grafiğinin altındaki alanı doldurmayı devre dışı bırak
          tension: 0, // çizgi grafiğinin düz olmasını sağla
        },
      },
      
    };
   

  return (
    

   
    <div className='class="w-96 h-96 absolute -left-6 top-0 bg-red-300"'>
 <Line   data={bar_data} options={options} />
    </div>

    
     
  )
}
