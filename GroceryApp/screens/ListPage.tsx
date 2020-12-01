import React from 'react';
import { Text,View } from '../components/Themed';

export default function ListPage({route,navigation}){
    const {data} = route.params;
    return(
        <View>
            {/* <Text>{a}</Text> */}
            {data.map(v=><Text>{v}</Text>)}
        </View>
    );
}