import { Button, ButtonGroup, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Typography } from '@material-ui/core'
import { GetAppOutlined, PictureAsPdfOutlined, PrintOutlined } from '@material-ui/icons'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Headline from '../Headline'
import './DetailsDoctor.css'

function DetailsDoctor() {
    let {doctorId} = useParams()
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
                        <div className="detailsDoctor__firstRowBodyRightTable">
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
                        </div>
                        <ButtonGroup style={{marginTop: 20}} color="default" aria-label="outlined primary button group">
                            <Button><PrintOutlined/>&nbsp;PRINT</Button>
                            <Button><PictureAsPdfOutlined/>&nbsp;PDF</Button>
                            <Button><GetAppOutlined/>&nbsp;CSV</Button>
                        </ButtonGroup>
                    </div>
                </div>

            </Card>
            <Card className="ditailsDoctor__secondRow">
                <div style={{color: "#E57498", paddingBottom: 10, borderBottom: '1px solid rgb(240, 236, 236)'}}>
                    <Typography variant="h5">Doctor Activity</Typography>
                </div>
                <div className="ditailsDoctor__secondRowTable">
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
                </div>
                <ButtonGroup style={{marginTop: 20}} color="default" aria-label="outlined primary button group">
                    <Button><PrintOutlined/>&nbsp;PRINT</Button>
                    <Button><PictureAsPdfOutlined/>&nbsp;PDF</Button>
                    <Button><GetAppOutlined/>&nbsp;CSV</Button>
                </ButtonGroup>
            </Card>
        </div>
    )
}

export default DetailsDoctor
