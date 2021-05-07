// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import AppContext from "../../store/AppContext";
// import { routes } from "../../utils/routes";

// export default function Test(props) {
//   const [isLoggedIn, user] = useContext(AppContext);

//   function Admin() {
//     if (user.role === "admin") {
//       return (
//         <div>
//           {routes.map((route, index) => {
//             return (
//               <div className="hidden md:grid gap-2.5 h-full text-center items-center">
//                 <Link
//                   className="text-gray-800 grid cursor-pointer p-2 rounded-lg hover:bg-blue-300 dark:text-white dark:hover:text-gray-800 dark:hover:bg-yellow-300 transition duration-200"
//                   key={index}
//                   to={route.protected === "admin"}
//                 >
//                   {route.title}
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//       );
//     } else if (user.role === "user") {
//       return (
//         <div>
//           {routes.map((route, index) => {
//             return (
//               <div className="hidden md:grid gap-2.5 h-full text-center items-center">
//                 <Link
//                   className="text-gray-800 grid cursor-pointer p-2 rounded-lg hover:bg-blue-300 dark:text-white dark:hover:text-gray-800 dark:hover:bg-yellow-300 transition duration-200"
//                   key={index}
//                   to={route.protected === "user"}
//                 >
//                   {route.title}
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//       );
//     }
//   }

//   function Guest() {
//     {
//       !isLoggedIn && (
//         <div>
//           {routes.map((route, index) => {
//             return (
//               <div className="hidden md:grid gap-2.5 h-full text-center items-center">
//                 <Link
//                   className="text-gray-800 grid cursor-pointer p-2 rounded-lg hover:bg-blue-300 dark:text-white dark:hover:text-gray-800 dark:hover:bg-yellow-300 transition duration-200"
//                   key={index}
//                   to={route.protected === "user" || route.protected === ""}
//                 >
//                   {route.title}
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//       );
//     }
//   }

//   return <div>{isLoggedIn ? Admin() : Guest()}</div>;
// }
