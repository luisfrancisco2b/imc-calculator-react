import { Button } from './Button'
import './ImcTable.css'

const ImcTable = ({ data }) => {
    return (
        <div id="result-container">

            <p id="imc-number">
                Seu Imc:
            </p>

            <p id="imc-info">
                Situação Atual:
            </p>

            <h3>Confira as Classificações:</h3>

            {/* Table */}
            <div className="imc-table">

                {/* Table Header */}
                <div className="table-header">
                    <h4>IMC</h4>
                    <h4>Classificação</h4>
                    <h4>Obesidade</h4>
                </div>

                {/* Table Data */}
                {data.map((item) => (
                    <div className="table-data" key={item.info}>
                        <p>{item.classification}</p>
                        <p>{item.info}</p>
                        <p>{item.obesity}</p>
                    </div>
                ))}

            </div>

            {/* Back Button */}
            <Button id="back-btn" text="Voltar" />

        </div>
    )
}

export default ImcTable