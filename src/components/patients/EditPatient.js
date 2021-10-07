import React, { useState } from 'react'
import './EditPatient.css'
import Headline from '../Headline'
import { useParams } from 'react-router-dom'
import { Button, Card, Checkbox, FormControl, FormControlLabel, FormHelperText, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'

function EditPatient() {  
    const [patientName, setPatientName] = useState('Riaz')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('male')
    const [address, setAddress] = useState('')
    const [checked, setChecked] = useState(false)
    const [profilePic, setProfilePic] = useState('')
    let {patientId} = useParams()

    const submit = () => {
        alert('edited')
    }
    
    return (
        <div className="editPatient">
            <Headline headline="Edit Patient" title='Edit Patient'/>
            <Card className="editPatient__body">
                <div style={{color: "#E57498", paddingBottom: 10, borderBottom: '1px solid rgb(240, 236, 236)'}}>
                    <Typography variant="h5">Edit Patient</Typography>
                </div>
                <form className="editPatient__BodyForm" onSubmit={submit}>
                    <div className="editPatient__bodyFormFirstRow">
                        <div className="editPatient__bodyFormFirstRowLeft">
                            <TextField required value="John Doe" label="Patient Name" InputLabelProps={{ shrink: true }} onChange={(e) => {setPatientName(e.target.value)}} variant="outlined" />
                            <TextField type="number" value="36" label="Age" InputLabelProps={{ shrink: true }} onChange={(e) => {setAge(e.target.value)}}  variant="outlined" />
                            <TextField required value="01684xxxxxx" label="Phone" InputLabelProps={{ shrink: true }} onChange={(e) => {setPhone(e.target.value)}} variant="outlined"/>

                        </div>
                        <div className="editPatient__bodyFormFirstRowRight">
                            <TextField type="date" label="Birth Year" InputLabelProps={{ shrink: true }} onChange={(e) => {setDateOfBirth(e.target.value)}}  variant="outlined" />
                            <TextField error={false} helperText={true ? null : "Wrong email pattern"} type="email" value="johndoe@gmail.com" label="Email" InputLabelProps={{ shrink: true }} onChange={(e) => {setEmail(e.target.value)}} variant="outlined"/>
                            <TextField select 
                                label="Gender" 
                                SelectProps={{ native: true }}
                                onChange={(e) => setGender(e.target.value)}
                                variant="outlined">
                                    <option  value='male'>Male</option>
                                    <option  value='Female'>Female</option>
                            </TextField>
                            <TextField value="Rahmat Vhaban/0299-00, Islampur, Cumilla" label="Address" InputLabelProps={{ shrink: true }} onChange={(e) => {setAddress(e.target.value)}} multiline rows="4" variant="outlined" />
                        </div>
                    </div>
                    <div className="editPatient__bodyFormSecondRow">
                        <TextField label="Upload profile pic" InputLabelProps={{ shrink: true }} type="file" onChange={(e) => {setProfilePic(e.target.value)}} variant="outlined" />
                    </div>
                    <div className="editPatient__bodyFormSecondRowCheckBox">
                        <FormControlLabel control={<Checkbox required onChange={(e) => setChecked(!checked)} color="primary"/>} label="Please Confirm"/>
                    </div>
                    <Button style={{marginTop: 20}} type="submit" variant="contained" color="primary">
                        Edit Patient
                    </Button>
                </form>
            </Card>
        </div>
    )
}

export default EditPatient
