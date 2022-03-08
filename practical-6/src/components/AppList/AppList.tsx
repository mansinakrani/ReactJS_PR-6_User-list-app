/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
//import "./AppList.css";

import UserInfo from '../UserInfo/UserInfo';
import { UserList } from '../UserList/UserList';

interface user {
    id: number;
    avatar: string;
    first_name: string; 
    last_name: string;
    email: string; 
    status: string;
    access: string;
    icon: string;
  }

type json = {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: [];
  };
export const AppList = () => {
    const [user, setUser] = useState<user | null>(null);
    const [users, setUsers] = useState<[]>([]); // for fetch the data
    const [userDetails, setUserDetails] = useState<json>({} as json);
    const [paginationItems, setPaginationItems] = useState<JSX.Element[]>();
    const [error, setError] = useState('');


  
   const fetchUsers = async (pageNumber: number) => {
        await fetch(`https://reqres.in/api/users?page=${pageNumber}`)
          .then((Data) => { 
              if(Data.ok) 
              return Data.json();
              throw new Error('something went wrong while requesting posts');
               })
          .then((Data: json) => {
           // console.log(Data);
            setUsers(Data.data);
            setUserDetails(Data);
          })
          .catch((error) => setError(error.message));
      };
    
      useEffect(() => {
        fetchUsers(1);
      }, []);

    useEffect(() => {
        const pageNumbers: number[] = [];
        if (typeof userDetails != undefined)
          for (let i = 1; i <= userDetails.total_pages; i++) {
            pageNumbers.push(i);
          }
        const items: JSX.Element[] = pageNumbers.map((number) => {
          return (
            <span
              key={number}
              onClick={() => {
                fetchUsers(number);
              }}
            >
              {number}
            </span>
          );
        });
        setPaginationItems(items);
      }, [userDetails]);
    
    
    return (
        <><div>
        {/* <UserList/> component which contains user list */}
        <UserList users={users} handleMouseOver={(user) => { setUser(user); } } paginationItems={paginationItems} />
        {/* <UserInfo/> component which contains user profile */}
        <div className='user-info'>
          <UserInfo info={user}  />
        </div>
        </div>
  </>
    );
};

//export default AppList;
