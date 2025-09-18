import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent() {
    const [name, setName] = useState("");
    const [rollno, setRollno] = useState("");
    const [city, setCity] = useState("");
    const navigate = useNavigate();
    const { id } = useParams(); // get id from URL

    // fetch existing data when component loads
    useEffect(() => {
        const apiUrl = `https://68550a436a6ef0ed6631045a.mockapi.io/students/${id}`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setName(data.name);
                setRollno(data.rollno);
                setCity(data.city);
            });
    }, [id]);

    function handleSubmit() {
        const apiUrl = `https://68550a436a6ef0ed6631045a.mockapi.io/students/${id}`;
        fetch(apiUrl, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ name, rollno, city }),
        }).then(() => {
            navigate("/"); // go back to home page
        });
    }

    return (
        <>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input
                        className="form-control m-3"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <label className="col-sm-2 col-form-label">Roll No</label>
                <div className="col-sm-10">
                    <input
                        className="form-control m-3"
                        type="text"
                        value={rollno}
                        onChange={(e) => setRollno(e.target.value)}
                    />
                </div>

                <label className="col-sm-2 col-form-label">City</label>
                <div className="col-sm-10">
                    <input
                        className="form-control m-3"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
            </div>

            <button className="btn btn-info" onClick={handleSubmit}>
                Update Data
            </button>
        </>
    );
}

export default EditStudent;
