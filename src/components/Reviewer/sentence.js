
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchSentenceToBeReviewed } from '../../redux/actions/sentenceActions'
import { submitAllRuleReviews  } from '../../redux/actions/reviewActions';
import { store } from '../../redux/store'
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { reject } from 'q';

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
    buttons: {
      margin: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      correct: {
        backgroundColor: theme.palette.text.secondary
      },
      incorrect: {
  
      },
    },
    card: {
      backgroundColor: "#444B58",
      textAlign: 'center',
    },
  }));

const Sentence = () => {
    const classes = useStyles();
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const { isFetchingSentence } = state;

    const { rules } = state.ruleReducer;
    const { user } = state.userReducer;
    const { sentence } = state.sentenceReducer; 

    const spinner = isFetchingSentence
    ? <CircularProgress color="secondary"/>
    : null;

    

    let review = {}
    if (sentence !== undefined) {
        review = {
            sentenceID: sentence.id,
            reviewerID: user.id,
            dateAdded: "now()"
        }
    }

    return (
        <div className={`${classes.root} ${classes.GridItem}`}>
            <Card className={classes.card}>
            <CardContent className={classes.card}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                Sentence
                </Typography>
                {spinner}
                <Typography variant="h5" component="h2" style={{textAlign:"left"}}>
                {
                    (sentence === undefined
                        ? (
                            "No Sentence Available"
                        )
                        :(
                            sentence.text
                        ) 
                    )
                }
                </Typography>
            </CardContent>
            <CardActions className={classes.buttons}>
                <Button variant="contained" size="medium" color="secondary" onClick={() =>
                    dispatch(submitAllRuleReviews({
                        ...review,
                        ruleReview: 1, // 1 means correct
                    }, rules))
                } className={classes.buttons.correct}>Correct</Button>
                <PopupState variant="popover" popupId="demo-popup-popover">
                    {popupState => (
                        <div>
                        <Button variant="contained" className={classes.buttons.incorrect} {...bindTrigger(popupState)}>
                            Incorrect
                        </Button>
                        <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                            }}
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                            }}
                        >
                            <Typography className={classes.typography} style = {{background:"#444b58"}}>
                            <form style ={{width:"300px", padding:"20px"}}>
                            <h3>What rule(s) does this violate?</h3>
                            <table style ={{color:"white"}}>
                            {
                                (rules === undefined
                                    ? (
                                        <tr><td>
                                            Rules not Available
                                        </td></tr>
                                    )
                                    :(
                                        rules.map((rule) => (
                                            <tr><td>
                                                <input
                                                type="checkbox"
                                                name="rule"
                                                value={rule[0]}
                                                />{rule[1]}
                                            </td></tr>
                                        ))
                                    )
                                )

                            }
                            <tr><td>
                            <Button variant="contained" className={classes.buttons.incorrect} {...bindTrigger(popupState)}>
                                Submit
                            </Button>
                            </td></tr></table>
                            </form>
                            </Typography>
                        </Popover>
                        </div>
                    )}
                    </PopupState>
            </CardActions>
            </Card>
            </div>
    )
}

export default Sentence;