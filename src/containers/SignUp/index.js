/**
 * 
 */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import * as Yup from 'yup';
import { Face, Fingerprint } from '@material-ui/icons'
import Typography from '@material-ui/core/Typography';
import { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { fetchReviewer, doneFetchingReviewer, resetReviewer} from '../../redux/actions/reviewerActions';
import { addReviewer } from '../../redux/actions/reviewerActions';
import Cookies from 'universal-cookie';


const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#1c1e24',
          dark: '#131519',
        },
        secondary: {
          main: '#33bfff',
          dark: '#2385b2',
        },
        error: {
          main: '#f50057'
        }
    },
  });

const useStyles = makeStyles(theme => ({
    '@global': {
    body: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="">
          WAR
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const checkEmptyArr = (arr) => {
    if (Array.isArray(arr)) {
        if (arr.length === 0) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}
  
const SignUp = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [user, setUser] = useState({id: '20074558'});
    const state = useSelector(state => state);
    const { reviewer, isFetchingReviewer } = state.reviewerReducer;

    const cookies = new Cookies();
    if (cookies.get('cwid') !== undefined  && user === undefined) {
      setUser({id: cookies.get('cwid')})
    }
    useEffect(() => {
      new Promise((resolve, reject) => {
          dispatch(fetchReviewer(user.id));
          resolve();
        })
        .then(() => {
          dispatch(doneFetchingReviewer());
        })
        .catch((err) => {
            console.log(err);
            dispatch(doneFetchingReviewer());
        });
    }, []);
    
    return ((reviewer !== undefined ) && (!isFetchingReviewer) && (!checkEmptyArr(reviewer))) ? (
        <Redirect
        to={{ pathname: '/' }}
        />
    ) : (
        // ((cookies.get('cwid') === undefined) ?
        //     (
        //         window.location.replace('login')
        //     ) :
        //     (
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                        Sign up
                        </Typography>
                        <form className={classes.form} Validate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                onChange={e => setUser({
                                    ...user, 
                                    firstName:e.target.value
                                })}
                                autoFocus
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange={e => setUser({
                                    ...user, 
                                    lastName:e.target.value
                                })}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={e => setUser({
                                    ...user, 
                                    email:e.target.value
                                })}
                            />
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}

                            onClick={() => {
                                dispatch(addReviewer(user))
                                new Promise((resolve, reject) => {
                                    dispatch(fetchReviewer(user.id));
                                    resolve();
                                })
                                .then(() => {
                                    dispatch(doneFetchingReviewer());
                                })
                                .catch((err) => {
                                    console.log(err);
                                    dispatch(doneFetchingReviewer());
                                });
                            }}
                        >
                            Sign Up
                        </Button>
                        </form>
                    </div>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </Container> 
        //     )
        // )
    );
};

export default SignUp;
