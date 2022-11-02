import { Formik, Field } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Button,
	Card,
	CardBody,
	Col,
	Form,
	InputGroup,
	InputGroupText,
	Label,
	Row,
} from 'reactstrap';
import { isRequired, passwordValidation } from '../../common/validations';

const Login = () => {
	//UseState Hooks
	const [passwordType, setPasswordType] = useState<string>('password');

	//User Defined Functions Start
	const togglePasswordType = () => {
		passwordType === 'password'
			? setPasswordType('text')
			: setPasswordType('password');
	};

	const onSubmit = (user: any) => {
		console.log(user);
	};
	//User Defined Functions End

	return (
		<Row className='mt-5 justify-content-center w-100'>
			<Col xl='4' lg='5' md='6' sm='8' xs='11' className='mt-5'>
				<Card>
					<CardBody>
						<Formik
							initialValues={{ userOrEmail: '', password: '' }}
							onSubmit={() => {}}>
							{(props) => {
								const {
									values,
									touched,
									// errors,
									// dirty,
									// isSubmitting,
									handleChange,
									// handleBlur,
									// handleSubmit,
									// handleReset,
									// setFieldValue
								} = props;
								return (
									<Form
										onSubmit={(e) => {
											e.preventDefault();
											onSubmit(values);
										}}>
										<Row className='mt-3'>
											<div className='form-input'>
												<Label htmlFor='userOrEmail' className='label'>
													Username or Email
												</Label>
												<Field
													autoComplete='off'
													type='text'
													name='userOrEmail'
													className={`form-control input ${
														isRequired(values.userOrEmail) &&
														touched?.userOrEmail &&
														'is-invalid mb-0'
													}`}
													onChange={handleChange}
													required
												/>
												{isRequired(values.userOrEmail) &&
													touched?.userOrEmail && (
														<span className='text-danger small'>
															{isRequired(values.userOrEmail)}
														</span>
													)}
											</div>
										</Row>
										<Row className='mt-3'>
											<div className='form-input'>
												<Label htmlFor='password' className='label'>
													Password
												</Label>
												<InputGroup>
													<Field
														autoComplete='off'
														type={passwordType}
														name='password'
														className={`form-control input ${
															passwordValidation(values.password) &&
															touched?.password &&
															'is-invalid mb-0'
														}`}
														onChange={handleChange}
														required
													/>
													<InputGroupText onClick={togglePasswordType}>
														{passwordType === 'password' ? (
															<i className='fa fa-eye'></i>
														) : (
															<i className='fa fa-eye-slash'></i>
														)}
													</InputGroupText>
												</InputGroup>
												{passwordValidation(values.password) &&
													touched?.password && (
														<span className='text-danger small'>
															{passwordValidation(values.password)}
														</span>
													)}
											</div>
										</Row>
										<Row className='mt-4 px-2'>
											<Button color='danger' type='submit'>
												Login
											</Button>
										</Row>
										<Row className='mt-3 text-center'>
											<p>
												New Here?{' '}
												<Link className='text-danger' to='/registration'>
													Register !!!!
												</Link>
											</p>
										</Row>
										<Row className='text-center'>
											<Link className='text-danger' to='/forgot-password'>
												Forgotten Password
											</Link>
										</Row>
									</Form>
								);
							}}
						</Formik>
					</CardBody>
				</Card>
			</Col>
		</Row>
	);
};

export default Login;
