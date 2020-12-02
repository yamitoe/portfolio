import * as React from 'react';
import {useState, useContext} from "react";
import { TextInput,Modal,FlatList, StyleSheet, TouchableHighlight, Text, View } from 'react-native';

import {ListContext, ListUpdate} from "../context/ListContext"

export default function TabOneScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');
  const listdata = useContext(ListContext);
  const listUpdate = useContext(ListUpdate);

  // const [listdata, setListData] = useState([
  //   {key:"0as", title: 'List1', data: ["Apples","Carrots","Milk"]},
  //   {key:"1qq",title: 'List2', data: ["Apples","Cheese","Eggs"]}
  // ]);


  function createList(newList){
    let formatList = {key: newList + listdata.length, title:newList, data: []};
    listUpdate(prevList => [...prevList, formatList]);
    setModalVisible(!modalVisible);
    resetForm();
  }

  function resetForm(){
    setText('');
  }
  return (

    <View style={styles.container}>
      <FlatList
          data={[
            ...listdata
          ]}
          //unloads the above array
          renderItem={({item}) =>(
            <TouchableHighlight
            underlayColor="hsla(187, 100%, 94%, 0.5)"
            onPress={() =>{
                // Passes data to page ListPage with props item
                navigation.navigate("ListPage", {...item});
            }}
            >
              <View style={styles.view}>
                  <Text style={styles.item}>{item.title}</Text>
              </View>
            </TouchableHighlight>
      
          )}
      />

      <Modal
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TextInput
            style={{height: 40}}
            placeholder="Enter Title"
            onChangeText={text => setText(text)}
            defaultValue={text}
          />
            <View style={{ flex:0, flexDirection:"row" ,justifyContent:"space-between"}}>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3", margin:2 }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
              <Text style={styles.textStyle}>Cancel</Text>
              </TouchableHighlight>
              {/* Two so that if you hold tap in highlight seperately */}
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3",margin:2 }}
                // onPress={() => {
                //   setModalVisible(!modalVisible);
                // }}
              >
              <Text style={styles.textStyle}
                onPress={()=>createList(text)}
                >Confirm</Text>

            
              </TouchableHighlight>
              </View>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>

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
  },
  openButton: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",    
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
