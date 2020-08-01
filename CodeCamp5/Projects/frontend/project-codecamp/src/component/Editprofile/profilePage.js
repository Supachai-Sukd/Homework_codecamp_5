// import React, { useState } from 'react';
// import { Button, Row, Col, Input } from 'antd';
// // import axios from '../../config/axios'
// import axios from 'axios';



// function profilePage(props) {
//     const [changeInput, setChangeInput] = useState("");
//     const [isEdit, setIsEdit] = useState(false);

//     const updateProfile = async (id) => {
//         await axios.put(`/notebooks/update/${id}`, { targetUser: changeInput })
//         props.fetchData()
//         setIsEdit(false);
//     }

//     const toggleEdit = () => {
//         setChangeInput(props.nb.user_id);
//         setIsEdit(true);
//     };

//     let contents = (
//         <Row style={{ width: '100%' }}>
//             <Col span={20}>
//                 <Input value={changeInput} onChange={(e) => setChangeInput(e.target.value)} />
//             </Col>
//             <Col span={4}>
//                 <Button type="primary" onClick={() => updateProfile(props.nb.id)}>Done</Button>
//             </Col>
//         </Row>
//     );


//     if (!isEdit) {
//         contents = (
//             <Row style={{ width: '100%' }}>
//                 <Col span={16}>
//                     <Row justify="start">
//                         {props.nb.serial_number}
//                         {props.nb.brand}
//                         {props.nb.user_id}
//                     </Row>
//                 </Col>
//                 <Col span={4}>
//                     <Button style={{ backgroundColor: 'orange' }} onClick={() => toggleEdit()}>Edit</Button>
//                 </Col>
//                 <Col span={4}>
//                     <Button type="danger" onClick={() => props.delete(props.nb.id)}>Delete</Button>
//                 </Col>
//             </Row>
//         );
//     }

//     return (
//         <div>
//             {contents}
//         </div>
//     )
// }

// export default profilePage
