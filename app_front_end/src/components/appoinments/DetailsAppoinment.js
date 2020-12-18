import React from 'react'
import './DetailsAppoinment.css'
import Headline from '../Headline'
import { Button, ButtonGroup, Card, CardActions, Typography } from '@material-ui/core'
import { useReactToPrint } from 'react-to-print'
import { Link, useParams } from 'react-router-dom'
import { GetAppOutlined, PictureAsPdfOutlined, PrintOutlined } from '@material-ui/icons'


function DetailsAppoinment() {
    let {appoinmentId} = useParams()
    const detailsAppoinmentRef = React.useRef()

    const doctorAppoinmentPrintAction = useReactToPrint({
        content: () => detailsAppoinmentRef.current
        })
    return (
        <div className="detailsAppoinment">
            <Headline headline="Appoinment Details" title='Appoinment Details'/>
            <Card className="detailsAppoinment__body">
                <div style={{color: "#E57498", paddingBottom: 10, borderBottom: '1px solid rgb(240, 236, 236)'}}>
                    <Typography variant="h5">Appoinment Details</Typography>
                </div>
               
                <div className="detailsAppoinment__bodyTableScroll">
                    <table ref={detailsAppoinmentRef} className="detailsAppoinment__bodyTable">
                        <tr>
                            <td>Patient Id</td>
                            <td>PA01</td>
                        </tr>
                        <tr>
                            <td>Department</td>
                            <td>Cardiology</td>
                        </tr> 
                        <tr>
                            <td>Doctor Name</td>
                            <td>Hamid Zahid</td>
                        </tr> 
                        <tr>
                            <td>Appoinment Date</td>
                            <td>20-12-2020</td>
                        </tr> 
                        <tr>
                            <td>Time Slot</td>
                            <td>10AM - 11AM</td>
                        </tr> 
                        <tr>
                            <td>Token</td>
                            <td>TA01</td>
                        </tr> <tr>
                            <td>Problem</td>
                            <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad facilis quidem doloribus quia eaque praesentium ipsum repellendus non recusandae asperiores error</td>
                        </tr>
                    </table>
                </div>
                <ButtonGroup size={window.innerWidth < 768 ? 'small' : 'medium'} style={{marginTop: 20}} color="default" aria-label="outlined primary button group">
                    <Button onClick={doctorAppoinmentPrintAction}><PrintOutlined/>&nbsp;PRINT</Button>
                    <Button><PictureAsPdfOutlined/>&nbsp;PDF</Button>
                    <Button><GetAppOutlined/>&nbsp;CSV</Button>
                </ButtonGroup>
                <CardActions style={{marginTop: 10, paddingLeft: 0}}>
                    <Link to={`/editAppoinment/${appoinmentId}`}>
                    <Button size="small" color="default" variant="contained">
                        Edit
                    </Button>
                    </Link>
                    <Button size="small" color="secondary" variant="contained">
                        Delete
                    </Button>
                </CardActions>
            
            </Card>
        </div>
    )
}

export default DetailsAppoinment
