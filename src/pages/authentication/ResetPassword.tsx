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
import {
	confirmPasswordValidation,
	passwordValidation,
} from '../../common/validations';

const ResetPassword = () => {
	const [passwordType, setPasswordType] = useState<string>('password');
	const [confirmPasswordType, setConfirmPasswordType] =
		useState<string>('password');

	const togglePasswordType = () => {
		passwordType === 'password'
			? setPasswordType('text')
			: setPasswordType('password');
	};

	const toggleConfirmPasswordType = () => {
		confirmPasswordType === 'password'
			? setConfirmPasswordType('text')
			: setConfirmPasswordType('password');
	};

	const onSubmit = (user: any) => {
		console.log(user);
	};

	return (
		<Row className='mt-5 justify-content-center w-100'>
			<Col xl='4' lg='5' md='6' sm='8' xs='11' className='mt-5'>
				<Card>
					<CardBody>
						<Formik
							initialValues={{ password: '', confirmPassword: '' }}
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
										<Row className='mt-3'>
											<div className='form-input'>
												<Label htmlFor='confirmPassword' className='label'>
													Password
												</Label>
												<InputGroup>
													<Field
														autoComplete='off'
														type={confirmPasswordType}
														name='confirmPassword'
														className={`form-control input ${
															confirmPasswordValidation(
																values.password,
																values.confirmPassword
															) &&
															touched?.confirmPassword &&
															'is-invalid mb-0'
														}`}
														onChange={handleChange}
														required
													/>
													<InputGroupText onClick={toggleConfirmPasswordType}>
														{confirmPasswordType === 'password' ? (
															<i className='fa fa-eye'></i>
														) : (
															<i className='fa fa-eye-slash'></i>
														)}
													</InputGroupText>
												</InputGroup>
												{confirmPasswordValidation(
													values.password,
													values.confirmPassword
												) &&
													touched?.confirmPassword && (
														<span className='text-danger small'>
															{confirmPasswordValidation(
																values.password,
																values.confirmPassword
															)}
														</span>
													)}
											</div>
										</Row>
										<Row className='mt-4 px-2'>
											<Button color='danger' type='submit'>
												Submit
											</Button>
										</Row>
										<Row className='mt-3 text-center'>
											<p>
												Go to{' '}
												<Link className='text-danger' to='/login'>
													Login !!!!
												</Link>
											</p>
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

export default ResetPassword;
