import React from "react";
import { Text, View, Button, StyleSheet, Modal, FlatList } from "react-native";

const FinishedTasks = (props) => {
  return (
    <View style={{}}>
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.title}>
          <Text style={styles.fontTitle}>Tasks Done</Text>
        </View>
        <FlatList
          data={props.data}
          renderItem={(itemData) => (
            <View style={styles.listItem}>
              <Text>{itemData.item.value}</Text>
            </View>
          )}
        />
        <View style={{ padding: 50 }}>
          <Button title="Cancel" color="red" onPress={props.onCancel} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "pink",
    borderColor: "black",
    borderWidth: 1,
  },
  title: {
    padding: 60,
    justifyContent: "center",
    flexDirection: "row",
  },
  fontTitle: {
    fontSize: 20,
  },
});

export default FinishedTasks;
