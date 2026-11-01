import data from './data/data'

import { useState } from 'react'

import ImcCalc from './components/ImcCalc'
import ImcTable from './components/ImcTable'

import './App.css'


function App() {

  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")
  const [error, setError] = useState("")

  const calcImc = (e, height, weight) => {

    e.preventDefault()

    if (!height || !weight) {
      setError("Preencha corretamente os campos de altura e peso!")
      return
    }

    const heightFloat = +height.replace(",", ".")
    const weightFloat = +weight.replace(",", ".")

    // Reject non numeric input and non positive values
    if (!heightFloat || !weightFloat || heightFloat <= 0 || weightFloat <= 0) {
      setError("Os valores de altura e peso devem ser maiores do que 0!")
    }

    const imcValue = (weightFloat / (heightFloat * heightFloat))

    // Rejects results that are not finite numbers
    if (!Number.isFinite(imcValue)) {
      setError("Os valores informados não são válidos!")
      return
    }

    setError("")
    const imcResult = imcValue.toFixed(1)

    setImc(imcResult)

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    })

    if (!imcResult) return

  }

  const resetCalc = (e) => {
    e.preventDefault()

    setImc("")
    setInfo("")
    setInfoClass("")
  }

  return (
    <div className="container">
      {!imc ? <ImcCalc calcImc={calcImc} error={error} /> : <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc} />}
    </div>

  )
}

export default App
