import './Button.css'

export const Button = ({ id, text }) => {
    return (
        <div>
            <button id={id}>{text}</button>
        </div>
    )
}
