import React, { Fragment } from 'react';
import { Button} from 'react-native';

export default props => {

    function generateNumber(min,max){
        const n = max - min + 1;
        return parseInt(Math.random() * n) + min;
    }

    return (
        <Button
            title="Execute"
            onPress={function(){
                const result = generateNumber(props.min,props.max);
                props.func(result);
            }}
        />
    );
};