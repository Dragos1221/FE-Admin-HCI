import { Container } from '@material-ui/core';
import * as React from 'react';
import { Component } from 'react';
import UpdateCV from '../components/UpdateCV';
import ServiceApi from '../remote/ServiceApi'
export interface UpdateCVPageProps {
}
 
export interface UpdateCVPageState {
    imgSrc:string;
    varsta:string;
    gen:string;
    casatorit:string;
    educatie:string;
    munca:string;
    nume:string;
}
 
class UpdateCVPage extends React.Component<UpdateCVPageProps, UpdateCVPageState> {
    private service:ServiceApi = new ServiceApi();
    constructor(props:UpdateCVPageProps) {
        super(props);
        this.state = {
            imgSrc:'public\\img.jpg',
            varsta:'',
            gen:'',
            casatorit:'',
            educatie:'assssssssssss',
            munca:'asdasdasd',
            nume:'Romete Razvan',
        }
    }

    async  componentDidMount(){
        const id = localStorage.getItem('idJob');

        if(id=== "-1")
        {
            this.setState({
                imgSrc:"",
                varsta:"",
                educatie:"",
                munca:"",
                nume:""
            })
            return;
        }

        let job;
        try{
            job =await this.service.getJobById(id);
            job=job.data[1];
        }catch(err)
        {
            console.log(err)
        }
        this.setState({
            imgSrc:job.photo_id,
            varsta:job.age,
            gen:job.sex,
            educatie:job.education,
            munca:job.professional,
            nume:job.name,
        })
    }

    handleChange = (data: any) => {
        this.setState({
            ...data,
        });
    };

    render() { 
        return (
            <div>
                <UpdateCV 
                {...this.state}
                handleChange={this.handleChange}
                />
            </div>
        );
    }
}
 
export default UpdateCVPage;