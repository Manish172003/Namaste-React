import React, { useEffect, useState } from "react";

export default function ViewRes() {
  const { students, setStudents } = useState([]);

  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const result = await axios.get(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=16.2893144&lng=80.4604643"
    );
    setStudents(result.data);
  };
  return <div></div>;
}
