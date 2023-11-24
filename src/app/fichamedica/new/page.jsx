"use client"

import { create } from "@/actions/fichas";
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import TextField from "@/components/TextField";
import { useState } from "react";

import { redirect } from 'next/navigation'

export default function FormFichas() {
    const [ error, setError ] = useState("")
    
    async function handleSubmit(formData){
        const resp =  await create(formData)

        if (resp.message) {
            setError(resp.message)
            return
        }
       redirect("/fichamedica")
    }

    return (
        <>
            <NavBar active="fichas" />

            <main className="bg-slate-900 mt-10 m-auto max-w-lg p-8 rounded">
                <form action={handleSubmit}>
                <h1 className="text-2xl">Cadastrar Fichas</h1>
                    <TextField
                        label="Nome"
                        id="nome"
                        name="nome"
                    />

                    <TextField
                        label="Email"
                        id="email"
                        name="email"
                    />

                    <TextField
                        label="Telefone"
                        id="telefone"
                        name="telefone"
                    />

                    <TextField
                        label="CPF"
                        id="cpf"
                        name="cpf"
                    />

                    <TextField
                        label="Data de nascimento"
                        id="datanasc"
                        name="datanasc"
                    />

                    <TextField
                        label="Grupo sanguineo"
                        id="gruposang"
                        name="gruposang"
                    />

                    <TextField
                        label="Nome Contato de Emergencia"
                        id="nomecontatoe"
                        name="nomecontatoe"
                    />

                    <TextField
                        label="Telefone Contato de Emergencia"
                        id="telefonecontatoe"
                        name="telefonecontatoe"
                    />


                    <div className="flex justify-around mt-4">
                        <Button href="/fichamedica" variant="secondary">Cancelar</Button>
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
