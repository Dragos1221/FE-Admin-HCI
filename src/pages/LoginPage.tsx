import * as React from 'react';
import Login from '../../src/components/Login';
import axios, { AxiosInstance } from 'axios';
import { RouteComponentProps, withRouter } from 'react-router-dom';


interface LoginPageProps extends RouteComponentProps {}

interface LoginPageState {
	password: string;
	email: string;
	isError: boolean;
	errorMessage: string;
}

class LoginPage extends React.Component<LoginPageProps, LoginPageState> {
	instance: AxiosInstance;
	constructor(props: LoginPageProps) {
		super(props);
		this.state = {
			password: '',
			email: '',
			isError: false,
			errorMessage: 'Parola nu este corecta.',
		};
		this.instance = axios.create({
			baseURL: "asdasd",
		});
	}

	handleChange = (data: any) => {
		this.setState({
			...data,
			isError: false,
		});
	};
	clearUserData() {
		this.setState({
			password: '',
			isError: true,
		});
	}

	submit = async() => {
		try {
			const result = await this.instance.post('/login', this.state);
			const token = result.data;
			localStorage.setItem('token', token);
			//this.props.history.push('/main');
		} catch (error) {
			//const { response } = error;
			this.setState({
				isError: true,
			});
			this.clearUserData();
		}
	};

	render() {
		return (
			<div>
				<Login
					{...this.state}
					handleChange={this.handleChange}
					submit={this.submit}
				></Login>
			</div>
		);
	}
}

export default withRouter(LoginPage);
