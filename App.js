import React, { useState } from "react"
import { Button, StyleSheet, Text, View, FlatList } from "react-native"
import Header from "./comp/Header"
import ToDoItem from "./comp/ToDoItem"

export default function App() {
  const [data, setData] = useState([
    { text: "buy something", key: "1" },
    { text: "smoke shisha", key: "2" },
    { text: "create native app", key: "3" },
  ])

  const pressHandel = (key) => {
    setData((prev) => {
      return prev.filter((item) => item.key !== key)
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <ToDoItem item={item} pressHandel={pressHandel}>
                {item.text}
              </ToDoItem>
            )}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
})
