import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from 'react-native-vector-icons';
import TopRated from './src/containers/TopRated'
import MostPopular from './src/containers/MostPopular'

const App = () => {

    const tabularformat = createBottomTabNavigator();

    return (
      

      <tabularformat.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Popular Movies') 
            return (<AntDesign name="heart" size={25} color="black" />);
          else if (route.name === 'Upcoming Movies') 
            return (<AntDesign name="clockcircle" size={25} color="black" />);      
          else if (route.name === 'Top Rated') 
            return (<AntDesign name="star" size={25} color="black" />);        
        }})}>
         
         <tabularformat.Screen color = "black" name="Top Rated" component={TopRated} />
         <tabularformat.Screen color = "black" name="Popular Movies" component={MostPopular} /> 
       </tabularformat.Navigator>
    );

};

export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
