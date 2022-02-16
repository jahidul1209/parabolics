import React, { useEffect, useState } from 'react';

function SvgChart(props) {
    const [chartData, setChartData] = useState([])
    
    useEffect(() => {
    fetch(`https://financialmodelingprep.com/api/v3/historical-chart/1hour/${props.svg}?apikey=9f8bf374d13311bf6527af0ea58ebdb6`)
            .then(res => res.json())
                  .then(data => {
                      const spydata = data.map(d => {
                        var date = new Date(d.date).getTime() / (1000000000)
                          return {
                              time: date,
                              high: d.high,
                          }
                      });
                         setChartData(spydata);   
                  })
      },[])

    return (
        <div>
            <svg viewBox="0 0 500 100" class="chart">
                     
                    <polyline
                       fill="none"
                       stroke="#18d26e"
                       stroke-width="2"
                       points={`${chartData.map((p) => ' ' + p.time + ',' + p.high)}`}
                     />                   
                  </svg>
        </div>
    );
}

export default SvgChart;