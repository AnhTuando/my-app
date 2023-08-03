import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./tabs/Home";
import Coffee from "./tabs/Coffee";
import Snack from "./tabs/Snack";
import Tea from "./tabs/Tea";
import HiTea from "./tabs/HiTea";
import ListProducts from "./tabs/ListProducts";
import Login from "./tabs/Login";
import Account from "./tabs/Account";
import { StyleSheet, Dimensions } from "react-native";
import Checkout from "./tabs/Checkout";
import { Provider } from "react-redux";
import { store } from "./features/store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
const Stack = createStackNavigator();
let persistor = persistStore(store);
export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Coffee" component={Coffee} />
              <Stack.Screen name="Snack" component={Snack} />
              <Stack.Screen name="Tea" component={Tea} />
              <Stack.Screen name="HiTea" component={HiTea} />
              <Stack.Screen name="ListProducts" component={ListProducts} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Checkout" component={Checkout} />
              <Stack.Screen name="Account" component={Account} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("window").height,
    backgroundColor: "#fff",
  },
});
