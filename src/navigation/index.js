import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {routeMap} from './routeMap';
import WelcomeScreen from '../presentation/screens/WelcomeScreen';
import VerificationCodeScreen from '../presentation/screens/VerificationCodeScreen';
import MapScreen from '../presentation/screens/MapScreen';
import CarSelectionScreen from '../presentation/screens/CarSelectionScreen';
import MyBookingScreen from '../presentation/screens/MyBookingScreen';
import CardAdditionScreen from '../presentation/screens/CardAdditionScreen';
import YourRideScreen from '../presentation/screens/YourRideScreen';
const RootStack = () => {
  const RootStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerTitle: '',
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
          headerShadowVisible: false,
          animation: 'slide_from_right',
        }}
        initialRouteName={routeMap.Welcome}>
        <RootStack.Screen
          name={routeMap.Welcome}
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name={routeMap.VerificationCode}
          component={VerificationCodeScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name={routeMap.Map}
          component={MapScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name={routeMap.CarSelection}
          component={CarSelectionScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name={routeMap.MyBooking}
          component={MyBookingScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name={routeMap.CardAddition}
          component={CardAdditionScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name={routeMap.YourRide}
          component={YourRideScreen}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default RootStack;
