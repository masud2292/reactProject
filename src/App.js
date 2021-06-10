import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./router/AppRoute";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AppRoute/>
            </BrowserRouter>
        </div>
    );
}

export default App;