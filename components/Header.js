import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

Header.defaultProps = {
  title: "To Do List",
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#6bc28f",
    zIndex: 10,
  },
  text: {
    color: "#fff",
    fontSize: 23,
    textAlign: "center",
  },
});

export default Header;
