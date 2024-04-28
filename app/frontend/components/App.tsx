import React from "react";
import { NavigationBar } from "./ui/NavigationBar";

const App = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/v1/articles")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <header>
        <NavigationBar />
      </header>
      <div className="text-red-500">
        Articles
        {data.map(({ title }) => (
          <div>{title}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
