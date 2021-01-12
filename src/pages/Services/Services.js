import React from 'react';
import ServiceClient from '../../component/ServiceClient';
import {Object2} from './Data2';

function Services(){
    return(
        <div>
            <ServiceClient {...Object2}/>
        </div>
    )
}

export default Services;