import React from 'react'
import { Descriptions, Button } from 'antd';

function Mycart() {
    return (
        <div>

            <Descriptions
                title="รายการสินค้าในตะกร้า"
                bordered
                column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            >
                <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
                <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
                <Descriptions.Item label="Official">$60.00</Descriptions.Item>
                
            </Descriptions>
           <Button type="primary" size="middle" >
      Pay
    </Button>
        </div>
        
    );
};

export default Mycart
