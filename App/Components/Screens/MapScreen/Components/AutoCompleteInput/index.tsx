import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  LayoutChangeEvent,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import data from './data';
import style from './style';
const searchIcon = require('../../../../../../assets/search.png');
type Props = {
  theme: any;
};
export default (props: Props) => {
  const {theme} = props;
  const [height, setHeight] = useState(0);
  const [text, setText] = useState('');
  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>();

  const onLayout = (e: LayoutChangeEvent) => {
    if (height === 0) setHeight(e.nativeEvent.layout.height);
  };

  const onResultPressed = (item: string) => {
    setText(item);
    setTimeout(() => {
      setAutoCompleteResult([]);
    }, 0);
  };
  const onChangeText = (title: string) => {
    setText(title);
    if (!title) return setAutoCompleteResult([]);
    setTimeout(() => {
      setAutoCompleteResult(
        data.filter(t =>
          t.toLocaleLowerCase().includes(title.toLocaleLowerCase()),
        ),
      );
    }, 10);
  };
  const background = {backgroundColor: theme.tintColor};
  const color = {color: theme.text};
  return (
    <>
      <View onLayout={onLayout} style={[style.inputContainer, background]}>
        <Image source={searchIcon} style={style.searchIcon} />
        <TextInput
          placeholder="Search here"
          value={text}
          onChangeText={onChangeText}
          placeholderTextColor={'#aaa'}
          style={[style.input, color]}
        />
      </View>
      {!autoCompleteResult || autoCompleteResult.length === 0 ? null : (
        <View style={[style.autoCompleteResult, background, {top: height}]}>
          <FlatList
            data={autoCompleteResult}
            contentContainerStyle={{padding: 8}}
            renderItem={({item}) => (
              <Pressable onPress={() => onResultPressed(item)}>
                <Text style={[style.resultText, color]}>{item}</Text>
              </Pressable>
            )}
          />
        </View>
      )}
    </>
  );
};
