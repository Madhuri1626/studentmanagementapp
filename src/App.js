// import './App.css';
import Navbar from './Navbar';
import {Routes, Route} from 'react-router-dom';
import Grades from './Grades';
import Courses from './Courses';
import Dashboard from './Dashboard';
import Pagenotfound from './Pagenotfound';
import Login from './Login';
import Students from './Students'
import Student1 from './Student1'
import Student2 from './Student2'
import Student3 from './Student3'
import Student4 from './Student4'
import Student5 from './Student5'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Dashboard />} />
        <Route path="grades" element={<Grades />} />
        <Route path="courses" element = {<Courses />} />
        <Route path="login" element={<Login />} />
        <Route path='students' element={<Students />}>
          <Route path='s1' element={<Student1 />} />
          <Route path='s2' element={<Student2 />} />
          <Route path='s3' element={<Student3 />} />
          <Route path='s4' element={<Student4 />} />
          <Route path='s5' element={<Student5 />} />
        </Route>
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
}

export default App;
