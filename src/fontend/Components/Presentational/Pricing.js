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

    return(
        <>
        <section className={`${styles.pricing__section} ${isFirst ? styles.space : ""}`}>
            <h1>Choose your <span> Plan</span></h1>
            <h6>Save Big with a Yearly Membership & Receive 4 Months Free</h6>
            <Plans
                planTitle="Parabolics Premium"
                perks1={perks__list__1}
                perks2={perks__list__2}
                monthlyPrice={75}
                yearlyPrice={599}
            />
        </section>
        </>
    )
}
export default Pricing

Pricing.propTypes = {
    isFirst: PropTypes.bool.isRequired,
}