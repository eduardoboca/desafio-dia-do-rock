import { Navbar } from "./components/navbar/index";
import { MainContentMap } from "./components/map";

export function App() {
  return (
    <div className="flex-1 flex-row">
      <Navbar />
      <MainContentMap />
    </div>
  );
}
