import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Navbar, NavbarBrand}  from "reactstrap";
import '../App.css';

export default class Login extends Component {
	render() {
		return (

			<div>
				<Container>
					<Navbar color="light">
						<NavbarBrand>
							<Link to='/'>Q.<span>me</span></Link>
						</NavbarBrand>
					</Navbar>
				</Container>
				<Container>
					<Row>
						<Col md={{ size: 4, offset: 4}}>
							<div className = "formContainer">
								<Col sm={12}>
									<h3 className = "formHeader">Log in to your account</h3>
								</Col>
								<Form>
									<FormGroup>
									    <Label for="email">Email address</Label>
									    <Input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
									</FormGroup>
									<FormGroup>
									    <Label for="Password">Password</Label>
									    <Input type="password" className="form-control" id="Password1" placeholder="Enter password"/>
									    <small id="emailHelp" class="form-text text-muted">Forgot Password?</small>
									</FormGroup>
									  <Button type ="submit" color='success' size="sm" block>Login</Button>
								</Form>
							</div>
						</Col>

					</Row>
				</Container>
			</div>
		);
	}
}
