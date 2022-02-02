import axios from "axios"
import React from 'react';
import  {useState , useEffect} from "react"
import "./main.css"

const Table = () => {

    const [user,setUser] = useState({
        isFetched:false,
        data:{},
        error:null
      })
      useEffect(() => {
        axios.get(`https://fakestoreapi.com/users`, {
          })
          .then(function (response) {
            setUser({
               isFetched:true,
               data:response.data,
               error:false,
           })
          })
          .catch(function (error) {
            setUser({
                isFetched:true,
                data:{},
                error:error,
            })
          });
    }, []);
    return (
        <div>
            
                {
                        user.isFetched ? (
                            <table className="customers">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                </tr>
                                <tr>
                                    <td>{user.data[0].name.firstname} {user.data[0].name.lastname}</td>
                                    <td>{user.data[0].email}</td>
                                    <td>{user.data[0].address.city}</td>
                                </tr> 
                                <tr>
                                <td>{user.data[5].name.firstname} {user.data[5].name.lastname}</td>
                                    <td>{user.data[5].email}</td>
                                    <td>{user.data[5].address.city}</td>
                                </tr>
                                <tr>
                                <td>{user.data[7].name.firstname} {user.data[0].name.lastname}</td>
                                    <td>{user.data[7].email}</td>
                                    <td>{user.data[7].address.city}</td>
                                </tr>
                            </table>
                        ) : (
                            <h1>Lodaing...</h1>
                        )
                    }
        </div>
    );
};

Table.propTypes = {};

export default Table;