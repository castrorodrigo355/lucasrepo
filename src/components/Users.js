import React from 'react'

export default function Users(props) {

    const deleteUser = idUser => props.onDeleteUser(idUser)

    return (
        <div>
            {
            props.myUsers.map((user, i) => {
                return(
                <div key={i} className="card mb-3" style={{maxWidth: "540px"}}>
                    <div className="row no-gutters">
                    <button 
                            onClick={() => deleteUser(user.id)} 
                            // onClick={() => props.onDeleteUser(user.id)} // tambien funciona...
                        type="button" className="btn btn-danger">Delete</button>
                    <div className="col-md-8">
                        <div className="card-header">
                        {user.name}
                        </div>
                        <div className="card-body">
                        <h5 className="card-title">{user.username}</h5>
                        </div>
                        <div className="card-footer">
                        <h5 className="card-title">{user.email}</h5>
                        </div>
                    </div>
                    </div>
                </div>
                )   
            })
            }
        </div>
    )
}