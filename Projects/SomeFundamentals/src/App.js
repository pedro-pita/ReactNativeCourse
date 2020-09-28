import React from 'react';
import { View } from 'react-native';

import FirstComponent from './components/1_FirstComponent';
import CompDefault, {Comp2,Comp3} from './components/2_MultiComponents'; //CompDefault is the default Component
import YellowBoxConsoleWarn from './components/3_ConsoleWarn'; 
import ComponentWithProperties from './components/4_ComponentWithProperties';
import Fragments from './components/5_Fragments';
import Button from './components/6_Button';
import UseState from './components/7_UseState';
import DirectFather from './components/9_DirectCommunication/Father';
import IndirectFather from './components/10_IndirectCommunication/Father';
import CounterV2 from './components/11_DirectAndIndirectCommunication/CounterV2';

export default () => 
  (
    <View>
      <FirstComponent />
      <CompDefault />
      <Comp2 />
      <Comp3 />
      <YellowBoxConsoleWarn />
      <ComponentWithProperties min={3} max={20} name="Pedro"/>
      <ComponentWithProperties min={3} max={20} name="Pedro"/>
      <ComponentWithProperties min={3} max={20} name="Pedro"/>
      <Fragments first="pedro" second="pita"/>
      <Button />
      <UseState number={10} increment={10}/>
      <DirectFather/>
      <IndirectFather/>
      <CounterV2/>
    </View>
  );