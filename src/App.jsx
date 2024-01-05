
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import "./App.scss";

function App() {
    return (
        <div className="App" style={{ backgroundImage: `url('${process.env.REACT_APP_BE_URL}/public/background.jpg')` }}>
            
            <ToastContainer />
        </div>
    );
}

export default App;
