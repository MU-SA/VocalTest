import React from 'react';
import {Image, Pressable, View} from 'react-native';
import style from './style';
const optionIcon = require('../../../../../../assets/option.png');
const navigationIcon = require('../../../../../../assets/navigation.png');
type Props = {
  onToggleTheme(): void;
  theme: any;
};
export default (props: Props) => {
  const {onToggleTheme, theme} = props;
  const background = {backgroundColor: theme.tintColor};
  const tint = {tintColor: theme.text};
  return (
    <View style={style.container}>
      <Pressable
        onPress={onToggleTheme}
        style={[style.iconContainer, background]}>
        <Image source={optionIcon} style={[style.icon, tint]} />
      </Pressable>
      <View style={[style.iconContainer, background]}>
        <Image source={navigationIcon} style={[style.icon, tint]} />
      </View>
    </View>
  );
};
