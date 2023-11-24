
import NavBar from "@/components/NavBar";
import FormEdit from "./Form";
import { getFicha } from "@/actions/fichas";

export default async function FormFichas({params}) {
    
    const ficha = await getFicha(params.id)
        
    return (
        <>
            <NavBar active="fichas" />
            <FormEdit ficha={ficha} />
        </>
    )
}