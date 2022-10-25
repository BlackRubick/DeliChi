import Header from "../components/Header";
import Layout from "../containers/Layout";
import FromLogin from "../components/FromLogin";
import '../assets/styles/Login.css'

function Login() {
    return (
        <div className="imagen-L">
            <div className="blur-L">
                <Header>
                    <div className="logo">
                        <p>LOGO</p>
                    </div>
                </Header>
                <Layout>
                    <FromLogin></FromLogin>
                </Layout>
            </div>
        </div>
     );
}

export default Login;