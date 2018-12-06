import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const styles = {
    root: {
        border: 1,
        borderColor: 'rgb(0,125,125)',
    },
    label: {
        color: 'rgb(1, 99, 213)',
    }
};

let x = document.createElement('div');
x.id = 'chipbutton';

class TChip extends React.Component {
    render() {
        const { classes } = this.props;

        return(
                <Chip label="Basic Chip" classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
        label: classes.label, // class name, e.g. `classes-nesting-label-x`
      }}/>
        )
    }
}

export default withStyles(styles)(TChip);



/*const styles = {
        root: {
            color: 'rgba(0, 0, 0, 0.87)',
            height: 32,
            cursor: 'default',
            border: 'none',
            display: 'inline-flex',
            outline: 'none',
            padding: 0,
            fontSize: '0.8125rem',
            transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            boxSizing: 'border-box',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            borderRadius: 16,
            verticalAlign: 'middle',
            justifyContent: 'center',
            textDecoration: 'none',
            backgroundColor: '#e0e0e0',
        },
        label: {
            backgroundColor: '#ccc',
            cursor: 'inherit',
            display: 'flex',
            alignItems: 'center',
            userSelect: 'none',
            whiteSpace: 'nowrap',
            paddingLeft: 12,
            paddingRight: 12,
            color: 'rgb(31, 66, 215)',
        },
        chip: {
            '& label': {
                color: 'green'
            }
        }
};*/