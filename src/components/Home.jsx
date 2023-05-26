import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    var [users,setUsers] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            setUsers(response.data)
        })
        .catch((err)=>console.log(err))
    },[])
  return (
    <div>

        <TableContainer>
            <Table >
                <TableHead>
                    <TableRow>
                        {/* <TableCell>UserId</TableCell> */}
                        <TableCell>Id</TableCell>
                        <TableCell>Title</TableCell>
                        {/* <TableCell>Body</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map((value)=>{
                            return(
                                <TableRow>
                                    {/* <TableCell>{value.userId}</TableCell> */}
                                    <TableCell>{value.id}</TableCell>
                                    <TableCell>{value.title}</TableCell>
                                    {/* <TableCell>{value.body}</TableCell> */}

                                </TableRow>
                            )
                        })
                    }
                </TableBody>

            </Table>
        </TableContainer>




    </div>
  )
}

export default Home