import React from 'react'
import SocialButton from "./SocialButton";
import GoogleLogin from 'react-google-login';

import { GoogleLoginButton,FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import { LoginSocialFacebook } from 'reactjs-social-login';

import axios from 'axios';

import jwt_decode from 'jwt-decode';



const Check = () => {



    const handlelogin = (response) => {
        console.log(response.data);

        axios.post("http://localhost:7000/sociallog",{ headers:  { Authorization: `Bearer ${response.data.access_token}`}}, response.data)
            .then(res => {
                console.log(res)
            })

    }

    const handleloginerr = (err) => {
        console.error(err);
        alert("Sorry wrong user")
    };



    return (

        <div>

            <LoginSocialGoogle
                client_id="662929276038-74rjrn5q7bldva5c1lmr9370uvvq733t.apps.googleusercontent.com"
                scope="openid profile email"
                discoveryDocs="claims_supported"
                access_type="offline"
                onResolve={(data) => handlelogin(data)}
                onReject={(err) => handleloginerr(err)}
            >
                <GoogleLoginButton />
            </LoginSocialGoogle>




            <LoginSocialFacebook

                appId="193207383354542"
                onResolve={(data) => handlelogin(data)}
                onReject={(err) => handleloginerr(err)}
       

                
                  ><FacebookLoginButton/>

     </LoginSocialFacebook>

     
{/* 
<GoogleLogin
    clientId="662929276038-74rjrn5q7bldva5c1lmr9370uvvq733t.apps.googleusercontent.com"        
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  >login</GoogleLogin> */}



    {/* <SocialButton className='btn btn-danger' style={{ height: 60, width: 300, marginTop: '20px', marginRight: '20px' }}
                provider="google"
                appId="662929276038-13j2pr9kqqof9l2m0h6tkkb3hq9htcss.apps.googleusercontent.com"
                onLoginSuccess={handleSocialLogin}
                onLoginFailure={handleSocialLoginFailure}
            >
                Login with Google

            </SocialButton>


            <SocialButton className='btn btn-primary' style={{ height: 60, width: 300, marginTop: '20px' }}
                provider="facebook"
                appId="193207383354542"
                onLoginSuccess={handleSocialLogin}
                onLoginFailure={handleSocialLoginFailure}
            >
                Login with Facebook
            </SocialButton> */}






        </div >



    )
}

export default Check