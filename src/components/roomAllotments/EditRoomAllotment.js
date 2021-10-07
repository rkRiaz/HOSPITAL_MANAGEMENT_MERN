import React, { useState } from 'react'
import './EditRoomAllotment.css'
import Headline from '../Headline'
import { Button, Card, Checkbox, FormControl, FormControlLabel, FormHelperText, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import { useParams } from 'react-router-dom'

function EditRoomAllotment() {  
    const [roomNumber, setRoomNumber] = useState('')
    const [patientName, setPatientName] = useState('')
    const [patientId, setPatientId] = useState('')
    const [doctorName, setDoctorName] = useState('')
    const [doctorId, setDoctorId] = useState('')

    const [roomType, setRoomType] = useState('general')
    const [allotmentDate, setAllotmentDate] = useState('')
    const [dischargeDate, setDishchargeDate] = useState('')

    const [checked, setChecked] = useState(false)
    let {allotmentId} = useParams()


    const submit = () => {
        alert('submited')
    }
    
    return (
        <div className="editRoomAllotment">
            <Headline headline="Edit Room Allotment" title='Edit Room Allotment'/>
            <Card className="editRoomAllotment__body">
                <div style={{color: "#E57498", paddingBottom: 10, borderBottom: '1px solid rgb(240, 236, 236)'}}>
                    <Typography variant="h5">Edit Room Allotment</Typography>
                </div>
                <form className="editRoomAllotment__BodyForm" onSubmit={submit}>
                    <div className="editRoomAllotment__bodyFormFirstRow">
                        <div className="editRoomAllotment__bodyFormFirstRowLeft">
                            <TextField disabled value="R01" label="Room Number" InputLabelProps={{ shrink: true }} onChange={(e) => {setRoomNumber(e.target.value)}}  variant="outlined" />
                            <TextField required error={false} helperText={true ? null : "Wrong email pattern"} value="John Doe" label="Patient Name" InputLabelProps={{ shrink: true }} onChange={(e) => {setPatientName(e.target.value)}} variant="outlined" />
                            <TextField value="PA02" label="Patient Id" InputLabelProps={{ shrink: true }} onChange={(e) => {setPatientId(e.target.value)}} variant="outlined" />
                            <TextField required value="Abdul Latif" label="Doctor Name" InputLabelProps={{ shrink: true }} onChange={(e) => {setDoctorName(e.target.value)}} variant="outlined"/>
                            <TextField required value="DA03" label="Doctor Id" InputLabelProps={{ shrink: true }} onChange={(e) => {setDoctorId(e.target.value)}} variant="outlined"/>
                        </div>
                        <div className="editRoomAllotment__bodyFormFirstRowRight">
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
                    <div className="editRoomAllotment__bodyFormSecondRowCheckBox">
                        <FormControlLabel control={<Checkbox required onChange={(e) => setChecked(!checked)} color="primary"/>} label="Please Confirm"/>
                    </div>
                    <Button style={{marginTop: 20}} type="submit" variant="contained" color="primary">
                        Edit Allotment
                    </Button>
                </form>
            </Card>
        </div>
    )
}

export default EditRoomAllotment
