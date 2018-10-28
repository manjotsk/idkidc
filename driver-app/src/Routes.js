import React from 'react'
import {HomeScreen, Maps, RegisterScreen} from './screens'
import { Router, Scene, Stack } from "react-native-router-flux"

class Routes extends React.Component {

    render = () =>
        <Router>
            <Stack key="root" hideNavBar>
              <Scene key="homeScreen" component={HomeScreen} initial/>
              <Scene key="maps" component={Maps}/>
              <Scene key="regScreen" component={RegisterScreen} />
            </Stack>
        </Router>
  }

export default Routes