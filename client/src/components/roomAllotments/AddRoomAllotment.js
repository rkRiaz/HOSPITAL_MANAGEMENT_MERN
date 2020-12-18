import React, { useState } from 'react'
import './AddRoomAllotment.css'
import Headline from '../Headline'
import { Button, Card, Checkbox, FormControl, FormControlLabel, FormHelperText, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'

function AddRoomAllotment() {  
    const [roomNumber, setRoomNumber] = useState('')
    const [patientName, setPatientName] = useState('')
    const [patientId, setPatientId] = useState('')
    const [doctorName, setDoctorName] = useState('')
    const [doctorId, setDoctorId] = useState('')

    const [roomType, setRoomType] = useState('general')
    const [allotmentDate, setAllotmentDate] = useState('')
    const [dischargeDate, setDishchargeDate] = useState('')

    const [checked, setChecked] = useState(false)

    const submit = () => {
        alert('submited')
    }
    
    return (
        <div className="addRoomAllotment">
            <Headline headline="Add Allotment" title='Add Allotment'/>
            <Card className="addRoomAllotment__body">
                <div style={{color: "#E57498", paddingBottom: 10, borderBottom: '1px solid rgb(240, 236, 236)'}}>
                    <Typography variant="h5">Add Allotment</Typography>
                </div>
                <form className="addRoomAllotment__BodyForm" onSubmit={submit}>
                    <div className="addRoomAllotment__bodyFormFirstRow">
                        <div className="addRoomAllotment__bodyFormFirstRowLeft">
                            <TextField placeholder="R01" label="Room Number" InputLabelProps={{ shrink: true }} onChange={(e) => {setRoomNumber(e.target.value)}}  variant="outlined" />
                            <TextField required error={false} helperText={true ? null : "Wrong email pattern"} placeholder="John Doe" label="Patient Name" InputLabelProps={{ shrink: true }} onChange={(e) => {setPatientName(e.target.value)}} variant="outlined" />
                            <TextField placeholder="PA02" label="Patient Id" InputLabelProps={{ shrink: true }} onChange={(e) => {setPatientId(e.target.value)}} variant="outlined" />
                            <TextField required placeholder="Abdul Latif" label="Doctor Name" InputLabelProps={{ shrink: true }} onChange={(e) => {setDoctorName(e.target.value)}} variant="outlined"/>
                            <TextField required placeholder="DA03" label="Doctor Id" InputLabelProps={{ shrink: true }} onChange={(e) => {setDoctorId(e.target.value)}} variant="outlined"/>
                        </div>
                        <div className="addRoomAllotment__bodyFormFirstRowRight">
                            <TextField select 
                                label="Room Type" 
                                SelectProps={{ native: true }}
                                onChange={(e) => setRoomType(e.target.value)}
                                variant="outlined">
                                    <option  value='general'>General</option>
                                    <option  value='acRoom'>AC ROOM</option>
                                    <option  value='icu'>ICU</option>
                            </TextField>
                            <TextField type="date" label="Allotment Date" InputLabelProps={{ shrink: true }} onChange={(e) => {setAllotmentDate(e.target.value)}}  variant="outlined" />
                            <TextField type="date" label="Discharge Date" InputLabelProps={{ shrink: true }} onChange={(e) => {setDishchargeDate(e.target.value)}}  variant="outlined" /> 
                        </div>
                    </div>
                    <div className="addRoomAllotment__bodyFormSecondRowCheckBox">
                        <FormControlLabel control={<Checkbox required onChange={(e) => setChecked(!checked)} color="primary"/>} label="Please Confirm"/>
                    </div>
                    <Button style={{marginTop: 20}} type="submit" variant="contained" color="primary">
                        Add Allotment
                    </Button>
                </form>
            </Card>
        </div>
    )
}

export default AddRoomAllotment
