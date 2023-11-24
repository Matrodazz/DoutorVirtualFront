'use client'

import NavBar from "@/components/NavBar"
import Button from "@/components/Button"

export default function Error({ error, reset }) {

    return (
      <>
        <NavBar active={"fichas"} />
  
        <main className="bg-slate-900 mt-10 m-auto max-w-lg p-8 rounded">
            <div className="flex justify-between items-center">
            <h1 className="text-2xl">Um erro selvagem apareceu | {error.message}</h1>
            <Button onClick={() => reset()} type="button" >
              Tentar novamente
            </Button>
          </div>
  
        </main>
      </>
    )
  }