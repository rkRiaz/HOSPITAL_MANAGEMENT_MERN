import React, { useState } from 'react'
import './EditDoctor.css'
import Headline from '../Headline'
import { Button, Card, Checkbox, FormControlLabel, TextField, Typography } from '@material-ui/core'
import { useParams } from 'react-router-dom'


function EditDoctor() {  
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
    let {doctorId} = useParams()


console.log(doctorId)
    const submit = () => {
        alert('submited')
    }
    return (
        <div className="editDoctor">
            <Headline headline="Edit Doctor" title='Edit Doctor'/>
            <Card className="editDoctor__body">
                <div style={{color: "#E57498", paddingBottom: 10, borderBottom: '1px solid rgb(240, 236, 236)'}}>
                    <Typography variant="h5">Add Doctor</Typography>
                </div>
                <form className="editDoctor__BodyForm" onSubmit={submit}>
                    <div className="editDoctor__bodyFormFirstRow">
                        <div className="editDoctor__bodyFormFirstRowLeft">
                            <TextField required value="John Doe" label="Doctor Name" InputLabelProps={{ shrink: true }} onChange={(e) => {setDoctorName(e.target.value)}} variant="outlined" />
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
                            <TextField type="number" value="36" label="Age" InputLabelProps={{ shrink: true }} onChange={(e) => {setAge(e.target.value)}}  variant="outlined" />
                            <TextField error={false} helperText={true ? null : "Wrong email pattern"} type="email" value="johndoe@gmail.com" label="Email" InputLabelProps={{ shrink: true }} onChange={(e) => {setEmail(e.target.value)}} variant="outlined"/>
                            <TextField value="M.B.B.S from Uk Isternford Medical College..." label="Doctor Details" InputLabelProps={{ shrink: true }} onChange={(e) => {setDoctorDetails(e.target.value)}} multiline rows="4" variant="outlined" />
                        </div>
                        <div className="editDoctor__bodyFormFirstRowRight">
                            <TextField type="date" label="Birth Year" InputLabelProps={{ shrink: true }} onChange={(e) => {setDateOfBirth(e.target.value)}}  variant="outlined" />
                            <TextField value="5" label="Experience (in year)" InputLabelProps={{ shrink: true }} onChange={(e) => {setExperience(e.target.value)}} variant="outlined"/>
                            <TextField required value="01684xxxxxx" label="Phone" InputLabelProps={{ shrink: true }} onChange={(e) => {setPhone(e.target.value)}} variant="outlined"/>
                            <TextField 
                                select 
                                label="Gender" 
                                SelectProps={{ native: true }}
                                onChange={(e) => setGender(e.target.value)}
                                variant="outlined">
                                    <option value='male'>Male</option>
                                    <option value='Female'>Female</option>
                            </TextField>
                            <TextField value="Rahmat Vhaban/0299-00, Islampur, Cumilla" label="Address" InputLabelProps={{ shrink: true }} onChange={(e) => {setAddress(e.target.value)}} multiline rows="4" variant="outlined" />
                        </div>
                    </div>
                    <div className="editDoctor__bodyFormSecondRow">
                        <TextField label="Upload profile pic" InputLabelProps={{ shrink: true }} type="file" onChange={(e) => {setProfilePic(e.target.value)}} variant="outlined" />
                    </div>
                    <div className="editDoctor__bodyFormSecondRowCheckBox">
                        <FormControlLabel control={<Checkbox required onChange={(e) => setChecked(!checked)} color="primary"/>} label="Please Confirm"/>
                    </div>
                    <Button style={{marginTop: 20}} type="submit" variant="contained" color="primary">
                        Edit Doctor
                    </Button>
                </form>
            </Card>
        </div>
    )
}

export default EditDoctor
