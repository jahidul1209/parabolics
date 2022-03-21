import React, { useEffect, useRef, useState, useCallback } from 'react';
import { createChart ,CrosshairMode } from 'lightweight-charts';

function IntradayPriceChart(props) {
  const previus = new Date();
  previus.setDate(previus.getDate() - 360);
  const lastYear = previus.toISOString().slice(0, 10)
  var localfdate = JSON.parse( localStorage.getItem('propsDate'))

    if(localfdate){
        localfdate = localfdate
    }else{
        localfdate  = lastYear
    }
  const [updateDate, setUpdateDate] = useState(localfdate); 

  let today = new Date().toISOString().slice(0, 10)

  const chartRefSPY = useRef();
    const chartRefQQQ = useRef();
    const chartRefIWM = useRef();

    const chartDesign = {
      width: 450,
      height: 360,
      layout: {
        backgroundColor: '#060916',
        textColor: 'rgba(255, 255, 255, 0.9)',
      },
      grid: {
        vertLines: {
          color: "rgba(42, 46, 57, 0.2)"
        },
        horzLines: {
          color: "rgba(42, 46, 57, 0.2)"
        },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      priceScale: {
        borderColor: '#485c7b',
      },
      timeScale: {
        borderColor: '#485c7b',
      },
    }
    const candleDesign = {
      upColor: '#4bffb5',
      IWMnColor: '#ff4976',
      borderIWMnColor: '#ff4976',
      borderUpColor: '#4bffb5',
      wickIWMnColor: '#838ca1',
      wickUpColor: '#838ca1',
  }


     //   https://financialmodelingprep.com/api/v3/quote/SPY,QQQ,IWM?apikey=9f8bf374d13311bf6527af0ea58ebdb6
      function init() {

           const chartSPY = createChart(chartRefSPY.current, chartDesign);
           const chartQQQ = createChart(chartRefQQQ.current, chartDesign);
           const chartIWM = createChart(chartRefIWM.current, chartDesign);
           const candleSeriesSPY = chartSPY.addCandlestickSeries(candleDesign);
           const candleSeriesQQQ = chartQQQ.addCandlestickSeries(candleDesign);
           const candleSeriesIWM = chartIWM.addCandlestickSeries(candleDesign);
          
          // SPY INDEX
             fetch(`https://api.polygon.io/v2/aggs/ticker/SPY/range/1/day/${updateDate}/${today}?adjusted=false&sort=asc&apiKey=Wppvqc9U9theH78gqNfSvyEb5exNhmZQ`)
              .then(res => res.json())
                  .then(data => {
                      const spydata = data.results.map(d => {
                        var date = new Date(d.t).getTime() / (1000)
                          return {
                              time: date,
                              open: d.o,
                              high: d.h,
                              low: d.l,
                              close: d.c,
                          }
                      });
                          candleSeriesSPY.setData(spydata);  
                      
                  })
                  .catch(err => console.error(err))
         
         // QQQ INDEX

           fetch(`https://api.polygon.io/v2/aggs/ticker/QQQ/range/1/day/${updateDate}/${today}?adjusted=true&sort=asc&apiKey=Wppvqc9U9theH78gqNfSvyEb5exNhmZQ`)
            .then(res => res.json())
                .then(data => {
                    const qqqdata = data.results.map(d => {
                      var date = new Date(d.t).getTime() / (1000)
                        return {
                            time: date,
                            open: d.o,
                            high: d.h,
                            low: d.l,
                            close: d.c,
                        }
                    });
                        candleSeriesQQQ.setData(qqqdata);
                           
                })
                .catch(err => console.error(err))

     //IWM INDEX

           fetch(`https://api.polygon.io/v2/aggs/ticker/IWM/range/1/day/${updateDate}/${today}?adjusted=true&sort=asc&apiKey=Wppvqc9U9theH78gqNfSvyEb5exNhmZQ`)
            .then(res => res.json())
                .then(data => {
                    const IWMdata = data.results.map(d => {
                      var date = new Date(d.t).getTime() / (1000)
                        return {
                            time: date,
                            open: d.o,
                            high: d.h,
                            low: d.l,
                            close: d.c,
                        }
                    });
                        candleSeriesIWM.setData(IWMdata);
                        
                })
                .catch(err => console.error(err))
      }



     useEffect(() => {  
          if(props.calender !== today){
                localStorage.setItem('propsDate', JSON.stringify(props.calender)); 
            
                setUpdateDate(localfdate)
                if(localfdate){
                  window.location.reload(false);    
                }     
          }   
            init()       
       
    }, [chartRefSPY.current, chartRefQQQ.current, chartRefIWM.current])

    return (
        <div>
         <section class="pt-0">
          <div class="container-fluid">
            <div class="row gy-4">
              <div class="col-md-4 ">
                <div class="card">
                  <div class="card-body">
                    <div className = 'pb-2'>
                        <h3 style = {{marginBottom:'0px'}}> SPY INDEX</h3>
                        <p style = {{color:'#666666 '}}>Intraday price chart</p>
                    </div>
                      <div ref={chartRefSPY} ></div> 
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card">
                  <div class="card-body">
                    <div className = 'pb-2'>
                        <h3 style = {{marginBottom:'0px'}}> QQQ INDEX</h3>
                        <p style = {{color:'#666666 '}}>Intraday price chart</p>
                    </div>
                    <div ref={chartRefQQQ}></div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card">
                  <div class="card-body">
                    <div className = 'pb-2'>
                        <h3 style = {{marginBottom:'0px'}}>IWM INDEX</h3>
                        <p style = {{color:'#666666 '}}>Intraday price chart</p>
                    </div>
                    <div ref={chartRefIWM}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </section>
        </div>
    );
}

export default IntradayPriceChart;

