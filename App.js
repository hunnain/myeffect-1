import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import HomeComponent from './Apps/Component/HomeComponent/HomeComponent' 
import SignupComponent from './Apps/Component/SignupComponent/SignupComponent'
import LoginComponent from './Apps/Component/loginComponent/loginComponent'
import GlobalGoalsComponents from './Apps/Component/GlobalGoalsComponent/GlobalGoalsComponent'
import GroupListComponents from './Apps/Component/GroupList/GroupList'
import StudentComponent from './Apps/Component/StudentComponent/StudentComponent'
import CheckingEvent from './Apps/Component/CheckingEvent/CheckingEvent'
import NewsFeed from './Apps/Component/NewsFeed/NewsFeed'
import ParkdayComponent from './Apps/Component/parkdayComponent/parkdayComponent'
import ShiftComponent from './Apps/Component/shiftComponent/shiftComponent'
import MitzvagComponent from './Apps/Component/MitzvagFood/MitzvagFood'
import ThankyouComponent from './Apps/Component/ThankyouComponent/ThankyouComponent'
import ActionsList from './Apps/Component/ActionsList/ActionList'
import GroupComponent from './Apps/Component/GroupComponent/GroupComponent'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      {/* <HomeComponent /> */}
        {/* <LoginComponent /> */}
        {/* <SignupComponent /> */}
        {/* <GlobalGoalsComponents /> */}
        {/* <GroupListComponents /> */}
        {/* <StudentComponent /> */}
        {/* <CheckingEvent /> */}
        {/* <NewsFeed /> */}
        {/* <ParkdayComponent /> */}
        {/* <ShiftComponent /> */}
        {/* <MitzvagComponent /> */}
        {/* <ThankyouComponent /> */}
        {/* <ActionsList  /> */}
        {/* <GroupComponent /> */}
        <Router>
      <Scene key="root">
        <Scene key="home"
          component={HomeComponent}
          hideNavBar={true}
          initial
        />
        <Scene
          key="signup"
          component={SignupComponent}
          hideNavBar={true}
        />
          <Scene
          key="login"
          component={LoginComponent}
          hideNavBar={true}
        />
          <Scene
          key="checkingevent"
          component={CheckingEvent}
          hideNavBar={true}
        />
          <Scene
          key="globalgoals"
          component={GlobalGoalsComponents}
          hideNavBar={true}
        />
        <Scene
          key="grouplist"
          component={GroupListComponents}
          hideNavBar={true}
        />
        <Scene
          key="student"
          component={StudentComponent}
          hideNavBar={true}
        />
        <Scene
          key="newsfeed"
          component={NewsFeed}
          hideNavBar={true}
        />
          <Scene
          key="actionlist"
          component={ActionsList}
          hideNavBar={true}
        />
        <Scene
          key="shiftcomponent"
          component={ShiftComponent}
          hideNavBar={true}
        />
        <Scene
          key="parkday"
          component={ParkdayComponent}
          hideNavBar={true}
        />
          <Scene
          key="mitzvagComponent"
          component={MitzvagComponent}
          hideNavBar={true}
        />
        <Scene
          key="thankyou"
          component={ThankyouComponent}
          hideNavBar={true}
        />
      </Scene> 
    </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    height: hp('100%'),
    // backgroundColor: 'red',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});