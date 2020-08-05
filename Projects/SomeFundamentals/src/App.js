import React from 'react';
import { View } from 'react-native';

import FirstComponent from './components/1_FirstComponent';
import CompDefault, {Comp2,Comp3} from './components/2_MultiComponents'; //CompDefault is the default Component
import YellowBoxConsoleWarn from './components/3_ConsoleWarn'; //CompDefault is the default Component

export default () => 
  (
    <View>
      <FirstComponent />
      <CompDefault />
      <Comp2 />
      <Comp3 />
      <YellowBoxConsoleWarn />
    </View>
  );