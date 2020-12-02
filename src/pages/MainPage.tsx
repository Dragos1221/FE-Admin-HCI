import * as React from 'react';
import { Component } from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import JobsList2 from '../../src/components/JobsList2'
import { Button, Card, Typography } from '@material-ui/core';
import classes from '*.module.css';

export interface MainPageProps {
    classes: any;
}
 
export interface MainPageState {
    
}

const styles = createStyles({
	jobCard: {
		width:'230px',
    },
    cardBaza:{
        width:'230px',
        textAlign:'center'
    },
    buttonDescarca:{
        width:'100px',
        height:'100px'
    }
});


class MainPage extends React.Component<MainPageProps, MainPageState> {
    render() { 
        const {classes} = this.props
        return (
            <div>
                <Card className={classes.jobCard}>
                    <JobsList2></JobsList2>
                    <Button variant="contained" color="primary">
                        Primary
                    </Button>
                    <Button variant="contained" color="secondary">
                        Secondary
                    </Button>
                </Card>
                <Card className={classes.jobCard}>
                <JobsList2></JobsList2>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                </Card>
                <Card className={classes.cardBaza} >
                <Typography variant="h5" component="h2">
                     Baza de date
                </Typography>
                <Button className={classes.buttonDescarca} variant="contained" color="secondary">
                    DESCARCA
                </Button>

                </Card>
            </div>        
        );
    }
}
 
export default withStyles(styles) (MainPage);