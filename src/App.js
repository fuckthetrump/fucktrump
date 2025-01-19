import './App.css';

import { Navigate, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";


import Layout from './components/layout';
import MainContent from './components/mainContent';
import SendMessage from "./components/sendMessage";


function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route index element={<MainContent />} />
          <Route path="sendMessage" element={<SendMessage/>} />

        </Route>

      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5500}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
        limit={9}
      />
    </>
  );
}

export default App;
