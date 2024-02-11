import './userlist.css';
import React, { useState, useEffect } from "react";
import './userlist.css';
import { DataGrid } from "@mui/x-data-grid";
import userListData from './userlist.service';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';



const Userlists = () => {
    const navigate = useNavigate();
    
    const columns = [
        {
            field: "avatar_url",
            headerName: "Avatar",
            width: 80,
            sortable: false,
            renderCell: (params) => (
                <img
                    src={params.value}
                    height="30"
                    width="30"
                    style={{ marginLeft: "10px", borderRadius: "50px" }}
                    alt="product"
                />
            ),
        },
        {
            field: "name",
            headerName: "First Name ",
            sortable: false,
            flex: 1,
            minWidth: 130,
            valueGetter: (params) => params.row.name !== null ? params.row.name.split(' ')[0] : params.row.name
        },
        {
            field: "lastname",
            headerName: "Last Name",
            sortable: false,
            width: 130,
            valueGetter: (params) =>  params.row.name !== null  ? params.row.name.split(' ')[1] : params.row.name 
        },
        {
            field: "login",
            headerName: "Username",
            sortable: false,
            width: 130,
        },
        {
            field: "userdetails",
            headerName: "User Details",
            width: 130,
            renderCell: (params) => (
                <Button  onClick={ () => { data(params.row)} }>
                    Detail View
                </Button>
            ),
        },
    ];

    const data = (param) => {
        console.log(param);
        navigate('/userdetail', { state: param })
    }
    
    const [userlists, setUserlists] = useState([]);

    useEffect(() => {
        userListData().then((response) => {
            setUserlists(response);
        })
    }, []);


    return (
        <>
            <div className="main_section">
                <div className="container">
                    <div className="pad_section">
                        <b>UserLists</b>
                    </div>
                    <div style={{ height: 400, width: "100%" }}>
                        <DataGrid
                            rows={userlists}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            disableColumnMenu
                            disableSelectionOnClick
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Userlists;


