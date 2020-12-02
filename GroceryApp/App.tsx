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
    {key:"0as", title: 'List1', data: ["Apples","Carrots","Milk"]},
    {key:"1qq",title: 'List2', data: ["Apples","Cheese","Eggs"]}
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
