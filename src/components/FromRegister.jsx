import '../assets/styles/FromRegister.css'

function FromRegister() {
    return ( 
        <div className='logindiv-r'>
            <div className='division'>
                <p className='titulo-r'>REGISTRO</p><br />
                <div className='division1-r'>
                    <p>Nombre: </p>
                    <input type="text" />
                    <p>Apellido: </p>
                    <input type="text" />
                    <p>Email: </p>
                    <input type="email" />
                    <p>Telefono: </p>
                    <input type="number" />
                    <p>Contraseña: </p>
                    <input type="password" />
                    <button>Guardar</button>
                </div>
            </div>
        </div>
     );
}

export default FromRegister;