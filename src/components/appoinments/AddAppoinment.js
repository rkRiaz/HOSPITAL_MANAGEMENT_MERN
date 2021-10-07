import React, { useState } from 'react'
import './AddAppoinment.css'
import Headline from '../Headline'
import { Button, Card, Checkbox, FormControl, FormControlLabel, FormHelperText, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'

function AddAppoinment() {  
    const [patientName, setPatientName] = useState('')
    const [patientId, setPatientId] = useState('')
    const [doctorName, setDoctorName] = useState('')
    const [doctorId, setDoctorId] = useState('')
    const [department, setDepartment] = useState('medicine')

    const [appoinmentDate, setAppoinmentDate] = useState('')
    const [timeSlot, setTimeSlot] = useState('10AM - 11AM')
    const [tokenNumber, setTokenNumber] = useState('')

    const [problem, setProblem] = useState('')
    const [checked, setChecked] = useState(false)



    const submit = () => {
        alert('submited')
    }
    
    return (
        <div className="addAppoinment">
            <Headline headline="Add Appoinment" title='Add Appoinment'/>
            <Card className="addAppoinment__body">
                <div style={{color: "#E57498", paddingBottom: 10, borderBottom: '1px solid rgb(240, 236, 236)'}}>
                    <Typography variant="h5">Add Appoinment</Typography>
                </div>
                <form className="addAppoinment__BodyForm" onSubmit={submit}>
                    <div className="addAppoinment__bodyFormFirstRow">
                        <div className="addAppoinment__bodyFormFirstRowLeft">
                            <TextField required error={false} helperText={true ? null : "Wrong email pattern"} placeholder="John Doe" label="Patient Name" InputLabelProps={{ shrink: true }} onChange={(e) => {setPatientName(e.target.value)}} variant="outlined" />
                            <TextField placeholder="PA01" label="Patient Id" InputLabelProps={{ shrink: true }} onChange={(e) => {setPatientId(e.target.value)}}  variant="outlined" />
                            <TextField required placeholder="Abdul Latif" label="Doctor Name" InputLabelProps={{ shrink: true }} onChange={(e) => {setDoctorName(e.target.value)}} variant="outlined"/>
                            <TextField placeholder="DA01" label="Doctor Id" InputLabelProps={{ shrink: true }} onChange={(e) => {setDoctorId(e.target.value)}}  variant="outlined" />
                        </div>
                        <div className="addAppoinment__bodyFormFirstRowRight">
                            <TextField select 
                                label="Department" 
                                SelectProps={{ native: true }}
                                onChange={(e) => setDepartment(e.target.value)}
                                variant="outlined">
                                    <option  value='medicine'>Medicine</option>
                                    <option  value='neoro'>Neoro</option>
                                    <option  value='brain'>Brain</option>
                            </TextField>
                            <TextField type="date" label="Appoinment Date" InputLabelProps={{ shrink: true }} onChange={(e) => {setAppoinmentDate(e.target.value)}}  variant="outlined" />
                            <TextField select 
                                label="Time Slot" 
                                SelectProps={{ native: true }}
                                onChange={(e) => setTimeSlot(e.target.value)}
                                variant="outlined">
                                    <option  value='10AM - 11AM'>10AM - 11AM</option>
                                    <option  value='11AM - 12AM'>11AM - 12AM</option>
                                    <option  value='4PM - 5PM'>4PM - 5PM</option>
                            </TextField>
                            <TextField placeholder="" label="Token" InputLabelProps={{ shrink: true }} onChange={(e) => {setTokenNumber(e.target.value)}} variant="outlined"/>
                        </div>
                    </div>
                    <div className="addAppoinment__bodyFormSecondRow">
                        <TextField label="Problem" InputLabelProps={{ shrink: true }}  onChange={(e) => {setProblem(e.target.value)}} multiline rows="4" variant="outlined" />
                    </div>
                    <div className="addAppoinment__bodyFormSecondRowCheckBox">
                        <FormControlLabel control={<Checkbox required onChange={(e) => setChecked(!checked)} color="primary"/>} label="Please Confirm"/>
                    </div>
                    <Button style={{marginTop: 20}} type="submit" variant="contained" color="primary">
                        Add Appoinment
                    </Button>
                </form>
            </Card>
        </div>
    )
}

export default AddAppoinment
