"use client"

import { create } from "@/actions/mensagens";
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import TextField from "@/components/TextField";
import { useState } from "react";

import { redirect } from 'next/navigation'

export default function FormMensagens() {
    const [ error, setError ] = useState("")
    
    async function handleSubmit(formData){
        const resp =  await create(formData)

        if (resp.message) {
            setError(resp.message)
            return
        }
       redirect("/mensagem")
    }

    return (
        <>
            <NavBar active="mensagens" />

            <main className="bg-slate-900 mt-10 m-auto max-w-lg p-8 rounded">
                <form action={handleSubmit}>
                <h1 className="text-2xl">Enviar Mensagem</h1>
                    <TextField
                        label="Data"
                        id="data"
                        name="data"
                    />

                    <TextField
                        label="Hora"
                        id="hora"
                        name="hora"
                    />

                    <TextField
                        label="Mensagem"
                        id="conteudo"
                        name="conteudo"
                    />


                    <div className="flex justify-around mt-4">
                        <Button href="/mensagem" variant="secondary">Cancelar</Button>
                        <Button type="button">
                            Salvar
                        </Button>

                    </div>

                    <span className="text-red-400">{error}</span>

                </form>
            </main>
        </>

    )
}
