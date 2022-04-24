import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { MDBDataTableV5 } from 'mdbreact';
import { Container } from 'react-bootstrap';

function Reddit(props) {
    const [rowData, setRowData] = useState([])
    const[reddit, setReddit] = useState('all-stocks');
    useEffect(() => {
     fetch(`https://apewisdom.io/api/v1.0/filter/${reddit}`, {
        headers: {
           'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then(response => response.json())
        .then(results => { 
            const gainData =  results.results.map(( d, key) => {
                   return  {
                     sl: key + 1,
                     name: d.name,
                     ticker:<Link to = {`/chart/${ d.ticker}`}>{ d.ticker}</Link>,
                     mentions: d.mentions,
                     mentions_24h_ago: d.mentions_24h_ago,
                     rank : d.rank,
                     rank_24h_ago:d.rank_24h_ago,
                     upvotes:d.upvotes
                   }
                });
                 setRowData(gainData)
              }
             )
        .catch(error => {
                    console.log(error);
                });

     }, [reddit])
     const datatable = {
        columns: [
            {
              label: 'No',
              field: 'sl',
              width: 150,
              attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'sl',
              },
            },
            {
              label: 'Ticker',
              field: 'ticker',
              width: 200,
            },
            {
                label: 'Name',
                field: 'name',
                width: 200,
              },
            {
              label: 'Mentions',
              field: 'mentions',
              width: 200,
            }, 
            {
                label: 'Mentions 24h Ago',
                field: 'mentions_24h_ago',
                width: 200,
              },
              {
                label: 'Rank',
                field: 'rank',
                width: 200,
              },
              {
                label: 'Rank 24h Ago',
                field: 'rank_24h_ago',
                width: 200,
              },
              {
                label: 'Upvotes',
                field: 'upvotes',
                width: 200,
              } 
          ],
          rows: rowData,
        }

    return (
        <div>
           <div className="bg-dash-dark-2 py-4">
                    <div className="container-fluid reddit-head">
                    <h2 className="h5 mb-0">Reddit </h2>
                      <select className="screen-btn reddit-select" onChange={(e)=>  setReddit(e.target.value)}>
                          <option selected value="all-stocks">All Stocks</option>
                          <option value="stocks">Stocks</option>
                          <option value="all-crypto">Cryptos</option>
                        </select>
                </div>
            </div>
            <Container fluid className='mt-3'>
                <div className ="col-md-12">
                        <div className ="card py-3 px-3">
                            <div className = 'pt-3 pb-2 py-2 px-2  '>
                                <h3 style = {{marginBottom:'3px'}}>Reddit Stocks</h3>
                                {/* <p style = {{color:'#666666 '}}>Data includes pre-market & post-market movers as well. Stars are gappers.</p> */}
                            </div>
                            <MDBDataTableV5 hover entriesOptions={[20, 50, 100]} entries={20} pagesAmount={4} data={datatable} />
                        </div>
                    </div>
            </Container >
        </div>
    );
}

export default Reddit;