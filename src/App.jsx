import data from './data/data'

import { useState } from 'react'

import ImcCalc from './components/ImcCalc'
import ImcTable from './components/ImcTable'

import './App.css'


function App() {

  const calcImc = (e, height, weight) => {

    e.preventDefault()

    console.log(height, weight)

    if (!height || !weight) return

    const heightFloat = +height.replace(",", ".")
    const weightFloat = +weight.replace(",", ".")

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1)

    setImc(imcResult)
  }

  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")

  return (
    <div className="container">
      {!imc ? <ImcCalc calcImc={calcImc} /> : <ImcTable data={data} />}
    </div>

  )
}

export default App
