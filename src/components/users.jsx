import "./usersList";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import { useTable } from "react-table";
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
 // let columns;
  const [users, setUsers] = useState([]);
  
  
  useEffect(() => {
    const getUserData = async () => {
      const userData = await axios.get(
        `http://localhost:3001/getData/query${queryNo}`
      );
   //   console.log(userData);

      let dataUser = userData.data.data;
      if (typeof dataUser === "string") {
        dataUser = JSON.parse(dataUser);
      }
      setUsers(dataUser);
    };
    getUserData();
    console.log("data", users);
    if(queryNo == 5) setIsFive(true)
    else setIsFive(true)
  }, [queryNo]);
  
  const data = useMemo(() => users, [users]);
  const columns = useMemo(() => headersData, [isFive]);
  const filteredColumns = useMemo(() => columns.filter(column1 => column1.show), [columns])
  //setHeaders()
  console.log(filteredColumns)
  
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ filteredColumns, data });

  return (
    <div className="user-table">
      {users ? (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};
export default UserList