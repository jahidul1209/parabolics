import React from 'react'
import ReactApexChart from 'react-apexcharts'

class Heatmap extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    
      series: [
        {
          data: []
        }
      ],
      options: {
        legend: {
          show: false
        },
        chart: {
          height: 500,
          type: 'treemap'
        },
        title: {
          text: ''
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: '10px',
          },
          formatter: function(text, op) {
            return [text, op.value]
          },
          offsetY: -5
        },
        plotOptions: {
          treemap: {
            enableShades: true,
            shadeIntensity: 0.5,
            reverseNegativeShade: true,
            colorScale: {
              ranges: [
                {
                  from: -10, 
                  to: -5,
                  color: '#ee4758'
                },
                {
                  from: -5, 
                  to: 0,
                  color: '#a30000'
                },
          
               
                {
                  from: 0.001,
                  to: 5,
                  color: '#0aa54a'
                }
              ]
            }
          }
        }
      },
    
    
    };
  }

  componentDidMount(){
    fetch('https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=9f8bf374d13311bf6527af0ea58ebdb6')
    .then(res=>res.json())
    .then(response => {
      const newSeries = [];
      const getData = response.map(d => {
        return{
          x:d.symbol,
          y:d.change
        }
      })
      newSeries.push({
        data: getData,
      });
      this.setState({
        series: newSeries,
        options: {
          ...this.state.options,
        }
      });
    })
  }

  render() {

    return (
        <div className ="col-md-12">
        <div className ="card py-3 px-3">
            <div className = 'pt-3 pb-2 py-2 px-2  '>
                <h3 style = {{marginBottom:'3px'}}>MARKET OVERVIEW</h3>
                <p style = {{color:'#666666 '}}>Overview of the biggest market cap stocks in each sector.</p>
            </div>
            <div id="chart">
                  <ReactApexChart options={this.state.options} series={this.state.series} type="treemap"  height={500} />
            </div>
        </div>
</div>


          );
    }
}

export default Heatmap