import React from 'react';

const Filters = (props) => {
    const { inputProps, filterProps } = props;
return (
    <div>
        Search: 
        <input type="text" value={inputProps.value} name={inputProps.name} {...inputProps.textProps} />
    </div>
    <div> Sort By Rating: 

    </div>
    <div>
        <select name="cuisines" id="cuisines" {...filterProps.selectProps} >
        {filterProps.options.map((option) => <option value={option.value}>{option.label}</option> )}
        </select>
    </div>
    
)
};

export default Filters;