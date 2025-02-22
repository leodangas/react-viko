import './styles/App.css'
import {Route, Routes} from "react-router";
import Home from "./pages/Home/Home.tsx";
import TaskList from "./pages/TaskList/TaskList.tsx";
import Shop from "./pages/Shop/Shop.tsx";
import GuessGame from "./pages/GuessGame/GuessGame.tsx";

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path={"/to-do-list"} element={<TaskList />} />
        <Route path={"/cart"}  element={<Shop />} />
        <Route path={"/word-guessing-game"}  element={<GuessGame />} />

      </Routes>
    </>
  )
}

export default App
