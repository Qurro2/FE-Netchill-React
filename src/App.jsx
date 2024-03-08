import { useState } from "react";
import Router from "./routes/Router";
import { Helmet } from "react-helmet";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Helmet>
        <title>Netchill</title>
        <link rel="icon" href="/n.svg" type="image/svg+xml" />
      </Helmet>
      <main>
        <Router />
      </main>
    </>
  );
}

export default App;
