import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function ItemList({ items, completeItem, deleteItem }) {
  return (
    <View style={styles.container}>
      {items.length > 0 ? (
        items.map((item, index) => (
          <View
            key={index}
            style={[styles.row, styles.between, styles.singleItem, item.completed ? styles.completed : null]}
          >
            <Text style={styles.singleItemText}>{item.text}</Text>
            <View style={[styles.row, styles.itemsCenter]}>
              <Pressable style={[styles.button, styles.green]} onPress={() => completeItem(index)}>
                <Icon style={styles.white} name="check" />
              </Pressable>
              <Pressable style={[styles.red, styles.button]} onPress={() => deleteItem(index)}>
                <Icon style={styles.white} name="close" />
              </Pressable>
            </View>
          </View>
        ))
      ) : (
        <View style={{ alignItems: "center" }}>
          <Text style={{ padding: 20, color: "#99b6a5" }}>No items to display, please add an item to get started.</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  white: {
    color: "white",
  },
  red: {
    backgroundColor: "red",
  },
  green: {
    backgroundColor: "green",
  },
  completed: {
    backgroundColor: "limegreen",
    borderRadius: 8,
  },
  container: {
    padding: 10,
    backgroundColor: "white",
    flex: 1,
  },
  singleItem: {
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
  },
  row: {
    flexDirection: "row",
  },
  itemsCenter: {
    alignItems: "center",
  },
  between: {
    justifyContent: "space-between",
  },
  singleItemText: {
    padding: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    borderRadius: 20,
    color: "#fff",
    paddingHorizontal: 10,
    marginHorizontal: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 35,
    width: 35,
    height: 35,
  },
});

export default ItemList;
