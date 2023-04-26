import SelectQuery from "./components/query";
import QueryComponent from "./components/queryTemp";
import './App.css'

import ReactVirtualizedTable from "./components/users";
import UserList from "./components/users";
import { useState } from "react";
//<SelectQuery queryNo={queryNo} setQueryNo={setQueryNo}></SelectQuery>
function App() {
 const [queryNo, setQueryNo] = useState(1)
  return (
    <div className="App">
       <div className="query">
         <QueryComponent queryNo={queryNo} setQueryNo={setQueryNo}></QueryComponent>     
       </div>
       <div className="table">
          <UserList queryNo={queryNo}></UserList>
       </div>
    </div>
  );
}

export default App;
