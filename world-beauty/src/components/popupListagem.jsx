import "./css/popupListagem.css";

export default function PopupListagem(props) {
    return (
        <div className="resultado-listagem">
            <div className="resultado-header">
                <h1>{props.title}</h1><button className="button" onClick={props.CloseCallback}>X</button>
            </div><hr />
            <div className="resultado-lista">
                {props.listagem}
            </div>
        </div>
    );
}