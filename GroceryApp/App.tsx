import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import {ListContext, ListUpdate} from './context/ListContext'

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  //Some mock data
  const [listdata, setListData] = useState([
    {
      key:"0as",
      title: 'List1', 
      data: 
        [{item:"Apples", key:"0as1",time:0},
        {item:"Carrots", key:"0as2",time:0},
        {item:"Milk", key:"0as3",time:0}]
    },
      {key:"1qq",
      title: 'List2',
      data: 
        [{item:"Apples", key:"1qq1",time:0},
        {item:"Cheese", key:"1qq2",time:0},
        {item:"Eggs", key:"1qq3",time:0},]}
  ]);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ListContext.Provider value={listdata}>
        <ListUpdate.Provider value={setListData}>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </ListUpdate.Provider>
      </ListContext.Provider>
    );
  }
}
