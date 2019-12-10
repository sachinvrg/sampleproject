import React from 'react'
import { View, Text, SafeAreaView, TextInput, Image, Alert,AsyncStorage } from 'react-native'
import ImagesGet from '../../Design/Images'
import StyleSheet from '../../Design/styles'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { StackActions, NavigationActions } from 'react-navigation';
export const LoaderShow = () => {

    return (

        <SafeAreaView style={{ margin: 40 }}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((_, index) => (
                <View key={index} style={{ marginBottom: 12 }}>
                    <SkeletonPlaceholder>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ width: 100, height: 100 }} />

                            <View
                                style={{
                                    justifyContent: "space-between",
                                    marginLeft: 12,
                                    flex: 1
                                }}
                            >
                                <View style={{ width: "50%", height: 20 }} />
                                <View style={{ width: "30%", height: 20 }} />
                                <View style={{ width: "80%", height: 20 }} />
                            </View>
                        </View>
                    </SkeletonPlaceholder>
                </View>
            ))}
        </SafeAreaView>

    );

}

export const LoaderShowBigImage = () => {

    return (

        <SafeAreaView>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((_, index) => (
                <View key={index} style={{ margin: 12 }}>
                    <SkeletonPlaceholder>
                        <View style={{ width: "100%", height: 240 }} />
                        <View style={{ width: 120, height: 20, alignSelf: "center", margin: 10 }} />
                        <View
                            style={{
                                width: 240,
                                height: 20,
                                alignSelf: "center",
                                marginTop: 12
                            }}
                        />
                    </SkeletonPlaceholder>
                </View>
            ))}
        </SafeAreaView>

    );

}

export const LoaderShowGrid = () => {

    return (

        <SafeAreaView>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((_, index) => (
                <View key={index} style={[StyleSheet.row, StyleSheet.viewSpaceBetween, { margin: 20 }]}>
                    <SkeletonPlaceholder>
                        <View style={{ width: "100%", height: 180 }} />
                        <View style={{ width: 120, height: 20, alignSelf: "center", margin: 10 }} />
                        <View
                            style={{
                                width: 190,
                                height: 20,
                                alignSelf: "center",
                                marginTop: 12
                            }}
                        />
                    </SkeletonPlaceholder>
                    <SkeletonPlaceholder>
                        <View style={{ width: "100%", height: 180 }} />
                        <View style={{ width: 120, height: 20, alignSelf: "center", margin: 10 }} />
                        <View
                            style={{
                                width: 190,
                                height: 20,
                                alignSelf: "center",
                                marginTop: 12
                            }}
                        />
                    </SkeletonPlaceholder>
                </View>
            ))}
        </SafeAreaView>

    );

}

export const NoData = () => {

    return (

        <View style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center', width: '64%', marginTop: 80 }}>
            <Image source={ImagesGet.NoData} style={StyleSheet.Largeimage} />
            <Text style={{ fontSize: 35,textAlign:'center', width:'100%', fontWeight: 'bold',marginTop: 30,}}>No Data Found</Text>
        </View>

    );

}

export const showAlert1 = (nevigation) => {
    global.nevigation =nevigation
    
    Alert.alert(
        'Logout',
        'Do You Really Want To Logout ?',
        [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'OK', onPress: () => {
                    AsyncStorage.clear();
                    setTimeout(() => {
                        const resetAction = StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: 'Login' })],
                        });
                        global.nevigation.dispatch(resetAction);
                        global.nevigation =null
                    }, 500);
                }
            },
        ]
    );
}
