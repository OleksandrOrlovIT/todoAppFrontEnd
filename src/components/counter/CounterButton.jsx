import {PropTypes} from 'prop-types'

export default function CounterButton({by, incrementmethod, decrementmethod}){

    // function incrementCounterFunction(){
    //     incrementmethod(by)
    // }

    // function decrementCounterFuntion(){
    //     decrementmethod(by)
    // }

    return(
        <div className="Counter">
            <div>
                <button className="counterButton" 
                        onClick={() => incrementmethod(by)}
                        >+{by}</button>
                <button className="counterButton" 
                        onClick={() => decrementmethod(by)}
                        >-{by}</button>
            </div>
        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by:1
}