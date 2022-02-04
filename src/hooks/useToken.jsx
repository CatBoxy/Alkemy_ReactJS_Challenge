// import { useState } from 'react';

// export default function useToken() {
//   const [ userToken, setUserToken ] = useState(() =>
//     JSON.parse(window.localStorage.getItem('userToken') || 'null'),
//   );

//   const storeToken = (token) => {
//     try {
//       const jsonValue = JSON.stringify(userToken);
//       window.localStorage.setItem('userToken', jsonValue);
//       setUserToken(token);
//     }
//     catch (e) {
//       console.log(e);
//     }
//   };

//   const removeToken = () => {
//     window.localStorage.removeItem('userToken');
//     setUserToken('');
//   };

//   return {
//     userToken,
//     storeToken,
//     removeToken,
//   };
// }
