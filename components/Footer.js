import { StyleSheet, Image, Text, View, Button } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "@react-navigation/native";
import { changeValueRouter } from "../features/cartSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Footer() {
  const dispatch = useDispatch();
  const footerValueRouter = useSelector((state) => state.footerValueRouter);

  const handleRoutePress = (routeName) => {
    dispatch(changeValueRouter());
  };
  return (
    <View style={styles.container}>
      <Link to="/Home" onPress={() => handleRoutePress("Home")}>
        <View style={styles.item}>
          <Ionicons
            name="home-outline"
            size={32}
            color={footerValueRouter === "Home" ? "#d9a743" : "#66635C"}
          />
          <Text
            style={[
              styles.text,
              footerValueRouter === "Home" && styles.activeItem,
            ]}
          >
            Trang chủ
          </Text>
        </View>
      </Link>
      <Link to="/Coffee" onPress={() => handleRoutePress("Coffee")}>
        <View style={styles.item}>
          <Ionicons
            name="cafe-outline"
            size={32}
            color={footerValueRouter === "Coffee" ? "#d9a743" : "#66635C"}
          />
          <Text
            style={[
              styles.text,
              footerValueRouter === "Coffee" && styles.activeItem,
            ]}
          >
            Coffe
          </Text>
        </View>
      </Link>
      <Link to="/Snack" onPress={() => handleRoutePress("Snack")}>
        <View style={styles.item}>
          <Ionicons
            name="pizza-outline"
            size={32}
            color={footerValueRouter === "Snack" ? "#d9a743" : "#66635C"}
          />
          <Text
            style={[
              styles.text,
              footerValueRouter === "Snack" && styles.activeItem,
            ]}
          >
            Snack
          </Text>
        </View>
      </Link>
      <Link to="/Tea" onPress={() => handleRoutePress("Tea")}>
        <View style={styles.item}>
          <Ionicons
            name="leaf-outline"
            size={32}
            color={footerValueRouter === "Tea" ? "#d9a743" : "#66635C"}
          />
          <Text
            style={[
              styles.text,
              footerValueRouter === "Tea" && styles.activeItem,
            ]}
          >
            Tea
          </Text>
        </View>
      </Link>
      <Link to="/HiTea" onPress={() => handleRoutePress("HiTea")}>
        <View
          style={[
            styles.text,
            footerValueRouter === "HiTea" && styles.activeItem,
          ]}
        >
          <Ionicons
            name="beer-outline"
            size={32}
            color={footerValueRouter === "HiTea" ? "#d9a743" : "#66635C"}
          />
          <Text style={styles.text}>HiTea</Text>
        </View>
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#dedede",
    backgroundColor: "#fff",
    paddingVertical: 8,
    height: 70,
  },
  item: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  activeItem: {
    color: "#d9a743",
  },
  text: {
    fontSize: 10,
    color: "#66635C",
  },
});
