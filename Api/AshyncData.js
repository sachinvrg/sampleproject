import React from 'react'
import { AsyncStorage } from 'react-native'


function getItem(item) {

    return AsyncStorage.getItem(item)
        .then((value) => {
            try {
                return (value)
            } catch (err) {
            }
        })
}

export { getItem };