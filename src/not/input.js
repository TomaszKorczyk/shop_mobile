//  <div className="w-full">
//               <div className="formik">
//                 <input
//                   className={`input ${errors.email && "inputErr"}`}
//                   type="email"
//                   name="email"
//                   placeholder=" "
//                   onChange={handleChange}
//                   value={values.email}
//                 />
//                 <label htmlFor="email" className="label dark:bg-gray-800">
//                   Email
//                 </label>
//               </div>
//               {errors.email ? (
//                 <div className="err">{errors.email}</div>
//               ) : (
//                 <div className="noError"></div>
//               )}
//             </div>
//             <div className="formik">
//               <input
//                 className={`input ${errors.password && "inputErr"}`}
//                 type="password"
//                 name="password"
//                 placeholder=" "
//                 onChange={handleChange}
//                 value={values.password}
//               />
//               <label htmlFor="password" className="label dark:bg-gray-800">
//                 Password
//               </label>
//             </div>
//             {errors.password ? (
//               <p className="err py-0">{errors.password}</p>
//             ) : (
//               <p className="noError"></p>
//             )}
//             <div className="formik">
//               <input
//                 className={`input ${errors.password2 && "inputErr"}`}
//                 type="password"
//                 name="password2"
//                 placeholder=" "
//                 onChange={handleChange}
//                 value={values.password2}
//               />
//               <label htmlFor="password2" className="label dark:bg-gray-800">
//                 Confirm password
//               </label>
//             </div>
//             {errors.password2 ? (
//               <p className="err py-0">{errors.password2}</p>
//             ) : (
//               <p className="noError"></p>
//             )} 