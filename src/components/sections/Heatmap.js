import React from 'react'
import { AgChartsReact } from 'ag-charts-react';
import data from '../../utils/heatMapData'


class Heatmap extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      
      options: {
        type: 'hierarchy',

        data ,
        series: [
          {
            type: 'treemap',
            labelKey: 'name',
            sizeKey: 'size',
            colorKey: 'color',
            tooltip: {
              renderer: (params) => {
                return {
                  content: `<b>Change</b>: ${params.datum.colorValue.toFixed(
                    2
                  )}%`,
                };
              },
            },
          },
        ],

        // title: {
        //   text: 'S&P 500 index stocks categorized by sectors and industries.',
        // },
        // subtitle: {
        //   text:
        //     'Area represents market cap. Color represents change from the day before.',
        // },
      },
    };
  }


  componentDidMount(){}

  render() {

    return (
        <div className ="col-md-12">
        <div className ="card py-3 px-3">
            <div className = 'pt-3 pb-2 py-2 px-2  '>
                <h3 style = {{marginBottom:'3px'}}>MARKET OVERVIEW</h3>
                <p style = {{color:'#666666 '}}>Overview of the biggest market cap stocks in each sector.</p>
            </div>
         
                   <AgChartsReact options={this.state.options} id = 'chartreact' />
          
        </div>
</div>


          );
    }
}

export default Heatmap