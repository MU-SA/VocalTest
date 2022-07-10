import {Image, SafeAreaView, View} from 'react-native';
import React from 'react';
import style from './style';
const compassIcon = require('../../../../assets/compass.png');
const userIcon = require('../../../../assets/user.png');
const bellIcon = require('../../../../assets/bell.png');
const plusIcon = require('../../../../assets/plus.png');
const mapIcon = require('../../../../assets/map.png');
type Props = {
  theme: any;
};
export default (props: Props) => {
  const {theme} = props;
  const width = 24;
  const height = 24;
  const background = {backgroundColor: theme.background};
  const tintColot = {tintColor: theme.text};
  return (
    <SafeAreaView style={background}>
      <View style={style.nav}>
        <Image style={[tintColot, {width, height}]} source={compassIcon} />
        <Image style={[tintColot, {width, height}]} source={mapIcon} />
        <View style={style.mainBotton}>
          <Image
            style={[{width, height, tintColor: 'white'}]}
            source={plusIcon}
          />
        </View>
        <Image style={[tintColot, {width, height}]} source={bellIcon} />
        <Image style={[tintColot, {width, height}]} source={userIcon} />
      </View>
    </SafeAreaView>
  );
};
