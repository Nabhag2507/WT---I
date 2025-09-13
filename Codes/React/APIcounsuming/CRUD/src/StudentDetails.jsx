import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

function StudentDetails() {
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const apiUrl = `https://68550a436a6ef0ed6631045a.mockapi.io/students/${id}`;
        fetch(apiUrl, { method: 'GET' })
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img src={data.avatar} width={400} />
                    </div>
                    <div className="col">
                        <h1>Name : {data.name}</h1>
                        <h2>Roll no : {data.rollno}</h2>
                        <h2>City : {data.city}</h2>
                        <Link className='btn btn-primary me-2' to={`/`}>Back</Link>
                        <button className='btn btn-danger' onClick={() => {
                            fetch(`https://68550a436a6ef0ed6631045a.mockapi.io/students/${id}`, { method: 'DELETE' })
                                .then(() => {
                                    alert('Student deleted successfully');
                                    navigate('/');
                                });
                        }}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentDetails