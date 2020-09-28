import React, { useState, Fragment } from 'react';
import { Text } from 'react-native';

import Son from './Son'

export default props => {
    const [num, setNum] = useState(0);

    function readValue(number){
        setNum(number);
    }

    return (
        <Fragment>
            <Text>{num}</Text>
            <Son
                min={1} 
                max={60} 
                func={readValue}
            />
        </Fragment>
    );
};