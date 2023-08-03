import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function ListProducts() {
  function generateRandomId() {
    const timestamp = new Date().getTime(); // Lấy thời gian hiện tại theo millisecond
    const randomId = Math.random().toString(36).substring(2, 15); // Tạo một số ngẫu nhiên có 13 ký tự
    return `${timestamp}_${randomId}`;
  }
  const randomId = generateRandomId();
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.productsData);
  return (
    <SafeAreaProvider>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.title}>
            <Ionicons name="newspaper-outline" size={32} color="#d9a743" />
            <Text style={styles.text}>Lịch sử đơn hàng</Text>
          </View>

          {productsData.map((item) => (
            <View style={styles.wrapCart} key={randomId}>
              <View style={styles.wrapItems}>
                <Image source={item.src} style={styles.img} />

                <View style={styles.wrapItemsText}>
                  <Text>
                    <Text style={styles.portName}>Sản phẩm:</Text> {item.name}
                  </Text>
                  <Text>
                    <Text style={styles.portName}>Giá:</Text>
                    {item.price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </Text>
                  <Text>
                    <Text style={styles.portName}>Số lượng:</Text>
                    {item.quantity}
                  </Text>
                </View>
              </View>
              <View style={styles.wrapCustomer}>
                <Text style={styles.textWrap}>
                  <Text style={styles.portName}>Khách hàng:</Text>
                  {item.customerName}
                </Text>
                <Text style={styles.textWrap}>
                  <Text style={styles.portName}>SĐT:</Text>
                  {item.customerPhone}
                </Text>
                <Text style={styles.textWrap}>
                  <Text style={styles.portName}>Địa chỉ giao hàng:</Text>{" "}
                  {item.customerAddress}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVerticalVertical: 20,
    height: Dimensions.get("window").height,
    backgroundColor: "#fff",
  },
  // title
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  wrapCart: {
    borderBottomColor: "#ccc",
    marginVertical: 10,
    borderBottomWidth: 1,
  },
  // items
  wrapItems: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },
  wrapItemsText: {
    flexDirection: "column",
    justifyContent: "space-around",
    height: 100,
  },
  // customer Info
  wrapCustomer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  textWrap: {
    marginVertical: 5,
  },
  portName: {
    color: "#d9a743",
  },
  // none item
  noneItemWrap: {
    textAlign: "center",
    color: "#ccc",
    fontSize: 20,
    fontWeight: "bold",
  },
});
