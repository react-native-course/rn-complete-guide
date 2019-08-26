import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Text, ScrollView, FlatList} from 'react-native';

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), val: enteredGoal}]);
    };

    return (
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler}
                           value={enteredGoal}/>
                <Button onPress={addGoalHandler} title="add"/>
            </View>
            <FlatList
                keyExtractor={(item, index) => item.key}
                data={courseGoals}
                      renderItem={itemData => <View
                          style={styles.listItem}><Text>{itemData.item.val}</Text></View>}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        borderColor: 'black',
        width: '80%',
        borderWidth: 1,
        padding: 10,
        marginBottom: 3,
    },
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});
