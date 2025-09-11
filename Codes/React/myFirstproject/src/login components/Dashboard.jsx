import React from 'react'

function Dashboard(props) {
  return (
    <>
        <h1>welcome {props.user}</h1>
        <button onClick={props.logout}> log out </button>
    </>
  )
}

export default Dashboard;