import FunctionCompB from "./FunctionCompB";

const FunctionCompA = () => {
  let emp_ID = 101;
  let emp_Name = "Naveen";
  let emp_designation = "React Developer";
  let emp_department = "IT";
  let emp_salary = 45000;
  let emp_mail = "naveen@company.com";
  let emp_phone = "9876543210";
  let emp_address = "Hyderabad, Telangana";

  return (
    <div>
      <h1> Function To Function</h1>
      <FunctionCompB
        emp_ID={emp_ID}
        emp_Name={emp_Name}
        emp_designation={emp_designation}
        emp_department={emp_department}
        emp_salary={emp_salary}
        emp_mail={emp_mail}
        emp_phone={emp_phone}
        emp_address={emp_address}
      />
    </div>
  );
};

export default FunctionCompA;
