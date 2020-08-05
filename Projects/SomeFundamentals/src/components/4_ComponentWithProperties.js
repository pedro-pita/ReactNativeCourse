import React from 'react';
import { Text } from 'react-native';

export default (param) => {
    console.warn(param);
    return (
    <Text>Min: {param.min} Max: {param.max} Nome: {param.name}</Text>
    )
};