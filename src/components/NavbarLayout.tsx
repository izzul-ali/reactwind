import { useState } from "react"
import { Link } from "react-router-dom"
import ArrowBottom from "./icons/ArrowBottom"
import ArrowRight from "./icons/ArrowRight"

const NavbarLayout = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <aside className="lg:h-screen flex-none lg:w-1/5 lg:overflow-hidden">
            <nav className="px-3 mt-3 relative">
                <button type="button" onClick={() => setOpen(open => open = !open)} className="flex items-center gap-x-1">
                    {
                        isOpen ?
                            <ArrowBottom />
                            :
                            <ArrowRight />
                    }
                    <h1 className="text-sm font-bold">Feature Overview</h1>
                </button>
                <section className={`${isOpen ? 'block' : 'hidden'} lg:block space-y-4 absolute h-80 bg-white dark:bg-gray-900 lg:h-screen overflow-y-scroll w-full top-6 z-20 pt-3 pb-10 lg:pb-36`}>
                    <div>
                        <h1 className="text-base font-bold">Getting Started</h1>
                        <div className="px-3 flex flex-col space-y-4 mt-3 text-sm text-gray-600 dark:text-gray-400">
                            <Link onClick={() => setOpen(!isOpen)} to='/' className="hover:text-black dark:hover:text-gray-50">Feature Overview</Link>
                            <Link onClick={() => setOpen(!isOpen)} to='/tutorial' className="hover:text-black dark:hover:text-gray-50">Tutorial</Link>
                            <Link onClick={() => setOpen(!isOpen)} to='/example' className="hover:text-black dark:hover:text-gray-50">Example</Link>
                            <Link onClick={() => setOpen(!isOpen)} to='/faqs' className="hover:text-black dark:hover:text-gray-50">FAQs</Link>
                            <Link onClick={() => setOpen(!isOpen)} to='/main_concept' className="hover:text-black dark:hover:text-gray-50">Main Concepts</Link>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-base font-bold">Upgrading</h1>
                        <div className="px-3 flex flex-col space-y-4 mt-3 text-gray-600 dark:text-gray-400 text-sm">
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">Upgrading from v5</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">Migrating from @reach/router</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-base font-bold">Routers</h1>
                        <div className="px-3 flex flex-col space-y-4 mt-3 text-gray-600 dark:text-gray-400 text-sm">
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">Picking a Router</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">createBrowserRouter</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">createHashRouter</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">createMemoryRouter</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">RouterProvider</Link>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-base font-bold">Router Components</h1>
                        <div className="px-3 flex flex-col space-y-4 mt-3 text-gray-600 dark:text-gray-400 text-sm">
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">BrowserRouter</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">HashRouter</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">MemoryRouter</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">NativeRouter</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">Router</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">StaticRouter</Link>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-base font-bold">Route</h1>
                        <div className="px-3 flex flex-col space-y-4 mt-3 text-gray-600 dark:text-gray-400 text-sm">
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">Route</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">action</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">errorElement</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">loader</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">shouldRevalidate</Link>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-base font-bold">Components</h1>
                        <div className="px-3 flex flex-col space-y-4 mt-3 text-gray-600 dark:text-gray-400 text-sm">
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">Await</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">Form</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">Link</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">Link (RN)</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">Navlink</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">Navigate</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">Outlet</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">Route</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">Routes</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">ScrollRestoration</Link>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-base font-bold">Hooks</h1>
                        <div className="px-3 flex flex-col space-y-4 mt-3 text-gray-600 dark:text-gray-400 text-sm">
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">useActionData</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">useAsyncError</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">useAsyncValue</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">useFetcher</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">useFetchers</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">useFromAction</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">useHref</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">useInRouterContext</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">useLinkClickHandler</Link>
                            <Link to='/dfa' className="hover:text-black dark:hover:text-gray-50">useLoaderData</Link>
                        </div>
                    </div>
                </section>
            </nav>
        </aside>
    )
}

export default NavbarLayout