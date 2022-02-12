// src/components/SearchList.js

import React from 'react';
import Card from './Card';


function SearchList( {filteredProduct} ) {
    console.log(filteredProduct)
    const filtered = filteredProduct.map(product => 
         <Card 
   
            symbol = {product.symbol} 
            companyName={product.companyName} 

        />
        ); 
    
    return (
        <div>
        {filtered}
        </div>
    );
}

export default SearchList;