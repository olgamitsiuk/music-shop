import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import {ProductPage} from "./components/pages/ProductPage";
import {Header} from "./components/layouts/Header";
import {Home} from "./components/pages/Home";
import {Category} from "./components/pages/category/Category";
import {SubCategory} from "./components/pages/SubCategory";
import {NotFound} from "./components/pages/NotFound";

function App() {
    return (
        <div className='container-fluid g-0'>
            <BrowserRouter className="App">
                <div className='container'>
                <Header></Header>
                </div>
                 <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:categoryName" element={<Category />} />
                    <Route path="/category/:categoryName/:subCategoryName" element={<SubCategory />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
