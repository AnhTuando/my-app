import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function Account() {
  const email = useSelector((state) => state.email);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.wrapItems}>
        <View>
          <Text>Tài khoản: {email}</Text>
        </View>
        <View>
          <Text>Số điện thoại: </Text>
        </View>
        <View>
          <Text>Địa chỉ: </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <View>
            <Text style={styles.logOutBtn}>Đăng xuất</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapItems: {
    height: 400,
    width: 400,
    padding: 30,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
    backgroundColor: "#fff",
  },
  logOutBtn: {
    width: 100,
    textAlign: "center",

    backgroundColor: "#0373fc",
    padding: 10,
    color: "#fff",
    borderRadius: 10,
  },
});
