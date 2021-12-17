// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeSec from '../home';
// import ShowProducts from '../show-cart'
// import Ionicons from 'react-native-vector-icons/Ionicons';



  
//   const Tab = createBottomTabNavigator();
  
//   export default function TabNav() {
//     return (
//       <NavigationContainer>
//         <Tab.Navigator
//           screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//               let iconName;
  
//               if (route.name === 'Home') {
//                 iconName = focused
//                   ? 'ios-information-circle'
//                   : 'ios-information-circle-outline';
//               } else if (route.name === 'Settings') {
//                 iconName = focused ? 'ios-list-box' : 'ios-list';
//               }
  
//               // You can return any component that you like here!
//               return <Ionicons name={iconName} size={size} color={color} />;
//             },
//             tabBarActiveTintColor: 'tomato',
//             tabBarInactiveTintColor: 'gray',
//           })}
//         >
//           <Tab.Screen name="Home" component={HomeSec} />
//           <Tab.Screen name="Settings" component={ShowProducts} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     );
//   }