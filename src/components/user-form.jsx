import { useState } from "react";

const UserForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "user",
  });
  console.log(user);
  const updateField = (field, value) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ism"
        value={user.name}
        onChange={(e) => updateField("name", e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={user.email}
        onChange={(e) => updateField("email", e.target.value)}
      />
      <select
        value={user.role}
        onChange={(e) => updateField("role", e.target.value)}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="moderator">Moderator</option>
      </select>
    </div>
  );
};

export default UserForm;
