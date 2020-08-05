import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
    }

    handleChange = (event) =>{
        this.props.onTemperatureChange(event.target.value);
    }

    render() {
        const {scale, temperature} = this.props;

        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]};</legend>
                <input 
                    value = {temperature}
                    onChange = {this.handleChange} />
            </fieldset>
        )
    }
}

export default TemperatureInput;