import { Button, ButtonGroup, Card, Typography } from '@material-ui/core'
import React from 'react'
import Headline from '../Headline'
import MegaTable from './MegaTable'
import './AllDoctors.css'
import { GetAppOutlined, PictureAsPdfOutlined, PrintOutlined } from '@material-ui/icons'

function AllDoctors() {
    return (
        <div className="allDoctors">
            <Headline headline="All Doctors" title='All Doctors'/>
            <Card className="allDoctors__body">
                <div style={{color: "#E57498", paddingBottom: 10, borderBottom: '1px solid rgb(240, 236, 236)'}}>
                    <Typography variant="h5">All Doctors</Typography>
                </div>
                <div className="allDoctors__bodyTable">
                    <MegaTable/>
                </div>
            </Card>
        </div>
    )
}

export default AllDoctors
