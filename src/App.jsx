import Input from './components/Input'
import { useState } from 'react'



function App() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="container d-flex align-items-center min-vh-100 justify-content-center">
      <Input 
      name={[name, setName]} 
      password={[pass, setPass]} />
    </div>);
}

export default App; 