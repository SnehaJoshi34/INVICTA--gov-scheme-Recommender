// // import { Box, useTheme } from "@mui/material";
// // import GeographyChart from "../../components/GeographyChart";
// // import Header from "../../components/Header";
// // import { tokens } from "../../theme";
// // // import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



// // const Geography = () => {
// //   const theme = useTheme();
// //   const colors = tokens(theme.palette.mode);
// //   return (
// //     <Box m="20px">
// //       <Header title="Geography" subtitle="Simple Geography Chart" />

// //       <Box
// //         height="75vh"
// //         border={`1px solid ${colors.grey[100]}`}
// //         borderRadius="4px"
// //       >
// //         <GeographyChart />
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Geography;
// import React, { useState } from "react";
// import "./App.css";
// import * as XLSX from "xlsx";

// class ExcelToJson extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.state = {
//       file: "",
//     };
//   }

//   handleClick(e) {
//     this.refs.fileUploader.click();
//   }

//   filePathset(e) {
//     e.stopPropagation();
//     e.preventDefault();
//     var file = e.target.files[0];
//     console.log(file);
//     this.setState({ file });

//     console.log(this.state.file);
//   }

//   readFile() {
//     var f = this.state.file;
//     var name = f.name;
//     const reader = new FileReader();
//     reader.onload = (evt) => {
//       // evt = on_file_select event
//       /* Parse data */
//       const bstr = evt.target.result;
//       const wb = XLSX.read(bstr, { type: "binary" });
//       /* Get first worksheet */
//       const wsname = wb.SheetNames[0];
//       const ws = wb.Sheets[wsname];
//       /* Convert array of arrays */
//       const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
//       /* Update state */
//       console.log("Data>>>" + data);// shows that excel data is read
//       console.log(this.convertToJson(data)); // shows data in json format
//     };
//     reader.readAsBinaryString(f);
//   }

//   convertToJson(csv) {
//     var lines = csv.split("\n");

//     var result = [];

//     var headers = lines[0].split(",");

//     for (var i = 1; i < lines.length; i++) {
//       var obj = {};
//       var currentline = lines[i].split(",");

//       for (var j = 0; j < headers.length; j++) {
//         obj[headers[j]] = currentline[j];
//       }

//       result.push(obj);
//     }

//     //return result; //JavaScript object
//     return JSON.stringify(result); //JSON
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="file"
//           id="file"
//           ref="fileUploader"
//           onChange={this.filePathset.bind(this)}
//         />
//         <button
//           onClick={() => {
//             this.readFile();
//           }}
//         >
//           Read File
//         </button>
//       </div>
//     );
//   }
// }

// export default ExcelToJson;
