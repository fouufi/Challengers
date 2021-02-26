// Components/Search.js
import React from 'react'
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native'

class Search extends React.Component {
    render() {
        return (
            <View style={styles.view}>
                <TextInput style={styles.textinput} placeholder='Titre du film'/>
                
                <TouchableOpacity onPress={this._onPressButton}> 
                    <Text style ={styles.button}>
                        Rechercher
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        display: "flex",
        alignItems: "center",
        marginTop: 50
        
    },

    button: {
        height: 40,
        width:160,
        borderRadius:10,
        backgroundColor : "red",
        marginLeft :50,
        marginRight:50,
        marginTop :20,
        textAlign: "center",
        textAlignVertical: "center"
        
    },

    textinput: {
        marginBottom: 20,
        height: 50,
        backgroundColor: "#3b3b3b",
        borderColor: '#000000',
        borderWidth: 2,
        paddingLeft: 5,
        minWidth: 250,
        textAlign: "center"
    }
})

export default Search