import React from 'react';
import { Link } from 'react-router-dom';

function NoMatch(props) {
    return (
        <div>
            <div class="bg-dash-dark-2 py-4">
                <div class="container-fluid">
                    <h2 class="h5 mb-0">404</h2>
                </div>
            </div>
            <div class="container-fluid">
            <h2>Nothing to see here!</h2>
                <p>
                    <Link to="/">Go to the home page</Link>
                </p>
             </div>
        </div>
    );
}

export default NoMatch;