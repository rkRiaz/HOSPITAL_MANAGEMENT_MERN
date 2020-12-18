import React from 'react'
import './Dashboard.css'
import Headline from './Headline'
import {LineChart, BarChart, PieChart} from './Chart'
import {CustomizedTables} from './Table'
import {AccessibleOutlined, ExpandMoreOutlined, ExpandLessOutlined, AttachMoneyOutlined, BarChartOutlined} from '@material-ui/icons';
import {Card, Chip, Typography} from '@material-ui/core';

function Dashboard() {
    return (
        <div className="dashboard">
            <Headline headline="Quick Statistics" title="Dashboard"/>
            <div className="dashboard__body">
                <div className="dashboard__bodyFirstRow">
                    <Card>
                        <div className="dashboard__bodyFirstRowLogo">
                            <AccessibleOutlined/>
                        </div>
                        <div className="dashboard__bodyFirstRowContent">
                            <Typography variant="caption">Patients</Typography>
                            <Typography variant="h4">318</Typography>
                            <Typography variant="caption"><ExpandLessOutlined/> +20% increased </Typography>
                        </div>
                    </Card>
                    <Card>
                        <div className="dashboard__bodyFirstRowLogo">
                            <BarChartOutlined/>
                        </div>
                        <div className="dashboard__bodyFirstRowContent">
                            <Typography variant="caption">Appointments</Typography>
                            <Typography variant="h4">54584</Typography>
                            <Typography variant="caption"><ExpandMoreOutlined/> -20% decreased </Typography>
                        </div>
                    </Card>
                    <Card>
                        <div className="dashboard__bodyFirstRowLogo">
                            <AttachMoneyOutlined/>
                        </div>
                        <div className="dashboard__bodyFirstRowContent">
                            <Typography variant="caption">Total Revenue</Typography>
                            <Typography variant="h4">318</Typography>
                            <Typography variant="caption"><ExpandLessOutlined/> +20% increased </Typography>
                        </div>
                    </Card>
                </div>

                <div className="dashboard__bodySecondRow">
                    <LineChart/>
                    <BarChart/>
                </div>

                <Card className="dashboard__bodyThirdRow">
                    <div style={{color: "#E57498", padding: 20, borderBottom: '1px solid rgb(240, 236, 236)'}}>
                        <Typography variant="h5">Appointments</Typography>
                    </div>
                    <div className='dashboard__bodyThirdRowTable'>
                        <CustomizedTables />
                    </div>
                </Card>

                <div className="dashboard__bodyFourthRow">
                    <PieChart/>
                    <Card>
                        <div style={{color: "#E57498", padding: 20, borderBottom: '1px solid rgb(240, 236, 236)'}}>
                            <Typography variant="h5">Doctors Availability</Typography>
                        </div>
                        <div className="dashboard__bodyFourthRowTableScroll">
                           <table className="dashboard__bodyFourthRowTable">
                            <tr>
                                    <td>Doctor</td>
                                    <td>Speciality</td>
                                    <td>Status</td>
                                </tr>
                                <tr>
                                    <td>Rajesh</td>
                                    <td>HertSpecialist</td>
                                    <td><Chip size='small' label={'unavailable'}color="secondary" /></td>
                                </tr>
                                <tr>
                                    <td>Rajesh</td>
                                    <td>HertSpecialist</td>
                                    <td><Chip size='small' label={'onleave'}color="" /></td>
                                </tr>
                                <tr>
                                    <td>Rajesh</td>
                                    <td>HertSpecialist</td>
                                    <td> <Chip size='small' label={'available'}color="primary" /></td>
                                </tr>
                                <tr>
                                    <td>Rajesh</td>
                                    <td>HertSpecialist</td>
                                    <td> <Chip size='small' label={'available'}color="primary" /></td>
                                </tr>
                                <tr>
                                    <td>Rajesh</td>
                                    <td>HertSpecialist</td>
                                    <td> <Chip size='small' label={'available'}color="primary" /></td>
                                </tr>
                                <tr>
                                    <td>Rajesh</td>
                                    <td>HertSpecialist</td>
                                    <td> <Chip size='small' label={'available'}color="primary" /></td>
                                </tr>
                         
                           </table>
                        </div>
                    </Card>
                </div>

            </div>
        </div>
    )
}

export default Dashboard
