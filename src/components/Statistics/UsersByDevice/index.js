import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Divider,
  Typography
} from '@material-ui/core';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import RefreshIcon from '@material-ui/icons/Refresh';
import AppleIcon from '@material-ui/icons/Apple';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchUsersByOS, doneFetchingUsersByOS } from '../../../redux/actions/statisticsActions';

const useStyles = makeStyles(theme => ({
  root: {
    height: '75%',
    backgroundColor: '#444b58'
  },
  chartContainer: {
    position: 'relative',
    height: '300px'
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  device: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  deviceIcon: {
    color: 'white'
  }
}));

const UsersByDevice = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const { usersByOS, isFetchingUsersByOS } = state.statisticsReducer;

  useEffect(() => {
    new Promise((resolve, reject) => {
        dispatch(fetchUsersByOS());
        resolve();
      })
      .then(() => {
        dispatch(doneFetchingUsersByOS());
      })
      .catch((err) => {
          console.log(err);
          dispatch(doneFetchingUsersByOS());
      });
  }, []);

  const options = {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: '#444b58',
      titleFontColor: 'white',
      bodyFontColor: 'white',
      footerFontColor: 'white'
    }
  };

  const calcPercent = () => {
    const total = usersByOS.Windows + usersByOS.Mac + usersByOS.Other;
    return {
      windows: Math.round(100*(usersByOS.Windows/total)), 
      mac: Math.round(100*(usersByOS.Mac/total)), 
      other: Math.round(100*(usersByOS.Other/total))
    }
  }

  let devices= [];
  let data = [];
  if (usersByOS !== undefined) {
    let percentages = calcPercent();
    
    data = {
      datasets: [
        {
          data: [percentages.windows, percentages.mac, percentages.other],
          backgroundColor: [
            '#438397',
            '#1c1e24',
            '#C0C0C0'
          ],
          borderWidth: 8,
          borderColor: 'black',
          hoverBorderColor: 'black'
        }
      ],
      labels: ['Windows', 'Mac', 'Other']
    };

    devices = [
      {
        title: 'Windows',
        value: percentages.windows,
        icon: <LaptopMacIcon />,
        color: '#438397'
      },
      {
        title: 'Mac',
        value: percentages.mac,
        icon: <AppleIcon />,
        color: '#1c1e24'
      },
      {
        title: 'Other',
        value: percentages.other,
        icon: <DevicesOtherIcon />,
        color: '#C0C0C0'
      }
    ];
  }
  

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Users By OS"
      />
      <Divider />
      <CardContent>
        {(usersByOS === undefined
          ? (
            <Typography variant="h3">Data Unavailable</Typography>
          ) :
          (
            <div className={classes.chartContainer}>
              <Doughnut
                data={data}
                options={options}
              />
              <div className={classes.stats}>
                {devices.map(device => (
                  <div
                    className={classes.device}
                    key={device.title}
                  >
                    <span className={classes.deviceIcon}>{device.icon}</span>
                    <Typography variant="body1">{device.title}</Typography>
                    <Typography
                      style={{ color: device.color }}
                      variant="h4"
                    >
                      {device.value}%
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
        
      </CardContent>
    </Card>
  );
};

UsersByDevice.propTypes = {
  className: PropTypes.string
};

export default UsersByDevice;
