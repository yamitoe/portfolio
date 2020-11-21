import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import {useState} from 'react';
import {  FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
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

export default function ListScreen(){
    return(
        <View style={styles.container}>
            <FlatList
                data={[
                {key: 'List4'},
                {key: 'List6'},
                {key: 'List1'},
                ]}
                renderItem={({item}) =>(
                    <TouchableHighlight
                    underlayColor="hsla(187, 100%, 94%, 0.5)"
                    onPress={() => alert('Pressed!')}
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