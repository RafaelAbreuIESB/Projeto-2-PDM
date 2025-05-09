import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GerenciarDespesa from "./screens/GerenciarDespesa";
import DespesaRecente from "./screens/DespesaRecentes";
import TodasDespesas from "./screens/TodasDespesas";

export default function App() {
  const Tab = createBottomTabNavigator;
  function BottonTabScreen() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="DespesasRecentes" component={DespesaRecente} />
        <Tab.Screen name="TodasDespesas" component={TodasDespesas} />
      </Tab.Navigator>
    );
  }

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Despesas" component={BottonTabScreen} />
        <Stack.Screen name="GerenciarDespesas" component={GerenciarDespesa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
    alignItems:'center',
    justifyContent: 'center',
  },
});