import React, { Fragment } from 'react';
import { Text } from 'react-native';
import If from './If';

export default ({ user = {} }) => {
    return (
        <Fragment>
            <If condition={user && user.name && user.email}>
                <Text>User Logged In</Text>
                <Text>{user.name} - {user.email}</Text>
            </If>
         </Fragment>
    )
}