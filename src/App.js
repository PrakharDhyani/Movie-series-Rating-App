import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";


const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <>
      <Header />
      <Home />
      <Footer />
    </>
  },
  {
    path: "movie:imbdID",
    element: <>
      <Header />
      <MovieDetail />
      <Footer />
    </>,
    exact: true,
  },
  {
    path: "/page",
    element: <>
      <Header />
      <PageNotFound />
      <Footer />
    </>
  }
]);


function App() {

  return (
    <div className='App' >
      <RouterProvider className="container" router={router} />
    </div>
  );
}

export default App;
 