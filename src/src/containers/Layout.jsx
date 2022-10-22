import '../assets/styles/Layout.css'

function Layout({children}) {
    return ( 
        <div className="contenedor">
            {children}
        </div>        
     );
}

export default Layout;