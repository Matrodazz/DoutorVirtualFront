"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

const url = process.env.NEXT_PUBLIC_BASE_URL + "/ficha"

export async function create(formData){

    const options = {
        method: "POST",
        body: JSON.stringify( Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json"
        }
    }   

    const resp = await fetch(url, options)
    const json = await resp.json()

    if (resp.status !== 201 ){
        const errors = json.reduce((str, error) => str += error.message + ". ", "")
        return {
            message: `Erro ao cadastrar. ${resp.status} - ${errors} `
        }
    }

    revalidatePath("/fichamedica")
    return { ok: 'ok' }

}

export async function getFichas() {
    const token = cookies().get('doutorvirtual_token')

    const options = {
        headers: {
            "Authorization": `Bearer ${token.value}`
        }
    }

    const resp = await fetch(url, options)

    if (!resp.ok) {
        throw new Error("Erro ao obter dados das fichas");
    }

    const data = await resp.json();

    if (data && data._embedded && data._embedded.entityModelList) {
        return data._embedded.entityModelList;
    } else {
        throw new Error("Dados de ficha não encontrados na resposta");
    }
}

export async function destroy(id){
    const deleteUrl = url + "/" + id

    const options = {
        method: "DELETE"
    }

    const resp = await fetch(deleteUrl, options)

    if(resp.status !== 204) 
        return {error: "Erro ao apagar ficha. " + resp.status }

    revalidatePath("/fichamedica")

}

export async function getFicha(id){
    const getUrl = url + "/" + id

    const resp = await fetch(getUrl)

    if(resp.status !== 200) 
        return {error: "Erro ao buscar dados da ficha " + resp.status }

    return await resp.json()
    
}

export async function update(ficha){
    const updateUrl = url + "/" + ficha.id

    const options = {
        method: "PUT",
        body: JSON.stringify(ficha),
        headers: {
            "Content-Type": "application/json"
        }
    }   

    const resp = await fetch(updateUrl, options)
    
    if (resp.status !== 200 ){
        return {
            error: `Erro ao atualizar. ${resp.status} `
        }
    }

    revalidatePath("/fichamedica")
    
}