import React from 'react';
import {Image, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import CategoryScreen from '../screens/CategoryScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HomeIcon from '../assets/images/icon_home.svg';
import SearchIcon from '../assets/images/icon_search.svg';
import CategoryIcon from '../assets/images/icon_category.svg';
import SettingsIcon from '../assets/images/icon_settings.svg';
import BottomTabBar from '../components/layout/navigation/BottomTabBar';

const Tab = createBottomTabNavigator();

const TABS = [
  {
    key: 'home',
    label: '인기검색어',
    icon: HomeIcon,
    component: HomeScreen,
    headerTitle: '인기검색어',
  },
  {
    key: 'search',
    label: '검색',
    icon: SearchIcon,
    component: SearchScreen,
    headerTitle: '검색',
  },
  {
    key: 'category',
    label: '카테고리',
    icon: CategoryIcon,
    component: CategoryScreen,
    headerTitle: '카테고리',
  },
  {
    key: 'settings',
    label: '설정',
    icon: SettingsIcon,
    component: SettingsScreen,
    headerTitle: '설정',
  },
];

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <BottomTabBar {...props} />}>
      {TABS.map(tab => (
        <Tab.Screen
          key={tab.key}
          name={tab.key}
          component={tab.component}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              const IconComponent = tab?.icon;
              return IconComponent ? (
                <IconComponent width={size} height={size} color={color} />
              ) : null;
            },
            tabBarIconStyle: {
              width: 24,
              height: 24,
            },
            tabBarLabel: tab.label,
            headerShown: false,
          }}
        />
      ))}
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
