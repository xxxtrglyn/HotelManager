import {Link, useNavigate} from 'react-router-dom'
import React, { useState } from "react";
import '../Room1.css'
    
export default function Room1() {
    const user = JSON.parse(localStorage.getItem('user-info'))
    const token = user.token

    const [Price, setName] = useState(user.Price)
    const [Floor, setEmail] = useState(user.Floor)
    const [Content, setAddress] = useState(user.Content)
    const [id, setIdentification] = useState(user.id)
    const [roomname, setPhone] = useState(user.roomname)
    const navigate = useNavigate();

    async function update() {
        
        
        let raw = {
            "Price": Price,
            "Floor": Floor,
            "Content": Content,
            "id": id,
            "roomname": roomname
        }
        let auth = "Bearer " + token;
        let result = await fetch("https://bookhotel-backend.herokuapp.com/api/manager/rooms/1", {
            method: 'PUT',
            headers: {
                'Authorization': auth,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(raw)
        })
        console.log(result);
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result.data))
        alert('Cập nhật thành công! Vui lòng đăng nhập lại')
        hidden()
        navigate('/home')
    }

    return(
        <div className='register-container'>
            <h1>
                <title>Cập nhật thông tin phòng</title>
            </h1>
            <form className='register-form'>
                <Link to="/RoomList" className='register-back'>&larr;</Link>
                <h2>Cập nhật thông tin phòng</h2>
                <div>
                    <label className='register-label'>Giá tiền</label>
                    <input type="text" name="" placeholder="Giá tiền" value={user.Price}/>
                </div>
                <div>
                    <label className='register-label'>Tầng</label>
                    <input type="text" name="" placeholder="Tầng" defaultValue={user.Floor} onChange={(e) => {
                        
                            setName(e.target.value)
                    }}/>
                </div>
                <div>
                    <label className='register-label'>Miêu tả</label>
                    <input type="text" name="" placeholder="Miêu tả" defaultValue={user.Content} onChange={(e) => {
                        
                            setPhone(e.target.value)
                    }}/>
                </div>
                <div>
                    <label className='register-label'>ID</label>
                    <input type="text" name="" placeholder="ID" defaultValue={33} onChange={(e) => {
                        
                            setAddress(e.target.value)
                    }}/>
                </div>
                <div>
                    <label className='register-label'>Tên phòng</label>
                    <input type="email" name="" placeholder="Tên phòng" defaultValue={user.roomname} onChange={(e) => {
                        
                            setEmail(e.target.value)
                    }}/>
                </div>
                
                <button onClick={update} className='btn-signup js-btn-save' type='button'>Lưu</button>
            </form>
            
        </div>
    )
}
    
function hidden() {
    document.querySelector('.js-btn-save').classList.add('hidden-loading')
}