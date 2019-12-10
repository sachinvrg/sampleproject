import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar, SafeAreaView, Platform, AsyncStorage, NetInfo, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import StyleSheet from '../../Design/styles'
import COLOR from '../../Design/COLORS'
import InputField from '../ReusableComponent/TextField'
import { Button } from '../ReusableComponent/Button'
import ImagesGet from '../../Design/Images'
import { call_Post_by_URI, call_get_with_uri_param } from '../../Api/apiModule'
import renderif from '../../Constant/renderif';
import { StackActions, NavigationActions } from 'react-navigation';
import Toast from 'react-native-simple-toast';
import { getItem } from '../../Api/AshyncData'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RFPercentage } from "react-native-responsive-fontsize";
import { ChangeLanguage } from '../../Api/getLanguageText'

import { CheckBox } from 'react-native-elements'

function Login({ navigation }) {
    const [showData, setshowData] = useState(false);
    const [PropertyCode, setPropertyCode] = useState('');
    const [name, setName] = useState('');
    const [pincode, setPincode] = useState('');
    const [ErrorProperty, setErrorProperty] = useState(false);
    const [ErrorName, setErrorName] = useState(false);
    const [ErrorPin, setErrorPin] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);
    const [showIndicator, setshowIndicator] = useState(false);
    const [type, setType] = useState(false);
    const [userName, setuserName] = useState('');
    const [isCheck, setisCheck] = useState(false);

    function onChangeProperty(text) {
        if (text) {
            setErrorProperty(false)
        }
        setPropertyCode(text)
    }

    function onChangeTextName(text) {
        if (text) {
            setErrorName(false)
        }
        setName(text)
    }

    function onChangeTextPin(text) {
        if (text) {
            setErrorPin(false)
        }
        setPincode(text)
    }

    function callLogin() {
        if (pincode.length == 0 || PropertyCode.length == 0 || pincode.length == 0) {
            setErrorMsg("is required")
            if (pincode.length == 0) {
                setErrorName(true)
            }
            if (PropertyCode.length == 0) {
                setErrorProperty(true)
            }
            if (pincode.length == 0) {
                setErrorPin(true)
            }
        } else {
            if (!isCheck) {
                Toast.showWithGravity("Please Accept Terms and conditions", Toast.LONG, Toast.CENTER)
            } else {
                setshowIndicator(true)
                let collection = {}
                collection.username = name
                collection.pincode = pincode
                collection.property_code = PropertyCode
                call_Post_by_URI("auth", collection, "", loginCallBack);
            }

        }
    }

    callSwitch = (type, name) => {
        if (type === "manager" || type === "front_desk") {
            global.lang = 'en';
            ChangeLanguage('en')
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Home', UserName: name })],
            });
            navigation.dispatch(resetAction);
        } else {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Home', params: { Name: type, UserName: name } })],
            });
            navigation.dispatch(resetAction);
        }
    }

    callAPiCheck = (token) => {
        setshowIndicator(true)
        call_get_with_uri_param("room/getFinalCleanStatus", token, checkTypeCallBack);
    }

    checkTypeCallBack = (loginResp) => {
        setshowIndicator(false)
        if (loginResp || loginResp !== "undefined") {
            if (loginResp.status !== 400) {
                if (loginResp.status) {
                    AsyncStorage.setItem("isFinalCleanHide", loginResp.data.final_clean_status);
                    callSwitch(type, userName)
                } else {
                }
            } else {
            }
        }
    }

    loginCallBack = (loginResp) => {
        setshowIndicator(false)
        if (loginResp || loginResp !== "undefined") {
            if (loginResp.status !== 400) {
                if (loginResp.status) {
                    Toast.showWithGravity(loginResp.message, Toast.LONG, Toast.CENTER)
                    date1 = new Date();
                    AsyncStorage.setItem("storedate", date1.toString());
                    AsyncStorage.setItem("userName", name);
                    AsyncStorage.setItem("apitoken", loginResp.token);
                    AsyncStorage.setItem("PropertyCode", PropertyCode);
                    AsyncStorage.setItem("type", loginResp.data.type);
                    AsyncStorage.setItem("property", loginResp.data.property_id);
                    AsyncStorage.setItem("user_id", loginResp.data.id);
                    AsyncStorage.setItem("isFinalCleanHide", loginResp.data.final_clean_status);
                    callSwitch(loginResp.data.type, name)
                } else {
                    Toast.showWithGravity("Please try after some time", Toast.LONG, Toast.CENTER)
                }
            } else {
                Toast.showWithGravity(loginResp.data.message, Toast.LONG, Toast.CENTER)
            }
        }
    }

    getLocalData = async () => {
        let tokenData = await getItem("apitoken")
        let type = await getItem("type")
        let userName = await getItem("userName")
        let storedate = await getItem("storedate");
        date1 = new Date(storedate);
        date2 = new Date();
        var res = Math.abs(date1 - date2) / 1000;
        var hours = Math.floor(res / 3600) % 24;
        if (hours >= 8) {
            AsyncStorage.clear();
            setshowData(true)
        } else {
            setuserName(userName)
            setType(type)
            if (type !== null) {
                callAPiCheck(tokenData);
            } else {
                setshowData(true)
            }
        }
    }

    isNetAvaliable = async () => {
        NetInfo.isConnected.fetch()
            .then(isConnected => {
                try {
                    if (isConnected) {
                        callLogin()
                    } else {
                        alert("Please check your internet connection")
                    }
                } catch (err) {
                }
            })
    }

    handleCheckBox = () => {
        setisCheck(!isCheck)
    }

    useEffect(() => {
        getLocalData()
    }, []);

    clickWebView = (type) => {
       if(type==="terms"){
        navigation.navigate('ClickWebView',{URL : "http://roomcheckllc.com/terms-and-conditions.html"})
       }else{
        navigation.navigate('ClickWebView',{URL : "http://roomcheckllc.com/privacy-policy.html"})
       }
       
    }

    return (
        <SafeAreaView style={StyleSheet.container}>
            <StatusBar barStyle="dark-content" />
            <KeyboardAwareScrollView
                enableOnAndroid
                keyboardShouldPersistTaps={'handled'}
                enableAutomaticScroll
                keyboardOpeningTime={0}
                showsVerticalScrollIndicator={false}
                extraHeight={Platform.select({ android: RFPercentage(20) })}
                contentContainerStyle={StyleSheet.keyboardContainer}
            >
                <View style={StyleSheet.container}>
                    {renderif(showData)(
                        <View style={[StyleSheet.subView, StyleSheet.p5]}>
                            <Image style={[{ alignSelf: 'center' }]} resizeMode="contain" source={ImagesGet.login.logo}></Image>
                            {/* {BASE_URL.includes("dev") ?
                                <Text style={[StyleSheet.h3_b, { alignSelf: 'center', color: COLOR.orangeG1 }]}>Development Mode</Text>
                                : null} */}
                            <InputField
                                icon={ImagesGet.login.Property}
                                Placeholder={"Property Code"}
                                value={PropertyCode}
                                secureTextEntry={false}
                                onChangeText={text => onChangeProperty(text)}
                                keyBoard={'phone-pad'}
                            />
                            {renderif(ErrorProperty)(<Text style={StyleSheet.error}>Property Code {errorMsg}</Text>)}
                            <InputField
                                icon={ImagesGet.login.name}
                                Placeholder={"Name"}
                                value={name}
                                secureTextEntry={false}
                                onChangeText={text => onChangeTextName(text)}
                                keyBoard={'name-phone-pad'}
                            />
                            {renderif(ErrorName)(<Text style={StyleSheet.error}>Name {errorMsg}</Text>)}
                            <InputField
                                icon={ImagesGet.login.pincode}
                                Placeholder={"Pincode"}
                                value={pincode}
                                secureTextEntry={true}
                                onChangeText={text => onChangeTextPin(text)}
                                keyBoard={'name-phone-pad'}
                            />
                            {renderif(ErrorPin)(<Text style={StyleSheet.error}>Pincode {errorMsg}</Text>)}
                            <View style={[{ width: '100%', alignItems: 'center', }, StyleSheet.row]}>
                                <CheckBox
                                    checkedIcon={<Image source={ImagesGet.check_box} />}
                                    uncheckedIcon={<Image source={ImagesGet.un_check_box} />}
                                    checked={isCheck}
                                    onPress={this.handleCheckBox.bind(this)}
                                />
                                <Text style={StyleSheet.h5}>Accept </Text>
                                <TouchableOpacity onPress={this.clickWebView.bind(this,"terms")} >
                                    <Text style={[StyleSheet.h5_b, { color: COLOR.orangeG1 }]}>Terms and conditions </Text>
                                </TouchableOpacity>
                                <Text style={StyleSheet.h5}>and</Text>
                                <TouchableOpacity onPress={this.clickWebView.bind(this,"policy")} >
                                    <Text style={[StyleSheet.h5_b, { color: COLOR.orangeG1 }]}> Privacy Policy</Text>
                                </TouchableOpacity>
                                
                            </View>
                            {showIndicator ?
                                <ActivityIndicator size="large" color={COLOR.orangeG1} />
                                :
                                <Button value={"Login"} onPress={isNetAvaliable.bind(this)} />
                            }
                            <Text style={[StyleSheet.h4_b,StyleSheet.mt5, { alignSelf: 'center', color: COLOR.Darkgray }]}>version: 1.0.0</Text>
                        </View>
                    )}
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}
Login.navigationOptions = {
    title: 'Home',
    header: null,
};

export default Login