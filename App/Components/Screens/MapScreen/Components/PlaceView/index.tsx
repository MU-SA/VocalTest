import React from 'react';
import {View, Text, Image} from 'react-native';
import {Place} from '../../../../../../types';
import style from './style';
export default (props: {theme: any; place: Place | undefined}) => {
  const {theme, place} = props;
  const background = {backgroundColor: theme.tintColor};
  const text = {color: theme.text};
  if (!place) return <View />;
  return (
    <View style={style.container}>
      <View style={[style.component, background]}>
        <View style={style.row}>
          <Image style={style.image} source={{uri: place.image}} />
          <View style={style.textContainer}>
            <Text style={[style.title, text]}>{place.title}</Text>
            <Text style={text} numberOfLines={1}>
              {place.description}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
