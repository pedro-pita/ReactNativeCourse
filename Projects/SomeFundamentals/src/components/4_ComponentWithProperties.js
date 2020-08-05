import React from 'react';
import { Text } from 'react-native';

/*export default param => {
    console.warn(param);
    const delta = param.max - param.min + 1;
    const random = parseInt(Math.random() * delta) + param.min;
    return (
        <Text>Min: {param.min} Max: {param.max} Name: {param.name} Random Number: {random}</Text>
    )
};*/
//OR
export default ({min, max}) => {
    const delta = max - min + 1;
    const random = parseInt(Math.random() * delta) + min;
    return (
        <Text>Min: {min} Max: {max} Random Number: {random}</Text>
    )
};