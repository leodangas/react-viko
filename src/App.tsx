import './styles/App.css'
import {Route, Routes} from "react-router";
import Home from "./pages/Home/Home.tsx";
import TaskList from "./pages/TaskList/TaskList.tsx";

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path={"/to-do-list"} element={<TaskList />} />
{/*        <Route path={"/cart"}  element={} />
        <Route path={"/word-guessing-game"}  element={} />*/}

      </Routes>
    </>
  )
}

export default App
