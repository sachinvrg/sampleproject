import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Manager Pages
import Home from './Component/Manager/Home'
import Setting from './Component/Manager/Setting'

// Common Pages
import Login from './Component/CommonPages/Login'


const MainNavigator = createStackNavigator({
  
 
  Login: Login,
  Home:Home,
  Setting:Setting,
    },
  {
    initialRouteName: 'Login',
  }
);

const Navigation = createAppContainer(MainNavigator);

class App extends React.Component {
  
  render() {
    console.disableYellowBox = true;
    return (
     
          <Navigation />
       
    );
  }
}

export default App;