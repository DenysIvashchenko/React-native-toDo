import React, { useState } from "react"
import { StyleSheet, View, TextInput, Button } from "react-native"

export default function AddItems({ submitHandler }) {
  const [text, setText] = useState("")

  const changHandel = (val) => {
    setText(val)
  }
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="put new todos..."
        onChangeText={changHandel}
        value={text}
      />
      <Button
        color="blue"
        onPress={() => submitHandler(text)}
        title="add todos"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
})
