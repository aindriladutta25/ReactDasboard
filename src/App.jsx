import Topbar from "./components/global/topbar";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Sidebar from "./components/global/Sidebar.jsx"
import { Routes, Route, Router, BrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Team from "./components/Order_List";
import SideBarRight from "./components/global/SideBarRight";


function App() {
  const [theme, colorMode] = useMode();
  
 return (
 
    <ColorModeContext.Provider value={colorMode}>
       <ThemeProvider theme={theme}>
        <CssBaseline/> 
       <BrowserRouter>
        <div className="app">
           <Sidebar/>
            <main className="content">
              <Topbar/>
              <Routes>
                <Route path="/ReactDasboard/" element={<Dashboard/>}/>
                <Route path="/order_list" element={<Team/>}/>
              </Routes>
            </main>
            <SideBarRight/>
         </div>
         </BrowserRouter>
      </ThemeProvider>
     </ColorModeContext.Provider> 
   
  )
}

export default App;
