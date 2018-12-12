import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
            <NavLink to="/" activeClassName="hurray">
                <ListItem button>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary={'Home'} />
                </ListItem>
            </NavLink>
            <NavLink to="/test" activeClassName="hurray">
                <ListItem button>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary={'Test'} />
                </ListItem>
            </NavLink>
        </List>
      </div>
    );

    return (
        <Router>
            <div>
                <Drawer open={this.props.open} onClose={this.props.onClose}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.props.onClose}
                    onKeyDown={this.props.onClose}
                >
                    {sideList}
                </div>
                </Drawer>
            </div>
        </Router>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);