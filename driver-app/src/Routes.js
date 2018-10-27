import React from 'react'
import {HomeScreen} from './screens'
import { Router, Scene, Stack } from "react-native-router-flux"

export default class Routes extends React.Component {

    render = () =>
        <Router>
            <Stack key="root" hideNavBar>
              <Scene key="homeScreen" component={HomeScreen} initial/>
            </Stack>
        </Router>
  }