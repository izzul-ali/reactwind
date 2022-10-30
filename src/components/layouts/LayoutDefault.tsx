import { useEffect, useState } from "react"
import { Outlet } from "react-router"
import Dark from "../icons/Dark"
import Light from '../icons/Light'
import NavbarLayout from "../NavbarLayout"

const LayoutDefault = () => {
    const [isDark, setTheme] = useState(false)

    useEffect(() => {
        const html = document.querySelector('html')

        if (isDark) {
            html?.classList.add('dark')
        } else {
            html?.classList.remove('dark')
        }
    }, [isDark])

    return (
        <div className="flex flex-col max-w-screen-xl mx-auto lg:h-screen lg:overflow-hidden">
            <header className="p-3 flex justify-between items-center">
                <h1 className="text-xl font-bold italic">ReactRouter</h1>
                <section className="flex gap-4 items-center">
                    <select className="text-xs sm:text-sm px-2 py-1 bg-black/20 dark:bg-black/10 dark:text-gray-100 dark:focus:bg-gray-900 rounded outline-none">
                        <option>main (6.4.2)</option>
                        <option>dev</option>
                        <option>v4/5.x</option>
                        <option>v3.x</option>
                    </select>

                    <button className="bg-black/20 dark:bg-black/10 dark:text-gray-100 sm:p-1 p-[0.20rem] rounded-full" type="button" onClick={() => setTheme((dark) => dark = !dark)}>
                        {
                            isDark ?
                                <Dark />
                                :
                                <Light />
                        }
                    </button>
                </section>
            </header>

            <div className="lg:flex w-full">
                <NavbarLayout />

                <div className="px-3 pb-36 mt-8 lg:h-screen lg:flex-1 lg:overflow-y-scroll">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default LayoutDefault