import { useChangeTitle } from "../hooks/changeTitle"

const Tutorial = () => {
  useChangeTitle('Tutorial | Belajar Routing')

  return (
    <>
      <h1 className="text-3xl font-bold">Tutorial</h1>
      <div className="text-gray-800 leading-normal tracking-wide mt-3 space-y-3 text-base">
        <p>Welcome to the tutorial! We'll be building a small, but feature-rich app that lets you keep track of your contacts. We expect it to take between 30-60m if you're following along.</p>
        <img src="https://reactrouter.com/_docs/tutorial/15.webp" alt="img" className="w-1/2 mx-auto h-fit" />
        <p>
          <strong> 👉 Every time you see this it means you need to do something in the app!</strong>
        </p>
        <p>The rest is just there for your information and deeper understanding. Let's get to it.</p>

        <h2 className="font-bold text-2xl">URL Params in Loaders</h2>
        <p>This is where the "old school web" programming model shows up. As we discussed earlier, {'<Form>'} prevents the browser from sending the request to the server and sends it to your route action instead. In web semantics, a POST usually means some data is changing. By convention, React Router uses this as a hint to automatically revalidate the data on the page after the action finishes. That means all of your useLoaderData hooks update and the UI stays in sync with your data automatically! Pretty cool.</p>
        <img src="https://reactrouter.com/_docs/tutorial/09.webp" alt="img2" className="mx-auto w-1/2 h-fit" />
      </div>
    </>
  )
}

export default Tutorial