import React , { useState, useEffect} from 'react';


import Chart from 'react-apexcharts'
import { renderMatches } from 'react-router-dom';
const  SectorPreform =()=> {
  const [category, setCategory] = useState([])
  const [data, setData] = useState([])

 function fetchData(){
      const sector = [];
      const percentage = [];

      fetch(`https://financialmodelingprep.com/api/v3/sectors-performance?apikey=9f8bf374d13311bf6527af0ea58ebdb6`)
      .then(response => response.json())

      .then(response =>{
        response.map(item => {
            percentage.push(item.changesPercentage);
            sector.push(item. sector)
         })
          setData (percentage)
          setCategory(sector )
      }).catch(e => {
          console.log(e);
      })
  }

  useEffect(() => {
      fetchData()
  }, []);

    return (

      <div className="card py-3 px-3">
      <div className = 'pt-3 pb-2 py-2 px-2  '>
         <h3 style = {{marginBottom:'3px'}}>SECTOR PERFORMANCE</h3>
         {/* <p style = {{color:'#666666 '}}>Data includes pre-market & post-market movers as well. Stars are gappers.</p> */}
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
                }]} type="bar" height={450}
            />
    </div>
         
    )
}

 export default SectorPreform
