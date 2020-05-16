import React from 'react';

const Filters = (props) => {
    const { inputProps, filterProps } = props;
return (
    <React.Fragment>
    <div>
        Search By name: 
        <input type="text" value={inputProps.value} name={inputProps.name} {...inputProps.textProps} />
    </div>
    <div> Sort By Rating: 

    </div>
    {/* <div>
        <select name="cuisines" id="cuisines" {...filterProps.selectProps} >
        {filterProps.options.map((option) => <option value={option.value}>{option.label}</option> )}
        </select>
    </div> */}
    </React.Fragment>
)
};

export default Filters;