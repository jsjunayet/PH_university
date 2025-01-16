import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";
import { logout, setuser } from "./features/auth/authSlice";
const baseQuery =  fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1', 
    credentials: 'include', 
    prepareHeaders: (headers, { getState }) => {
      const state = (getState() as RootState); 
      const token = state.auth.token 
      if (token) {
        headers.set('Authorization', ` ${token}`);
      }    
      return headers; 
    },
  })

  const baseQueryRefreshToken =async(arg,api,extraOptions)=>{
    let result = await baseQuery(arg,api,extraOptions)
    console.log(result.error?.status, "result");
    if(result.error?.status===500){
        const refreshResponse = await fetch('http://localhost:5000/api/v1/auth/refresh-token', {
            method: 'POST',
            credentials: 'include', // Send cookies with the request
          });
   if(refreshResponse.ok){
       
    const accessToken = await refreshResponse.json()
    api.dispatch(
      setuser({
          token:accessToken.data.accessToken,
          user:api.getState().auth.user
      })
    )
    result = await baseQuery(arg,api, extraOptions)
   }else{
    await refreshResponse.json()
    api.dispatch(logout())
   }
      
    }
    return result
    
  }

export const baseApi = createApi({
    reducerPath:"authApi",
    baseQuery:baseQueryRefreshToken,
    endpoints:()=>({})
})
