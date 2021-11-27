import React from 'react';

const Spinner = (props) => {
    return (
            <div class="ui active dimmer">
                <div class="ui big text loader">{props.message}</div>
            </div>
    );
}

// if the user does not specify a value to the message prop, it is going to be provided from the following default props:
Spinner.defaultProps={
    message: 'Loading...'
}

export default Spinner;