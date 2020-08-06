import React, { Fragment } from 'react'
import { Text } from 'react-native'

export default props => (
    <Fragment>
        <Text>{props.first}</Text>
        <Text>{props.second}</Text>
    </Fragment>
);