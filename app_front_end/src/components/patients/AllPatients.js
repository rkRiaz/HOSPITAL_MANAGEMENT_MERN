import { Button, ButtonGroup, Card, Typography } from '@material-ui/core'
import React from 'react'
import Headline from '../Headline'
import MegaTable from './MegaTable'
import './AllPatients.css'
import { GetAppOutlined, PictureAsPdfOutlined, PrintOutlined } from '@material-ui/icons'

function AllPatients() {
    return (
        <div className="allPatients">
            <Headline headline="All Patients" title='All Patients'/>
            <Card className="allPatients__body">
                <div style={{color: "#E57498", paddingBottom: 10, borderBottom: '1px solid rgb(240, 236, 236)'}}>
                    <Typography variant="h5">All Patients</Typography>
                </div>
                <div className="allPatients__bodyTable">
                    <MegaTable/>
                </div>
            </Card>
        </div>
    )
}

export default AllPatients
