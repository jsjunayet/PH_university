import { Button } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLoginMutation } from '../../../redux/features/authApi';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/app';
import { setuser } from '../../../redux/features/auth/authSlice';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

type Inputs = {
    id: string
    password: string
  }
const LoginForm = () => {
  const toastId = 'Loading....'
  const navigate = useNavigate()
  const [login]=useLoginMutation()
  const dispatch = useAppDispatch()
  const token = useAppSelector(state=>state.auth.token)
  console.log(token);
    const {register, handleSubmit}=useForm<Inputs>()
    const onSubmit:SubmitHandler<Inputs> = async(data)=> {
     try{
      toast.loading('Loading...', { id: toastId });
      const payload ={
        id: data.id,
        password:data.password
      }
     const res = await login(payload).unwrap()
     const decoded = jwtDecode(res.data.accessToken);
    
     dispatch(setuser({token:res.data.accessToken, user:decoded.userId}))
     navigate('/')
     toast.success("successfull login",{id:toastId})
     }catch(err){
      toast.error(`${err.message}`,{id:toastId})
     }

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