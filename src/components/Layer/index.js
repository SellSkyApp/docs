import React, { Component } from 'react';
import clsx from 'clsx';
import { compose } from "recompose";
import { Link, withRouter } from 'react-router-dom';

import {
    Grid,
    Drawer,
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';


import { withStyles } from '@material-ui/styles';

import HomeIcon from '@material-ui/icons/Home';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import MenuIcon from '@material-ui/icons/Menu';

//import { matchRoute } from '../../utils/utilsRouter'

//import * as ROUTE from '../../constants/routes'

const drawerWidth = 220;

const useStyles = (theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: 36,
  },
  title: {
    fontFamily: 'Dancing Script',
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.palette.common.white,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    overflowY: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflow: 'hidden',
    width: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      width: 64,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  iconButtonAvatar: {

  },
  item: {
    paddingTop: 3,
    paddingBottom: 3,
    color: theme.palette.primary.light,
    '&:hover,&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    padding: theme.spacing(0,2),
  },
  itemActive: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  itemPrimary: {
    fontSize: 'inherit',
  },
  itemIcon: {
    marginRight: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    minHeight: 'calc(100% - 40px)'
  },
  footer: {
    marginTop: 'auto',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main
  }
});


const categories = [
  { id: 'Home',    icon: <HomeIcon         style={{ fontSize: 30 }}/>, path: '/events'},
  { id: 'Name 2',  icon: <PictureAsPdfIcon style={{ fontSize: 30 }}/>, path: '/name2'},
  { id: 'Name 3',  icon: <LibraryBooksIcon style={{ fontSize: 30 }}/>, path: '/name3'},
  { id: 'Name 4',  icon: <LibraryBooksIcon style={{ fontSize: 30 }}/>, path: '/name4'}
];


class  Paperbase extends Component{

  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }

  componentDidMount(){
    let drawerListener = document.getElementById('drawer-left')
    if (drawerListener){
      drawerListener.addEventListener("mouseenter", this._handleDrawerOpen)
      drawerListener.addEventListener("mouseleave", this._handleDrawerOpen)
    }
  }

  componentWillUnmount(){
    let drawerListener = document.getElementById('drawer-left')
    if (drawerListener){
      drawerListener.removeEventListener("mouseon", this._handleDrawerOpen)
      drawerListener.removeEventListener("mouseleave", this._handleDrawerOpen)
    }
  }

  _handleDrawerOpen = event => {
    console.log(event.type)
    this.setState((prevState) => ({open: !prevState.open}))
  }

  render() {
    const { classes, children, location } = this.props;
    const { open } = this.state
    console.log(this.state)
    return(
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classes.appBar}
        >
          <Toolbar>          
            <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this._handleDrawerOpen}
                    edge="start"
                    className={classes.menuButton}
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography className={classes.title} noWrap>
                    Sellsky
                  </Typography>
                </Grid>
              </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          id = "drawer-left"
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}/>
          <Divider />
          {
              
                  <List disablePadding style={{marginTop: 4}}>
                  {
                      categories.map(({ id: childId, icon, path }) => (
                      <ListItem
                          key={childId} button component={Link} to={path} 
                          className={clsx(classes.item, location.pathname === path ? classes.itemActive : null)}
                          >
                          <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                          <ListItemText>
                          <span style={{fontWeight: location.pathname === path ? 'bold' : 'normal'}}>{childId}</span>
                          </ListItemText>
                      </ListItem>
                      ))
                      }
                  </List>
              
          }
          <div className={classes.footer}>
            <Typography variant="body2" align="center" style={{color: 'white', fontWeight: 'bold'}}>
              {
                open ? <>Produit par Sellsky{new Date().getFullYear()}.</>
                    : <>{new Date().getFullYear()}.</>
              }
            </Typography>
          </div>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          { children }
        </main>
      </div>
    );
  }
}


export default compose(
  withStyles(useStyles, {
      name: 'Paperbase'
  }),
  withRouter
)(Paperbase);
