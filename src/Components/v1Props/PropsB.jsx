const PropsB = (props) => {
  return (
    <div>
      <p>StudentID:-{props.s_Id}</p>
      <p> studentName:-{props.s_Name}</p>
      <p>studentAge:-{props.s_Age}</p>
      <h4>Student DOB:-{props.s_Details.DOB}</h4>
      <h4>Student Department:-{props.s_Details.Department}</h4>
      <h4>Student Location:-{props.s_Loc[0]}</h4>
    </div>
  );
};

export default PropsB;
