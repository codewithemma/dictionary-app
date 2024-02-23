import Nav from "./Components/NavSection/Nav";
import Search from "./Components/Form/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Result from "./Components/Result/Result";
function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("selectedTheme") === "dark"
  );
  const darkMode = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
    setIsDarkMode(true);
  };
  const lightMode = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    localStorage.setItem("selectedTheme", "light");
    setIsDarkMode(false);
  };

  const handleButtonClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   if (data) {
  //     console.log(data);
  //   }
  // }, [data]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          {loading && <p className="loader mx-auto mt-5">Loading...</p>}
          {error && <p>{error}</p>}
          <Nav onClick={() => (isDarkMode ? lightMode() : darkMode())} />
          <Search
            handleInputChange={(event) => setInput(event.target.value)}
            handleButtonSubmit={handleButtonClick}
            inputValue={input}
          />
          <Result data={data} isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default App;
