import Link from "next/link";

export default function Button({ children, variant = "primary", type = "link", ...props }) {
    const styles = {
        primary: "bg-cyan-800 hover:bg-cyan-500 ",
        secondary: "border-2 border-slate-400 hover:bg-slate-800 "
    }

    const variantClass = `flex gap-2 py-2 px-4 rounded ${styles[variant]} `

    return (
        <>
            {
                type === "link" ?
                    <Link href="#" {...props} className={variantClass}>
                        {children}
                    </Link>
                    :
                    <button {...props} className={variantClass}>
                        {children}
                    </button>
            }
        </>
    )
}