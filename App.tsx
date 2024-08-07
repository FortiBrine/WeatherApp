import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./screen/MainScreen";
import WeatherScreen from "./screen/WeatherScreen";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
    Main: undefined;
    Weather: {
        city: string
    }
};

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{
              // headerShown: false,
          }}>
              <Stack.Screen name="Main" component={HomeScreen} options={{title: 'Головна'}} />
              <Stack.Screen name="Weather" component={WeatherScreen} options={{title: 'Погода'}} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}
