import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Navbar, NavbarBrand}  from "reactstrap";
import '../App.css';

export default class Register extends Component {
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
						<Col md={{size: 4, offset: 4}}>
						<div className = "formContainer">
							<Col sm={12}>
								<h3 className = "formHeader">New User Regisration</h3>
							</Col>
							<Form>
								<FormGroup>
								    <Label for="email">Email address</Label>
								    <Input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
								</FormGroup>
								<FormGroup>
								    <Label for="username">Username</Label>
								    <Input type="email" className="form-control" id="username" placeholder="Enter username"/>
								</FormGroup>
								<FormGroup>
								    <Label for="Password">Password</Label>
								    <Input type="password" className="form-control" id="Password" placeholder="Enter password"/>
								    <small id="emailHelp" className="form-text text-muted"><Link to='/Login'>Already have an Account?</Link></small>

								</FormGroup>
								  <Button type="submit" color='success' size="sm" block>Create account</Button>
							</Form>
						</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
