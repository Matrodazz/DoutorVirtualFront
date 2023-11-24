"use client"

import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NavBar({ active }) {
  const {user, logout} = useContext(AuthContext)
  const { push } = useRouter()

  function handleLogout(){
      logout()
      push("/login")
  }


  return (
    <nav className="flex justify-between items-center bg-[#160C28] py-2 px-4">
      <ul className="flex gap-14 items-end text-[#52525B]">
        <li>
          <Link href="/">
            <h1 className="text-[#F0F4EF] text-2xl font-bold">DOUTOR Virtual</h1>
          </Link>
        </li>
        <li>
          <Link className={active === "fichas" ? "text-[#F0F4EF]" : ""} href="/fichamedica">
            Fichas Médicas
          </Link>
        </li>
        <li>
          <Link className={active === "mensagens" ? "text-[#F0F4EF]" : ""} href="/mensagem">
            Mensagens
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-4 ml-auto">
        <span>{user?.email}</span>

        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img src="https://i.pravatar.cc/100" alt="Avatar do usuário" />
        </div>

        <Button onClick={handleLogout} type="button">Sair</Button>
      </div>
    </nav>
  );
}
