import './ImcCalc.css'

const ImcCalc = () => {
    return (
        <div id="calc-container">
            <h2>Imc Calc</h2>

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
                    <button>Calcular</button>
                    <button>Limpar</button>
                </div>
            </form>

        </div>
    )
}

export default ImcCalc