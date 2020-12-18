import { Card, Typography } from '@material-ui/core'
import React from 'react'
import Headline from '../Headline'
import './AllRooms.css'
import MegaTable from './MegaTable'

function AllRooms() {
    return (
        <div className="allrooms">
            <Headline headline="All Rooms" title='All Rooms'/>
            <Card className="allrooms__body">
                <div style={{color: "#E57498", paddingBottom: 10, borderBottom: '1px solid rgb(240, 236, 236)'}}>
                    <Typography variant="h5">All Rooms</Typography>
                </div>
                <div className="allrooms__bodyTable">
                    <MegaTable />
                </div>
            </Card>
        </div>
    )
}

export default AllRooms
