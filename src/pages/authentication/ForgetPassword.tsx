import { Formik, Field } from 'formik';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, Col, Form, Label, Row } from 'reactstrap';
import { emailValidation } from '../../common/validations';

const ForgetPassword = () => {
	const onSubmit = (user: any) => {
		console.log(user);
	};

	return (
		<Row className='mt-5 justify-content-center w-100'>
			<Col xl='4' lg='5' md='6' sm='8' xs='11' className='mt-5'>
				<Card>
					<CardBody>
						<Formik initialValues={{ email: '' }} onSubmit={() => {}}>
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
												<Label htmlFor='email' className='label'>
													Email
												</Label>
												<Field
													autoComplete='off'
													type='email'
													name='email'
													className={`form-control input ${
														emailValidation(values.email) &&
														touched?.email &&
														'is-invalid mb-0'
													}`}
													onChange={handleChange}
													required
												/>
												{emailValidation(values.email) && touched?.email && (
													<span className='text-danger small'>
														{emailValidation(values.email)}
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

export default ForgetPassword;
