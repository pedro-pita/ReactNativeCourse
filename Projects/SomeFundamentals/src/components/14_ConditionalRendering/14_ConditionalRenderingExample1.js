import React from 'react'
import { Text, View } from 'react-native'

export default ({num = 0}) => {
    //wrong way
    /*if(num % 2 === 0){
        return (
            <View>
                <Text>O resultado é:</Text>
                <Text>Par</Text>
            </View>
        )
    } else {
        return (
            <View>
                <Text>O resultado é:</Text>
                <Text>Impar</Text>
            </View>
        )
    }*/

    //using conditional rendering
    return(
        <View>
            <Text>O resultado é:</Text>
            {num % 2 === 0 
                ? <Text>Par</Text> 
                : <Text>Impar</Text>
            }
        </View>
    );
}