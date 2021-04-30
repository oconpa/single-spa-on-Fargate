import React from "react";
import { navigateToUrl } from 'single-spa';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Root(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton href="/" onClick={navigateToUrl} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          Home
        </IconButton>
        <div>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Choose a Department
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <a href="/history" onClick={navigateToUrl} className="brand-logo">
              <MenuItem onClick={handleClose}>
                  History
              </MenuItem>
            </a>
            <a href="/science" onClick={navigateToUrl} className="brand-logo">
              <MenuItem onClick={handleClose}>
                  Science
              </MenuItem>
            </a>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>

  //   <nav>
  //   <div className="nav-wrapper">
      // <a href="/" onClick={navigateToUrl} className="brand-logo">
      //   single-spa
      // </a>
  //     <ul id="nav-mobile" className="right hide-on-med-and-down">
  //       <li>
  //         <a href="/" onClick={navigateToUrl}>
  //           Home
  //         </a>
  //       </li>
  //       <li>
  //         <a href="/angularJS" onClick={navigateToUrl}>
  //           AngularJS
  //         </a>
  //       </li>
  //     </ul>
  //   </div>
  // </nav>
  )
}

