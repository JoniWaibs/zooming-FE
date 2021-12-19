import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { menuItem } from './utils/menuItem'

const MenuButtons = () => {
    return (
        <View style={styles.container}>
            {
                menuItem.map(({id, iconStyle, text, icon}) => (
                    <TouchableHighlight key={id} style={styles.containerButton}>
                        <View style={styles.contentButton}>
                            <View style={[styles.iconButton, iconStyle === 'iconBlue' ? styles.iconBlue : styles.iconOrange]}>
                                <MaterialIcons name={icon} size={30} color={'#f1f1f1'}/>
                            </View>
                            <Text style={styles.textButton}>{text}</Text>
                        </View>
                    </TouchableHighlight>
                ))
            }
        </View>
    )
}

export default MenuButtons

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        width: '100%',
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentButton: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    iconButton: {
        color: '#f1f1f1',
        padding: 12,
        borderRadius: 15,
    },
    iconOrange: {
        backgroundColor: '#e47515'
    },
    iconBlue: {
        backgroundColor: '#49bfff'
    },
    textButton: {
        marginTop: 10,
        color: '#f1f1f1',
        fontSize: 12,
    }
})
