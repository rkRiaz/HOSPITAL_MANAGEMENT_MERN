import { Button, ButtonGroup, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Typography } from '@material-ui/core'
import { GetAppOutlined, PictureAsPdfOutlined, PrintOutlined } from '@material-ui/icons'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'
import Headline from '../Headline'
import './DetailsDoctor.css'

function DetailsDoctor() {
    let {doctorId} = useParams()
    const doctorDetailsRef = React.useRef()
    const doctorActivityRef = React.useRef()



    const doctorDetailsPrintAction = useReactToPrint({
    content: () => doctorDetailsRef.current
    })
    const doctorActivityPrintAction = useReactToPrint({
    content: () => doctorActivityRef.current
    })   



    return (
        <div className="detailsDoctor">
            <Headline headline="Doctor Details" title='Doctor Details'/>
            <Card className="ditailsDoctor__firstRow">
                <div style={{color: "#E57498", paddingBottom: 10, borderBottom: '1px solid rgb(240, 236, 236)'}}>
                    <Typography variant="h5">Doctor Details</Typography>
                </div>
                <div className="ditailsDoctor__firstRowBody">
                    <div className="ditailsDoctor__firstRowBodyLeft">
                        <CardActionArea>
                            <CardMedia
                            component = 'img'
                            // height = '140'
                            image="https://picsum.photos/400/300"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Doctor Name
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to={`/editDoctor/${doctorId}`}>
                                <Button size="small" color="default" variant="contained">
                                    Edit
                                </Button>
                            </Link>
                            <Button size="small" color="secondary" variant="contained">
                                Delete
                            </Button>
                        </CardActions>
                    </div>
                    <div className="detailsDoctor__firstRowBodyRight">
                        <div className="detailsDoctor__firstRowBodyRightTableScroll">
                            <table className="detailsDoctor__firstRowBodyRightTable">
                                <tr>
                                    <td>Specialization</td>
                                    <td>General Physician</td>
                                </tr>
                                <tr>
                                    <td>Experience</td>
                                    <td>8 years</td>
                                </tr> 
                                <tr>
                                    <td>Gender</td>
                                    <td>Male</td>
                                </tr> 
                                <tr>
                                    <td>Address</td>
                                    <td>299/272 Kaptan Bazar, Cumilla. Bangladesh</td>
                                </tr> 
                                <tr>
                                    <td>Phone</td>
                                    <td>016846803xx</td>
                                </tr> 
                                <tr>
                                    <td>Date of Birth</td>
                                    <td>12-10-2020</td>
                                </tr> <tr>
                                    <td>Email</td>
                                    <td>mdriaz9587@gmail.com</td>
                                </tr>
                            </table>
                        </div>



                        {/* print component starts */}
                        <div style={{display: 'none'}}>
                            <div ref={doctorDetailsRef}className="detailsDoctor__firstRowBodyRightTableScroll">
                                <CardActionArea style={{display: 'flex', marginTop: 20}}>
                                    <img
                                        src="https://picsum.photos/200/200"
                                        title="Doctor Image"
                                    />
                                    <CardContent style={{width: 300, marginLeft: 20}}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Doctor Name
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <table style={{marginTop: 20}} className="detailsDoctor__firstRowBodyRightTable">
                                    <tr>
                                        <td>Specialization</td>
                                        <td>General Physician</td>
                                    </tr>
                                    <tr>
                                        <td>Experience</td>
                                        <td>8 years</td>
                                    </tr> 
                                    <tr>
                                        <td>Gender</td>
                                        <td>Male</td>
                                    </tr> 
                                    <tr>
                                        <td>Address</td>
                                        <td>299/272 Kaptan Bazar, Cumilla. Bangladesh</td>
                                    </tr> 
                                    <tr>
                                        <td>Phone</td>
                                        <td>016846803xx</td>
                                    </tr> 
                                    <tr>
                                        <td>Date of Birth</td>
                                        <td>12-10-2020</td>
                                    </tr> <tr>
                                        <td>Email</td>
                                        <td>mdriaz9587@gmail.com</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        {/* print component ends */}



                        <ButtonGroup size={window.innerWidth < 768 ? 'small' : 'medium'} style={{marginTop: 20}} color="default" aria-label="outlined primary button group">
                            <Button onClick={doctorDetailsPrintAction}><PrintOutlined/>&nbsp;PRINT</Button>
                            <Button><PictureAsPdfOutlined/>&nbsp;PDF</Button>
                            <Button><GetAppOutlined/>&nbsp;CSV</Button>
                        </ButtonGroup>
                    </div>
                </div>

            </Card>
            <Card className="detailsDoctor__secondRow">
                <div style={{color: "#E57498", paddingBottom: 10, borderBottom: '1px solid rgb(240, 236, 236)'}}>
                    <Typography variant="h5">Doctor Activity</Typography>
                </div>
                <div className="detailsDoctor__secondRowTableScroll">
                    <table ref={doctorActivityRef} className="detailsDoctor__secondRowTable">
                        <tr>
                            <td>Patient Name</td>
                            <td>Injury/Condition</td>
                            <td>Visit Date</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <td>Ahmed Abdullah</td>
                            <td>Cold Fever</td>
                            <td>20-10-2020</td>
                            <td><Chip size='small' label={'condition is good'}color="primary" /></td>
                        </tr>
                        <tr>
                            <td>Ahmed Abdullah</td>
                            <td>Cold Fever</td>
                            <td>20-10-2020</td>
                            <td><Chip size='small' label={'small operation'}color="secondary" /></td>
                        </tr>
                        <tr>
                            <td>Ahmed Abdullah</td>
                            <td>Cold Fever</td>
                            <td>20-10-2020</td>
                            <td><Chip size='small' label={'condition is good'}color="primary" /></td>
                        </tr>
                        <tr>
                            <td>Ahmed Abdullah</td>
                            <td>Cold Fever</td>
                            <td>20-10-2020</td>
                            <td><Chip size='small' label={'condition is good'}color="primary" /></td>
                        </tr>
                        <tr>
                            <td>Ahmed Abdullah</td>
                            <td>Cold Fever</td>
                            <td>20-10-2020</td>
                            <td><Chip size='small' label={'condition is good'}color="primary" /></td>
                        </tr>
                    </table>
                </div>
                <ButtonGroup size={window.innerWidth < 768 ? 'small' : 'medium'} style={{marginTop: 20}} color="default" aria-label="outlined primary button group">
                    <Button onClick={doctorActivityPrintAction}><PrintOutlined/>&nbsp;PRINT</Button>
                    <Button><PictureAsPdfOutlined/>&nbsp;PDF</Button>
                    <Button><GetAppOutlined/>&nbsp;CSV</Button>
                </ButtonGroup>
            </Card>
        </div>
    )
}

export default DetailsDoctor
