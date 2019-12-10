import React, { Component, Fragment } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import StyleSheet from '../../Design/styles'
import COLOR from '../../Design/COLORS'
import { LinearGradient } from 'expo-linear-gradient'
import { SetText } from '../../Api/getLanguageText';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Button = (props) => {
    let { value, onPress, type } = props;
    return (
        <LinearGradient
            colors={[COLOR.orangeG1, COLOR.orangeG2, COLOR.orangeG2]}
            start={{ x: 0.5, y: 0.9 }}
            end={{ x: 0.9, y: 0.6 }}
            style={type === "noborder" ? [StyleSheet.m5, StyleSheet.noBorderbutton] : [StyleSheet.mt15, StyleSheet.button]}>
            <TouchableOpacity onPress={onPress} >
                <Text style={[StyleSheet.buttonText]}>{value}</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

export const ButtonOringeSmall = (props) => {
    let { value, onPress, type } = props;
    return (
        <LinearGradient
            colors={[COLOR.orangeG1, COLOR.orangeG2, COLOR.orangeG2]}
            start={{ x: 0.5, y: 0.9 }}
            end={{ x: 0.9, y: 0.6 }}
            style={[StyleSheet.buttonS]}>
            <TouchableOpacity onPress={onPress} >
                <Text style={[StyleSheet.buttonText]}>{value}</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

export const ButtonGray = (props) => {
    let { value, onPress } = props;
    return (
        <LinearGradient
            colors={[COLOR.textLight, COLOR.textLight]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={[StyleSheet.p10, StyleSheet.mt12, StyleSheet.button]}>
            <TouchableOpacity onPress={onPress} >
                <Text style={[StyleSheet.buttonText]}>{value}</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}


export const ButtonBlue = (props) => {
    let { value, onPress } = props;
    return (
        <LinearGradient
            colors={[COLOR.textDark, COLOR.textDark]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={[StyleSheet.p10, StyleSheet.mt12, StyleSheet.button]}>
            <TouchableOpacity onPress={onPress} >
                <Text style={[StyleSheet.buttonText]}>{value}</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

export const ButtonBlueSmall = (props) => {
    let { value, onPress } = props;
    return (
        <LinearGradient
            colors={[COLOR.textDark, COLOR.textDark]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={[StyleSheet.p10, StyleSheet.buttonS]}>
            <TouchableOpacity onPress={onPress} >
                <Text style={[StyleSheet.buttonText]}>{value}</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

export const ButtondisableSmall = (props) => {
    let { value, onPress } = props;
    return (
        <LinearGradient
            colors={[COLOR.textLight, COLOR.textLight]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={[StyleSheet.p10, StyleSheet.mt1, StyleSheet.buttonS]}>
            <TouchableOpacity onPress={onPress} >
                <Text style={[StyleSheet.buttonText]}>{value}</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}


export const Buttonsmall = (props) => {
    let { value, onPress } = props;
    return (
        <LinearGradient
            colors={[COLOR.textLight, COLOR.textLight]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={[StyleSheet.p5, StyleSheet.m3, StyleSheet.buttonsmall]}>
            <TouchableOpacity onPress={onPress} >
                <Text style={[StyleSheet.buttonsmallText,{color:COLOR.white}]}>{value}</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

export const ButtonDisable = (props) => {
    let { value, onPress } = props;
    return (
        <LinearGradient
            colors={[COLOR.disable, COLOR.disable]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={[StyleSheet.p5, StyleSheet.m3, StyleSheet.buttonsmall]}>
            <TouchableOpacity onPress={onPress} >
                <Text style={[StyleSheet.buttonsmallText]}>{value}</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

export const GridView = (props) => {
    let { value, icon, onPress, status, onPressDelete, onPressEdit } = props;
    return (
        <TouchableOpacity style={[StyleSheet.grridView]} onPress={onPress}>
            <Image style={[StyleSheet.lIcon]} source={icon}></Image>
            <Text style={[StyleSheet.darkText]}>{value}</Text>
            {status ?
                <Fragment>
                    <Text style={[StyleSheet.lightsmallText, StyleSheet.mb5]}>{SetText(status)}</Text>
                    <View style={[StyleSheet.row, StyleSheet.viewSpacearound, { width: '100%' }]}>
                        <TouchableOpacity style={StyleSheet.buttonsmallSuccess} onPress={onPressDelete}>
                            <Text style={[StyleSheet.lightsmallText, { color: COLOR.white }]}>Delete</Text></TouchableOpacity>
                        <TouchableOpacity style={StyleSheet.buttonsmallError} onPress={onPressEdit}>
                            <Text style={[StyleSheet.lightsmallText, { color: COLOR.white }]}>Edit</Text></TouchableOpacity>
                    </View>
                </Fragment>
                : null}
        </TouchableOpacity>
    );
}

export const GridViewDisable = (props) => {
    let { value, icon, onPress } = props;
    return (
        <TouchableOpacity style={[StyleSheet.grridViewDisable]} onPress={onPress}>
            <Image style={[StyleSheet.lIcon]} source={icon}></Image>
            <Text style={[StyleSheet.lightText, StyleSheet.mt5]}>{value}</Text>
        </TouchableOpacity>
    );
}

export const GridViewUri = (props) => {
    let { value, icon, onPress } = props;
    let uri = { uri: icon }
    return (
        <TouchableOpacity style={[StyleSheet.grridView]} onPress={onPress}>
            <Image style={[StyleSheet.uriIcon]} source={{ uri: icon }}></Image>
            <Text style={[StyleSheet.lightText, StyleSheet.mt5]}>{value}</Text>
        </TouchableOpacity>
    );
}

export const GridViewLarge = (props) => {
    let { value, icon, onPress } = props;
    return (
        <TouchableOpacity style={[StyleSheet.gridViewLarge]} onPress={onPress}>
            <Image style={[StyleSheet.lIcon]} source={icon}></Image>
            <Text style={[StyleSheet.lightText, StyleSheet.mt5]}>{value}</Text>
        </TouchableOpacity>

    );

}

