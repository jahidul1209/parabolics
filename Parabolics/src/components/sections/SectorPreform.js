import React , { useState, useEffect} from 'react';


import Chart from 'react-apexcharts'
import { renderMatches } from 'react-router-dom';
const  SectorPreform =()=> {
  const [category, setCategory] = useState([])
  const [data, setData] = useState([])

 function fetchData(){
      const sector = [];
      const percentage = [];

      fetch(`https://financialmodelingprep.com/api/v3/etf-sector-weightings/SPY?apikey=9f8bf374d13311bf6527af0ea58ebdb6`)
      .then(response => response.json())

      .then(response =>{
        response.map(item => {
            percentage.push(item.weightPercentage);
            sector.push(item. sector)
          })
          setData (percentage)
          setCategory(sector )
      }).catch(e => {
          alert(e);
      })
  }

  useEffect(() => {
      fetchData()
  }, []);

    return (

      <div class="card py-3 px-3">
      <div className = 'pt-3 pb-2 py-2 px-2  '>
         <h3 style = {{marginBottom:'3px'}}>SECTOR PERFORMANCE</h3>
         <p style = {{color:'#666666 '}}>Data includes pre-market & post-market movers as well. Stars are gappers.</p>
      </div>
  
          <Chart 
              options={{
                chart: {
                  type: 'bar',
                  height: 440
                },
               
                stroke: {
                  width: 0,
                  curve: "smooth"
                },
                fill: {
                  opacity: 1
                },
                plotOptions: {
                  bar: {
                    borderRadius: 2,
                    horizontal: true,
                  }
                },
                colors: [function({ value }) {
                  if (value < 0) {
                      return '#ee4758'
                  } else {
                      return "#18d26e"
                  }
                }],
              
                borderColor:['red'],

                dataLabels: {
                  enabled: false
                },
                responsive: [{
                  breakpoint: 480,
                  options: {
                    chart: {
                      width: 200
                    },
                    legend: {
                      position: 'bottom'
                    }
                  }
                }],
                xaxis: {
                  categories: category,
                }
              }
            } 

                series={[{
                  
                  name: 'Changes',
                  data: data,
                }]} type="bar" height={440}
            />
    </div>
         
    )
}

 export default SectorPreform

// import React, { PureComponent } from 'react';
// import {
//   BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
// } from 'recharts';

// const data = [
//   {
//     name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
//   },
//   {
//     name: 'Page B', uv: -3000, pv: 1398, amt: 2210,
//   },
//   {
//     name: 'Page C', uv: -2000, pv: -9800, amt: 2290,
//   },
//   {
//     name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
//   },
//   {
//     name: 'Page E', uv: -1890, pv: 4800, amt: 2181,
//   },
//   {
//     name: 'Page F', uv: 2390, pv: -3800, amt: 2500,
//   },
//   {
//     name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//   },
// ];

// export default class SectorPreform extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q68cz43w/';

//   render() {
//     console.log(data)
//     return (
//       <BarChart 
//       width={500}
//       height={300}
//       data={data}
//       indexAxis = 'y'
//       margin={{
//         top: 5, right: 30, left: 20, bottom: 5,
//       }}
//     >
//       <CartesianGrid strokeDasharray=" 5 90 " />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <ReferenceLine x={0} stroke="#000" />
//       <Bar
//         dataKey='uv'
//     >
//         {data.map((datum, entry, index) => (
//             <Cell
//                 key={`cell-${index}`}
//                 fill={
//                     datum.uv > 0
//                         ? 'yellow'
//                         : 'red'
//                 }
//             />
//         ))}
//     </Bar>
//     </BarChart>
//     );
//   }
// }
