import React from "react"
import { StyleSheet, TouchableOpacity, Text } from "react-native"

export default function ToDoItem({ pressHandel, item }) {
  return (
    <TouchableOpacity onPress={() => pressHandel(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
  },
})
