import React, { useEffect, useState } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import StyleSheet from '../../Design/styles'
import COLOR from '../../Design/COLORS'
import { getItem } from '../../Api/AshyncData'
import { GridView, } from '../ReusableComponent/Button'
import ImagesGet from '../../Design/Images'
import { LinearGradient } from 'expo-linear-gradient';
function Home({ navigation }) {

    const [isFinalCleanHide,setisFinalCleanHide] = useState("0")
    useEffect(() => {
        getLocalData()
    }, []);

    getLocalData = async () => {
        let isFinalClean = await getItem("isFinalCleanHide");
        setisFinalCleanHide(isFinalClean)
    }

    callGrid = (type) => {
        if(type==="Property"){
          //  navigation.navigate('Property')
        }else{
            global.CURRENTTAB = type
            //navigation.navigate('RoomList')
        }
    }
    goSetting = () => {
        navigation.navigate('Setting')
    }

    return (
        <View style={StyleSheet.container}>
            <View style={[StyleSheet.row, StyleSheet.viewSpaceBetween]}>
                <GridView
                    value={"Property"}
                    icon={ImagesGet.home.property}
                    onPress={callGrid.bind(this, "Property")} />
                <GridView
                    value={"All rooms"}
                    icon={ImagesGet.home.all_room}
                    onPress={callGrid.bind(this, "all")} />
            </View>
            <View style={[StyleSheet.row, StyleSheet.viewSpaceBetween]}>
            {isFinalCleanHide==="1"?<GridView
                    value={"Final Cleaned"}
                    icon={ImagesGet.home.final_cleaned}
                    onPress={callGrid.bind(this, "final_cleaned")} />:null}
                
                <GridView
                    value={"Cleaned"}
                    icon={ImagesGet.home.cleaned}
                    onPress={callGrid.bind(this, "cleaned")} />
            </View>
            <View style={[StyleSheet.row, StyleSheet.viewSpaceBetween]}>
                <GridView
                    value={"Uncleaned"}
                    icon={ImagesGet.home.un_cleaned}
                    onPress={callGrid.bind(this, "uncleaned")} />
                <GridView
                    value={"Maintenance"}
                    icon={ImagesGet.home.maintenance}
                    onPress={callGrid.bind(this, "maintenance")} />
            </View>
            <LinearGradient
                colors={[COLOR.orangeG1, COLOR.orangeG2]}
                start={{ x: 0, y: .5 }}
                end={{ x: .5, y: 0 }}
                style={[StyleSheet.floatingIcon]}>
                <TouchableOpacity onPress={this.goSetting.bind(this)}>
                    <Image style={[{ alignSelf: 'center' }, StyleSheet.lIcon]} source={ImagesGet.home.setting_icon}></Image>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}
Home.navigationOptions = {
    title: 'Settings',
    header: null
};

export default Home