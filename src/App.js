import React, { useState } from "react"
import { SafeAreaView, View, Text, StyleSheet, FlatList, ScrollView, Image, TouchableOpacity, KeyboardAvoidingView, } from "react-native"

import AddTodo from "./components/AddTodo";

// Todo main component 
// const a =5; variable
// const a = ()=>{} Function expression with arrow func //a()
// const a = function(){} Function expression with normal function
// function a(){} function declaration

const Todo = () => {

    const [todos, setTodos] = useState([
        { text: "drink tea ☕", key: "0" },
        { text: "read book 🧼", key: "1" },
        { text: "play guitar 🎸", key: "2" },])

    const addNewTodo = (text) => {
        setTodos((todos) => {
            return [...todos,
            { text: text, key: Math.floor(Math.random() * 100000).toString() },

            ];
        })
    }
    const deleteTodo = (key) => {
        setTodos((todos) => {
            return todos.filter(todo => todo.key != key);
        });
    }

    return (
        // <KeyboardAvoidingView
        //     style={{ flex: 1, backgroundColor: '#e0f2f1' }}
        //     behavior={Platform.OS == 'android' ? null : 'padding:10'}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'rgb(0, 0, 0)', }}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic" style={{ flex: 1, }} bounces={false}>
                <View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.header}>TODO</Text>
                        <Text style={styles.header}>{todos.length}</Text>
                    </View>
                    <View>
                        <FlatList
                            data={todos}
                            renderItem={({ item }) => (
                                <View style={styles.todosBar}>
                                    <TouchableOpacity onPress={() => { }}>
                                        <Text style={styles.todosBarText}>{item.text}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => deleteTodo(item.key)}>
                                        <Image
                                            style={{ width: 15, height: 15, margin: 5, }}
                                            source={require("./image/delete-icon.png")}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                    </View>
                </View>

            </ScrollView>
            <AddTodo addNewTodo={addNewTodo} />
        </SafeAreaView>
        // </KeyboardAvoidingView>
    )
}

export default Todo

const styles = StyleSheet.create({
    header: {
        color: 'rgb(255,255,255)',
        fontSize: 50,
        fontWeight: "bold",
        marginHorizontal: 15,
        marginTop: 20,
    },
    todosBar: {
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 10,
        backgroundColor: 'rgb(218,157,161)',
        borderRadius: 10,
        fontSize: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    todosBarText: {
        color: "black",
        fontSize: 20,


    },
})