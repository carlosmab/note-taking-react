import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { Navigate, Route, Routes } from "react-router-dom"
import NewNote from "./views/NewNote"

function App() {
  return (
    <Container className="my-4">  
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<div>Show</div>} />
          <Route path="edit" element={<div>Edit</div>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  )
}

export default App