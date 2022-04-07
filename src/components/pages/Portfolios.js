import react, { useState } from 'react';
import Portfolio from '../../components/Portfolio/Portfolio';
import PortfolioMonitor from '../../components/PortfolioMonitor/PortfolioMonitor';


function Portfolios() {
    //State of the stocks
    const [stocks, setStocks] = useState([]);
    //State of Portfolio or PortfolioMonitor component to be shown
    const [isPortfolioReady, setIsPortfolioReady] = useState(false);

    return (
        <div>
        <div className="bg-dash-dark-2 py-4">
                <div className="container-fluid">
                <h2 className="h5 mb-0">Portfolio</h2>
            </div>
         </div>
            <div className='mt-5'>
                 {/* If user is ready with portfolio shows PortfolioMonitor */}
                {!isPortfolioReady ? (
                    <div className='portfolio-configuration'>
                        <Portfolio stocks={stocks} setStocks={setStocks} />
                        <div className='portfolio-button-continue-wrapper'>
                            <button
                                className='portfolio-button-continue'
                                onClick={() => setIsPortfolioReady(true)}
                            >
                                <span>Continue</span>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='portfolio-monitor'>
                        <div className='portfolio-button-back-wrapper'>
                            <button
                                className='portfolio-button-back'
                                onClick={() => setIsPortfolioReady(false)}
                            >
                                <span>Go back to Portfolio</span>
                            </button>
                        </div>
                        <PortfolioMonitor
                            stocks={stocks}
                            setStocks={setStocks}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Portfolios;
