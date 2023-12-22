import { useNavigate } from "react-router-dom";
import { endPoints, routes } from "../utils/endpoint";

var data = [
  {
    id: 1,
    username: "Asadulloev",
    lastname: "Subhonbek",
    firstname: "Burhonbekovich",
    email: "Asadulloev_S@gmail.com",
    password: "$2a$10$vJcx397vBZSvQ5K7yJaRtejqRR7VKotRpmc/.75l5lMU9mw5R8rH.",
    birth_date: "2001-02-03",
    roles: [
      {
        id: 1,
        name: "ROLE_ADMIN",
      },
    ],
  },
  {
    id: 2,
    username: "rrr",
    email: "rrrr",
    password: "rrrr",
    lastname: "rrr",
    firstname: "rrr",
    birth_date: "2023-12-20",
    roles: [],
  },
  {
    id: 3,
    username: "rrr",
    email: "rrrr",
    password: "rrrr",
    lastname: "rrr",
    firstname: "rrr",
    birth_date: "2023-12-20",
    roles: [],
  },
  {
    id: 4,
    username: "rrr",
    email: "rrrr",
    password: "rrrr",
    lastname: "rrr",
    firstname: "rrr",
    birth_date: "2023-12-20",
    roles: [],
  },
];

export const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    const refreshToken = localStorage.getItem("refreshToken");
    fetch(endPoints.Url + endPoints.Logout, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(refreshToken),
    });
    localStorage.clear();
    navigate(routes.Login);
  };

  const openUser = (id: number) => {
    navigate(`${routes.User}?id=${id}`);
  };

  return (
    <section id="contacts">
      <h1>Contacts</h1>
      <button onClick={logout}>Logout</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>
              {item.id} {item.username} {item.firstname} {item.lastname}{" "}
              {item.email} {item.birth_date}
            </p>
            <button onClick={() => openUser(item.id)}>more</button>
          </li>
        ))}
      </ul>
    </section>
  );
};
