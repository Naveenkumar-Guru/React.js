//1.map
// import Axios from "axios";
// import React from "react";

// class Users extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [],
//     };
//   }
//   componentDidMount() {
//     this.Getusers();
//   }

//   Getusers = () => {
//     Axios.get("https://jsonplaceholder.typicode.com/users")
//       .then((resp) => {
//         this.setState({ users: resp.data });
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   };
//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-6">
//             <table className="table text-center table-bordered table-hover ">
//               <thead className="bg-dark text-white">
//                 <tr>
//                   <th>User_id</th>
//                   <th>Name</th>
//                   <th>Email</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {this.state.users.map((user, index) => {
//                   return (
//                     <tr key={index}>
//                       <td>{user.id}</td>
//                       <td>{user.name}</td>
//                       <td>{user.email}</td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default Users;

//2-forEach
import Axios from "axios";
import React from "react";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.Getusers();
  }

  Getusers = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        this.setState({ users: resp.data });
      })
      .catch((error) => {
        console.log(error.message); // ✅ correct error handling
      });
  };

  render() {
    // 🔹 Create an array to hold table rows
    let rows = [];
    this.state.users.forEach((user) => {
      rows.push(
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      );
    });

    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-8">
            <table className="table text-center table-bordered table-hover">
              <thead className="bg-dark text-white">
                <tr>
                  <th>User_id</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
