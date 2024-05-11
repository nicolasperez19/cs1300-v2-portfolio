import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Project from './pages/Project'
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./layouts/Layout";
import HomePage from "./pages/Home";
// import { Suspense } from "react";
import React from "react";
import ProjectPage from "./pages/ProjectPage";

// const LazyHome = React.lazy(() => import("./pages/Home"));
// const LazyProject = React.lazy(() => import("./pages/Project"));

/* TODO: TSDoc comments to components and pages for better documentation
  @see {@link https://tsdoc.org/|TSDoc Documentation}
*/
const App: React.FC = () => {
  return (
    // <Router>
    //   <div className="pt-20 bg-secondary text-primary">
    //     <Header />

    //     <main className='snap-mandatory snap-y overflow-scroll'>
    //       <Routes>
    //         <Route path="/cs1300-v2-portfolio" element={<>
    //           <Hero title="Hi, I'm Nico!" subtitle="An award-winning software engineer" imageMobile="images/home/hero_image_mobile.png" imageDesktop="images/home/hero_image_desktop.png"/>
    //           <Featured />
    //           <AboutMe />
    //           <ProjectList />
    //           <Testimonials />
    //           <Contact />
    //           <BuyMeCoffee />
    //         </>}>
    //         </Route>
    //         <Route path="/cs1300-v2-portfolio/projects/:slug" element={<ProjectPage />} />
    //         <Route path="*" element={<>Not Found</>}/>
    //       </Routes>
    //     </main>

    //     <Footer />
    //   </div>
    // </Router>

    // Change base url
    <Router basename={import.meta.env.BASE_URL}>
      {/* <Router> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/cs1300-v2-portfolio/" element={<Layout />}> */}
          <Route
            index
            element={
              <HomePage />
              // <Suspense
              //   fallback={
              //     <div>
              //       <p>Loading...</p>
              //     </div>
              //   }
              // >
              //   <LazyHome />
              // </Suspense>
            }
          />
          <Route path="/projects">
            {/* <Route path="/cs1300-v2-portfolio/projects/"> */}
            <Route index element={<>Projects</>} />
            <Route
              path=":slug"
              element={
                <ProjectPage />
                // <Suspense
                //   fallback={
                //     <div>
                //       <p>Loading...</p>
                //     </div>
                //   }
                // >
                //   <LazyProject />
                // </Suspense>
              }
            />
          </Route>
          <Route path="*" element={<>Not Found</>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
