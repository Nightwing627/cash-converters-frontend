import React, {useState } from "react";

export default function OutlinedInput({ name, label, placeholder, onBlur, errors}) {
    const [focused, setFocused] = useState(false);
   
    return (
        <div className='FormControl-root FormControl-fullWidth'>
            <div className={`FormControl-root TextField-root FormControl-fullWidth
                            ${focused ? 'focused' : ''}
                            ${errors[name] ? 'error' : ''}`}>
                <label 
                    className='FormLabel-root InputLabel-root InputLabel-formControl 
                                InputLabel-animated InputLabel-shrink InputLabel-outlined'
                    htmlFor={name}>{label}</label>
                <div className="InputBase-root OutlinedInput-root InputBase-fullWidth InputBase-formControl">
                    <input 
                        name={name}
                        type='text'
                        autoCorrect="off"
                        autoCapitalize="off"
                        ariaAutocomplete={false}
                        autoComplete={false}
                        spellCheck={false}
                        className='InputBase-input OutlinedInput-input'
                        placeholder={placeholder}
                        onBlur={e => { 
                            setFocused(false)
                            onBlur(e)
                        }}
                        onFocus={e => setFocused(true)} />
                    <fieldset 
                        className='form-fieldset OutlinedInput-notchedOutline'>
                        <legend className="fieldset-legend-282 fieldset-legend-283">
                            <span>{label}</span>
                        </legend>
                    </fieldset>
                </div>
            </div>
            {errors[name] ? 
                (<p className="FormHelperText-root error">{errors[name]}</p>)
              : (<p className="FormHelperText-root">&nbsp;</p>)}
        </div>
    )
}