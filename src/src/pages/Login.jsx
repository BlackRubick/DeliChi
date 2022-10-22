import Header from "../components/Header";
import Layout from "../containers/Layout";
import FromLogin from "../components/FromLogin";
import '../assets/styles/Login.css'

function Login() {
    return ( 
        <>
        <Header>
            <div className="logo">
                <p>LOGO</p>
            </div>
        </Header>
        <Layout>
            <FromLogin></FromLogin>
        </Layout>
        </>
     );
}

export default Login;