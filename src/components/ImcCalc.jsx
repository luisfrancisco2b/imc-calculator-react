import { useState } from 'react'

import './ImcCalc.css'

import { Button } from './Button'

const ImcCalc = ({ calcImc }) => {

    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")

    const clearForm = (e) => {
        e.preventDefault()

        setHeight("")
        setWeight("")
    }

    const validDigist = (text) => {
        return text.replace(/[^0-9,]/g, "")
    }

    const handleHeightChange = (e) => {
        const updateValue = validDigist(e.target.value)

        setHeight(updateValue)
    }

    const handleWeightChange = (e) => {
        const updateValue = validDigist(e.target.value)

        setWeight(updateValue)
    }

    return (
        <div id="calc-container">
            <h2>Calculadora de IMC</h2>

            {/* Form */}
            <form id="calc-form">

                <div className="form-inputs">

                    {/* Height */}
                    <div className="form-control">
                        <label htmlFor="height">Altura:</label>

                        <input type="text" name="height" id="height" placeholder="Exemplo: 1,71"
                            onChange={(e) => handleHeightChange(e)}
                            value={height} />
                    </div>

                    {/* Weight */}
                    <div className="form-control">
                        <label htmlFor="weight">Peso:</label>

                        <input type="text" name="weight" id="weight" placeholder="Exemplo: 78,5"
                            onChange={(e) => handleWeightChange(e)}
                            value={weight} />
                    </div>
                </div>

                {/* Buttons */}
                <div className="action-control">
                    <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weight)} />

                    <Button id="clear-btn" text="Limpar" action={clearForm} />
                </div>
            </form>

        </div>
    )
}

export default ImcCalc