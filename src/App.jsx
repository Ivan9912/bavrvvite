import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './Components/Footer/Footer';
import { ItemDetailContainer } from './Components/Body/ItemData/DetailsOfProducts/ItemDetailContainer';
import { ItemListContainer } from './Components/Body/ItemData/ListProducts/ItemListContainer';
import { Error404 } from "./Components/Body/Error/Error404";
import { BodyApp } from './Components/Body/BodyApp';
import { NavBar } from './Components/Nav/NavBar';

export const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <NavBar />
          <Routes>
            <Route exact path={"/"} element={< BodyApp />} />
            <Route exact path={"/categoria/:id"} element={<ItemListContainer />} />
            <Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"*"} element={<Error404 />} />;
          </Routes>
          <Footer />
      </div>
    </BrowserRouter>
  );
}
