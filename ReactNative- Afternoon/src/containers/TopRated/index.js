import React, { Component }  from 'react';
import {SafeAreaView, ScrollView, View, Button  ,StatusBar} from 'react-native';
import { Text, Header } from '../ListMovies/node_modules/react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context';


import API from 'D:/Sundar/MyReactNative/src/components/API'

const TopRated = ({navigation}) => {
    return (
        
            <View style={{ flex: 1,alignItems: 'center' }}>
                <API type = '/movie/top_rated' navigation={navigation}/>
            </View>
        
    )
}

export default TopRated;