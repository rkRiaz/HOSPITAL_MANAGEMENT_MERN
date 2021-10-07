import React, {useState} from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import {ExpandMoreOutlined,
        ExpandLessOutlined,
        LocalHospitalOutlined,
        HomeOutlined,
        SupervisorAccountOutlined,
        AccessibleOutlined,
        CreateOutlined,
        LockOpenOutlined,
        AttachMoneyOutlined,
        QuestionAnswerOutlined,
        PhoneIphoneOutlined,
        EmailOutlined,
        } from '@material-ui/icons';
    
function SideBar() {
    const[isShowDoctorsDrawer, setIsShowDoctorsDrawer] = useState(false)
    const[isShowPatientsDrawer, setIsShowPatientsDrawer] = useState(false)
    const[isShowAppointmentsDrawer, setIsShowAppointmentsDrawer] = useState(false)
    const[isShowRoomAllotmentsDrawer, setIsShowRoomAllotmentsDrawer] = useState(false)
    const[isShowPaymentsDrawer, setIsShowPaymentsDrawer] = useState(false)


    const showDoctorsDrawer = (event) => {
        event.preventDefault()
        let sidebar = document.getElementsByClassName('sidebar')[0].clientWidth
        console.log(sidebar)
        if(sidebar <= 80 ) {
            setIsShowDoctorsDrawer(!isShowDoctorsDrawer)      
            setIsShowPatientsDrawer(false)
            setIsShowAppointmentsDrawer(false)
            setIsShowRoomAllotmentsDrawer(false)
            setIsShowPaymentsDrawer(false) 
        
        } else {
            setIsShowDoctorsDrawer(!isShowDoctorsDrawer)
        }
                
    }

    const showPatientsDrawer = (event) => {
        event.preventDefault()
        let sidebar = document.getElementsByClassName('sidebar')[0].clientWidth
        if(sidebar <= 80 ) {
            setIsShowPatientsDrawer(!isShowPatientsDrawer)      
            setIsShowDoctorsDrawer(false)
            setIsShowAppointmentsDrawer(false)
            setIsShowRoomAllotmentsDrawer(false)
            setIsShowPaymentsDrawer(false) 
        
        } else {
            setIsShowPatientsDrawer(!isShowPatientsDrawer)    
        }
    }

    const showAppointmentsDrawer = (event) => {
        event.preventDefault()
        let sidebar = document.getElementsByClassName('sidebar')[0].clientWidth
        if(sidebar <= 80 ) {
            setIsShowAppointmentsDrawer(!isShowAppointmentsDrawer)      
            setIsShowDoctorsDrawer(false)
            setIsShowPatientsDrawer(false)
            setIsShowRoomAllotmentsDrawer(false)
            setIsShowPaymentsDrawer(false) 
        
        } else {
            setIsShowAppointmentsDrawer(!isShowAppointmentsDrawer)    
        }
    }

    const showRoomAllotmentsDrawer = (event) => {
        event.preventDefault()
        let sidebar = document.getElementsByClassName('sidebar')[0].clientWidth
        if(sidebar <= 80 ) {
            setIsShowRoomAllotmentsDrawer(!isShowRoomAllotmentsDrawer)      
            setIsShowDoctorsDrawer(false)
            setIsShowPatientsDrawer(false)
            setIsShowAppointmentsDrawer(false)
            setIsShowPaymentsDrawer(false) 
        
        } else {
            setIsShowRoomAllotmentsDrawer(!isShowRoomAllotmentsDrawer)    
        }
    }
    
    const showPaymentsDrawer = (event) => {
        event.preventDefault()
        let sidebar = document.getElementsByClassName('sidebar')[0].clientWidth
        if(sidebar <= 80 ) {
            setIsShowPaymentsDrawer(!isShowPaymentsDrawer)      
            setIsShowDoctorsDrawer(false)
            setIsShowPatientsDrawer(false)
            setIsShowAppointmentsDrawer(false)
            setIsShowRoomAllotmentsDrawer(false)
        
        } else {
            setIsShowPaymentsDrawer(!isShowPaymentsDrawer)    
        }
    }
    
    return (
        <div className="sidebar">

            <Link to="/" className="sidebar__logo">
                <LocalHospitalOutlined/> HMS 
            </Link>

            <Link to='/' className="sidebar__item">
                <div className="sidebar__itemIcon">
                    <div className="sidebar__itemIconLeft">
                        <HomeOutlined /> <span> Dashboard </span>
                    </div>
                    {/* <ExpandMoreOutlined /> */}
                </div>
                {/* <div className="sidebar__itemDrawer">
                </div> */}
            </Link>

            <div className="sidebar__item">
                <div onClick={showDoctorsDrawer} className={isShowDoctorsDrawer ? "sidebar__itemIcon sidebar__itemIconBg" : "sidebar__itemIcon"}>
                    <div className="sidebar__itemIconLeft">
                        <SupervisorAccountOutlined /> <span> Doctors </span>
                    </div>
                    <span> {isShowDoctorsDrawer ? <ExpandLessOutlined/> : <ExpandMoreOutlined/>} </span>
                </div>
                <div className={isShowDoctorsDrawer ? "sidebar__itemDrawer sidebar__itemDrawerShow" : "sidebar__itemDrawer"}>
                    <Link to="/addDoctor">Add Doctor</Link>
                    <Link to="/allDoctors">All Doctors</Link>
                    <Link to="/detailsDoctor/01">Doctor Details</Link>
                    <Link to="/editDoctor/01">Edit Doctor</Link>
                </div>
            </div>

            <div className="sidebar__item">
                <div onClick={showPatientsDrawer} className={isShowPatientsDrawer ? "sidebar__itemIcon sidebar__itemIconBg" : "sidebar__itemIcon"}>
                    <div className="sidebar__itemIconLeft">
                        <AccessibleOutlined /> <span> Patients </span>
                    </div>
                    <span> {isShowPatientsDrawer ? <ExpandLessOutlined/> : <ExpandMoreOutlined/>} </span>
                </div>
                <div className={isShowPatientsDrawer ? "sidebar__itemDrawer sidebar__itemDrawerShow" : "sidebar__itemDrawer"}>
                    <Link to="/addPatient">Add Patient</Link>
                    <Link to="/allPatients">All Patients</Link>
                    <Link to="/detailsPatient/01">Patient Details</Link>
                    <Link to="/editPatient/01">Edit Patient</Link>
                </div>
            </div>

            <div className="sidebar__item">
                <div onClick={showAppointmentsDrawer} className={isShowAppointmentsDrawer ? "sidebar__itemIcon sidebar__itemIconBg" : "sidebar__itemIcon"}>
                    <div className="sidebar__itemIconLeft">
                        <CreateOutlined /> <span> Appointments </span>
                    </div>
                    <span> {isShowAppointmentsDrawer ? <ExpandLessOutlined/> : <ExpandMoreOutlined/>} </span>
                </div>
                <div className={isShowAppointmentsDrawer ? "sidebar__itemDrawer sidebar__itemDrawerShow" : "sidebar__itemDrawer"}>
                    <Link to="/addAppoinment">Add Appointment</Link>
                    <Link to="/allAppoinments">All Appointments</Link>
                    <Link to="/detailsAppoinment/01">Appointment Details</Link>
                    <Link to="/editAppoinment/01">Edit Appointment</Link>
                </div>
            </div>

            <div className="sidebar__item">
                <div onClick={showRoomAllotmentsDrawer} className={isShowRoomAllotmentsDrawer ? "sidebar__itemIcon sidebar__itemIconBg" : "sidebar__itemIcon"}>
                    <div className="sidebar__itemIconLeft">
                        <LockOpenOutlined /> <span> Room Allotments </span>
                    </div>
                    <span> {isShowRoomAllotmentsDrawer ? <ExpandLessOutlined/> : <ExpandMoreOutlined/>} </span>
                </div>
                <div className={isShowRoomAllotmentsDrawer ? "sidebar__itemDrawer sidebar__itemDrawerShow" : "sidebar__itemDrawer"}>
                    <Link to="/addRoomAllotment">Add Room Allotment</Link>
                    <Link to="/allRooms">All Rooms</Link>
                    <Link to="/addRoom">Add Room</Link>
                    <Link to="/editRoomAllotment/01">Edit Room Allotment</Link>
                </div>
            </div>

            <div className="sidebar__item">
                <div onClick={showPaymentsDrawer} className={isShowPaymentsDrawer ? "sidebar__itemIcon sidebar__itemIconBg" : "sidebar__itemIcon"}>
                    <div className="sidebar__itemIconLeft">
                        <AttachMoneyOutlined /> <span> Payments </span>
                    </div>
                    <span> {isShowPaymentsDrawer ? <ExpandLessOutlined/> : <ExpandMoreOutlined/>} </span>
                </div>
                <div className={isShowPaymentsDrawer ? "sidebar__itemDrawer sidebar__itemDrawerShow" : "sidebar__itemDrawer"}>
                    <Link to="#">Add Payment</Link>
                    <Link to="#">All Payments</Link>
                    <Link to="#">Payment Invoice</Link>
                </div>
            </div>

            <div className="sidebar__contacts">
                <div className="sidebar__contactsHeading">
                    <QuestionAnswerOutlined /> Need Help
                </div>
                <div className="sidebar__contactsItem">
                    <PhoneIphoneOutlined /> +880 {" "} 16846 {" "} 80383
                </div>
                <div className="sidebar__contactsItem">
                    <EmailOutlined /> mdriaz9587@gmail.com
                </div>
                <div className="sidebar__contactsItem">
                    Copy Rights &copy; 2020
                </div>
            </div>

        </div>
    )
}

export default SideBar
