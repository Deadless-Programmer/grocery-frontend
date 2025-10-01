import { useEffect, useState } from "react";
import { deleteUser, getUsers, updateUser } from "../../api/api";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  // Delete user
  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user._id !== id));
  };

  // Open edit form
  const handleEdit = (user) => {
    setEditingUser(user._id);
    setFormData({ name: user.name, email: user.email });
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Save updated user
  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateUser(editingUser, formData);
    setUsers(
      users.map((u) =>
        u._id === editingUser ? { ...u, name: formData.name, email: formData.email } : u
      )
    );
    setEditingUser(null); // close edit mode
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">All Users</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((u, index) => (
                <tr key={u._id} className="text-center hover:bg-gray-100">
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">
                    {editingUser === u._id ? (
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border p-1 rounded w-full"
                      />
                    ) : (
                      u.name
                    )}
                  </td>
                  <td className="px-4 py-2 border">
                    {editingUser === u._id ? (
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border p-1 rounded w-full"
                      />
                    ) : (
                      u.email
                    )}
                  </td>
                  <td className="px-4 py-2 border space-x-2">
                    {editingUser === u._id ? (
                      <>
                        <button
                          onClick={handleUpdate}
                          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingUser(null)}
                          className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(u)}
                          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(u._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
