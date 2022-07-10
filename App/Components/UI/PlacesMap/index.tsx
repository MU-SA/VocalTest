import {Image, StyleSheet, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE, Region} from 'react-native-maps';
import {Place} from '../../../../types';
import places from './places';
import React, {useEffect} from 'react';
import styles, {DarkThemeMapStyle, LightThemeMapStyle} from './styles';
const initialRegion: Region = {
  latitude: 37.332914,
  longitude: -122.005202,
  latitudeDelta: 0.4,
  longitudeDelta: 0.004,
};
type MapProps = {
  isDarkMode: boolean;
  place: Place | undefined;
  onPlacePressed(p: Place): void;
  theme: any;
};
export default (props: MapProps) => {
  const {theme, place, onPlacePressed, isDarkMode} = props;
  useEffect(() => {}, []);
  return (
    <MapView
      style={StyleSheet.absoluteFill}
      maxZoomLevel={14}
      showsCompass={false}
      showsMyLocationButton={false}
      initialRegion={initialRegion}
      provider={PROVIDER_GOOGLE}
      minZoomLevel={9}
      customMapStyle={isDarkMode ? DarkThemeMapStyle : LightThemeMapStyle}>
      {places.map(item => {
        const isActive = item.id === place?.id;
        return (
          <Marker
            key={item.id + ''}
            onPress={() => onPlacePressed(item)}
            coordinate={item.coordinates}>
            {isActive ? (
              <ActivePlace {...{theme, place: item}} />
            ) : (
              <InactivePlace {...{theme, place: item}} />
            )}
          </Marker>
        );
      })}
    </MapView>
  );
};

type PlaceProps = {
  theme: any;
  place: Place;
};
const ActivePlace = (props: PlaceProps) => {
  const {theme, place} = props;
  const background = {backgroundColor: theme.tintColor};
  const border = {borderColor: theme.text};
  return (
    <View style={[background, border, styles.badge]}>
      <Image style={styles.activeIcon} source={place.categoryImage} />
    </View>
  );
};
const InactivePlace = (props: PlaceProps) => {
  const {theme, place} = props;
  const background = {backgroundColor: theme.tintColor};
  const border = {borderColor: theme.tintColor};
  return (
    <View style={[background, border, styles.badge]}>
      <Image style={styles.inActiveIcon} source={place.categoryImage} />
    </View>
  );
};
