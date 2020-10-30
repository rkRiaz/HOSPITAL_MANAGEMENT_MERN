import React, {useState} from 'react'
import { FormControl, InputLabel, FormHelperText, Input } from "@material-ui/core";

function Admission() {
    const[patientName, setPatientName] = useState('')
    const[fatherName, setFatherName] = useState('')
    const[husbandName, setHusbandName] = useState('')
    const[motherName, setMotherName] = useState('')
    const[sex, setSex] = useState('')
    const[age, setAge] = useState('')
    const[diagnosis, setDiagnosis] = useState('')
    const[presentAddress, setPresentAddress] = useState('')
    const[permanentAddress, setPermanentAddress] = useState('')
    const[phone, setPhone] = useState('')
    const[religion, setReligion] = useState('')
    const[referedBy, setReferedBy] = useState('')
    const[careOf, setCareOf] = useState('')
    const[patientPic, setPatientPic] = useState('')
    




    return (
      <div className="admission">
        <div className="admission__patientInfo">
            <FormControl>
            <InputLabel htmlFor="my-input">Patient Name</InputLabel>
            <Input onChange={e => setPatientName(e.target.value)} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my-input">Father's Name</InputLabel>
            <Input onChange={e => setFatherName(e.target.value)} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>        
            <FormControl>
            <InputLabel htmlFor="my-input">Mother's Name</InputLabel>
            <Input onChange={e => setPatientName(e.target.value)} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>        
            <FormControl>
            <InputLabel htmlFor="my-input">Phone No</InputLabel>
            <Input onChange={e => setPatientName(e.target.value)} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
        </div>
      </div>
    );
}

export default Admission
