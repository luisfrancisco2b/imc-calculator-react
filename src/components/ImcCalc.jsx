import './ImcCalc.css'

import { Button } from './Button'

const ImcCalc = () => {
    return (
        <div id="calc-container">
            <h2>Calculadora de IMC</h2>

            {/* Form */}
            <form id="calc-form">

                <div className="form-inputs">

                    {/* Height */}
                    <div className="form-control">
                        <label htmlFor="height">Altura:</label>

                        <input type="text" name="height" id="height" placeholder="Exemplo: 1,71" />
                    </div>

                    {/* Weight */}
                    <div className="form-control">
                        <label htmlFor="weight">Peso:</label>

                        <input type="text" name="weight" id="weight" placeholder="Exemplo: 78,5" />
                    </div>
                </div>

                {/* Buttons */}
                <div className="action-control">
                    <Button id="calc-btn" text="Calcular" />

                    <Button id="clear-btn" text="Limpar" />
                </div>
            </form>

        </div>
    )
}

export default ImcCalc