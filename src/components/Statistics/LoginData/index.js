import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchLoginStats, doneFetchingLoginStats } from '../../../redux/actions/statisticsActions';
import moment from 'moment';
import { options } from './chart';


const useStyles = makeStyles(() => ({
  root: {
      height: '98%',
      backgroundColor: '#444b58'
    },
  chartContainer: {
    height: 500,
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LoginStats = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const { loginStats, isFetchingLoginStats } = state.statisticsReducer;

  useEffect(() => {
    new Promise((resolve, reject) => {
        dispatch(fetchLoginStats());
        resolve();
      })
      .then(() => {
        dispatch(doneFetchingLoginStats());
      })
      .catch((err) => {
          console.log(err);
          dispatch(doneFetchingLoginStats());
      });
  }, []);

  let data = {};
  if (loginStats !== undefined) {
    data = {
      labels: loginStats.map(day => day[0].split('T')[0]),
      datasets: [
        {
          label: 'Logins',
          backgroundColor: '#438397',
          data: loginStats.map(day => day[1])
        },
        {
          label: 'Reviews Submited',
          backgroundColor: '#C0C0C0',
          data: loginStats.map(day => day[2])
        }
      ]
    }
  }
  
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Login Data"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Bar
            data={data}
            options={options}
          />
        </div>
      </CardContent>
    </Card>
  );
};

LoginStats.propTypes = {
  className: PropTypes.string
};

export default LoginStats;
