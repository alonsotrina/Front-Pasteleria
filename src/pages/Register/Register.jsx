import React  from 'react';
import RegisterForm from '../../components/registerform/RegisterForm';
import { Link } from 'react-router-dom';


const Register = () => {
	return (
		<div className="flex justify-center items-start">

			<div className="w-full bg-white lg:w-1/2 flex items-center justify-center rounded-3xl">
				<div className="max-w-xl w-full p-6">
					<h1 className="text-3xl font-semibold mb-6 text-black text-center">
						Registrate
					</h1>
					<h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
						Registrate para poder continuar con tu compra{' '}
					</h1>
					<div className="mt-4 flex flex-col lg:flex-row items-center justify-between">

					</div>

					<RegisterForm />

					<div className="mt-4 text-sm text-gray-600 text-center">
						<p>
							Ya estas registrado?{' '}
							<Link
								to="/login"
								className="text-black hover:underline"
							>
								Login Aqui
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;