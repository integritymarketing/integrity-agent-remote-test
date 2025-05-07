import "./Button.css";
import useCount from "./store";

export const Button = () => {
    const [state, setState] = useCount();
    return (
        <div className="remoteApp">
            <h1>Remote App</h1>
            <button className="shared-btn" onClick={() => setState((s) => s + 1)}>
                REMOTE APP: {state}
            </button>
        </div>
    );
};

export default Button;