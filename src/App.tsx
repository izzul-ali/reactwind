import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FallbackSuspense from "./components/FallbackSuspense";
import Home from "./pages";

// const Home = lazy(() => import('./pages/index'))
const LayoutDefault = lazy(() => import('./components/layouts/LayoutDefault'))
const Tutorial = lazy(() => import('./pages/tutorial'))
const Example = lazy(() => import('./pages/example'))
const FAQs = lazy(() => import('./pages/faqs'))
const MainConcept = lazy(() => import('./pages/main_concept'))
const NotFound = lazy(() => import('./pages/notFound'))

// loading only inside the layout, not outside the layout, 
// because the layout is already loaded the first time it is opened
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<FallbackSuspense />}> {/* First load */}
        <LayoutDefault>
          <Suspense fallback={<FallbackSuspense />}> {/* loading inside the layout */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tutorial" element={<Tutorial />} />
              <Route path="/example" element={<Example />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/main_concept" element={<MainConcept />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </LayoutDefault>
      </Suspense>
    </BrowserRouter>
  )
}

export default App


// const route = createBrowserRouter([
//   {
//     path: '/',
//     element: <LayoutDefault/>,
//     children: [
//       {
//         path: '/',
//         element: <Home />
//       },
//       {
//         path: '/tutorial',
//         element: <Tutorial />
//       },
//       {
//         path: '/example',
//         element: <Example />
//       },
//       {
//         path: '/faqs',
//         element: <FAQs />
//       },
//       {
//         path: '/main_concept',
//         element: <MainConcept />
//       },
//     ]
//   },
//   {
//     path: '*',
//     element: <NotFound />
//   }
// ])

// const App = () => {
//   return (
//     <LayoutDefault>
//       <Suspense fallback={<FallbackSuspense />}>
//         <RouterProvider fallbackElement={<FallbackSuspense />} router={route} />
//       </Suspense>
//     </LayoutDefault>
//   )
// }