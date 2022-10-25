import Header from "../components/Header";
import Layout from "../containers/Layout";
import FromRegister from "../components/FromRegister";
import '../assets/styles/Register.css'

function Register() {
    return (
        <div className="imagen-R">
            <div className="blur-R">
                <Header>
                    <div className="logo">
                        <p>LOGO</p>
                    </div>
                </Header>
                <Layout>
                    <FromRegister></FromRegister>
                </Layout>
            </div>
        </div>
      );
}

export default Register;