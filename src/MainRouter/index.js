import React from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import HomeScreen from '../HomeScreen';
import ProfileScreen from '../ProfileScreen';
import SideBar from '../SideBar';

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

const AppContainer = createAppContainer(HomeScreenRouter);

export default AppContainer;