import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import { Link, useNavigation } from "@react-navigation/native";
import Logo from "../assets/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function Navigation() {
  const navigation = useNavigation();
  const email = useSelector((state) => state.email);
  const handleListPressToList = () => {
    navigation.navigate("ListProducts");
  };
  const handleListPressToAccount = () => {
    navigation.navigate("Account");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleListPressToList}>
        <View style={styles.leftCol}>
          <Ionicons name="md-list" size={32} color="#171615" />
        </View>
      </TouchableOpacity>
      <View style={styles.centerCol}>
        <Image source={Logo} style={styles.img} />
      </View>
      <TouchableOpacity onPress={handleListPressToAccount}>
        <View style={styles.rightCol}>
          <Ionicons name="person-circle-outline" size={32} color="#171615" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff7e6",
    position: "sticky",
    top: 0,
    paddingVertical: 10,
    zIndex: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#dedede",
  },
  leftCol: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  centerCol: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  rightCol: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  img: {
    width: 120,
    height: 50,
  },
});
