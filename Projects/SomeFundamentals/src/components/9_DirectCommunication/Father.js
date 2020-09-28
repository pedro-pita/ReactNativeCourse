import React, { Fragment } from 'react';
import { Text } from 'react-native';

import Son from './Son'

export default props => {
    let x = 13;
    let y = 100;
    return (
        <Fragment>
            <Son a={x} b={y} /> 
            <Son a={x + 100} b={y+200} /> 
        </Fragment>
    );
};