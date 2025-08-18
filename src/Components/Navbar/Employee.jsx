let Employee = () => {
  let employee = [
    { eid: 1, eName: "Wakenshaw", gender: "Male" },
    { eid: 2, eName: "Gow", gender: "Female" },
    { eid: 3, eName: "Lembrick", gender: "Male" },
    { eid: 4, eName: "Mackilpatrick", gender: "Female" },
    { eid: 5, eName: "Frears", gender: "Male" },
    { eid: 6, eName: "Charnock", gender: "Male" },
    { eid: 7, eName: "Patrie", gender: "Female" },
    { eid: 8, eName: "Breitler", gender: "Male" },
    { eid: 9, eName: "Beaument", gender: "Female" },
    { eid: 10, eName: "Paty", gender: "Female" },
  ];
  return (
    <div className="container">
      <div className="row"></div>
      <div className="cal-6"></div>
      <table className="table table-hover table-bordered table-striped table-sm">
        <thead className="bg-dark text-white ">
          <tr>
            <th>EmpId</th>
            <th className="text-center ">EmpName</th>
            <th className="text-center ">Gender</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {employee.map((emp, index) => {
            return (
              <tr key={index}>
                <td>{emp.eid}</td>
                <td>{emp.eName}</td>
                <td>{emp.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
