import React from 'react'
const timezones = ['PST','MST','MDT','EST','UTC'];

class TimeForm extends React.Component{
    constructor(props){
        super(props);
        const(tz,msg) = this.props;
        this.state = {tz,msg};
    }

    _handleChange(evt){
        typeof this.props.OnFromChange === 'function' && 
            this.props.OnFromChange(this.state)
    }

    _changeTimezone(evt){
        const tz = evt.target.value
        this.setState({tz},this._handleChange);
    }
}