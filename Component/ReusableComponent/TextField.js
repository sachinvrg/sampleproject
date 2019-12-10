import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput,Image } from 'react-native'
import StyleSheet from '../../Design/styles'
import COLOR from '../../Design/COLORS'

const InputField = (props) => {
    let { value ,onChangeText,Placeholder,icon,keyBoard,secureTextEntry,multiline} = props;
    
    return (
        <View style={[StyleSheet.row,StyleSheet.input]}>
        <Image style={[StyleSheet.mr4 ,StyleSheet.p1,StyleSheet.icon]} source={icon}></Image>
        <TextInput
            style={[StyleSheet.inputText]}
            onChangeText={onChangeText}
            value={value}
            placeholder={Placeholder}
            keyboardType={keyBoard}
            secureTextEntry={secureTextEntry}
            multiline={multiline}
        />
        </View>
    );
    
}

export default (InputField)
