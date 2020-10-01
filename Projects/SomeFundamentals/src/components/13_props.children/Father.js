import React, { useState, Fragment, Text} from 'react';
import Son from './Son'

export default props => {
    return (
        <Fragment>
            <Text>Family</Text>
            {props.children}
        </Fragment>
    );
};