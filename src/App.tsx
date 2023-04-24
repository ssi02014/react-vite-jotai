import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";

const HomePage = React.lazy(() => import("@pages/Home"));
const TestPage = React.lazy(() => import("@pages/Test"));

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">홈페이지</Link>
        </li>
        <li>
          <Link to="/test">테스트</Link>
        </li>
      </ul>
      <Suspense fallback={<div>로딩중...</div>}>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/test"} element={<TestPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
