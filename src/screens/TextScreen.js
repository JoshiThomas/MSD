import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, FlatList, TextInput } from 'react-native';
import { styles } from './styles'

const TextScreen = () => {

    const [name, setName] = useState('');

    return (
        <View>

            <Text>Text screen</Text>
            <TextInput style={styles.textInput}
                value={name}
                onChangeText={(newVal) => {
                    setName(newVal);
                }}
            >
            </TextInput>

            <Text>My name is {name}</Text>
            {name.length < 5 ? <Text>must be at least 5 char</Text> : null}
        </View>

    );

};

export default TextScreen;