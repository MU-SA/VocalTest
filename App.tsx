/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useMemo, useState} from 'react';
import MapScreen from './App/Components/Screens/MapScreen';
import BottomNav from './App/Components/UI/PlacesMap/BottomNav';
import {DarkTheme, LightTheme} from './App/Theme';
const App = () => {
  const [isDarkMode, setisDarkMode] = useState(false);

  const onToggleTheme = () => setisDarkMode(!isDarkMode);
  const theme = useMemo(
    () => (isDarkMode ? DarkTheme : LightTheme),
    [isDarkMode],
  );
  return (
    <>
      <MapScreen {...{isDarkMode, onToggleTheme, theme}} />
      <BottomNav {...{theme}} />
    </>
  );
};
export default App;
