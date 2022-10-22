import '../assets/styles/FromLogin.css'


function FromLogin() {
    return ( 
        <div className='logindiv'>
            <div className='division'>
            <p className='titulo'>¡BIENVENIDO!</p><br />
            <p className='subtitulo'>Inicio de sesión</p><br />
            <div className='division1'>
                <p>Correo</p>
                <input type="text" />
                <p>Contraseña</p>
                <input type="text" />
                <button>INICIO DE SESION</button>
            </div>
                <button className='register'>REGISTRARSE</button>
            </div>
        </div>
     );
}

export default FromLogin;