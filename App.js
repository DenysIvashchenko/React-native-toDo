import React, { useState } from "react"
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native"
import Header from "./comp/Header"
import ToDoItem from "./comp/ToDoItem"
import AddItems from "./comp/AddItems"

export default function App() {
  const [data, setData] = useState([
    { text: "buy something", key: "1" },
    { text: "smoke shisha", key: "2" },
    { text: "create native app", key: "3" },
    { text: "drink a cup of tea", key: "4" },
  ])

  const pressHandler = (key) => {
    setData((prev) => {
      return prev.filter((item) => item.key !== key)
    })
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setData((prev) => {
        return [{ text, key: Math.random().toString() }, ...prev]
      })
    } else {
      Alert.alert("OOPS", "Must be over 3 characters long", [
        { text: "Got it", onPress: () => console.log("closed") },
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddItems submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <ToDoItem item={item} pressHandler={pressHandler}>
                  {item.text}
                </ToDoItem>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
})
