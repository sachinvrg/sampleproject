import React, { useEffect, useState } from 'react'
import { View, Text, Alert, TouchableOpacity, Image, NetInfo, ActivityIndicator } from 'react-native'
import StyleSheet from '../../Design/styles'
import COLOR from '../../Design/COLORS'
import { GridView, Button, ButtonBlue, ButtonGray } from '../ReusableComponent/Button'
import ImagesGet from '../../Design/Images'
import { getItem } from '../../Api/AshyncData'
import { showAlert1 } from '../ReusableComponent/LoaderData'
import { call_Post_by_URI } from '../../Api/apiModule'
import Toast from 'react-native-simple-toast';

function Setting({ navigation }) {

    const [token, setToken] = useState('');
    const [PropertyId, setPropertyId] = useState('');
    const [userId, setuserId] = useState('');
    const [showIndicator, setshowIndicator] = useState(false);
    const [type, settype] = useState('');

    useEffect(() => {
        this.selectedCheckboxes = new Set();
        getLocalData("cleaned")

    }, []);

    getLocalData = async (currentTab) => {
        let tokenData = await getItem("apitoken")
        let dataPropertyId = await getItem("property")
        let user_id = await getItem("user_id")
        let type = await getItem("type")
        settype(type)
        setuserId(user_id)
        setToken(tokenData)
        setPropertyId(dataPropertyId)
    }
    callGrid = (type) => {
        if (type == "Add Employee") {
          //  navigation.navigate('AddEmployee')
        } else {
           // navigation.navigate('ViewEmployee')
        }
    }

    isNetAvaliable = async () => {
        NetInfo.isConnected.fetch()
            .then(isConnected => {
                try {
                    if (isConnected) {
                        callUnclean()
                    } else {
                        alert("Please check your internet connection")
                    }
                } catch (err) {
                }
            })
    }

    callUnclean = () => {
        Alert.alert(
            'Confirmation',
            'Are you sure you want to do that ?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK', onPress: () => {
                        setshowIndicator(true)
                        let collection = {}
                        collection.property_id = PropertyId
                        call_Post_by_URI("room/uncleanedRoom", collection, token, unClnCallBack.bind(this, navigation));
                    }
                },
            ]
        );
    }

    unClnCallBack = (navigation, Resp) => {
        setshowIndicator(false)
        if (Resp || Resp !== "undefined") {
            if (Resp.status !== 400) {
                if (Resp.status) {
                    // navigation.goBack()
                    Toast.showWithGravity(Resp.message, Toast.LONG, Toast.CENTER)
                } else {
                    Toast.showWithGravity("Please try after some time", Toast.LONG, Toast.CENTER)
                }
            } else {
                console.log("error", JSON.stringify(Resp.data))
                Toast.showWithGravity(Resp.data.message, Toast.LONG, Toast.CENTER)
            }
        }
    }

    callCertainclean = () => {
       // navigation.navigate('CertainRoom')
    }
    goLogs = () => {
       // navigation.navigate('ViewLogs')
    }

    logoutClick = async () => {
        showAlert1(navigation)
    }
    reportClick = async () => {
       // navigation.navigate('ReportBugPage')
    }

    assignClick = () => {
       // navigation.navigate('AssignEmpList')
    }
    return (
        showIndicator ?
            <View style={StyleSheet.container}>
                <ActivityIndicator size="large" color={COLOR.orangeG1} />
            </View>
            :
            <View style={StyleSheet.container}>
                <View style={[{ width: '100%', alignSelf: 'center' }]}>
                </View>
                {type === "manager" ?
                    <View style={[StyleSheet.row, StyleSheet.viewSpaceBetween]}>
                        <GridView
                            value={"Add Employee"}
                            icon={ImagesGet.home.add_emp}
                            onPress={callGrid.bind(this, "Add Employee")} />
                        <GridView
                            value={"View Employee"}
                            icon={ImagesGet.home.view_emp}
                            onPress={callGrid.bind(this, "View Employee")} />
                    </View>
                    : null
                }

                <Button value={"Unclean all rooms"} onPress={isNetAvaliable.bind(this)} />
                <ButtonBlue value={"Unclean certain rooms"} onPress={callCertainclean.bind(this)} />
                <ButtonGray value="Assign Room" onPress={assignClick.bind(this)} />

            </View>
    );
}
Setting.navigationOptions = {
    title: 'Setting',
    headerTintColor: COLOR.textDark,
    headerStyle: {
        backgroundColor: COLOR.white
    },
    headerRight: (
        <View style={StyleSheet.row}>
            <TouchableOpacity onPress={() => this.goLogs()}>
                <Image style={[StyleSheet.mr5, StyleSheet.p1]} source={ImagesGet.home.log}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.reportClick()}>
                <Image style={[StyleSheet.mr5, StyleSheet.p1]} source={ImagesGet.home.report}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.logoutClick()}>
                <Image style={[StyleSheet.mr5, StyleSheet.p1]} source={ImagesGet.home.logOut}></Image>
            </TouchableOpacity>
        </View>

    ),
    headerTitleStyle: [StyleSheet.textDark, { alignSelf: 'center' }],
};

export default Setting