import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Modal, TextInput } from "react-native";

function NewEntry({ addNewItem }) {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const disabled = !inputValue.length > 0 || inputValue.startsWith(" ");

  return (
    <>
      {showModal && (
        <Modal>
          <View style={{ alignItems: "center", padding: 35 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "#355b44" }}>Add New Item</Text>
          </View>
          <View flex={1} style={{ justifyContent: "center", alignItems: "center", paddingHorizontal: 20 }}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter text..."
              value={inputValue}
              onChangeText={(text) => setInputValue(text)}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", width: "100%" }}>
            <Pressable
              style={{
                backgroundColor: "#558468",
                padding: 30,
                width: "65%",
                alignItems: "center",
                opacity: disabled ? 0.6 : 1,
              }}
              onPress={() => {
                if (!disabled) {
                  addNewItem({ text: inputValue, completed: false });
                  setInputValue("");
                  setShowModal(false);
                }
              }}
            >
              <Text style={{ color: "white", fontSize: 20 }}>Submit</Text>
            </Pressable>
            <Pressable
              style={{ backgroundColor: "red", padding: 30, width: "35%", alignItems: "center" }}
              onPress={() => {
                setInputValue("");
                setShowModal(false);
              }}
            >
              <Text style={{ color: "white", alignItems: "center", fontSize: 20 }}>Cancel</Text>
            </Pressable>
          </View>
        </Modal>
      )}
      <View style={styles.container}>
        <Pressable onPress={() => setShowModal(true)} style={styles.button}>
          <Text style={styles.text}>Add Item</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  button: {
    backgroundColor: "#558468",
    padding: 20,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  textInput: {
    borderBottomWidth: 2,
    padding: 10,
    width: "100%",
    fontSize: 20,
  },
  bgGreen: {
    backgroundColor: "green",
  },
  bgRed: {
    backgroundColor: "red",
  },
});

export default NewEntry;
