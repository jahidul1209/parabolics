import React from 'react';
import Plans from './Plans';
import styles from "../../../fontend/Components/Styles/pricing.module.css"
// import styles from "../Styles/pricing.module.css"
import PropTypes from 'prop-types';
const Pricing = ({isFirst}) => {
    const perks__list__1 = [
        "Live Dashboards",
        "Stocks",
        "AI Trade Ideas",
        "Crypto",
        "Forex",
        "Futures",
        "Premium Scanners",
        "Trade Signals",
        "Custom Watchlist",
        'Discord Premium'
    ];

    const perks__list__2 = [
        "Premium Indicators",
        "Market Wide Screeners",
        "Advanced AI Scanners",
        "Live Watchlists",
        "Querying Bots",
        " Scalping Ideas",
        "Insider Trading",
        " Block Trades",
        "Custom Watchlist",
        " Explore More..."]

        const perks__list__3 = [       
                   "Real-Time Order Flow",
                    "Equity Prints",
                    "Crypto & Forex Market Scanner ",
                    "Robust Technical Analysis",
                    "Live Trade Ideas ",
                   " Unusual Options Activity ",
                    "Unmatched Market Context ",
                   "  Visualize Flow",
                    "Industry  Analysis ",
                    "Discord Access"
        ]
    return(
        <>
        <section className={`${styles.pricing__section} ${isFirst ? styles.space : ""}`}>
            <h1>Choose your <span> Plan</span></h1>
            <p>Save Big with a Yearly Membership & Receive 4 Months Free</p>
            <Plans
                planTitle="Parabolics Premium"
                perks1={perks__list__1}
                perks2={perks__list__2}
                perks3={perks__list__3}
                monthlyPrice={75}
                yearlyPrice={599}
                yearlyPrice2={999}
            />
        </section>
        </>
    )
}
export default Pricing

Pricing.propTypes = {
    isFirst: PropTypes.bool.isRequired,
}