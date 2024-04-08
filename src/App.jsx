import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "./componets/ContexApi";
import Home from "./componets/Home";
import Login from "./componets/Login";
import CreateAcount from "./componets/CreateAcount";
import AccountSetting from "./componets/AccountSetting";

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAcount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account-settings" element={<AccountSetting />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
