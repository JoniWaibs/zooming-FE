import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

const SearchBar = () => {
    const searchKey = (key: String) => {
        console.log(key)
    }

    return (
        <View style={styles.container}>
            <Feather
                name='search'
                size={25}
                color={'#f1f1f1'}
                style={styles.icon}
                />
            <TextInput
                onChangeText={(key: String) => searchKey(key)}
                style={styles.input}
                placeholder={'Search'}
                placeholderTextColor= {'#6d6d6d'}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        marginTop: 25,
        width: '100%',
        height: 40,
        flexDirection: 'row',
        backgroundColor: '#414141',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        paddingHorizontal: 10,
        color: '#6d6d6d',
    },
    input: {
        flex: 1,
        height: '100%',
        borderRadius: 5,
        color: '#f1f1f1',
        fontSize: 20,
    }
})
