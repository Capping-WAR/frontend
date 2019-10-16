import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { fetchRules, doneFetchingRules } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      backgroundColor: "#444B58",
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    item: {
      padding: theme.spacing(2),
    },
    GridItem: {
      paddingTop: 40
    },
    SideCol: {
      paddingLeft: 20,
      paddingRight: 20
    },
    ExpansionPanel: {
      backgroundColor: "#444B58",
    },
    rulesDropdown: {
      textAlign: 'left',
    }
  }));

const Rules = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const { isFetchingRule } = state;

    useEffect(() => {
        new Promise((resolve, reject) => {
            dispatch(fetchRules());
            resolve();
        })
        .then(() => {
            dispatch(doneFetchingRules());
        })
        .catch((err) => {
            dispatch(doneFetchingRules());
        });
    }, []);

    const spinner = isFetchingRule
        ? <CircularProgress color="secondary"/>
        : null;

    const { rules } = state;
    console.log(state)
    return (
        <Grid item xs>
          <div className={`${classes.root} ${classes.GridItem} ${classes.SideCol}`}>
            <Paper className={classes.paper}>Rules
                {spinner}
                {
                    (rules === undefined
                        ? (
                          <ExpansionPanel style={{backgroundColor: "#438397", color:"white"}}>
                            <Typography className={classes.heading}>No Rules Available</Typography>
                          </ExpansionPanel>
                        )
                        :(
                            rules.map((rule) => (
                                <ExpansionPanel style={{backgroundColor: "#438397", color:"white"}}>
                                    <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    > 
                                        <Typography className={classes.heading}>{rule[1]}</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                    <Typography style={{textAlign:"left"}}>
                                       {rule[2]}
                                    </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            ))
                        ) 
                    )
                }
            </Paper>
          </div> 
        </Grid>
    )
}

export default Rules;