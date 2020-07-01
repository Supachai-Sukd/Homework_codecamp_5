import React from 'react'
import { Card, Row, Col, Button } from 'antd';
import '../../App.css'
const { Meta } = Card;

function Home() {
    return (
        <Row>
            <Row span={24} style={{ display: "flex", margin: "auto" }}>



                <Col className="card-product" span={6} style={{ margin: "30px" }}>
                    <Card

                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Laptop" description="First you get !!" />
                        <Row style={{ marginTop:"15px" }}>

                            <Col span={12}>
                                <Button type="primary" size="small" style={{ backgroundColor: "green", color:"white" }}>
                                    Buy
                                </Button>
                            </Col>

                            <Col span={12}>
                                <Button type="primary" size="small" style={{ backgroundColor: "yellow", color:"black"}}>
                                    Add to cart
                                </Button>
                            </Col>

                        </Row>
                    </Card>
                </Col>



                <Col className="card-product" span={6} style={{ margin: "30px" }}>
                    <Card

                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Computer" description="First you get !!" />
                    </Card>
                </Col>




                <Col className="card-product" span={6} style={{ margin: "30px" }}>
                    <Card

                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Notebook" description="First you get !!" />
                    </Card>
                </Col>









            </Row>

        </Row>

    )
}

export default Home
