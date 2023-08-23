import { connect } from "react-redux";
import { incrementCounter, decrementCounter, resetCounter } from "../../Redux/Counter/ActionCounter";


const Counter = (props) => {
    return (
        <>
            <h2 className="text-center mt-5">REDUX-REACT</h2>
            <div className="col-6 offset-3 my-5 bg-dark-subtle p-5 rounded-2 shadow-lg text-center">
                <h3 className="mb-3">Counter: {props.counter}</h3>
                <button onClick={props.increment} className="btn btn-success mx-2 shadow-sm">Increment</button>
                <button onClick={props.decrement} className="btn btn-primary mx-2 shadow-sm">Decrement</button>
                <button onClick={props.reset} className="btn btn-warning mx-2 shadow-sm">Reset</button>
            </div>
        </>
    );
}
const mapStateProps = (state) => {
    return {
        counter: state.count
    }
}
const mapDispatchProps = (dispatch) => {
    return {
        increment: () => dispatch(incrementCounter()),//INCREMENT_COUNTER
        decrement: () => dispatch(decrementCounter()),//DECREMENT_COUNTER
        reset: () => dispatch(resetCounter()),//RESET_COUNTER
    }
}

export default connect(mapStateProps, mapDispatchProps)(Counter);