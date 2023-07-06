import { StyleSheet } from "react-native";
import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView } from "react-native";
import { styles } from "./styles";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group} />
        <View style={styles.group}>
          <Image style={[styles.logo, _styles.dZJEByud]} source={require("./Screenshot 2023-07-06 3.00.50 PM.png")} />
          <Text style={styles.text}>
            Let's build something amazing together!
          </Text>
          <Text style={[styles.instructions, _styles.LxqRrJZx]}>{"\n           welcome to XENOMORPHS \n          "}</Text>
          <Text style={styles.step}></Text>
          <Text style={styles.step}></Text>
          <Text style={styles.step}>{"      on your journey you  will be and xenomorph emperise now go grow your army "}</Text>
        </View>
        <Text style={styles.footer}>Made with ❤️ by Crowdbotics</Text>
      </ScrollView>
    </SafeAreaView>;
};

export default WelcomeScreen;

const _styles = StyleSheet.create({
  LxqRrJZx: {
    fontSize: 17
  },
  dZJEByud: {
    width: 190,
    height: 198
  }
});