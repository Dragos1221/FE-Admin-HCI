import { Container } from '@material-ui/core';
import * as React from 'react';
import { Component } from 'react';
import UpdateCV from '../components/UpdateCV';
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