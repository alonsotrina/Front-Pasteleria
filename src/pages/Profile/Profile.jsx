import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <Fragment>
      <div className="flex h-screen justify-center items-start">
				
				<div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
					<div className="max-w-xl w-full p-6">
						<h1 className="text-3xl font-semibold mb-6 text-black text-center">
							Perfil de Usuario
						</h1>
						<h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
							Tus datos registrados{' '}  
						</h1>
						<div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
					</div>
            <div className="mt-4">
                <p className="text-gray-600"><strong>Nombre:</strong> </p>
                <p className="text-gray-600"><strong>Teléfono:</strong> </p>
                <p className="text-gray-600"><strong>Email:</strong> </p>
                <p className="text-gray-600"><strong>Región:</strong> </p>
                <p className="text-gray-600"><strong>Ciudad:</strong> </p>
                <p className="text-gray-600"><strong>Comuna:</strong> </p>
                <p className="text-gray-600"><strong>Dirección:</strong> </p>
          </div>            
						<div className="mt-4 text-sm text-gray-600 text-center">
							<p>
								
								<div>
				        <button
					        type="submit"
					      className="w-full bg-orange-400 text-white p-2 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
				        >
					        Editar Perfil
				        </button>
				      </div>
							</p>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
  );

};

export default Profile;