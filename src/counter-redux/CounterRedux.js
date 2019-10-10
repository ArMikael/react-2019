import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

const styles = {
    section: {
        width: '180px',
        margin: '40px',
        padding: '20px',
        border: '1px solid green',
        textAlign: 'center'
    },

    button: {
        marginRight: '10px',
        marginBottom: '10px',
        backgroundColor: 'transparent',
        border: '1px solid green'
    },

    ul: {
        listStyle: 'none',
        padding: '0'
    }
};

class CounterRedux extends React.Component {
    render() {
        return(
            <section className='redux-counter' style={styles.section}>
                Redux counter:
                <h2>{ this.props.ctr }</h2>
                <button style={ styles.button } onClick={ this.props.onDecrementCounter }>Minus</button>
                <button style={ styles.button } onClick={ this.props.onIncrementCounter }>Plus</button>
                <button style={ styles.button } onClick={ this.props.onSubtractCounter }>Minus 5</button>
                <button style={ styles.button } onClick={ this.props.onAddCounter }>Plus 5</button>

                <div>
                    <button style={ styles.button } onClick={ this.props.onResetCounter }>Reset</button>
                </div>

                <div className="buttons-wrapper">
                    <button style={ styles.button } onClick={ () => this.props.onStoreResult(this.props.ctr) }>Save Result</button>
                </div>

                <ul style={styles.ul}>
                    { this.props.storedResults.map(result => (
                         <li id={result.id} key={result.id} onClick={() => this.props.onDeleteResult(result.id) }>
                            { result.value }
                         </li>
                    ))}
                </ul>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT_COUNTER }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT_COUNTER }),
        onAddCounter: () => dispatch({ type: actionTypes.ADD_COUNTER, value: 5}),
        onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT_COUNTER, value: 5}),
        onResetCounter: () => dispatch({ type: actionTypes.RESET_COUNTER}),
        onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultId: id})
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);