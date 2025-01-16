import { Button, Row } from 'antd';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useLoginMutation } from '../../../redux/features/authApi';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/app';
import { setuser } from '../../../redux/features/auth/authSlice';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import PHForm from './PHForm';
import PHInput from './PHInput';

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
  const defaultValues = {
    userId: '0001',
    password: 'admin12345',
  };
  console.log(token);
  const onSubmit = async (data: FieldValues) => {
     try{
      toast.loading('Loading...', { id: toastId });
      const payload ={
        id: data.userId,
        password:data.password
      }
      console.log(payload);
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
      <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="text" name="userId" label="ID:" />
        <PHInput type="text" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
    );
};

export default LoginForm;