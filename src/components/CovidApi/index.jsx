import "./style.scss";
import { useEffect, useState } from "react";
import axios from "axios";


const CovidApi = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    try {
      async function fetchData() {
        let res = await axios.get('https://jsonplaceholder.typicode.com/users');

        let data = res && res.data ? res.data : [];

        setData(data);
        setLoading(false);
        setIsError(false);
      }
      fetchData();
    } catch (error) {
      setIsError(true);
      setLoading(false);
    }
    // }, 2000);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Name</th>
          <th>Email</th>
          <td>Phone</td>
        </tr>
      </thead>

      <tbody>
        {isError === false &&
          loading === false &&
          data &&
          data.length > 0 &&
          data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.company.name}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}

        {loading === true && (
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>
              Loading... data
            </td>
          </tr>
        )}

        {isError === true && (
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>
              Data Error 404
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default CovidApi;
