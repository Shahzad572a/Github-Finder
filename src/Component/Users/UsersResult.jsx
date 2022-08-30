import React,{useEffect,useState,useContext} from 'react'
import Spinner from '../Layout/Spinner';
import UsersItem from './UsersItem';
import GithubContext from '../../Context/Github/GithubContext';
function UsersResult() {
const {loading,users,fetchUsers} = useContext(GithubContext)
    // const [users,setUsers]=useState([]);
    // const [loadind,setLoading]=useState(true);

    // useEffect(() => {
    //  fetchUsers()
    // },[]);
   
//     const fetchUsers = async () => {
//         const response =await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`,
//         {
//     headers:{
//         Authorization:`token ${process.env.REACT_APP_GITHUB_TOKEN}`
//  }});
//        const data = await response.json();
//     setUsers(data);
//     setLoading(false);
//     };
    if(!loading){
        return <div className='grid grid-cols-1 gap-8 xl:grid-flow-col-4
        lg:grid-cols-3 md:grjd-cols-2'>
          {users.map((user)=>(
            // <h3>{user.login}</h3>
             <UsersItem key={user.id} users={user}/>
          ))}
        </div>
    }else {
        return <h1>{<Spinner/>}</h1>
    }
 
  
}

export default UsersResult
