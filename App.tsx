import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./screen/MainScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
          <Stack.Screen name="main" component={HomeScreen} options={{title: 'Головна'}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
