import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer class MobxDecoratorCounter extends React.Component {
    @observable count = 0;

    @action increment = () => {
        this.count++;
    };

    @action decrement = () => {
        this.count--;
    };

    render() {
        return (
            <div className='counter'>
                <h2>{ this.count }</h2>
                <button onClick={ this.increment }>+</button>
                <button onClick={ this.decrement }>-</button>
            </div>
        )
    }
}

export default MobxDecoratorCounter;