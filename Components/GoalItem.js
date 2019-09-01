import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});

const GoalItem = ({title, onDelete}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onDelete}>
            <View
                style={styles.listItem}>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default GoalItem;
