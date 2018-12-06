import React from 'react';

  
import { withTheme } from '@material-ui/core/styles';
const jss = create(jssPreset());

let portalContainer;
let shadowRoot = document.querySelector('#shadow-root');
console.log('gg', shadowRoot);


/*const theme = createMuiTheme({
    props: {
      // Name of the component ⚛️
      MuiButtonBase: {
        // The properties to apply
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
      MuiChip: {
          color: 'green',
          /*root: {
            backgroundColor: '#555',
          },
          label: {
              color: 'green'
          }* /
      }
    },
  });*/



const Root = ({children}) => {
        return (
            
                    {children}
                
        )
}

export default Root;