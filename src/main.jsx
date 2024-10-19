import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import { AppProvider } from './AppContext.jsx';
import './index.css';
import ArticleEdit from './ArticleEdit.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Article from './components/Article.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/add" element={<ArticleEdit />} />
            <Route path="/Article/:id" element={<Article />} />
          </Routes>
          <Footer />
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
);
