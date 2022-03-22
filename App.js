import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import FinishedTasks from "./components/FinishedTasks";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [tasksDone, setTasksDone] = useState([]);
  const [tasksDoneMode, setTasksDoneMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    if (goalTitle.length === 0) {
      return;
    }
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHander = (goalId, goalName) => {
    setCourseGoals((currentGoals) => {
      addToTasksDone(goalId, goalName);
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  const addToTasksDone = (goalId, goalTitle) => {
    setTasksDone((tasksDone) => [
      ...tasksDone,
      { id: goalId, value: goalTitle },
    ]);
  };

  const cancelTasksDoneMode = () => {
    setTasksDoneMode(false);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.rowStyle}>
        <Button
          title={"Finished Tasks"}
          onPress={() => setTasksDoneMode(true)}
        />
        <Button title={"Add New Goal"} onPress={() => setIsAddMode(true)} />
      </View>
      <FinishedTasks
        visible={tasksDoneMode}
        data={tasksDone}
        onCancel={cancelTasksDoneMode}
        data={tasksDone}
      />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHander}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 60,
    backgroundColor: "white",
    height: '100%'
  },
  rowStyle: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
