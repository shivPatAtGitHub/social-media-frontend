import { useState } from "react";
import axios from "axios";

const UserSubmissionForm = () => {
  const [name, setName] = useState("");
  const [socialHandle, setSocialHandle] = useState("");
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("socialHandle", socialHandle);
    Array.from(files).forEach((file) => {
      formData.append("images", file);
    });

    try {
      const response = await axios.post(
        "http://localhost:3000/user/addUser",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Submission successful!");
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Submission Form</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Social Media Handle:</label>
        <input
          type="text"
          value={socialHandle}
          onChange={(e) => setSocialHandle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Upload Images:</label>
        <input type="file" multiple onChange={handleFileChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserSubmissionForm;
