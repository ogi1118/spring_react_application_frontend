function EmployeeList() {
  const dummyData = [
    {
      id: 1,
      firstName: "first",
      lastName: "last",
      email: "mail.com",
    },
    {
      id: 2,
      firstName: "test2",
      lastName: "TEST2",
      email: "MAIL",
    },
    {
      id: 3,
      firstName: "No.3",
      lastName: "NO.3",
      email: "EMAIL.com",
    },
  ];
  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>id</th>
            <th>first name</th>
            <th>last name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((data) => {
            return (
              <tr>
                <td>{data.id}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
