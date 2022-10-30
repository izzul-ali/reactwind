import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FallbackSuspense from "./components/FallbackSuspense";
import LayoutDefault from "./components/layouts/LayoutDefault";

const Home = lazy(() => import('./pages/index'))
const Tutorial = lazy(() => import('./pages/tutorial'))
const Example = lazy(() => import('./pages/example'))
const FAQs = lazy(() => import('./pages/faqs'))
const MainConcept = lazy(() => import('./pages/main_concept'))
const NotFound = lazy(() => import('./pages/notFound'))


const route = createBrowserRouter([
  {
    path: '/',
    element: <LayoutDefault />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'tutorial',
        element: <Tutorial />
      },
      {
        path: 'example',
        element: <Example />
      },
      {
        path: 'faqs',
        element: <FAQs />
      },
      {
        path: 'main_concept',
        element: <MainConcept />
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

const App = () => <RouterProvider fallbackElement={<FallbackSuspense />} router={route} />

export default App