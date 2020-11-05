import React, { useState } from 'react'
import './AddPatient.css'
import Headline from '../Headline'
import { Button, Card, Checkbox, FormControl, FormControlLabel, FormHelperText, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'

function AddPatient() {  
    const [patientName, setPatientName] = useState('Riaz')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('male')
    const [address, setAddress] = useState('')
    const [checked, setChecked] = useState(false)
    const [profilePic, setProfilePic] = useState('')

    const submit = () => {
        alert('submited')
    }
    
    return (
        <div className="addPatient">
            <Headline headline="Add Patient" title='Add Patient'/>
            <Card className="addPatient__body">
                <div style={{color: "#E57498", paddingBottom: 10, borderBottom: '1px solid rgb(240, 236, 236)'}}>
                    <Typography variant="h5">Add Patient</Typography>
                </div>
                <form className="addPatient__BodyForm" onSubmit={submit}>
                    <div className="addPatient__bodyFormFirstRow">
                        <div className="addPatient__bodyFormFirstRowLeft">
                            <TextField required placeholder="John Doe" label="Patient Name" InputLabelProps={{ shrink: true }} onChange={(e) => {setPatientName(e.target.value)}} variant="outlined" />
                            <TextField type="number" placeholder="36" label="Age" InputLabelProps={{ shrink: true }} onChange={(e) => {setAge(e.target.value)}}  variant="outlined" />
                            <TextField required placeholder="01684xxxxxx" label="Phone" InputLabelProps={{ shrink: true }} onChange={(e) => {setPhone(e.target.value)}} variant="outlined"/>

                        </div>
                        <div className="addPatient__bodyFormFirstRowRight">
                            <TextField type="date" label="Birth Year" InputLabelProps={{ shrink: true }} onChange={(e) => {setDateOfBirth(e.target.value)}}  variant="outlined" />
                            <TextField error={false} helperText={true ? null : "Wrong email pattern"} type="email" placeholder="johndoe@gmail.com" label="Email" InputLabelProps={{ shrink: true }} onChange={(e) => {setEmail(e.target.value)}} variant="outlined"/>
                            <TextField select 
                                label="Gender" 
                                SelectProps={{ native: true }}
                                onChange={(e) => setGender(e.target.value)}
                                variant="outlined">
                                    <option  value='male'>Male</option>
                                    <option  value='Female'>Female</option>
                            </TextField>
                            <TextField placeholder="Rahmat Vhaban/0299-00, Islampur, Cumilla" label="Address" InputLabelProps={{ shrink: true }} onChange={(e) => {setAddress(e.target.value)}} multiline rows="4" variant="outlined" />
                        </div>
                    </div>
                    <div className="addPatient__bodyFormSecondRow">
                        <TextField label="Upload profile pic" InputLabelProps={{ shrink: true }} type="file" onChange={(e) => {setProfilePic(e.target.value)}} variant="outlined" />
                    </div>
                    <div className="addPatient__bodyFormSecondRowCheckBox">
                        <FormControlLabel control={<Checkbox required onChange={(e) => setChecked(!checked)} color="primary"/>} label="Please Confirm"/>
                    </div>
                    <Button style={{marginTop: 20}} type="submit" variant="contained" color="primary">
                        Add Patient
                    </Button>
                </form>
            </Card>
        </div>
    )
}

export default AddPatient
