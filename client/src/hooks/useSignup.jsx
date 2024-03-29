import { useState } from "react";
import { message } from "antd";
import { useAuth } from "../contexts/authContext.jsx";


const useSignup = () => {
    const { login } = useAuth();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const registerUser = async (values)=> {
        // console.log(values.Password);
        // console.log(values.password);
        // console.log(values.passwordConfirm);
        // console.log(values.passwordConfirm);
        if(values.Password !== values.passwordConfirm){
            return setError('Passwords are not same!');
        }

        try{
            setError(null);
            // setLoading(false);
            setLoading(true);
            const res = await fetch('http://localhost:3000/api/auth/signup',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify({...values})
                body: JSON.stringify(values),
            });

            const data = await res.json();
            if(res.status === 201){
                message.success(data.message);
                login(data.token, data.user);
            }else if(res.status===400){
                setError(data.message);
            }else{
                message.error('Registration Failed');
            }
        }catch(error){
            message.error(error+'failed');
        }finally{
            setLoading(false);
        }
    };
  return (
    {loading, error, registerUser}
  )
}

export default useSignup;
