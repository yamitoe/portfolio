import React from 'react';
import { Text,View } from '../components/Themed';

export default function ListPage({route,navigation}){
    const {a} = route.params;
    return(
        <View>
            {/* <Text>{a}</Text> */}
            {a.map(v=><Text>{v}</Text>)}
        </View>
    );
}