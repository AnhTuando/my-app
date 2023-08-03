import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Button,
  Dimensions,
  ToastAndroid,
  Animated,
} from "react-native";
import { useRef, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Logo from "../assets/Logo.png";
import Cloud from "../assets/cloud.png";
import { getEmail } from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const animatedValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    startAnimation1();
    startAnimation2();
  }, []);
  const startAnimation1 = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 20000,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 20000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  };
  const startAnimation2 = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 20000,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 20000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  };
  const animatedStyle1 = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [-200, 200],
        }),
      },
    ],
  };
  const animatedStyle2 = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [300, -300],
        }),
      },
    ],
  };
  const handleBtnPress = () => {
    navigation.navigate("Home");
  };
  const handleInputEmail = (text) => {
    dispatch(getEmail(text));
  };
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Animated.Image source={Cloud} style={[styles.box1, animatedStyle1]} />
        <Animated.Image source={Cloud} style={[styles.box2, animatedStyle2]} />
        <View style={styles.wrapLogo}>
          <Image resizeMode="contain" style={styles.logo} source={Logo} />
        </View>
        <View style={styles.wrapInputs}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="email"
            onChangeText={handleInputEmail}
          ></TextInput>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="password"
            secureTextEntry={true}
          ></TextInput>
          <View>
            <Button title="Đăng nhập" onPress={handleBtnPress} />
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fcbf74",
  },
  box1: {
    width: 80,
    height: 40,
    position: "absolute",
    top: 20,
  },
  box2: {
    width: 80,
    height: 40,
    position: "absolute",
    bottom: 50,
  },
  wrapLogo: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 80,
  },
  logo: {
    width: 200,
    height: 80,
  },
  wrapInputs: {
    width: Dimensions.get("window").width - 50,
    flexDirection: "column",
    justifyContent: "space-around",

    backgroundColor: "#fff",
    padding: 20,
    height: 300,
  },
  input: {
    height: 50,
    padding: 15,
    borderWidth: 1,
    borderColor: "#dedede",
  },
});
