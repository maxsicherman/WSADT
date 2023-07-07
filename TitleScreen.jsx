import React from 'react';
import {
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { sharedStyles, titleStyles } from './StyleSheet';

const Header = () => <View style={titleStyles.titleContainer}><Text style={titleStyles.titleHeader}>What Should Anna Do Today?🤔</Text></View>

function TitleScreen({ navigation }) {
  function start() {
   navigation.navigate('Main');
  } 

  return (
    <SafeAreaView style={sharedStyles.backgroundStyle}>
    <Header />
    <View style={titleStyles.startContainer}>
        <Pressable style={titleStyles.startButton} onPress={start}>
        <Text style={titleStyles.startButtonText}>Let's find out</Text>
        </Pressable>
    </View>
    </SafeAreaView>
  );
}

export default TitleScreen;
