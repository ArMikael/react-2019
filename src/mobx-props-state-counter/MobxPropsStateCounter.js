import React from 'react';
import { observer } from 'mobx-react';

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

const MobxPropsStateCounter = observer(props => {
    return(
        <section className='app-counter' style={styles.section}>
            MobX counter:
            <h2>{ props.appState.count }</h2>
            <button style={ styles.button } onClick={ props.appState.minus }>Minus</button>
            <button style={ styles.button } onClick={ props.appState.plus }>Plus</button>

            <div>
                <button style={ styles.button } onClick={ props.appState.reset }>Reset</button>
            </div>
        </section>
    );
});

export default MobxPropsStateCounter;