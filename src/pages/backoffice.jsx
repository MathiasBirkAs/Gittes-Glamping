import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function Backoffice() {
  const { user, signedIn } = useAuth(); 
  const [activities, setActivities] = useState([]);
  const [form, setForm] = useState({
    title: "",
    weekday: "",
    time: "",
    description: "",
    image: "",
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/activities")
      .then(res => res.json())
      .then(data => setActivities(data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `http://localhost:5000/activities/${editingId}`
      : "http://localhost:5000/activities";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ title: "", weekday: "", time: "", description: "", image: "" });
    setEditingId(null);
    const res = await fetch("http://localhost:5000/activities");
    const data = await res.json();
    setActivities(data);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/activities/${id}`, { method: "DELETE" });
    setActivities(activities.filter(a => a._id !== id));
  };

  const handleEdit = (activity) => {
    setForm({
      title: activity.title,
      weekday: activity.weekday,
      time: activity.time,
      description: activity.description,
      image: activity.image,
    });
    setEditingId(activity._id);
  };
  
  console.log("Signed in:", signedIn);
  console.log("User:", user);

  if (!signedIn || user?.role !== "admin") {
    return <Navigate to="/" />;
  }
  
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Backoffice</h1>

      <h2>Activities</h2>
      <table border="1" cellPadding={10} style={{ marginBottom: "2rem" }}>
        <thead>
          <tr>
            <th>Activity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((a) => (
            <tr key={a._id}>
              <td>{a.title}</td>
              <td>
                <button onClick={() => handleEdit(a)}>Update</button>
                <button onClick={() => handleDelete(a._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>{editingId ? `Update activity - ${form.title}` : "Add activity"}</h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}>
        <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} />
        <input type="text" name="weekday" placeholder="Weekday" value={form.weekday} onChange={handleChange} />
        <input type="text" name="time" placeholder="Time" value={form.time} onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL or filename" value={form.image} onChange={handleChange} />
        <button type="submit">{editingId ? "Update activity" : "Add new activity"}</button>
      </form>
    </div>
  );
}