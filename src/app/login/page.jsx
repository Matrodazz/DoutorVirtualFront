"use client"

import Button from "@/components/Button";
import TextField from "@/components/TextField";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage(){
    const { register, handleSubmit } = useForm()
    const { login } = useContext(AuthContext)
    const { push } = useRouter()

    async function onSubmit(data){
        const resp = await login(data)

        if(resp?.error) {
            toast.error(resp.error)
            return
        }

        push("/")
    }

    return (
        <div className="flex h-screen">
            <main className="flex flex-col w-full items-center justify-center">
                <h1 className="text-5xl font-bold">DOUTOR Virtual</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start gap-3 max-w-md">
                    <TextField register={register} label="Email" name="email" />
                    <TextField register={register} label="Senha" name="senha" type="password" />

                    <Button type="button">Logar</Button>
                </form>
            </main>
        </div>
    )
}