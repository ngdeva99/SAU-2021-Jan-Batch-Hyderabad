import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MostPopular from 'D:/Sundar/MyReactNative/src/containers/MostPopular';
import DetailsScreen from 'D:/Sundar/MyReactNative/src/containers/DetailsScreen';

const MostPopularStack = createStackNavigator();

function MostPopular() {
    return (
      <MostPopularStack.Navigator headerMode= "none">
        <MostPopularStack.Screen name="Home" component={MostPopular} />
        <MostPopularStack.Screen name="Details" component={DetailsScreen} />
      </MostPopularStack.Navigator>
    );
  }

  export default MostPopular;