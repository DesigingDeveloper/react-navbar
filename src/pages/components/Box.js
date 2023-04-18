import React from 'react';
import '../stylesheet/Dashboard.css';

function Box ( { title, icon, number } )
{
    return (
        <div className="box">
            <div className="box-header">
                <h2>{ title }</h2>
                { icon }
            </div>
            <div className="box-content">
                <div className="box-number">{ number }</div>
            </div>
        </div>
    );
}

export default Box;
