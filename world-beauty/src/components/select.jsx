import "./css/select.css";

function MakeOptions(options) {
    return options.map((op) => <option className="custom-select-option" value={op.value}>{op.name}</option>);
}

export default function Select(props) {
    return (
        <select className="custom-select" {...props}>
            {props.title && <option className="custom-select-option" selected disabled>{props.title}</option>}
            {MakeOptions(props.options)}
        </select>
    );
}