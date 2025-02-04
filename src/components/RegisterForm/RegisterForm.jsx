
import React from 'react'
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


const RegisterForm = () => {
    const { handleSession } = useAuth();

	const [user, setUser] = useState({
		token: 'token user secret',
		role: 'admin',
		username: '',
		email: '',
		password: '',
	});

	const handleOnChange = (event) => {
		const { name, value } = event.target;
		setUser({
			...user,
			[name]: value,
		});
	};

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		handleSession(user);

		navigate('/admin');
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="space-y-4"
		>
			<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
				<div>
					<label
						htmlFor="nombre"
						className="block text-sm font-medium text-gray-700"
					>
						Nombre
					</label>
					<input
						onChange={handleOnChange}
						type="text"
						id="nombre_user"
						name="nombre_user"
						placeholder='Nombre'
						className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
					/>
				</div>
				<div>
					<label
						htmlFor="apellido"
						className="block text-sm font-medium text-gray-700"
					>
						Apellidos
					</label>
					<input
						onChange={handleOnChange}
						type="text"
						id="apellido_user"
						name="apellido_user"
						placeholder='Apellidos'
						className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
					/>
				</div>
			</div>
				<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
					<div>
					<label
						htmlFor="Telefono"
						className="block text-sm font-medium text-gray-700"
					>
					Teléfono
					</label>
					<input
						onChange={handleOnChange}
						type="text"
						id="telefono_user"
						name="telefono_user"
						placeholder='(+56) 9 12345678'
						className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
					/>
					</div>
					<div>
					<label
						htmlFor="Ciudad"
						className="block text-sm font-medium text-gray-700"
					>
						Ciudad
					</label>
					<input
						onChange={handleOnChange}
						type="text"
						id="ciudad"
						name="ciudad"
						placeholder='Ciudad'
						className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
					/>
				</div>
			</div>
			<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
			<div>
					<label
						htmlFor="Comuna"
						className="block text-sm font-medium text-gray-700"
					>
					Comuna
					</label>
					<select
						onChange={handleOnChange}
						type="text"
						id="comuna"
						name="comuna"
						placeholder='Comuna'
						className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
					>
					<option selected>Seleccione Comuna</option>
					<option value="STGO">Santiago</option>
					<option value="VLLS">Valparaíso</option>
					</select>
				</div>
				<div>
					<label
						htmlFor="Comuna"
						className="block text-sm font-medium text-gray-700"
					>
					Región
					</label>
					<select
						onChange={handleOnChange}
						type="text"
						id="Region"
						name="region"
						placeholder='Region'
						className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
					>
					<option selected>Seleccione Región</option>
					<option value="STGO">Región Metropolitana</option>
					<option value="VLLS">Región de Valparaíso</option>
					</select>
				</div>
			</div>	
				<div>
					<label
					htmlFor="direccion"
					className="block text-sm font-medium text-gray-700"
				>
					Dirección
				</label>
				<input
					onChange={handleOnChange}
					type="text"
					id="direccion"
					name="direccion"
					placeholder='Calle, avda, Número, Departamento'
					className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
				/>
			</div>
			
			<div>
				<label
					htmlFor="email"
					className="block text-sm font-medium text-gray-700"
				>
					Email
				</label>
				<input
					onChange={handleOnChange}
					type="text"
					id="email"
					name="email"
					placeholder='nombre@ejemplo.com'
					className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
				/>
			</div>
			<div>
				<label
					htmlFor="password"
					className="block text-sm font-medium text-gray-700"
				>
					Password
				</label>
				<input
					onChange={handleOnChange}
					type="password"
					id="password"
					name="password"
					placeholder='Ingrese su Password'
					className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
				/>
			</div>
			<div>
				<button
					type="submit"
					className="w-full bg-orange-400 text-white p-2 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
				>
					Registrarse
				</button>
			</div>
		</form>
	);
};

export default RegisterForm;