import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function AddStudent() {
    const [name, setName] = useState("");
    const [rollno, setRollno] = useState("");
    const [city, setCity] = useState("");
    const navigate = useNavigate();
    function handleSubmit() {

        const apiUrl = "https://68550a436a6ef0ed6631045a.mockapi.io/students"
        fetch(apiUrl, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ name: name, rollno: rollno, city: city })
        })
            .then(res => {
                navigate("/")
            })
    }

    return (
        <>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                    <input class="form-control m-3" type="text" value={name} onChange={e => { setName(e.target.value) }} />
                </div>
                <label for="inputPassword" class="col-sm-2 col-form-label">roll no</label>
                <div class="col-sm-10">
                    <input class="form-control m-3" type="text" value={rollno} onChange={e => { setRollno(e.target.value) }} />
                </div>
                <label for="inputPassword" class="col-sm-2 col-form-label">city</label>
                <div class="col-sm-10">
                    <input class="form-control m-3" type="text" value={city} onChange={e => { setCity(e.target.value) }} />
                </div>

            </div>
            <button className='btn btn-info' onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default AddStudent