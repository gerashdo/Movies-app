import { createStackNavigator } from '@react-navigation/stack';
import { Movie } from '../interfaces/movie';
import { DetailScreen } from '../screens/DetailScreen';
import { HomeScreen } from '../screens/HomeScreen';

export type RootStackParamList = {
    Home: undefined;
    DetailScreen: Movie;
}

const Stack = createStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            cardStyle:{
                backgroundColor: 'white'
            },
            headerShown: false,
        }}
    >
      <Stack.Screen name="Home" component={ HomeScreen } />
      <Stack.Screen name="DetailScreen" component={ DetailScreen } />
    </Stack.Navigator>
  );
}