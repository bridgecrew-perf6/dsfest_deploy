import { Routes, Route } from "react-router-dom";
import Menubar from "./pages/Menubar";
import Main from "./pages/Main";
import Notice from "./pages/Notice";
import TimeTable from "./pages/TimeTable";
import Event from "./pages/Event";
import Board from "./pages/Board";
import NoticeManage from "./pages/NoticeManage";
import AdminNotice from "./pages/AdminNotice";
import NoticeListV1 from "./components/NoticeListV1";
import NoticeListV2 from "./components/NoticeListV2";
import NoticeListV3 from "./components/NoticeListV3";
import Update from "./pages/Update";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route index element={<Main />}></Route>
        <Route path="/notice" element={<Notice />}></Route>
        <Route path="/Notice1" element={<NoticeListV1 />}></Route>
        <Route path="/Notice2" element={<NoticeListV2 />}></Route>
        <Route path="/Notice3" element={<NoticeListV3 />}></Route>
        <Route path="/timetable" element={<TimeTable />}></Route>
        <Route path="/event" element={<Event />}></Route>
        <Route path="/board" element={<Board />}></Route>
        <Route path="/manager" element={<NoticeManage />}></Route>
        <Route path="/adminntc" element={<AdminNotice />}></Route>
        <Route path="/update" element={<Update />}></Route>
        <Route path={"*"} element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
