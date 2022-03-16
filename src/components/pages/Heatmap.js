import React from 'react'
import { AgChartsReact } from 'ag-charts-react';
import data from '../../utils/heatMapData'
import { Container } from 'react-bootstrap';

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

        title: {
          text: 'S&P 500 index stocks categorized by sectors and industries.',
        },
        subtitle: {
          text:
            'Area represents market cap. Color represents change from the day before.',
        },
      },
    };
  }


  componentDidMount(){}

  render() {

    return (
          
        
                <AgChartsReact options={this.state.options} id = 'chartreact' />
  
           

          );
    }
}

export default Heatmap