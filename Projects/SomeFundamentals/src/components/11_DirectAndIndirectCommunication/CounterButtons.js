import React, { Fragment } from 'react'
import { Button, Text } from 'react-native'

export default props => {
    return (
        <Fragment>
            <Button title="+" onPress={props.inc}/>
            <Button title="-" onPress={props.dec}/>
        </Fragment>
    )
}