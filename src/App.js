import LeftLayout from "./components/LeftLayout";
import RightLayout from "./components/RightLayout";

function App() {
  return (
    <div className="max-w-5xl h-screen mx-auto border rounded-xl shadow-sm">
      <div className="flex h-full p-4">
        <div className="h-full w-1/2 px-4 border-r-2">
          <LeftLayout />
        </div>
        <div className="h-full w-1/2 px-4">
          <RightLayout />
        </div>
      </div>
    </div>
  );
}

export default App;
