
import "./Spinner.css";

const Spinner = (props: any) => {
    return (
        <div className="screen-container">
            <div className="img-loading-section">
                <div className="spinner-load"></div>
            </div>
            <div className="loading-title">
                <h3>Carregando as informações...</h3>
            </div>
        </div>
    );
}

export default Spinner;