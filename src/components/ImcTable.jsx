import './ImcTable.css'

const ImcTable = ({ data }) => {
    return (
        <div id="result-container">

            <p id="imc-number">
                Seuc Imc:
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

                {data.map((item) => (
                    <div className="imc-table" key={item.info}>
                        <p>{item.classification}</p>
                        <p>{item.info}</p>
                        <p>{item.obesity}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ImcTable