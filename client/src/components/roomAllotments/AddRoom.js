import React, { useState } from 'react'
import './AddRoom.css'
import Headline from '../Headline'
import { Button, Card, Checkbox, FormControlLabel, TextField, Typography } from '@material-ui/core'

function AddRoomAllotment() {  
    const [roomNumber, setRoomNumber] = useState('')
    const [roomType, setRoomType] = useState('general')
    const [details, setDetails] = useState('')

    const [checked, setChecked] = useState(false)

    const submit = () => {
        alert('submited')
    }
    
    return (
        <div className="addRoom">
            <Headline headline="Add Room" title='Add Room'/>
            <Card className="addRoom__body">
                <div style={{color: "#E57498", paddingBottom: 10, borderBottom: '1px solid rgb(240, 236, 236)'}}>
                    <Typography variant="h5">Add Room</Typography>
                </div>
                <form className="addRoom__BodyForm" onSubmit={submit}>
                    <div className="addRoom__bodyFormFirstRow">
                            <TextField placeholder="R01" label="Add Room" InputLabelProps={{ shrink: true }} onChange={(e) => {setRoomNumber(e.target.value)}}  variant="outlined" />
                            <TextField select 
                                label="Room Type" 
                                SelectProps={{ native: true }}
                                onChange={(e) => setRoomType(e.target.value)}
                                variant="outlined">
                                    <option value='general'>General</option>
                                    <option value='acRoom'>AC ROOM</option>
                                    <option value='icu'>ICU</option>
                            </TextField>
                            <TextField placeholder="" label="Details" InputLabelProps={{ shrink: true }} onChange={(e) => {setDetails(e.target.value)}} multiline rows="4" variant="outlined" />
                    </div>
                    <div className="addRoom__bodyFormSecondRowCheckBox">
                        <FormControlLabel control={<Checkbox required onChange={(e) => setChecked(!checked)} color="primary"/>} label="Please Confirm"/>
                    </div>
                    <Button style={{marginTop: 20}} type="submit" variant="contained" color="primary">
                        Add Room
                    </Button>
                </form>
            </Card>
        </div>
    )
}

export default AddRoomAllotment
