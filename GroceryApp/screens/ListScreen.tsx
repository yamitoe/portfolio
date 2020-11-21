import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import {  FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 42,
    },
  });

export default function ListScreen(){

    return(
        <View style={styles.container}>
            <FlatList
                data={[
                {key: 'List4'},
                {key: 'List6'},
                {key: 'List1'},
                ]}
                renderItem={({item}) => <View style={{flex:1,backgroundColor: 'powderblue'}}><Text style={styles.item}>{item.key}</Text></View>
            }
            />
        </View>
    );

}