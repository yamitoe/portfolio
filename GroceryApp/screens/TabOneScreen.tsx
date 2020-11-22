import * as React from 'react';
import { FlatList, StyleSheet, TouchableHighlight } from 'react-native';

import { Text, View } from '../components/Themed';
import ListScreen from './ListScreen';

export default function TabOneScreen({navigation}) {
  return (

    <View style={styles.container}>
      <FlatList
          data={[
          // {key: 'List4'},
          // {key: 'List6'},
          {key: 'List1'},
          ]}
          renderItem={({item}) =>(
            <TouchableHighlight
            underlayColor="hsla(187, 100%, 94%, 0.5)"
            onPress={() => navigation.navigate(item.key)}
            >
              <View style={styles.view}>
                  <Text style={styles.item}>{item.key}</Text>
              </View>
            </TouchableHighlight>
      
          )}
      />
  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  item: {
    fontSize: 18,
  },
  view: {
      justifyContent: "center",
      alignItems: "flex-start",
      height: 42,
      padding: 10,
  }
});
