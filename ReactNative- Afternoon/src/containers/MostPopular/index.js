import React, { Component }  from 'react';
import {SafeAreaView, ScrollView, View, StatusBar} from 'react-native';
import { Text, Header } from '../ListMovies/node_modules/react-native-elements'
import Requests from "../../components/GetData";



import API from 'D:/Sundar/MyReactNative/src/components/API'

const MostPopular = ({navigation}) => {
    return (
        
            <View style={{ flex: 1,alignItems: 'center' }}>
                <API type = '/movie/popular' navigation={navigation}/>
            </View>
        
    )
}

export default MostPopular;