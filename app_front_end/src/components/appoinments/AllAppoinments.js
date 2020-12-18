import { Card, Typography } from '@material-ui/core'
import React from 'react'
import Headline from '../Headline'
import MegaTable from './MegaTable'
import './AllAppoinments.css'


function AllAppoinments() {
    return (
        <div className="allAppoinments">
            <Headline headline="All Appoinments" title='All Appoinments'/>
            <Card className="allAppoinments__body">
                <div style={{color: "#E57498", paddingBottom: 10, borderBottom: '1px solid rgb(240, 236, 236)'}}>
                    <Typography variant="h5">All Appoinments</Typography>
                </div>
                <div className="allAppoinments__bodyTable">
                    <MegaTable/>
                </div>
            </Card>
        </div>
    )
}

export default AllAppoinments
