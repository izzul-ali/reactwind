import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <h1 className="text-3xl font-bold">Feature Overview</h1>
            <h2 className="mt-8 text-2xl font-bold"><Link to='/'>Client Side Routing</Link></h2>
            <div className="text-base text-gray-800 tracking-wide mt-2 leading-norma space-y-3 pb-10">
                <p>React Router enables "client side routing".</p>
                <p>
                    In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.
                </p>
                <p>
                    Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.
                </p>
                <p>
                    This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.
                </p>
                <p>
                    Client side routing is enabled by creating a Router and linking/submitting to pages with Link and {'<Form>'}:
                </p>
                <h3 className="text-black font-bold text-2xl">Nested Route</h3>
                <p>Nested Routing is the general idea of coupling segments of the URL to component hierarchy and data. React Router's nested routes were inspired by the routing system in Ember.js circa 2014. The Ember team realized that in nearly every case, segments of the URL determine:</p>

                <ul className="px-3">
                    <li>The layouts to render on the page</li>
                    <li>The data dependencies of those layouts</li>
                </ul>
                
                <p>React Router embraces this convention with APIs for creating nested layouts coupled to URL segments and data.</p>
                <p>React Router embraces this convention with APIs for creating nested layouts coupled to URL segments and data.</p>
                <p>React Router embraces this convention with APIs for creating nested layouts coupled to URL segments and data.</p>
            </div>
        </>
    )
}

export default Home