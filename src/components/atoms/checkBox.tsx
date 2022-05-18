import React from "react"

import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox"

export default function CheckboxLabels() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked })
    }

    return (
        <FormControlLabel
            control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary" />}
            label="Primary"
        />
    )
}
