import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import {ListContext, ListUpdate} from './context/ListContext'
//Local Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  let mockdata = [
    {
      key:"0as",
      title: 'For dinner', 
      when: '3:11 PM',
      data: 
        [{item:"Steak", key:"0as1",time:0},
        {item:"Carrots", key:"0as2",time:0},
        {item:"Milk", key:"021",time:0},
        {item:"Soup", key:"161651",time:0},
        {item:"Onions", key:"2as3",time:0},

      ]
    },
      {key:"1qq",
      title: 'Ingredients to buy',
      when: '8:11 PM',
      data: 
        [{item:"Apples", key:"1qq1",time:0},
        {item:"Cheese", key:"1qq2",time:0},
        {item:"Eggs", key:"1qq3",time:0},]},

        {key:"11asaw",
        title: 'Soup',
        when: '2:11 AM',
        data: 
          [{item:"Chicken Broth", key:"1qqt1",time:0},
          {item:"Pepper", key:"1qqt2",time:0},
          {item:"Noodles", key:"1qqt3",time:0},]}
  ];
  //Some mock data
  const [listdata, setListData] = useState(mockdata)

  const onLoad = useEffect(()=>{
    //  clearAll();
    //Loading data from storage
    getData().then(savedData=>{
      // console.log(savedData);
      if(savedData == null){
        storeData(mockdata);
      }else{
        setListData(savedData);
      }
    });
  },[])
  //Every time rerender happens it will save to our database
  const onUpdate = useEffect(()=>{
    storeData(listdata);
  })

  

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
      // console.log("Data Saved");
    } catch (e) {
      // saving error
      console.log("Data Failed to save");
    }
  }

  
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    // console.log(jsonValue);
    // console.log("after conversion");
    // console.log(jsonValue != null ? JSON.parse(jsonValue) : null);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
    console.log("Failed to fetch data");
  }
}

const clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
  }

  console.log('Done.')
}

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
