import React, { useState } from 'react'
import './AddDoctor.css'
import Headline from '../Headline'
import { Button, Card, Checkbox, FormControl, FormControlLabel, FormHelperText, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'

function AddDoctor() {  
    const [doctorName, setDoctorName] = useState('Riaz')
    const [specialization, setSpecialization] = useState('medicine')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [doctorDetails, setDoctorDetails] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [experience, setExperience] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('male')
    const [address, setAddress] = useState('')
    const [checked, setChecked] = useState(false)
    const [profilePic, setProfilePic] = useState('')

    const submit = () => {
        alert('submited')
    }
    return (
        <div className="addDoctor">
            <Headline headline="Add Doctor" title='Add Doctor'/>
            <Card className="addDoctor__body">
                <div style={{color: "#E57498", paddingBottom: 10, borderBottom: '1px solid rgb(240, 236, 236)'}}>
                    <Typography variant="h5">Add Doctor</Typography>
                </div>
                <form className="addDoctor__BodyForm" onSubmit={submit}>
                    <div className="addDoctor__bodyFormFirstRow">
                        <div className="addDoctor__bodyFormFirstRowLeft">
                            <TextField required placeholder="John Doe" label="Doctor Name" InputLabelProps={{ shrink: true }} onChange={(e) => {setDoctorName(e.target.value)}} variant="outlined" />
                            <TextField select 
                                label="Specialization" 
                                SelectProps={{ native: true }}
                                onChange={(e) => setSpecialization(e.target.value)}
                                variant="outlined">
                                    <option  value='medicine'>Medicine</option>
                                    <option  value='heart'>Heart</option>
                                    <option  value='neuro'>Neuro</option>
                                    <option  value='brain'>Brain</option>
                            </TextField>
                            <TextField type="number" placeholder="36" label="Age" InputLabelProps={{ shrink: true }} onChange={(e) => {setAge(e.target.value)}}  variant="outlined" />
                            <TextField error={false} helperText={true ? null : "Wrong email pattern"} type="email" placeholder="johndoe@gmail.com" label="Email" InputLabelProps={{ shrink: true }} onChange={(e) => {setEmail(e.target.value)}} variant="outlined"/>
                            <TextField placeholder="M.B.B.S from Uk Isternford Medical College..." label="Doctor Details" InputLabelProps={{ shrink: true }} onChange={(e) => {setDoctorDetails(e.target.value)}} multiline rows="4" variant="outlined" />
                        </div>
                        <div className="addDoctor__bodyFormFirstRowRight">
                            <TextField type="date" label="Birth Year" InputLabelProps={{ shrink: true }} onChange={(e) => {setDateOfBirth(e.target.value)}}  variant="outlined" />
                            <TextField placeholder="5" label="Experience (in year)" InputLabelProps={{ shrink: true }} onChange={(e) => {setExperience(e.target.value)}} variant="outlined"/>
                            <TextField required placeholder="01684xxxxxx" label="Phone" InputLabelProps={{ shrink: true }} onChange={(e) => {setPhone(e.target.value)}} variant="outlined"/>
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
                    <div className="addDoctor__bodyFormSecondRow">

                        <TextField label="Upload profile pic" InputLabelProps={{ shrink: true }} type="file" onChange={(e) => {setProfilePic(e.target.value)}} variant="outlined" />
                    </div>
                    <div className="addDoctor__bodyFormSecondRowCheckBox">
                        <FormControlLabel control={<Checkbox required onChange={(e) => setChecked(!checked)} color="primary"/>} label="Please Confirm"/>
                    </div>
                    <Button style={{marginTop: 20}} type="submit" variant="contained" color="primary">
                        Add Doctor
                    </Button>
                </form>
            </Card>
        </div>
    )
}

export default AddDoctor
