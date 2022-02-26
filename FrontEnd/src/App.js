import { Route, Routes } from 'react-router-dom';

import Navbar from './component/Navbar';
import Login from './component/Login';
import Signup from './component/Signup';
import ResetPassword from './component/ResetPassword';
import AddJob from './component/Recruiter/AddJob/AddJob';
import MyJobs from './component/Recruiter/MyJobs';

function App() {
  const user = localStorage.getItem('token');
  return (
    <Routes>
      {user && <Route path="/" exact element={<Navbar />} />}
      {/* <Route path="/" element={<Navbar />} exact /> */}

      <Route path="/login" element={<Login />} exact />

      <Route path="/signup" element={<Signup />} exact />

      <Route path="/resetpassword" element={<ResetPassword />} exact />

      <Route path="/addjob" element={<AddJob />} exact />

      <Route path="/myjob" element={<MyJobs />} exact />
    </Routes>
  );
}

export default App;
