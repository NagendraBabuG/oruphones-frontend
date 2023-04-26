import "./usersList.css";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const UserList = ({ queryNo }) => {
  if (queryNo < 1 && queryNo > 5) queryNo = 1;
  const [isFive, setIsFive] = useState(false)
  let headersData = [
    {
      Header: "ID",
      accessor: "id",
      show: !isFive
    },
    {
      Header: "First Name",
      accessor: "first_name",
      show: !isFive
    },
    {
      Header: "Last Name",
      accessor: "last_name",
      show: !isFive
    },
    {
      Header: "Email",
      accessor: "email",
      show: !isFive
    },
    {
      Header: "Gender",
      accessor: "gender",
      show: !isFive
    },
    {
      Header: "Income (in $)",
      accessor: "income",
      show: !isFive
    },
    {
      Header: "City",
      accessor: "city",
      show: !isFive

    },
    {
      Header: "Car",
      accessor: "car",
      show: !isFive
    },
    {
      Header: "Quote",
      accessor: "quote",
      show: !isFive
    },
    {
      Header: "Phone Price",
      accessor: "phone_price",
      show: !isFive
    },
    {
      Header: "City",
      accessor: "_id",
      show: isFive
    },
    {
      Header: "NO Of Users",
      accessor: "userCount",
      show: isFive
    },
    {
      Header: "Average Income",
      accessor: "avgIncome",
      show: isFive
    }
  ]
  const [users, setUsers] = useState([]);
  
  
  useEffect(() => {
    const getUserData = async () => {
      const userData = await axios.get(
        `https://oruphonesbackend.onrender.com/getData/query${queryNo}`,
        {
          key: `query${queryNo}`
        }
      );

      let dataUser = userData.data.data;
      if (typeof dataUser === "string") {
        dataUser = JSON.parse(dataUser);
      }
      console.log(dataUser)
      setUsers(dataUser);
    };
    getUserData();
    console.log("data", users);
    if(queryNo == 5) setIsFive(true)
    else setIsFive(false)
  }, [queryNo]);
  
  const data = useMemo(() => users, [users]);
  const columns = useMemo(() => headersData, [isFive]);
  const filteredColumns = useMemo(() => columns.filter(column1 => column1.show), [columns])
  console.log(filteredColumns)
  

  return (
    <div className="user-table">
      {users ? (
        <div className="table-container">
      <Table>
        <Thead>
            <Tr>
              {
                filteredColumns.map((column)=>(
                  <Th key={column.accessor}>{column.Header}</Th>
                ))
              }
            </Tr>
        </Thead>
        <Tbody>
              {
                data.map((row, index)=>(
                  <Tr key={index + 1}>
                    
                      {
                        filteredColumns.map((column, columnIndex) => (
                          <Td key={columnIndex + 1} className={`td${column.accessor == 'email'?'email-col':''}${column.accessor == 'quote'? 'quote-col':''}`}>{row[column.accessor]}</Td>
                        ))
                      }
                  </Tr>
                ))
              }
        </Tbody>
      </Table>
      </div>
       
      ) : null}
    </div>
  );
};
export default UserList