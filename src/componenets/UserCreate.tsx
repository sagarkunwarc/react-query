import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { userService } from "../services/User";

export function UserCreate() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  const { mutate } = useMutation({
    mutationKey: ["users"],
    mutationFn: userService.createUser,
    onSuccess: () => {
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "role":
        setRole(value);
        break;
      case "status":
        setStatus(value);
        break;
    }
  };

  function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    mutate({
      name,
      email,
      role,
      status,
    });
  }

  return (
    <div>
      Create User
      <form>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="role"
          placeholder="role"
          value={role}
          onChange={handleChange}
        />
        <input
          type="text"
          name="status"
          placeholder={status}
          value={status}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}> Submit </button>
      </form>
    </div>
  );
}
