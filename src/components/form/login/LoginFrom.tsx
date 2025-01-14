import { Button } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLoginMutation } from '../../../redux/features/authApi';
type Inputs = {
    id: string
    password: string
  }
const LoginForm = () => {
  const [login]=useLoginMutation()
    const {register, handleSubmit}=useForm<Inputs>()
    const onSubmit:SubmitHandler<Inputs> = async(data)=> {
      const payload ={
        id: data.id,
        password:data.password
      }
      console.log(payload);
     const res = await login(payload)
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