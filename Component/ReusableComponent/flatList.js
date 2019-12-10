import React, { useEffect, useState, Fragment } from 'react'
import StyleSheet from '../../Design/styles'
import ImagesGet from '../../Design/Images'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { SetText, ChangeLanguage } from '../../Api/getLanguageText'
import { Buttonsmall, ButtonDisable } from './Button'
import COLORS from '../../Design/COLORS';
import Moment from 'react-moment';

export const CommonFlatListCheck = (props) => {
  const [status, setstatus] = useState('')
  handleCheckBox = () => {
    setstatus("jkj")
  }
  let { data, onPress } = props;
  return (
    <FlatList
      data={data}
      extraData={status}
      renderItem={({ item }) => (
        <TouchableOpacity style={StyleSheet.Maincontainer} onPress={onPress.bind(this, item)}>
          <View style={[StyleSheet.row, StyleSheet.cardView]}>
            <View style={[{ width: '100%', alignItems: 'center', }, StyleSheet.row]}>
              <Text>{JSON.stringify(status)}</Text>
              <CheckBox
                label={item.room_number}
                key={item.room_number}
                checkedIcon={<Image style={StyleSheet.icon} source={ImagesGet.check_box} />}
                uncheckedIcon={<Image style={StyleSheet.icon} source={ImagesGet.un_check_box} />}
                isChecked={true}
                onPress={this.handleCheckBox}
              />
              <Text>Room {item.room_number}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

setDesign = (data, onPress, type, item) => {
  return (<TouchableOpacity style={StyleSheet.Maincontainer} onPress={onPress.bind(this, item)}>
    <View style={[StyleSheet.cardView]}>
      <View style={[{ width: '100%' }, StyleSheet.row]}>
        <Image style={[StyleSheet.mr5, StyleSheet.ml4, { alignSelf: 'center' }]} source={ImagesGet.home.roomListImg}></Image>
        <View style={[{ width: '100%', alignSelf: 'center' }]}>
          <View style={[StyleSheet.row]}>
            <Text style={[StyleSheet.darkText, StyleSheet.mt2, StyleSheet.mb2]}>{item.title ? item.title : SetText('room') + item.room_number}</Text>
          </View>
          {(item.cleaned_by === null && item.final_cleaned_by === null && global.CURRENTTAB === "all") ?
            <View style={[{ width: '100%', margin: 5 }, StyleSheet.row]}>
              <Image style={[StyleSheet.mr5, StyleSheet.ml4, { alignSelf: 'center' }]} source={ImagesGet.home.uncleanIcon}></Image>
              <Text style={StyleSheet.lightText}>{SetText('uncleaned')}</Text>
            </View> : null}
          {item.cleaned_by !== null ?
            <View style={[{ width: '100%', margin: 5 }, StyleSheet.row]}>
              <Image style={[StyleSheet.mr5, StyleSheet.ml4, { alignSelf: 'center' }]} source={ImagesGet.home.cleanIcon}></Image>
              <Text style={StyleSheet.lightText}>{SetText('cleanBy')} : {item.cleaned_by_name}</Text>
            </View>
            : null}
          {item.final_cleaned_by !== null ?
            <View style={[{ width: '100%', margin: 5 }, StyleSheet.row]}>
              <Image style={[StyleSheet.mr5, StyleSheet.ml4, { alignSelf: 'center' }]} source={ImagesGet.home.FinalCleanIcon}></Image>
              <Text style={StyleSheet.lightText}>{SetText('finalCleanBy')} : {item.final_cleaned_by_name}</Text>
            </View>
            : null}
          <View style={[{ width: '100%', margin: 5 }, StyleSheet.row]}>
            <Image style={[StyleSheet.mr5, StyleSheet.ml4, { alignSelf: 'center' }]} source={ImagesGet.home.totalIssue}></Image>
            <Text style={StyleSheet.lightText}>{SetText('total_maintenance')} : {item.maintenance_count}</Text>
          </View>

               </View>
      </View>
      <View style={{ flex: 1, marginTop: 10, justifyContent: 'flex-end', alignItems: 'flex-end', alignSelf: 'flex-end', flexDirection: 'row'}}>
            <View style={{ marginRight: 10 }} >
            { item.assignto ?
              item.assignto !== null ?
                <Text style={[StyleSheet.darksmallText, StyleSheet.ml4, StyleSheet.mt2]}>{SetText('assignTo')} : {item.assignto}</Text>
                : null
              : null}
            </View>
          </View>
    </View>
  </TouchableOpacity>)
}

export const CommonFlatList = (props) => {
  let { data, onPress, type } = props;
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {

        if (global.CURRENTTAB === "maintenance" && item.maintenance_count !== "0") {
          return (
            <Fragment>
              {this.setDesign(data, onPress, type, item)}
            </Fragment>
          )
        }
        if (global.CURRENTTAB !== "cleaned" && global.CURRENTTAB !== "maintenance") {
          return (
            <Fragment>
              {this.setDesign(data, onPress, type, item)}
            </Fragment>
          )
        }
        if (global.CURRENTTAB === "cleaned" && item.final_cleaned_by === null) {
          return (
            <Fragment>
              {this.setDesign(data, onPress, type, item)}
            </Fragment>
          )
        }
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

export const CommonFlatListImage = (props) => {

  let { data, type, onPressButton } = props;

  return (
    <FlatList
      extraData={type}
      data={data}
      renderItem={({ item, index }) => (
        <View style={[StyleSheet.ml5, StyleSheet.mr5, StyleSheet.mb3]}>
          <View style={[StyleSheet.row, StyleSheet.cardView0]}>
            <View style={{ width: '100%' }}>
              <Text style={[StyleSheet.darkText, StyleSheet.mb4]}>{SetText('problem')} {index + 1}</Text>
              <Image style={[StyleSheet.Largeimage, StyleSheet.mt4, StyleSheet.mb5]} source={{ uri: item.issue_img_url }}></Image>
              <View style={[StyleSheet.row, StyleSheet.viewSpaceBetween, StyleSheet.mb4, { borderBottomColor: COLORS.black, borderBottomWidth: 1 }]}>
                <Text style={[StyleSheet.darkText, StyleSheet.mb4, StyleSheet.mt4]}>{item.maintenance_issue_name}</Text>
                <Text style={item.maintenance_status === "repaired" ? [StyleSheet.sucessText, StyleSheet.mb4] : [StyleSheet.darkText, StyleSheet.mb4]}>{SetText(item.maintenance_status)}</Text>
              </View>
              {item.maintenance_status === "repaired" ?
                <Fragment>
                  <View style={[StyleSheet.row]}>
                    <Text style={[StyleSheet.darkText, StyleSheet.mb4]}>{SetText('repairedBy')} : </Text>
                    <Text style={[StyleSheet.lightText, StyleSheet.mb4]}>{item.updated_by}</Text>
                  </View>
                  <View style={[StyleSheet.row]}>
                    <Text style={[StyleSheet.darkText, StyleSheet.mb4]}>{SetText('repairedDate')} : </Text>
                    <Text style={[StyleSheet.lightText, StyleSheet.mb4]}>{item.updated}</Text>
                  </View>
                </Fragment>
                : null}
              <View style={[StyleSheet.row]}>
                <Text style={[StyleSheet.darkText, StyleSheet.mb4]}>{SetText('reportatedBy')} : </Text>
                <Text style={[StyleSheet.lightText, StyleSheet.mb4]}>{item.created_by}</Text>
              </View>
              <View style={[StyleSheet.row]}>
                <Text style={[StyleSheet.darkText, StyleSheet.mb4]}>{SetText('reportatedDate')} : </Text>
                <Text style={[StyleSheet.lightText, StyleSheet.mb4]}>{item.created}</Text>
              </View>

              {item.remark ?
                <Fragment>
                  <Text style={[StyleSheet.darkText, StyleSheet.mb4]}>{SetText('Additional_comments')} :</Text>
                  <Text style={[StyleSheet.lightText, StyleSheet.mb4]}>{item.remark}</Text>
                </Fragment> : null}

              {item.description ?
                <Fragment>
                  <Text style={[StyleSheet.darkText, StyleSheet.mb4]}>{SetText('status_description')} :</Text>
                  <Text style={[StyleSheet.lightText, StyleSheet.mb4]}>{item.description}</Text>
                </Fragment> : null}

              {!(type === "housekeeper" || item.maintenance_status === "repaired") ?
                <Fragment>
                  <View style={[StyleSheet.row, StyleSheet.viewSpacearound, StyleSheet.mt4]}>
                    {/* ButtonDisable */}
                    {item.maintenance_status === "repaired" ?
                      <ButtonDisable value={SetText('repaired')} />
                      :
                      <Buttonsmall value={SetText('repaired')} onPress={onPressButton.bind(this, "repaired", item)} />
                    }
                    {item.maintenance_status === "working_on" ?
                      <ButtonDisable value={SetText('working_on')} />
                      :
                      <Buttonsmall value={SetText('working_on')} onPress={onPressButton.bind(this, "working_on", item)} />
                    }
                  </View>
                  <View style={[StyleSheet.row, StyleSheet.viewSpacearound]}>
                    {item.maintenance_status === "supplies" ?
                      <ButtonDisable value={SetText('supplies')} />
                      :
                      <Buttonsmall value={SetText('supplies')} onPress={onPressButton.bind(this, "supplies", item)} />
                    }
                    {item.maintenance_status === "other" ?
                      <ButtonDisable value={SetText('other')} />
                      :
                      <Buttonsmall value={SetText('other')} onPress={onPressButton.bind(this, "other", item)} />
                    }
                  </View>
                </Fragment>
                :
                null}
            </View>
          </View>
        </View>
      )}

      keyExtractor={(item, index) => index.toString()}
    />
  );
}