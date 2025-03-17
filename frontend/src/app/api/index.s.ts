"use server";
import { cookies } from "next/headers";
import axios from "@/lib/axios";
import { NextResponse } from "next/server";

const Login = async (data: any) => {
  try {
    const response = await axios.post("/api/login", data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      return {
        status: error.response.status,
        message: error.response.data.message,
      };
    }
    return new NextResponse("INTERNAL_SERVER_ERROR", { status: 500 });
  }
};

const Logout = async (sessionToken: string) => {
  try {
    const response = await axios.post('/api/logout', {}, {
      headers: {
        Authorization: `Bearer ${sessionToken}`
      }
    })
    const cookieStore = await cookies();
    cookieStore.delete('sessionToken');
    return response.data;
  }catch (error: any) {
    if (error.response) {
      return {
        status: error.response.status,
        message: error.response.data.message,
      };
    }
    return new NextResponse("INTERNAL_SERVER_ERROR", { status: 500 });
  }
};

export {
  Login,
  Logout
};
