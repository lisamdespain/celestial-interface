import React from 'react';

const DataCard = ({data}) => {
    const {borough, address, comments, center_name} = data;
    return(
        <div>
            <h3>{borough}</h3>
            <p>{center_name}</p>
            <p>{address}</p>
            <p>{comments}</p>
            
        </div>
    );
} 

 export default DataCard;