import React, { Component } from 'react';
import { StyleSheet, Text, View, I18nManager } from 'react-native';

import { FlatList, RectButton } from 'react-native-gesture-handler';

//  To toggle LTR/RTL uncomment the next line
// I18nManager.allowRTL(true);

// import AppleStyleSwipeableRow from './AppleStyleSwipeableRow';
import GmailStyleSwipeableRow from './GmailStyleSwipeableRow';

const Row = ({ item }) => (
  <RectButton style={styles.rectButton} onPress={() => alert(item.title)}>
    <Text style={{...styles.fromText}}>{item.title}</Text>
        {item.data.map(x=><Text numberOfLines={2} key={x.key} style={styles.messageText}>{x.item}</Text>)}

    <Text style={styles.dateText}>
      {item.when} {'❭'}
    </Text>
  </RectButton>
);

const SwipeableRow = ({ item, index }) => {
    return (
      <GmailStyleSwipeableRow>
        <Row item={item} />
      </GmailStyleSwipeableRow>
    );
};

export function Swipable ({DATA}){
    return (
      <FlatList
        data={DATA}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item, index }) => (
          <SwipeableRow item={item} index={index} />
        )}
        keyExtractor={(item, index) => `message ${index}`}
      />
    );
  
}

const styles = StyleSheet.create({
  rectButton: {
    flex: 1,
    height: 80,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  separator: {
    backgroundColor: 'rgb(200, 199, 204)',
    height: StyleSheet.hairlineWidth,
  },
  fromText: {
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  messageText: {
    color: '#999',
    backgroundColor: 'transparent',
  },
  dateText: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 20,
    top: 10,
    color: '#999',
    fontWeight: 'bold',
  },
});

// const DATA = [
//   {
//     from: "D'Artagnan",
//     when: '3:11 PM',
//     message:
//       'Unus pro omnibus, omnes pro uno. Nunc scelerisque, massa non lacinia porta, quam odio dapibus enim, nec tincidunt dolor leo non neque',
//   },
//   {
//     from: 'Aramis',
//     when: '11:46 AM',
//     message:
//       'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus hendrerit ligula dignissim maximus aliquet. Integer tincidunt, tortor at finibus molestie, ex tellus laoreet libero, lobortis consectetur nisl diam viverra justo.',
//   },
// ];