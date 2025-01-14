import { Button } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLoginMutation } from '../../../redux/features/authApi';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/app';
import { setuser } from '../../../redux/features/auth/authSlice';
import { jwtDecode } from "jwt-decode";

type Inputs = {
    id: string
    password: string
  }
const LoginForm = () => {
  const [login]=useLoginMutation()
  const dispatch = useAppDispatch()
  const token = useAppSelector(state=>state.auth.token)
  console.log(token);
    const {register, handleSubmit}=useForm<Inputs>()
    const onSubmit:SubmitHandler<Inputs> = async(data)=> {
      const payload ={
        id: data.id,
        password:data.password
      }
      console.log(payload);
     const res = await login(payload).unwrap()
     const decoded = jwtDecode(res.data.accessToken);
     console.log(decoded);
     dispatch(setuser({token:res.data.accessToken, user:decoded.userId}))
     console.log(res);

    }
    return (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <label>ID:</label>
           <input type="text"  id="id" {...register("id")} /> 
           <label >Password: </label>
           <input type="text" id="password"{...register("password")} />
           <Button htmlType='submit'>Login</Button>
          </form>
        </div>
    );
};

export default LoginForm;