import React, {useState,useContext} from 'react';
import {TextInput,Modal,FlatList, StyleSheet, TouchableHighlight, Text, View} from 'react-native';

import {ListContext, ListUpdate} from '../context/ListContext'

export default function ListPage({route,navigation}){
  //destruct my object {key:"" ,data: []}
    // const {data, key} = route.params;

    //Should be a key ID passed by navigation
    const currentKey = route.params;
    // const data = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    const listdata = useContext(ListContext);
    const listUpdate = useContext(ListUpdate);

    //Data for text inputs
    const [text, setText] = useState('');
    const [timer, setTimer] = useState(0);

    //Filter the arrary and match it by key id
    let matchedData = listdata.filter(obj=> obj.key == currentKey);
    //Deconstruct Array of Objects
    let [{data}] = matchedData; 

    //Function call to global state
    function updateList(item,timer){
    //key is some number
    // let formatList = {key: listdata.length, title:data: []};
    // listUpdate(prevList => [...prevList, formatList]);
    setModalVisible(!modalVisible);
    resetForm();
  }

  function resetForm(){
    setText('');
    setTimer(0);
  }

 
    return(
        <View>
            <FlatList
          data={data}
          //unloads the above array
          renderItem={({item}) =>(
            <TouchableHighlight
            underlayColor="hsla(187, 100%, 94%, 0.5)"
            >
              <View style={styles.view}>
                  <Text style={styles.item} key={item.key}>{item.item}</Text>
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
            style={{height: 40, backgroundColor:"hsla(0, 0%, 90%, 1)",alignSelf: "stretch",textAlign: 'center' }}
            placeholder="Item Name"
            onChangeText={text => setText(text)}
            defaultValue={text}
          />
          <TextInput
            style={{height: 40 , opacity:.7 ,alignSelf: "stretch",textAlign: 'center'}}
            keyboardType = 'numeric'
            placeholder="Reminder Timer"
            onChangeText={text => setTimer(parseInt(text))}
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
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
              <Text style={styles.textStyle}
                onPress={()=>updateList(text,timer)}
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
        <Text style={styles.textStyle}>Add Item</Text>
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