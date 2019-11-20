import React, { Fragment } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';

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

  const classes = useStyles();

  return (
    <div className={`${classes.root} ${classes.GridItem}`}>
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
            <div className={classes.difference}>
            <ArrowUpwardIcon className={classes.differenceIcon} />
            <Typography
                className={classes.differenceValue}
                variant="body2"
            >
                16%
            </Typography>
            <Typography
                className={classes.caption}
                variant="caption"
            >
                Since last month
            </Typography>
            </div>
        </CardContent>
        </Card>
    </div>
  );
};

TotalUsers.propTypes = {
  className: PropTypes.string
};

export default TotalUsers;