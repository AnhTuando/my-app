import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Button,
  TextInput,
  ToastAndroid,
} from "react-native";
import {
  minus,
  plus,
  buyBtn,
  handleNameInput,
  handleAdressInput,
  handlePhoneInput,
} from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Checkout({ route }) {
  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "Đặt hàng thành công",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };
  const { item } = route.params;
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.quantity);
  const hanldePlus = () => {
    dispatch(plus());
  };
  const hanldeMinus = () => {
    dispatch(minus());
  };
  // submit
  const handleBuyBtn = (item) => {
    dispatch(buyBtn(item));
    showToastWithGravity();
  };
  const getName = (text) => {
    dispatch(handleNameInput(text));
  };
  const getAdress = (text) => {
    dispatch(handleAdressInput(text));
  };
  const getPhone = (text) => {
    dispatch(handlePhoneInput(text));
  };
  return (
    <SafeAreaProvider>
      <Navigation />
      <ScrollView>
        <View style={styles.container}>
          {/* product */}
          <View style={styles.productInfo}>
            <Image style={styles.img} source={item.src} />
            <View style={styles.wrapTexts}>
              <Text style={styles.textName}>{item.name}</Text>
              <Text style={styles.textPrice}>
                {item.price.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </Text>
            </View>
          </View>
          {/* customer solutions */}
          <View style={styles.cusTomerSolution}>
            <View style={styles.quantityChoose}>
              <View style={styles.wrapHandle}>
                <Text style={styles.wrapHandleBtn} onPress={() => hanldePlus()}>
                  <Ionicons name="add-outline" size={30} color="#fcb035" />
                </Text>
                <Text style={styles.quantity}>{quantity}</Text>
                <Text
                  style={styles.wrapHandleBtn}
                  onPress={() => hanldeMinus()}
                >
                  <Ionicons name="remove-outline" size={30} color="#fcb035" />
                </Text>
              </View>
              <View style={styles.wrapPayBtn}>
                <Button
                  color={"#e6870b"}
                  title="Mua ngay"
                  onPress={() => handleBuyBtn(item)}
                />
              </View>
            </View>
            <View style={styles.inputWrap}>
              <TextInput
                onChangeText={getName}
                style={styles.input}
                placeholder="Hãy nhập tên"
              />
              <TextInput
                onChangeText={getPhone}
                style={styles.input}
                placeholder="Số điện thoại"
              />
              <TextInput
                onChangeText={getAdress}
                style={styles.input}
                placeholder="Địa chỉ giao hàng"
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  //   product info
  productInfo: {
    backgroundColor: "#fff",
  },
  img: {
    width: Dimensions.get("window").width,
    height: 400,
  },
  wrapTexts: {
    padding: 20,
    flexDirection: "column",

    alignItems: "flex-start",
  },
  textName: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textPrice: {
    color: "#fc2d2d",
  },
  //* customer solutions */
  cusTomerSolution: {
    backgroundColor: "#fff",
    marginTop: 20,
    paddingVertical: 20,
  },
  quantityChoose: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  wrapPayBtn: {
    flex: 1,
  },
  wrapHandle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  wrapHandleBtn: {
    width: 40,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#fef3d7",
  },
  quantity: {
    fontWeight: "bold",
    fontSize: 20,
  },
  inputWrap: {
    flexDirection: "column",
    marginVertical: 10,
    padding: 20,
  },
  input: {
    height: 50,
    padding: 15,
    borderWidth: 1,
    borderColor: "#dedede",
    marginBottom: 5,
  },
});
