import { Provider } from "react-redux";
import store from "../../Redux/Store"
import Counter from "../Counter/Counter";

const App = () => {
    return (
        <>
            <Provider store={store} >
                <Counter />
            </Provider>
        </>
    );
}

export default App;