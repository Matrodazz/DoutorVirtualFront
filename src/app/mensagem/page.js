import NavBar from "@/components/NavBar";
import Button from "@/components/Button";
import { PlusIcon  } from '@heroicons/react/24/outline'
import { getMensagens } from "@/actions/mensagens";
import Mensagem from "./Mensagem";

export default async function Mensagens() {
    const data = await getMensagens();
  
    return (
      <>
        <NavBar active={"mensagens"} />
        <main>
          <h1>Mensagens</h1>
          <div className="rounded bg-[#0F172A] p-10 mx-20 my-10">
            <div className="flex flex-col items-center space-y-10">
            
              <Button href="/mensagem/new">
              <PlusIcon className="h6 w-6" />
                Enviar Mensagem
              </Button>
  
              
              <div id="data">
                {data.map(mensagem => <Mensagem key={mensagem.id} mensagem={mensagem} />)}
            </div>
            </div>
          </div>
        </main>
      </>
    );
  }
  