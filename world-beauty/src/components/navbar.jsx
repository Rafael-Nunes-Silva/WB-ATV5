import "./css/navbar.css";

export default function Navbar(props) {
    return (
        <div class="navbar">
            {
                props.title &&
                <div className="navbar-title">
                    <h1>{props.title}</h1>
                    <h1 className="navbar-title-sec">{props.title}</h1>
                </div>
            }
            <div class="nav-container">
                <div class="nav-buttons">
                    {props.buttons}
                </div>
            </div>
        </div>
    );
}