import React, { useState } from 'react'
import './EditAppoinment.css'
import Headline from '../Headline'
import { Button, Card, Checkbox, FormControl, FormControlLabel, FormHelperText, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import { useParams } from 'react-router-dom'

function EditAppoinment() {  
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
    let {appoinmentId} = useParams()




    const submit = () => {
        alert('submited')
    }
    
    return (
        <div className="editAppoinment">
            <Headline headline="Edit Appoinment" title='Edit Appoinment'/>
            <Card className="editAppoinment__body">
                <div style={{color: "#E57498", paddingBottom: 10, borderBottom: '1px solid rgb(240, 236, 236)'}}>
                    <Typography variant="h5">Edit Appoinment</Typography>
                </div>
                <form className="editAppoinment__BodyForm" onSubmit={submit}>
                    <div className="editAppoinment__bodyFormFirstRow">
                        <div className="editAppoinment__bodyFormFirstRowLeft">
                            <TextField required error={false} helperText={true ? null : "Wrong email pattern"} value="John Doe" label="Patient Name" InputLabelProps={{ shrink: true }} onChange={(e) => {setPatientName(e.target.value)}} variant="outlined" />
                            <TextField value="PA01" label="Patient Id" InputLabelProps={{ shrink: true }} onChange={(e) => {setPatientId(e.target.value)}}  variant="outlined" />
                            <TextField required value="Abdul Latif" label="Doctor Name" InputLabelProps={{ shrink: true }} onChange={(e) => {setDoctorName(e.target.value)}} variant="outlined"/>
                            <TextField value="DA01" label="Doctor Id" InputLabelProps={{ shrink: true }} onChange={(e) => {setDoctorId(e.target.value)}}  variant="outlined" />
                        </div>
                        <div className="editAppoinment__bodyFormFirstRowRight">
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
                                value={timeSlot}
                                label="Time Slot" 
                                SelectProps={{ native: true }}
                                onChange={(e) => setTimeSlot(e.target.value)}
                                variant="outlined">
                                    <option  value='10AM - 11AM'>10AM - 11AM</option>
                                    <option  value='11AM - 12AM'>11AM - 12AM</option>
                                    <option  value='4PM - 5PM'>4PM - 5PM</option>
                            </TextField>
                            <TextField value="TA01" label="Token" InputLabelProps={{ shrink: true }} onChange={(e) => {setTokenNumber(e.target.value)}} variant="outlined"/>
                        </div>
                    </div>
                    <div className="editAppoinment__bodyFormSecondRow">
                        <TextField value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad facilis quidem doloribus quia eaque praesentium ipsum repellendus non recusandae asperiores error" label="Problem" InputLabelProps={{ shrink: true }}  onChange={(e) => {setProblem(e.target.value)}} multiline rows="4" variant="outlined" />
                    </div>
                    <div className="editAppoinment__bodyFormSecondRowCheckBox">
                        <FormControlLabel control={<Checkbox required onChange={(e) => setChecked(!checked)} color="primary"/>} label="Please Confirm"/>
                    </div>
                    <Button style={{marginTop: 20}} type="submit" variant="contained" color="primary">
                        Edit Appoinment
                    </Button>
                </form>
            </Card>
        </div>
    )
}

export default EditAppoinment
