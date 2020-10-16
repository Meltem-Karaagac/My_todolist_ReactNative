import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, KeyboardAvoidingView } from "react-native";



// const AddTodo =({addNewTodo})=>{

// }


function AddTodo({ addNewTodo }) {
    const [text, setText] = useState("");


    return (
        // <KeyboardAvoidingView
        //     style={{ flex: 1, }}
        //     behavior={Platform.OS == 'android' ? null : 'padding:10'} >
        <View style={styles.container}>
            <TextInput
                style={styles.inputText}
                placeholder="New Todo..."
                value={text}
                onChangeText={(newTodo) => { setText(newTodo) }}
            />
            <TouchableOpacity onPress={() => {
                addNewTodo(text)
                setText("")
            }}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>ADD TODO</Text>
                </View>
            </TouchableOpacity>
        </View>
        // </KeyboardAvoidingView>
    )
};

export default AddTodo;

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("window").height / 6,
        justifyContent: "space-around",
        backgroundColor: 'rgb(218,157,161)',
        borderRadius: 20,
        margin: 10,
        padding: 10,
    },
    inputText: {
        backgroundColor: "#ede7f6",
        borderRadius: 10,
        margin: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontWeight: "bold",
        fontSize: 18,
    },
    button: {
        backgroundColor: 'rgb(0,0,0)',
        width: Dimensions.get("window").width / 3,
        alignSelf: "center",
        padding: 20,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        textTransform: "uppercase",
    }
})