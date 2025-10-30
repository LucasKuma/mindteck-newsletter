import './App.css'
import NewsletterForm from './components/newsletter/newsletter'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "./components/success/success";
import Unsubscribe from "./components/unsubscribe/unsubscribe";

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsletterForm />} />
        <Route path="/success" element={<Success />} />
        <Route path="/unsubscribe" element={<Unsubscribe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
