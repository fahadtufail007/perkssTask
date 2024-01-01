import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeContainer, SplashScreen } from "../screens";
import { colors } from "./theme";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="splash" >
      <Stack.Screen
        name="splash"
        component={SplashScreen}
        options={{ headerShown: false }
        }
      />
      <Stack.Screen
        name="home"
        component={HomeContainer}
        options={{ headerShown: false }
        }
      />
   
    </Stack.Navigator>
  );
};

export default Auth;
