import React from 'react'
import Sidemenu from '../Left-menu/Sidemenu'
import { Row, Col } from 'antd'

function ProfileCompo() {
    return (
        <div style={{ alignItems:"start" }}>
            <Row >
                <Col >
            <Sidemenu />
            </Col>
            <Col >
            
            </Col>
            </Row>
        </div>
    )
}

export default ProfileCompo
