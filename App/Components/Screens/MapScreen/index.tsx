import React, {useMemo, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Place} from '../../../../types';
import {DarkTheme, LightTheme} from '../../../Theme';
import Map from '../../UI/PlacesMap';
import AutoCompleteInput from './Components/AutoCompleteInput';
import MapControls from './Components/MapControls';
import PlaceView from './Components/PlaceView';
import styles from './styles';

const MapScreen = () => {
  const [place, setPlace] = useState<Place | undefined>();
  const [isDarkMode, setisDarkMode] = useState(false);

  const onToggleTheme = () => setisDarkMode(!isDarkMode);
  const theme = useMemo(
    () => (isDarkMode ? DarkTheme : LightTheme),
    [isDarkMode],
  );
  const onPlacePressed = (p: Place) => {
    setPlace(p);
  };
  return (
    <SafeAreaView style={styles.page}>
      <Map {...{isDarkMode, theme, onPlacePressed, place}} />
      <View style={styles.body}>
        <AutoCompleteInput {...{theme}} />
        <MapControls {...{onToggleTheme, theme}} />
      </View>
      <PlaceView {...{place, theme}} />
    </SafeAreaView>
  );
};

export default MapScreen;
