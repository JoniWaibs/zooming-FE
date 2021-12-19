import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

const Header = () => {
    const meetAndChat: String = 'Meet & Chat'
    return (
        <View style={styles.container}>
            <Entypo name='notification' size={30} color={'#f1f1f1'}/>
            <Text style={styles.title}>{meetAndChat}</Text>
            <Entypo name='new-message' size={30} color={'#f1f1f1'}/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        width: '100%',
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: '#f1f1f1',
        fontSize: 20,
        fontWeight: 'bold',
    }
})
