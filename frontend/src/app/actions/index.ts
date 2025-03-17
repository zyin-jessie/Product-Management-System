"use server";
import { AxiosResponse } from "axios";
import { cookies } from "next/headers";
import { Login } from '@/app/api/index.s';

const SetTokenAction = async (data: any) => {
    
    const response = await Login(data);
    const cookieStore = await cookies();

    if (response && response.token) {
        cookieStore.set({
            name: "sessionToken",
            value: response.token,
            httpOnly: true,
            secure: true,
            path: "/",
        });
        return {
            success: true,
            response: response.token,
            message: "return from axios response"
        };
    }

    return {
        success: false,
        message: response.token,
        response: "response from setToken"
    };
};

const isAxiosResponse = (
  response: any
): response is AxiosResponse<any, any> => {
  return (response as AxiosResponse<any, any>).data !== undefined;
};

export { SetTokenAction, isAxiosResponse };
