import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/submissions"
        );
        setSubmissions(response.data);
      } catch (error) {
        console.error("Error fetching submissions:", error);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Social Media Handle</th>
            <th>Images</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr key={index}>
              <td>{submission.name}</td>
              <td>{submission.socialHandle}</td>
              <td>
                {submission.images.map((image, idx) => (
                  <a
                    key={idx}
                    href={image}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={image}
                      alt={`User submission ${index + 1} - ${idx + 1}`}
                      style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "5px",
                      }}
                    />
                  </a>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;