import * as React from 'react';
import { Component } from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import JobsList2 from '../../src/components/JobsList2'

export interface MainPageProps {
    
}
 
export interface MainPageState {
    
}


class MainPage extends React.Component<MainPageProps, MainPageState> {
    render() { 
        
        return (
            <div>
                <JobsList2></JobsList2>
            </div>
        );
    }
}
 
export default MainPage;