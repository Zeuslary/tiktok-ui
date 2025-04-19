import { Routes, Route, Link } from "react-router-dom";
import HeadingPage from "../../react_webpack/src/components/Heading";
import ParagraphPage from "../../react_webpack/src/components/Paragraph";
import GlobalStyles from "../../react_webpack/src/components/GlobalStyles";
import Button from "../../react_webpack/src/components/Button";

function App() {
  return (
    <GlobalStyles>
      <div style={{ padding: 10 }}>
        <h1>Tiktok</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/heading">Heading</Link>
            </li>
            <li>
              <Link to="/paragraph">Paragraph</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h3>Home page</h3>
              <p>This is the home page of the app.</p>
            </div>
          }
        />
        <Route path="/heading" element={<HeadingPage />} />
        <Route path="/paragraph" element={<ParagraphPage />} />
      </Routes>
    </GlobalStyles>
  );
}

export default App;
