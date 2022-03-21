import React, { useEffect, useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Link } from 'react-router-dom';
import axios from "axios";
import { Container } from 'react-bootstrap';

function News(props) {

    const [rowData, setRowData] = useState()

const url = `http://51.89.176.109:5000/get-news?num_news=10&type=stocks`;

    function  fetchData (){
       axios.get(url, {
         mode:'cors',
         credentials: 'include',
        headers: {
          "Access-Control-Allow-Origin": "*", 
          "Access-Control-Allow-Methods": "GET",
          "Access-Control-Allow-Credentials": "false",
           'Content-Type': 'application/x-www-form-urlencoded',
           'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Token',
        },
      })
      .then((response) => {
       const gainData =  response.data.map(d => {
         if( props.singleNews ){
           if( props.singleNews == d.tickers){
            return  {
              date: d.date,
              ticker:<Link to = {`/chart/${ d.tickers}`}>{ d.tickers}</Link>,
              title: <a href = {d.link} target= '_blank'>{d.title}</a>,
              }
           }
          
         }else{
          return  {
            date: d.date,
            ticker:<Link to = {`/chart/${ d.tickers}`}>{ d.tickers}</Link>,
            link: d.link,
            market: d.market,
            title: <a href = {d.link} target= '_blank'>{d.title}</a>,
            text: d.text
            }
         }

          // })

           });
          setRowData(gainData)
       })
       
       .catch(error => {
           console.log(error);
       });
    }
    useEffect(() => {
        fetchData()
      }, [])



    const datatable = {
        columns: [
            {
              label: 'Date',
              field: 'date',
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
              label: 'Title',
              field: 'title',
              width: 200,
            },  
          ],
          rows: rowData,
        }
      
    //  console.log(rowData)

    return (
        <>
      
          { !props.singleNews  ?  <>
              <div className="bg-dash-dark-2 py-4">
                    <div className="container-fluid">
                    <h2 className="h5 mb-0">News</h2>
                </div>
            </div>
            <Container fluid className='mt-3'>
                <div className ="col-md-12">
                        <div className ="card py-3 px-3">
                            <div className = 'pt-3 pb-2 py-2 px-2  '>
                                <h3 style = {{marginBottom:'3px'}}>Stock NEWS</h3>
                                {/* <p style = {{color:'#666666 '}}>Data includes pre-market & post-market movers as well. Stars are gappers.</p> */}
                            </div>
                            <MDBDataTableV5 hover entriesOptions={[20, 50, 100]} entries={20} pagesAmount={4} data={datatable} />
                        </div>
                    </div>
            </Container >
            </>    

          :
                          <MDBDataTableV5 hover entriesOptions={[20, 50, 100]} entries={20} pagesAmount={4} data={datatable} />
 
        }

         </>
    );
}

export default News;