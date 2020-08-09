import React, { Fragment, useState } from 'react';
import {Text, Button} from 'react-native'

export default props =>{
    const [number, setNumber] = useState(props.number); //setNumber notificate the interface to change the number value
    const inc = () => setNumber(number + props.increment);
    const dec = () => setNumber(number - props.increment);
    return (
        <Fragment>
            <Text>{number}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
        </Fragment>
    );
};