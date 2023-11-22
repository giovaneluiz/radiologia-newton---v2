import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './login/LoginScreen';
import SignupScreen from './signup/SignupScreen';
import HomeScreen from './home/HomeScreen';
import MenuScreen from './menus/MenusScreen';
import XRayScreen from './xray/XRayScreen';
import ListScreen from './question/ListScreen';
import ProfileScreen from './profile/ProfileScreen';
import AboutUsScreen from './aboutUs/AboutUsScreen';
import ContactScreen from './contact/ContactScreen';
import TermsOfUseScreen from './termsOfUse/TermsOfUseScreen'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainScreen = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#27A4F2',
        },
        headerTitleStyle: {
          color: 'white',
        },
      }}>
      <Drawer.Screen name="home" component={HomeScreen} options={homeOptions} />
      <Drawer.Screen name="perfil" component={ProfileScreen} options={profileOptions} />
      <Drawer.Screen name="sobre" component={AboutUsScreen} options={aboutUsOptions} />
      <Drawer.Screen name="contato" component={ContactScreen} options={contactOptions} />
      <Drawer.Screen name="questionList" component={ListScreen} options={questionListOptions} />
    </Drawer.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#27A4F2',
          },
          headerTitleStyle: {
            color: 'white',
          },
        }}>
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={loginOptions}
        />
        <Stack.Screen
          name="signup"
          component={SignupScreen}
          options={signupOptions}
        />
        <Stack.Screen
          name="termosDeUso"
          component={TermsOfUseScreen}
          options={termsOfUseOptions}
        />
        <Stack.Screen
          name="main"
          component={MainScreen}
          options={mainOptions}
        />
        <Stack.Screen
          name="menu"
          component={MenuScreen}
          options={menuOptions}
        />
        <Stack.Screen
          name="xray"
          component={XRayScreen}
          options={xRayOptions}
        />
        <Stack.Screen
          name="contato"
          component={ContactScreen}
          options={contactOptions}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const loginOptions = {
  headerShown: false,
};

const mainOptions = {
  headerShown: false,
};

const signupOptions = {
  headerShown: false,
};

const termsOfUseOptions = {
  title: 'Termos de Uso',
};

const homeOptions = {
  title: 'Home',
};

const profileOptions = {
  title: 'Perfil',
};

const testsOptions = {
  title: 'Testes',
};

const aboutUsOptions = {
  title: 'Sobre nós',
};

const contactOptions = {
  title: 'Contato',
};

const questionListOptions = {
  title: 'Cadastro de Questões',
};

const menuOptions = {
  title: 'Anatomia',
};

const xRayOptions = {
  title: 'Raio X',
};

//codigo tarley
//https://snack.expo.dev/@tarley/radiologia-newton---azul
// cadastro https://projeto-odonto-api.onrender.com/signup
// login https://projeto-odonto-api.onrender.com/signin

