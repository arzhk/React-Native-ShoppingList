import React, { useState } from "react";
import { StyleSheet, View, ScrollView, StatusBar, Dimensions } from "react-native";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import NewEntry from "./components/NewEntry";

export default function App() {
  const [items, setItems] = useState([]);

  const addNewItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const completeItem = (itemIndex) => {
    let itemsClone = [...items];
    itemsClone[itemIndex].completed = !itemsClone[itemIndex].completed;
    setItems(itemsClone);
  };

  const deleteItem = (itemIndex) => {
    setItems([...items].filter((item, index) => index !== itemIndex));
  };

  const image = { uri: "https://i.pinimg.com/originals/ab/ff/68/abff68ab399e54c56aeaaddfdcc5f9e7.jpg" };

  return (
    <>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.outer}>
          <Header title="To Do List" />
          <ItemList completeItem={completeItem} deleteItem={deleteItem} items={items} />
        </ScrollView>
        <NewEntry addNewItem={addNewItem} />
      </View>
      <StatusBar backgroundColor="#6bc28f" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    height: Dimensions.get("window").height,
  },
  image: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  outer: {
    flex: 1,
  },
});
