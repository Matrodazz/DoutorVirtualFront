"use client"

import { create, update } from "@/actions/fichas";
import Button from "@/components/Button";
import TextField from "@/components/TextField";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import { redirect } from 'next/navigation'
export default function FormEdit({ficha}){
    const [ error, setError ] = useState("")
    const [fichaEdit, setFichaEdit] = useState(ficha)
    
    async function handleSubmit(){
        const resp =  await update(fichaEdit)

        if (resp?.error) {
            setError(resp.error)
            return
        }
        
       redirect("/fichamedica")
    }

    function handleFieldChange(field, value){
        setFichaEdit({
            ...fichaEdit,
            [field]: value
        })
    }

    return (
        <main className="bg-slate-900 mt-10 m-auto max-w-md p-6 rounded flex gap-3 flex-col">
                <form action={handleSubmit}>
                    <h1 className="text-2xl">Editar Fichas</h1>
                    <TextField
                        label="Nome"
                        id="nome"
                        name="nome"
                        value={fichaEdit.nome}
                        onChange={(e) => handleFieldChange("nome", e.target.value )}
                    />

                    <TextField
                        label="Email"
                        id="email"
                        name="email"
                        value={fichaEdit.email}
                        onChange={(e) => handleFieldChange("email", e.target.value )}
                    />

                    
                    <TextField
                        label="Telefone"
                        id="telefone"
                        name="telefone"
                        value={fichaEdit.telefone}
                        onChange={(e) => handleFieldChange("telefone", e.target.value )}
                    />

                    
                    <TextField
                        label="CPF"
                        id="cpf"
                        name="cpf"
                        value={fichaEdit.cpf}
                        onChange={(e) => handleFieldChange("cpf", e.target.value )}
                    />

                    <TextField
                        label="Data de nascimento"
                        id="datanasc"
                        name="datanasc"
                        value={fichaEdit.datanasc}
                        onChange={(e) => handleFieldChange("datanasc", e.target.value )}
                    />

                    <TextField
                        label="Grupo Sanguineo"
                        id="gruposang"
                        name="gruposang"
                        value={fichaEdit.gruposang}
                        onChange={(e) => handleFieldChange("gruposang", e.target.value )}
                    />

                    <TextField
                        label="Nome Contato de Emergencia"
                        id="nomecontatoe"
                        name="nomecontatoe"
                        value={fichaEdit.nomecontatoe}
                        onChange={(e) => handleFieldChange("nomecontatoe", e.target.value )}
                    />

                    <TextField
                        label="Nome Contato de Emergencia"
                        id="telefonecontatoe"
                        name="telefonecontatoe"
                        value={fichaEdit.telefonecontatoe}
                        onChange={(e) => handleFieldChange("telefonecontatoe", e.target.value )}
                    />


                    <div className="flex justify-around mt-4">
                        <Button href="/fichamedica" variant="secondary">Cancelar</Button>
                        <Button type="button">
                            <CheckCircleIcon className="h-6 w-6" />
                            Salvar
                        </Button>

                    </div>

                    <span className="text-red-400">{error}</span>

                </form>
            </main>

    )
}