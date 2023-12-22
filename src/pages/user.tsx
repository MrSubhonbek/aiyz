import { useNavigate, useSearchParams } from "react-router-dom";

export const User = ({}: {}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  return (
    <section id="user">
      <h1>User {searchParams.get("id")}</h1>
      <button onClick={() => navigate(-1)}>go back</button>
    </section>
  );
};
