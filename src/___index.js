import React from "react";
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

import ShadowDOM from 'react-shadow';
import Chip from '@material-ui/core/Chip';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ef5350',
    },
    type: 'light'
  },
  status: {
    danger: 'orange',
  },
});

const styles = {
  root: {
    display: "block",
    color: "red",
  },
};

class App extends React.Component {

  constructor(props) {
      super(props);
  
      this.state = { open: false }
  }

  render () {
    const { classes } = this.props;

    return (
      <ShadowDOM>
          <div>
              <MuiThemeProvider theme={theme}>
                <Chip label="Basic Chip" />
              </MuiThemeProvider>
          </div>    
      </ShadowDOM>
    )
  }
};

App.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(App)