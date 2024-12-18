import { useState } from "react";
import { fromInt, toNumber } from "longfn";

function App() {
  const l = fromInt(42);
  const [count, setCount] = useState(toNumber(l));

  return <>{count}</>;
}

export default App;
