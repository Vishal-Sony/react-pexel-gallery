import Header from "./header";
import Body from "./body";
import { useState } from "react";
import "./App.css";
var axios = require("axios");

function App() {
  const [query, setQuery] = useState("");
  const [src, setSrc] = useState([]);

  function addQuery(query) {
    console.log(query);
    var options = {
      method: "GET",
      url: "https://pexelsdimasv1.p.rapidapi.com/v1/search",
      params: { query: query, locale: "en-US", per_page: "15", page: "1" },
      headers: {
        authorization:
          "563492ad6f91700001000001a30ea04407b84ed395d1d55b833a407b",
        "x-rapidapi-key": "2902e79e2fmshfe1d6430d124b98p183fc1jsn0fe5315898c6",
        "x-rapidapi-host": "PexelsdimasV1.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log("response");
        console.log(response);
        setSrc(response.data.photos);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div className="App">
      <Header query={query} setQuery={setQuery} onSub={addQuery} />
      <Body query={src} />
    </div>
  );
}

export default App;
