import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Navbar from "./components/Navbar";
import ReactQuery from "./components/ReactQuery";
import UseEffect from "./components/UseEffect";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="react-query" element={<ReactQuery />} />
            <Route path="use-effect" element={<UseEffect />} />
          </Routes>
        </BrowserRouter>

      </QueryClientProvider>

    </>
  );
}

export default App;
