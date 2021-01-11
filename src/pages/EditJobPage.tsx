import * as React from 'react';
import { Component } from 'react';
import EditJob from '../components/EditJob';

export interface UpdateJobPageProps {
    
}
 
export interface UpdateJobPageState {
    nume: string;
    descriere: string;
}
 
class UpdateJobPage extends React.Component<UpdateJobPageProps, UpdateJobPageState> {
    
    constructor(props: UpdateJobPageProps) {
        super(props);

        this.state = {
            nume: 'Bombardier',
            descriere: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        }
    }

    handleChange = (data: any) => {
        this.setState({
            ...data,
        });
    }

    render() { 
        return (
            <div>
                <EditJob
                {...this.state}
                handleData={this.handleChange}
                />
            </div>
        );
    }
}
 
export default UpdateJobPage;