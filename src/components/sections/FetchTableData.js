import React, { useEffect,useState } from 'react';

function FetchTableData(props) {
    const [priceEarnRatio, setPriceEarnRatio] = useState('')
    const [priceEarnGrothRatio, setPriceEarnGrothRatio] = useState('')

      function fatchAllData(){
         fetch(`https://financialmodelingprep.com/api/v3/ratios/${props.symbol}?limit=1&apikey=9f8bf374d13311bf6527af0ea58ebdb6`)
         .then(res => res.json())
         .then((response) => {
            setPriceEarnRatio(response[0].priceEarningsRatio.toFixed(3))
            // setPriceEarnGrothRatio(response[0].priceEarningsToGrowthRatio.toFixed(3))
         })

}
    useEffect(()=>{
        fatchAllData()
    },[priceEarnRatio])
    return (
        <div>
             <span>{priceEarnRatio}</span>
           
        </div>
    );
}

export default FetchTableData;