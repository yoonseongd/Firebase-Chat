/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatRoom from '../screens/ChatRoom.js';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import CreateChatRoom from '../screens/CreateChatRoom';

const Stack = createStackNavigator();

export default function SignInStack() {
  async function logOut() {
    try {
      await auth().signOut();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ChatRoom"
          component={ChatRoom}
          options={({ navigation }) => ({
            title: 'Chat Room',
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => navigation.navigate(CreateChatRoom)}
              >
                <Icon name="ios-add" size={30} color="#444" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 10 }} onPress={logOut}>
                <Icon name="ios-log-out" size={30} color="#444" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="CreateChatRoom"
          component={CreateChatRoom}
          options={{
            title: 'Create a room',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
