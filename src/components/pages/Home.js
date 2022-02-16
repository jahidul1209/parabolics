import React, {Component } from 'react';

import SectorPreform from '../sections/SectorPreform';
import IntradayPriceChart from '../sections/IntradayPriceChart';
import BiggestLosser from '../sections/BiggestLosser';
import BiggestGainer from '../sections/BiggestGainer';
import MarketIndex from '../sections/MarketIndex';
import StockNews from '../sections/StockNews';
import UpcommingEarn from '../sections/UpcommingEarn';
import InsiderTransactions from '../sections/InsiderTransactions';
import MarketSummary from '../sections/MarketSummary';
import SignalTracking from '../sections/SignalTracking';

const today = new Date().toISOString().slice(0, 10)
class Home extends Component {

      constructor(props) {
        super(props);
        this.state = {
          calend: today,

        };
      }
       handleChange = (event) =>{
             event.preventDefault();
            this.setState({calend: event.target.value});
         } 

    render() {
      return (   
        <div>
        <div className="bg-dash-dark-2 py-4">
              <div className="container-fluid flox">
                 <h2 className="h5 mb-0">Stocks</h2>
                    <level ><span style ={{fontWeight:'700' , marginRight:'10px'}}>Form:</span>
                      <input type="date" value={this.state.calend }  onChange={this.handleChange} className='forontrol'/>
                    </level>
         </div>
       </div>
      <MarketSummary/>
     {/* ---------------Intraday Price Chart-------------- */}
     <IntradayPriceChart/>
      {/* BIGGEST GAINERS  & BIGGEST LOSERS */}
      <section class="pt-0">
        <div class="container-fluid">
          <div class="row gy-4">
              <BiggestGainer/>
               <BiggestLosser/>
             
          </div>
        </div>  
      </section>
      
   {/*  STOCKS Market  */}
       <section class="pt-0">
        <div class="container-fluid">
          <div class="row gy-4">
            <div class="col-md-7">
                 <MarketIndex calender = {this.state.calend}/>
            </div>
            <div class="col-md-5">
                  <SectorPreform/>   
            </div>
          </div>
        </div>  
      </section>
           {/*Tracking Signal*/}
     <section class="pt-0">
        <div class="container-fluid">
          <div class="row gy-4">
              <SignalTracking/>
          </div>
        </div>  
      </section>

           {/* MARKET NEWS */}
      <section class="pt-0">
        <div class="container-fluid">
          <div class="row gy-4">
              <StockNews/>
          </div>
        </div>  
      </section>

 {/*  UPCOMING EARNINGS  & LARGE INSIDER TRANSACTIONS */}
    <section class="pt-0">
        <div class="container-fluid">
          <div class="row gy-4">
              <UpcommingEarn calender = {this.state.calend}/>
               <InsiderTransactions calender = {this.state.calend}/>
             
          </div>
        </div>  
      </section>
      </div>
  );
  }
}

export default Home;


    
// }

// export default Home;