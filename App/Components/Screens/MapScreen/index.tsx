import React, {useMemo, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Place} from '../../../../types';
import {DarkTheme, LightTheme} from '../../../Theme';
import Map from '../../UI/PlacesMap';
import AutoCompleteInput from './Components/AutoCompleteInput';
import MapControls from './Components/MapControls';
import PlaceView from './Components/PlaceView';
import styles from './styles';

type Props = {
  theme: any;
  onToggleTheme(): void;
  isDarkMode: boolean;
};
const MapScreen = (props: Props) => {
  const {theme, onToggleTheme, isDarkMode} = props;
  const [place, setPlace] = useState<Place | undefined>();

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
