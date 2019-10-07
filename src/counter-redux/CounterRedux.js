import React from 'react';
import { connect } from 'react-redux';

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
        backgroundColor: 'transparent',
        border: '1px solid green'
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
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INC_COUNTER'}),
        onDecrementCounter: () => dispatch({ type: 'DEC_COUNTER'})
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);