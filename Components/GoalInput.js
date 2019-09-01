import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View, Modal} from "react-native";

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderColor: 'black',
        width: '80%',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

const GoalInput = ({onAddGoal, closeModal, visible}) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler}
                           value={enteredGoal}/>
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button title="add" onPress={addGoalHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="cancel" color="red" onPress={closeModal}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;
