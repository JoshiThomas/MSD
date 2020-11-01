import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const ComponentsScreen = () => {

    const xxx = "xx";
    const xxx12 = <Text>fgb</Text>;
    return (
        <View>
            <Text> from  ComponentsScreen</Text>
            <Text>{xxx}</Text>
            {xxx12}
        </View>
    );

};

export default ComponentsScreen;