import useAuth from "../hooks/useAuth";

export default function Login() {
  const {
    signIn,
    email,
    setEmail,
    password,
    setPassword,
    error,
    signedIn,
    user,
  } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn();
  };

  if (signedIn) {
    return <p style={{ color: "green" }}>Du er logget ind som {user?.name}</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "300px", gap: "1rem", margin: "2rem auto" }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Adgangskode"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log ind</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
