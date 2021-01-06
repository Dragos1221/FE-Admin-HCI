import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import JobsList2 from '../../src/components/JobsList2'
import { Button, Card, Typography } from '@material-ui/core';
import ServiceApi from '../remote/ServiceApi';
import { RouteComponentProps } from 'react-router-dom';
import CvlistComponent from '../components/CvList'


export interface MainPageProps extends RouteComponentProps {
    classes: any;
}
 
export interface MainPageState {
    jobsList: any;
    cvList  : any;
}

const styles = createStyles({
	cvCard: {
        width:'230px',
        height:'400px',
    },
    cardBaza:{
        width:'230px',
        height:'400px',
        textAlign:'center',
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'center'
    },
    buttonDescarca:{
        width:'100px',
        height:'100px'
    },
    cvListBox : {
    },
    pageBox : {
        width:'70%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:'90px',
        justifyContent:'space-between'
    },
    container:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    jobListBox:{
    },
    dbButtonBox:{
    },
    jobButtonBox:{
        display:'flex',
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
    jobList:{
        height:'90%'
    }
});


class MainPage extends React.Component<MainPageProps, MainPageState> {
    private service:ServiceApi;
    constructor(props:MainPageProps)
    {
        super(props);
        this.state ={
            jobsList:[],
            cvList:[],
        }
       this.service = new ServiceApi();
    }

    async componentDidMount()
    {
        const jobs =await this.service.getJobs();
        this.setState({
            jobsList:jobs.data,
        })
    }

    updateListJobs = (data:any)=>{
        this.setState({
            jobsList:data,
        });
    }

    showCv = (id:any)=>{
        localStorage.setItem("idJob",id);
        this.props.history.push('/updateCV');
    }

    newCV = ()=>{
        localStorage.setItem("idJob","-1");
        this.props.history.push('/updateCV');
    }

    selectedCv = async (id: any)=>{
        try{
            const data =await this.service.getCv(id);
            this.setState({
                cvList:data.data,
            })
        }catch(err)
        {
            console.log(err);
            this.setState({
                cvList:[],
            })
        }
    }


    save= ()=>{
        try{
            

        }catch(err)
        {
            alert("CV-ul nu a fost salvat");
        }
    }


    render() { 
        const {classes} = this.props
        return (
            <div className={classes.container}>
                <div className={classes.pageBox}>
                    <div className = {classes.cvListBox}>
                        <Card className={classes.cvCard}>
                            <div className={classes.jobList}>
                                <JobsList2 select={this.selectedCv} updateJob={(e:any)=>console.log(e)} updateListJobs={this.updateListJobs} items={this.state.jobsList} />
                            </div>
                            
                            <div className={classes.jobButtonBox}>
                                <Button variant="contained" color="primary">
                                    Primary
                                </Button>

                                <Button variant="contained" color="secondary">
                                    Secondary
                                </Button>
                            </div>
                        </Card>
                    </div>
                    <div className = {classes.cvListBox}>
                        <Card className={classes.cvCard}>
                            <div className={classes.jobList}>
                                <CvlistComponent selectCv={this.showCv} items={this.state.cvList} /></div>
                            
                            <div className={classes.jobButtonBox}>
                                <Button variant="contained" color="primary" onClick={this.newCV}>
                                    New CV
                                </Button>

                                <Button variant="contained" color="secondary">
                                    Secondary
                                </Button>
                            </div>
                        </Card>
                    </div>
                    <div className={classes.dbButtonBox}>
                        <Card className={classes.cardBaza} >
                            <Typography variant="h5" component="h2">
                                Baza de date
                            </Typography>

                            <Button className={classes.buttonDescarca} variant="contained" color="secondary">
                                DESCARCA
                            </Button>
                        </Card>
                    </div>
                </div>        
            </div>
        );
    }
}
 
export default withStyles(styles) (MainPage);