import "./css/header.css";

export default function Header(props) {
    return (
        <header>
            <div className="header-title-container">
                <a href="/"><h1 className="header-title">World Beauty</h1></a>
            </div>
            <div className="nav-container">
                <div className="nav-buttons">
                    {props.buttons}
                </div>
            </div>
        </header>
    );
}