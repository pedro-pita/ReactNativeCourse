import React, { Fragment } from 'react';
import {Button} from 'react-native'

export default props =>{

    function execute(){
        console.warn('Exec 1!!!');
    };

    const execute2 = () => console.warn('Exec 4!!!!');

    return (
        <Fragment>
            <Button
                title="Execute #1!"
                onPress={execute}
            />
            <Button
                title="Execute #2!"
                onPress={function(){console.warn('Exec 2!!!!')}}
            />
            <Button
                title="Execute #3!"
                onPress={()=>console.warn('Exec 3!!!!')}
            />
            <Button
                title="Execute #4!"
                onPress={execute2}
            />
        </Fragment>
    );
};