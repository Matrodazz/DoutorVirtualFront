import DropMenu from "@/components/DropMenu";

export default function Ficha({ficha}) {
    return (
        <div id="data-row" className="rounded bg-[#1E293B] p-8 flex items-center space-x-14 hover:bg-[#2c3e5a]">
                <div className="h-[100px] w-[100px] rounded bg-[#0F172A] p-4"></div>
                <ul className="flex space-x-14"> 
                  <li>{ficha.nome}</li>
                  <li>{ficha.email}</li>
                  <li>{ficha.telefone}</li>
                  <li>{ficha.datanasc}</li>
                  <li>{ficha.gruposang}</li>
                  <li>{ficha.nomecontatoe}</li>
                  <li>{ficha.telefonecontatoe}</li>
                  <li>
                    <div>
                        <DropMenu ficha={ficha} />
                    </div>
                 </li>
                </ul>
              </div>
    )
}