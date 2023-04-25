import SelectQuery from "./components/query";
import './App.css'

import ReactVirtualizedTable from "./components/users";
import UserList from "./components/usersList";
import { useState } from "react";
function App() {
 const [queryNo, setQueryNo] = useState(1)
  return (
    <div className="App">
       <div className="query">
          <SelectQuery queryNo={queryNo} setQueryNo={setQueryNo}></SelectQuery>
       </div>
       <div className="table">
          <UserList queryNo={queryNo}></UserList>
       </div>
    </div>
  );
}

export default App;
