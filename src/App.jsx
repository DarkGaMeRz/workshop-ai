import { useState } from 'react'
import './App.css'
import PaymentForm from './PaymentForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PaymentForm />
    </>
  )
}

export default App
