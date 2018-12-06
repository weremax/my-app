import React from 'react';
import ReactDOM from 'react-dom';
import {
    createGenerateClassName,
    createMuiTheme,
    jssPreset,
    MenuItem,
    MuiThemeProvider,
    TextField
  } from "@material-ui/core";
  import { create } from "jss";
  import { JssProvider } from "react-jss";
import ReactWebComponent from 'react-web-component';
import './App.css';
import './tstyles.css';
import {StyleSheetManager} from "styled-components";

import TDrawer from './TDrawer';
import TChip from './TChip';
import CssBaseline from '@material-ui/core/CssBaseline';
import ShadowDOM from 'react-shadow';

let theme = createMuiTheme();
let portalContainer;
const jss = create(jssPreset());

const styleContainer = document.createElement('div');
const offerContainer = document.createElement('div');

class App extends React.Component {

    /*render() {
        return (
            <div>
                Hello World 2!
                <Chip label="Basic Chip" />
            </div>
        );
    }*/
 
    componentDidMount() {
        // Regular React lifecycle method
        let shadow = document.querySelector('body')
            .querySelector('my-component').shadowRoot;
        let other = document.createElement('div');
            other.id = 'other';
            shadow.appendChild(other);
        // const wrapper = document.createElement('div');

        shadow.appendChild(styleContainer);
        shadow.appendChild(offerContainer);

    }

    webComponentAttached() {
        let shadow = document.querySelector('body')
            .querySelector('my-component').shadowRoot;
        console.log('g', shadow);
        
        /*ReactDOM.render(
            <Chip label="Basic Chip" onClick={() => {alert('here')}}/>
            , shadow.getElementById('other')
        );*/
        /*const props = {
            MuiPopover: {
                container: () => {
                    if (portalContainer == null) {
                        portalContainer = shadow.appendChild(
                            document.createElement("div")
                        );
                    }
                    return portalContainer;
                }
            },
            MuiChip: {
                container: () => {
                    if (portalContainer == null) {
                        portalContainer = shadow.appendChild(
                            document.createElement("div")
                        );
                    }
                    return portalContainer;
                }
            }
        };
        const overrides = {
            MuiChip: {
                root: {
                    backgroundColor: '#444'
                }
            }
        };
        theme.props = props;
        theme.overrides = overrides;
        console.log('theme', theme);*/
    }

    render() {
        return (

                    <div className="App">
                    
                        <CssBaseline />
                        Hello World 2!
                        <TDrawer />
                        <TChip />
                    </div>
        );
    }
}

/*ReactDOM.render(
    <App />,
    document.getElementById('root')
)*/

/*ReactDOM.render(
    <App />
, document.querySelector('my-component'));*/

/*ReactWebComponent.create(
    ReactDOM.render(
        <App />,
        document.getElementById('root'))
, 'my-component');*/

ReactWebComponent.create(
    <App />
, 'my-component', false);



/*import React from 'react';
import ReactWebComponent from 'react-web-component';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactWebComponent.create(<App />, 'my-component');
registerServiceWorker();*/
