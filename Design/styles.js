import { StyleSheet } from 'react-native';
import COLORS from './COLORS'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    Maincontainer: {
        flex: 1,
        backgroundColor: COLORS.white,

    },
    // Common Style
    container: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: COLORS.white,
        width: '100%',
        justifyContent: 'center',
        marginTop: 20
    },

    containerBottombar: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: COLORS.white,
        width: '100%',
        justifyContent: 'center',
    },

    activityIndicator: {
        height: 80,
        alignSelf: 'center'
    },

    itembottom: {
        position: 'absolute',
        bottom: 0
    },

    viewActive: {
        flex: 1, width: '100%', alignItems: 'center',
        backgroundColor: '#FF7700',
        height: '100%', justifyContent: 'center'
    },

    viewInactive: {
        flex: 1, width: '100%', alignItems: 'center',
        backgroundColor: COLORS.white,
        height: '100%', justifyContent: 'center'
    },

    activeText: {
        color: COLORS.white,
        fontWeight: 'bold'
    },

    InActiveText: {
        color: 'black'
    },

    keyboardContainer: {
        flex: 1, justifyContent: 'center'
    },

    row: {
        flexDirection: 'row',
    },

    colomn: {
        flexDirection: 'column',
    },

    viewSpaceBetween: {
        justifyContent: 'space-between'
    },

    viewSpacearound: {
        justifyContent: 'space-around'
    },
    m1: {
        margin: 1
    },
    m2: {
        margin: 2
    },
    m3: {
        margin: 3
    },
    m4: {
        margin: 4
    },
    m5: {
        margin: 5
    },
    m6: {
        margin: 6
    },
    m7: {
        margin: 7
    },
    m8: {
        margin: 8
    },

    m9: {
        margin: 9
    },

    m10: {
        margin: 10
    },

    m11: {
        margin: RFPercentage(4)
    },

    mt1: {
        marginTop: 1
    },

    mb1: {
        marginBottom: 1
    },

    ml1: {
        marginLeft: 1
    },

    mr1: {
        marginRight: 1
    },

    mt2: {
        marginTop: 2
    },

    mb2: {
        marginBottom: 2
    },

    ml2: {
        marginLeft: 2
    },

    mr2: {
        marginRight: 2
    },

    mt3: {
        marginTop: RFPercentage(3)
    },

    mb3: {
        marginBottom: RFPercentage(3)
    },

    ml3: {
        marginLeft: RFPercentage(3)
    },

    mr3: {
        marginRight: RFPercentage(3)
    },

    mt4: {
        marginTop: 4
    },

    mb4: {
        marginBottom: 4
    },

    ml4: {
        marginLeft: 4
    },

    mr4: {
        marginRight: 4
    },

    mt5: {
        marginTop: RFPercentage(3)
    },

    mb5: {
        marginBottom: RFPercentage(3)
    },

    ml5: {
        marginLeft: RFPercentage(3)
    },

    mr5: {
        marginRight: RFPercentage(3)
    },

    mt10: {
        marginTop: RFPercentage(4)
    },

    mb10: {
        marginBottom: RFPercentage(4)
    },

    ml10: {
        marginLeft: RFPercentage(4)
    },

    mr10: {
        marginRight: RFPercentage(4)
    },

    mt12: {
        marginTop: 12
    },

    mb12: {
        marginBottom: 12
    },

    ml12: {
        marginLeft: 12
    },

    mr12: {
        marginRight: 12
    },

    mt15: {
        marginTop: RFPercentage(11)
    },

    mb15: {
        marginBottom: RFPercentage(11)
    },

    ml15: {
        marginLeft: RFPercentage(11)
    },

    mr15: {
        marginRight: RFPercentage(11)
    },

    mt50: {
        marginTop: 40
    },

    mb50: {
        marginBottom: 40
    },

    ml50: {
        marginLeft: 40
    },

    mr50: {
        marginRight: 40
    },

    p1: {
        padding: 1
    },

    p2: {
        padding: 2
    },

    p3: {
        padding: 3
    },

    p4: {
        padding: 4
    },

    p5: {
        padding: 5
    },

    p6: {
        padding: 6
    },

    p7: {
        padding: 7
    },

    p8: {
        padding: 8
    },

    p9: {
        padding: 9
    },

    p10: {
        padding: 10
    },

    pt1: {
        paddingTop: 1
    },
    pb1: {
        paddingBottom: 1
    },

    pl1: {
        paddingLeft: 1
    },

    pr1: {
        paddingRight: 1
    },

    pt2: {
        paddingTop: 2
    },

    pb2: {
        paddingBottom: 2
    },

    pl2: {
        paddingLeft: 2
    },

    pr2: {
        paddingRight: 2
    },

    pt3: {
        paddingTop: 3
    },

    pb3: {
        paddingBottom: 3
    },

    pl3: {
        paddingLeft: 3
    },

    pr3: {
        paddingRight: 3
    },

    pt4: {
        paddingTop: 4
    },

    pb4: {
        paddingBottom: 4
    },

    pl4: {
        paddingLeft: 4
    },
    pr4: {
        paddingRight: 4
    },

    pt5: {
        paddingTop: 5
    },

    pb5: {
        paddingBottom: 5
    },

    pl5: {
        paddingLeft: 5
    },
    pr5: {
        paddingRight: 5
    },

    h1: {
        fontSize: 32,
        fontStyle: 'normal',
        fontWeight: 'normal'
    },

    h1_b: {
        fontSize: 32,
        fontStyle: 'normal',
        fontWeight: 'bold'
    },

    h2: {
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: 'normal'
    },

    h2_b: {
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: 'bold'
    },

    h3: {
        fontSize: 18.73,
        fontStyle: 'normal',
        fontWeight: 'normal'
    },

    h3_b: {
        fontSize: 18.73,
        fontStyle: 'normal',
        fontWeight: 'bold'
    },

    h4: {
        fontSize: 13.26,
        fontStyle: 'normal',
        fontWeight: 'normal'
    },

    h4_b: {
        fontSize: 13.26,
        fontStyle: 'normal',
        fontWeight: 'bold'
    },
    h5: {
        fontSize: 10.26,
        fontStyle: 'normal',
       
    },
    h5_b: {
        fontSize: 10.26,
        fontStyle: 'normal',
        fontWeight: 'bold'
    },


    subView: {
        width: '90%',
        justifyContent: 'center',
        alignContent: 'center'
    },

    cardView: {
        flex: 1,
        backgroundColor: COLORS.gray,
        borderColor: COLORS.gray,
        borderWidth: 5,
        borderRadius: 10,
        paddingTop: RFPercentage(2),
        paddingBottom: RFPercentage(2),
        alignItems: 'center',
        margin: RFPercentage(1)
    },

    cardViewTemp: {

        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 20,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 15},
        flex: 1,
        backgroundColor: COLORS.gray,
        borderColor: COLORS.gray,
        borderWidth: 0,
        borderRadius: 15,
        alignItems: 'center',
        margin: RFPercentage(0.3)
    },

    cardViewClick: {
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        zIndex: 10,
        paddingTop: 20,
        paddingBottom: 30,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        backgroundColor: COLORS.white
    },

    input: {
        width: '100%',
        left: 0,
        right: 0,
        borderBottomColor: COLORS.border,
        borderBottomWidth: 1,
        alignContent: 'center',
        alignItems: 'center',
        padding: RFPercentage(2),
    },

    inputdropdown: {
        alignSelf: 'flex-end',
        width: '40%',
        borderColor: COLORS.textLight,
        borderRadius: 50,
        borderWidth: 1,
        alignContent: 'center',
        alignItems: 'center',
    },
    inputdropdownS: {
        width: '30%',
        borderColor: COLORS.textLight,
        borderRadius: 50,
        borderWidth: 1,
    },

    inputFullborder: {
        width: '94%',
        borderColor: COLORS.gray,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: COLORS.gray

    },

    inputText: {
        width: '100%',
        color: COLORS.textDark,
        fontSize: RFPercentage(2.2),
        paddingLeft: RFPercentage(2),
        fontWeight: 'normal',
        textAlignVertical: "center"
    },

    button: {

        borderRadius:25,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 50,
        paddingRight: 50,
        backgroundColor: '#FFFFFF',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 20,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 15},
        padding: RFPercentage(1),
        alignSelf: 'center',
        borderRadius: 50,
        justifyContent: 'center',
        alignContent: 'center',
        width: '80%',
        height: RFPercentage(8),
        

    },
    buttonS: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 20,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 15},
        padding: RFPercentage(1),
        alignSelf: 'center',
        borderRadius: 30,
        justifyContent: 'center',
        alignContent: 'center',
        width: '25%',
        height: RFPercentage(4),

    },

    noBorderbutton: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: '49%',
        height: RFPercentage(7),
    },

    Line: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: '49%',
        backgroundColor: COLORS.orangeG1,
        height: RFPercentage(0.5),
        marginTop: 5
    },

    buttonText: {
        color: COLORS.white,
        alignSelf: 'center',
        fontWeight: 'normal',
        fontSize: RFPercentage(2.2),
        textTransform: 'capitalize',
        textAlign: 'center',
    },

    buttonsmall: {
        padding: 10,
        alignSelf: 'center',
        borderRadius: 50,
        justifyContent: 'center',
        alignContent: 'center',
        width: '45%',
        height: RFPercentage(4),
        backgroundColor: 'red'

    },

    buttonsmallText: {
        alignSelf: 'center',
        fontWeight: 'normal',
        fontSize: RFPercentage(2),
        textTransform: 'capitalize',
    },

    buttonsmallSuccess: {
        padding: RFPercentage(1),
        alignSelf: 'center',
        borderRadius: 50,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '40%',
        height: RFPercentage(4),
        borderColor: COLORS.blackButton,
        backgroundColor: COLORS.blackButton,
        borderWidth: 1
    },

    buttonsmallError: {
        padding: RFPercentage(1),
        alignSelf: 'center',
        borderRadius: 50,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '40%',
        backgroundColor: COLORS.redButton,
        height: RFPercentage(4),
        borderColor: COLORS.redButton,
        borderWidth: 1
    },

    darkTextBig: {
        fontSize: RFPercentage(2.5),
        color: COLORS.textDark,
        fontWeight: 'normal',
        textTransform: 'capitalize',
    },

    darkText: {
        fontSize: RFPercentage(2.2),
        color: COLORS.textDark,
        fontWeight: 'normal',
        textTransform: 'capitalize',
    },

    lightText: {
        fontSize: RFPercentage(2),
        color: COLORS.textLight,
        fontWeight: 'normal',
        textTransform: 'capitalize'
    },

    sucessText: {
        fontSize: RFPercentage(2),
        color: COLORS.green,
        fontWeight: 'normal',
        textTransform: 'capitalize'
    },

    lightsmallText: {
        fontSize: RFPercentage(1.8),
        color: COLORS.textLight,
        fontWeight: 'normal',
        textTransform: 'capitalize'
    },
    darksmallText: {
        fontSize: RFPercentage(1.8),
        color: COLORS.textDark,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },

    grridView: {
        backgroundColor: COLORS.gray,
        borderColor: COLORS.gray,
        borderWidth: 5,
        borderRadius: RFPercentage(2),
        paddingTop: RFPercentage(4),
        paddingBottom: RFPercentage(4),
        width: '46%',
        alignItems: 'center',
        margin: RFPercentage(1)

    },

    grridViewDisable: {
        backgroundColor: COLORS.Darkgray,
        borderColor: COLORS.Darkgray,
        borderWidth: 5,
        borderRadius: RFPercentage(2),
        paddingTop: RFPercentage(4),
        paddingBottom: RFPercentage(4),
        width: '46%',
        alignItems: 'center',
        margin: RFPercentage(1)

    },

    gridViewLarge: {
        backgroundColor: COLORS.gray,
        borderColor: COLORS.gray,
        borderWidth: 5,
        borderRadius: RFPercentage(2),
        paddingTop: RFPercentage(4),
        paddingBottom: RFPercentage(4),
        width: '52%',
        alignItems: 'center',
        margin: RFPercentage(5)
    },

    floatingIcon: {

        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 20,
        shadowRadius: RFPercentage(10) / 2,
        width: RFPercentage(10),
        height: RFPercentage(10),
        borderRadius: RFPercentage(10) / 2,
        backgroundColor: COLORS.orangeG1,
        position: 'absolute',
        zIndex: 10,
        bottom: RFPercentage(7),
        alignSelf: 'center',
        justifyContent: 'center'
    },

    error: {
        fontSize: RFPercentage(2),
        color: COLORS.orangeG1
    },

    Largeimage: {
        width: '100%',
        height: RFPercentage(40),
        borderColor: 'transparent',
        borderRadius: 10,
        borderWidth: 5
    },

    uriIcon: {
        width: RFPercentage(5),
        height: RFPercentage(5),
    },

    lIcon: {

    },
    itemGravity: {
        alignContent: 'flex-end',
        alignSelf: 'flex-end'

    }


});