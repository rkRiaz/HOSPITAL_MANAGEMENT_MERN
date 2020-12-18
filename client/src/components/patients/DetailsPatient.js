import { Button, ButtonGroup, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Typography } from '@material-ui/core'
import { GetAppOutlined, PictureAsPdfOutlined, PrintOutlined } from '@material-ui/icons'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'
import Headline from '../Headline'
import './DetailsPatient.css'

function DetailsPatient() {
    let {patientId} = useParams()
    const patientDetailsRef = React.useRef()
    const patientVisitsRef = React.useRef()
    const patientPaymentRef = React.useRef()


    const patientDetailsPrintAction = useReactToPrint({
    content: () => patientDetailsRef.current
    })
    const patientVisitsPrintAction = useReactToPrint({
    content: () => patientVisitsRef.current
    })   
    const patientPaymentPrintAction = useReactToPrint({
    content: () => patientPaymentRef.current
    })


    return (
        <div className="detailsPatient">
            <Headline headline="Patient Details" title='Patient Details'/>

            <div className="detailsPatient__firstRow">
                <Card className="detailsPatient__firstRowBodyLeft">
                    <div style={{color: "#E57498", paddingBottom: 10, borderBottom: '1px solid rgb(240, 236, 236)'}}>
                        <Typography variant="h5">Patient Details</Typography>
                    </div>
                    <div className="detailsPatient__firstRowBodyLeftTableScroll">
                        <table ref={patientDetailsRef} className="detailsPatient__firstRowBodyLeftTable">
                        <tr>
                            <td>Name</td>
                            <td>Amin Zahid</td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>38 years</td>
                        </tr> 
                        <tr>
                            <td>Gender</td>
                            <td>Male</td>
                        </tr> 
                        <tr>
                            <td>Phone</td>
                            <td>016846803xx</td>
                        </tr> 
                        <tr>
                            <td>Email</td>
                            <td>mdriaz9587@gmail.com</td>
                        </tr> 
                        <tr>
                            <td>Date of Birth</td>
                            <td>12-10-1990</td>
                        </tr> <tr>
                            <td>address</td>
                            <td>299/272 Kaptan Bazar, Cumilla. Bangladesh</td>
                        </tr>
                        </table>
                    </div>
                    <ButtonGroup size={window.innerWidth < 768 ? 'small' : 'medium'} style={{marginTop: 20}} color="default" aria-label="outlined primary button group">
                        <Button onClick={patientDetailsPrintAction}><PrintOutlined/>&nbsp;PRINT</Button>
                        <Button><PictureAsPdfOutlined/>&nbsp;PDF</Button>
                        <Button><GetAppOutlined/>&nbsp;CSV</Button>
                    </ButtonGroup>
                    <CardActions style={{marginTop: 10, paddingLeft: 0}}>
                        <Link to={`/editPatient/${patientId}`}>
                        <Button size="small" color="default" variant="contained">
                            Edit
                        </Button>
                        </Link>
                        <Button size="small" color="secondary" variant="contained">
                            Delete
                        </Button>
                    </CardActions>
                </Card>

                <Card className="detailsPatient__firstRowBodyRight">
                    <div style={{color: "#E57498", paddingBottom: 10, borderBottom: '1px solid rgb(240, 236, 236)'}}>
                        <Typography variant="h5">Patient Visits</Typography>
                    </div>
                    <div className="detailsPatient__firstRowBodyRightTableScroll">
                       <table ref={patientVisitsRef} className="detailsPatient__firstRowBodyRightTable">
                        <tr>
                            <td>Doctor Name</td>
                            <td>Cost</td>
                            <td>Visit Date</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <td>Ahamed Karim</td>
                            <td>3000 tk</td>
                            <td>20-03-2020</td>
                            <td>Resheduled</td>
                        </tr>
                        <tr>
                            <td>Ahamed Karim</td>
                            <td>3000 tk</td>
                            <td>20-03-2020</td>
                            <td>Fever</td>
                        </tr>        
                        <tr>
                            <td>Ahamed Karim</td>
                            <td>3000 tk</td>
                            <td>20-03-2020</td>
                            <td>Injury</td>
                        </tr>
                       </table> 
                    </div>
                    <ButtonGroup size={window.innerWidth < 768 ? 'small' : 'medium'} style={{marginTop: 20}} color="default" aria-label="outlined primary button group">
                        <Button onClick={patientVisitsPrintAction}><PrintOutlined/>&nbsp;PRINT</Button>
                        <Button><PictureAsPdfOutlined/>&nbsp;PDF</Button>
                        <Button><GetAppOutlined/>&nbsp;CSV</Button>
                    </ButtonGroup>
                </Card>
            </div>

            <Card className="detailsPatient__secondRow">
                <div style={{color: "#E57498", paddingBottom: 10, borderBottom: '1px solid rgb(240, 236, 236)'}}>
                    <Typography variant="h5">Patient Payment Transactions</Typography>
                </div>
                <div className="detailsPatient__secondRowTableScroll">
                  <table ref={patientPaymentRef} className="detailsPatient__secondRowTable"> 
                    <tr>
                        <td>Date</td>
                        <td>Cost</td>
                        <td>Discount</td>
                        <td>Payment Type</td>
                        <td>Invoice</td>
                        <td>Status</td>
                    </tr>
                    <tr>
                        <td>20-10-2020</td>
                        <td>5000 tk</td>
                        <td>15%</td>
                        <td>Check</td>
                        <td> 
                            <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<GetAppOutlined />}
                            >
                            Invoice
                            </Button>
                        </td>
                        <td><Chip size='small' label={'completed'}color="primary" /></td>
                    </tr>
                    <tr>
                        <td>20-10-2020</td>
                        <td>5000 tk</td>
                        <td>15%</td>
                        <td>Credit Card</td>
                        <td> 
                            <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<GetAppOutlined />}
                            >
                            Invoice
                            </Button>
                        </td>
                        <td><Chip size='small' label={'pending'}color="default" /></td>
                    </tr>
                    <tr>
                        <td>20-10-2020</td>
                        <td>5000 tk</td>
                        <td>15%</td>
                        <td>Bkash</td>
                        <td> 
                            <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<GetAppOutlined />}
                            >
                            Invoice
                            </Button>
                        </td>
                        <td><Chip size='small' label={'cancelled'}color="secondary" /></td>
                    </tr>
                  </table>
                </div>
                <ButtonGroup style={{marginTop: 20}} color="default" aria-label="outlined primary button group">
                    <Button size={window.innerWidth < 768 ? 'small' : 'medium'} onClick={patientPaymentPrintAction}><PrintOutlined/>&nbsp;PRINT</Button>
                    <Button><PictureAsPdfOutlined/>&nbsp;PDF</Button>
                    <Button><GetAppOutlined/>&nbsp;CSV</Button>
                </ButtonGroup>
            </Card>
        </div>
    )
}

export default DetailsPatient
