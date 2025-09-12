import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function StudentsPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const apiUrl = "https://68550a436a6ef0ed6631045a.mockapi.io/students";
        fetch(apiUrl, { method: "GET" }).
            then(res => res.json())
            .then(res => setData(res));
    }, []);

    return (
        <>
            <table width={1000}>
                <tr>
                    <th>name</th>
                    <th>image</th>
                    <th>roll no</th>
                    <th>city</th>
                    <th>id</th>
                </tr>
                {
                    data.map(stu => (
                        <tr>
                            <td>{stu.name}</td>
                            <td><img src={stu.avatar} width={100} /></td>
                            <td>{stu.rollno}</td>
                            <td>{stu.city}</td>
                            <td>{stu.id}</td>
                            <td><Link className='btn btn-primary' to={`students/${stu.id}`}>View Details</Link></td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}

export default StudentsPage