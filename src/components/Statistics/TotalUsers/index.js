import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    height: '20%',
    width: '100%',
    backgroundColor: '#444b58'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: '#438397',
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: '#438397'
  },
  differenceValue: {
    color: '#438397',
    marginRight: theme.spacing(1)
  }
}));

const TotalUsers = props => {
  const { className, ...rest } = props;
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  // const { reviewer, isFetchingReviewer } = state.reviewerReducer;

  useEffect(() => {
    // new Promise((resolve, reject) => {
    //     dispatch(fetchReviewer(user.id));
    //     resolve();
    //   })
    //   .then(() => {
    //     dispatch(doneFetchingReviewer());
    //   })
    //   .catch((err) => {
    //       console.log(err);
    //       dispatch(doneFetchingReviewer());
    //   });
  }, []);


  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              TOTAL USERS
            </Typography>
            <Typography variant="h3">1,600</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <PeopleIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TotalUsers.propTypes = {
  className: PropTypes.string
};

export default TotalUsers;
