import UserSubmissionForm from "./components/UserSubmissionForm.js"
import AdminDashboard from "./components/AdminDashboard.js"

const App = () => {
  return (
    <div>
      <h1>Social Media Task</h1>
      <UserSubmissionForm />
      <AdminDashboard />
    </div>
  );
};

export default App;
