import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeContainer, WorkFlowContainer, SplashScreen } from "../screens";
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
      <Stack.Screen
        name="workFlow"
        component={WorkFlowContainer}
        options={{
          headerShown: true,
          headerTitleStyle: {
            fontSize: 20,
            lineHeight: 24,
            fontWeight: '600',
            color: colors.blackColor,
            marginLeft: 85,
            textTransform: 'uppercase'
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Auth;
