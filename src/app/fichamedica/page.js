import NavBar from "@/components/NavBar";
import Button from "@/components/Button";
import { PlusIcon  } from '@heroicons/react/24/outline'
import Ficha from "./Ficha";
import { getFichas } from "@/actions/fichas";

export default async function Fichas() {
    const data = await getFichas();
  
    return (
      <>
        <NavBar active={"fichas"} />
        <main>
          <h1>Fichas Médicas</h1>
          <div className="rounded bg-[#0F172A] p-10 mx-20 my-10">
            <div className="flex flex-col items-center space-y-10">
  
              <Button href="/fichamedica/new">
              <PlusIcon className="h6 w-6" />
                Cadastrar Ficha
              </Button>
  
              
              <div id="data">
                {data.map(ficha => <Ficha key={ficha.id} ficha={ficha} />)}
            </div>
            </div>
          </div>
        </main>
      </>
    );
  }
  