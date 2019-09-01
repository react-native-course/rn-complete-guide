import React, {useState} from 'react';
import {StyleSheet, View, Button, FlatList} from 'react-native';
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";

const styles = StyleSheet.create({
    screen: {
        padding: 30,
    },
});

const App = () => {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addGoalHandler = (goalTitle) => {
        setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), val: goalTitle}]);
        setIsModalOpen(false);
    };

    const removeGoalHandler = (key) => {
        setCourseGoals(currentGoals => currentGoals.filter(el => el.key !== key));
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <View style={styles.screen}>
            <Button title="Add New Goal" onPress={openModal}/>
            <GoalInput closeModal={closeModal} visible={isModalOpen} onAddGoal={addGoalHandler}/>
            <FlatList
                keyExtractor={(item, index) => item.key}
                data={courseGoals}
                renderItem={itemData =>
                    <GoalItem
                        onDelete={() => removeGoalHandler(itemData.item.key)}
                        title={itemData.item.val}/>}/>
        </View>
    );
};

export default App;
