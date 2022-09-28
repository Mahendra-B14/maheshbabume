import MUIDataTable from "mui-datatables";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import MenuItem from "@mui/material/MenuItem";
// import Stack from "@mui/material/Stack";
// import DeleteIcon from "@mui/icons-material/Delete";
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  Dialog,
  Grid,
  InputLabel,
  Select,
} from "@material-ui/core";
import DnsIcon from "@mui/icons-material/Dns";
import EditIcon from "@mui/icons-material/Edit";
import { useStyles } from "../../Header/HeaderStyles";
// import image from "../../Header/Navtabs/adduser.png";
// import image from "../../../img/adduser.png";
// import image from "../../../img/user.png";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// import image from "../../../img/adduser1.png";
import image from "../../../img/adduser2.jpg";
//--------------/Add user------------------

//--------------Add user pop-up --------------
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MaterialTable from "material-table";
import { useEffect, useState } from "react";
import axios from "axios";
import { DatePicker, LocalizationProvider } from "@mui/lab";

//--------------Add user pop-up --------------

const Historic = () => {
  const classes = useStyles();
  const columns = [
    // {
    //   name: "Edit",
    //   label: "Edit",
    //   options: {
    //     customBodyRender: (value, tableMeta, updateValue) => {
    //       return (
    //         <Button
    //           onClick={() => editableUsersData(tableMeta.rowData)}
    //           startIcon={<EditIcon />}
    //           color="primary"
    //         ></Button>
    //       );
    //     },
    //   },
    // },
    {
      name: "Id",
      label: " Sl No",
      options: {
        filter: true,
        sort: true,
      },
    },
    // {
    //   name: "Asset_ID",
    //   label: "Asset ID",
    //   options: {
    //     filter: true,
    //     sort: true,
    //   },
    // },
    {
      name: "Assigned_to",
      label: "Assigned To",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "Assigned_from",
      label: " Assigned From",
      options: {
        customBodyRender: (value, tableMeta, update) => {
          return <span>{value.slice(0,10)}</span>;
        },
        filter: true,
        sort: false,
      },
    },
    {
      name: "Updated_on",
      label: " Updated On",
      options: {
        customBodyRender: (value, tableMeta, update) => {
          return <span>{value.slice(0,10)}</span>;
        },
        filter: true,
        sort: false,
      },
    },
    {
      name: "Updated_by",

      label: "Updated By",

      options: {
        filter: true,
        sort: false,
      },
    },

    {
      name: "Remarks",
      label: "Remarks",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  //----------------------- /Add User-----------------
  // const role = [
  //   {
  //     value: "infra_admin",
  //     label: "Infra Admin",
  //   },
  //   {
  //     value: "user",
  //     label: "User",
  //   },
  // ];

  const [userRole, setUserRole] = useState("");
  // editable data
  // const [User_ID, setUser_ID] = useState();
  // const [Email_ID, setEmail_ID] = useState("");
  // const [First_Name, setFirst_Name] = useState("");
  // const [Last_Name, setLast_Name] = useState("");
  // //   const [Created_by, setCreated_by] = useState("");
  // const [Updated_by, setUpdated_by] = useState("");
  // const [Role, setRole] = useState("");
  // const [Teams, setTeams] = useState("");

  // const editableUsersData = (rowDataArr) => {
  //   handleEditUserOpen();
  //   console.log(rowDataArr, "rowDataArr");
  //   if (rowDataArr !== [] || rowDataArr !== null) {
  //     setUser_ID(rowDataArr[1]);
  //     setEmail_ID(rowDataArr[2]);
  //     setFirst_Name(rowDataArr[3]);
  //     setLast_Name(rowDataArr[4]);
  //     //   setCreated_by(rowDataArr[6]);
  //     setUpdated_by("Admin");
  //     setRole(rowDataArr[9]);
  //     setTeams(rowDataArr[10]);
  //   }
  // };
  const handleUserRole = () => {
    // setUserRole(event.target.value);
  };
  console.log(userRole, "userRole");

  //------------------------ Add User Pop-up ---------
  //   const style = {
  //     position: "absolute",
  //     top: "50%",
  //     left: "50%",
  //     transform: "translate(-50%, -50%)",
  //     width: 500,
  //     bgcolor: "background.paper",
  //     boxShadow: 24,
  //     p: 4,
  //   };

  const [usersData, setUsersData] = React.useState([]);
  // const [updatedUsers, setUpdatedUsers] = React.useState([]);
  const [user, setUser] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [editUserOpen, setEditUserOpen] = React.useState(false);

  const handleEditUserOpen = () => {
    setEditUserOpen(true);
  };
  const handleEditUserClose = () => {
    setEditUserOpen(false);
  };
  const [update, updateUser] = React.useState(false);
  const handleUpdate = () => updateUser(true); //onClick={() => { handleOpen(); handleChange() }}
  // const handleUpdate ={() => { updateUser(true); handleRowClick(); }};
  const handleCloseUpdate = () => updateUser(false);

  const handleRowClick = (rowData, rowMeta) => {
    handleUpdate();
    console.log(rowData);
  };
  //------------------------ Add User Pop-up ---------

  const options = {
    filterType: "checkbox",
    // onRowClick: handleRowClick,
    selectableRows: false,
    print: false,
    // filter: false,
    viewColumns: false,
  };

  // const handleUserUpdate = (updatedRows) => {
  //   setUpdatedUsers(updatedRows);
  //   console.log(updatedUsers);
  // };

  const handleAddUser = () => {
    handleClose();
    setUser();
    console.log();
  };

  // const [date, setDate] = useState();
  // const [data, setData] = useState({
  //   User_ID: "",
  //   Email_ID: "",
  //   Password: "",
  //   First_name: "",
  //   Last_name: "",
  //   // Created_on: "",
  //   Created_by: "Infra_Admin",
  //   // Role: "",
  //   Teams: "",
  // });

  // function handle(e) {
  //   const newdata = { ...data };
  //   newdata[e.target.id] = e.target.value;
  //   setData(newdata);
  //   console.log(newdata);
  //   // console.log(userRole);
  // }

  //   const url = "http://3.110.222.142:5002/create_role";
  // const url = "http://localhost:5002/create_user";
  // function createUser(e) {
  //   e.preventDefault();
  //   // let dateTime = new Date(date).toISOString();

  //   let postData = {
  //     User_ID: parseInt(data.User_ID),
  //     Email_ID: data.Email_ID,
  //     Password: data.Password,
  //     First_name: data.First_name,
  //     Last_name: data.Last_name,
  //     // Created_on: createdDate,
  //     //   Created_on: dateTime,
  //     Created_by: data.Created_by,
  //     Role: userRole,
  //     Teams: data.Teams,
  //   };
  //   console.log(postData, "postData");

  //   axios.post(url, postData).then(
  //     (res) => {
  //       if (res.status === 200) {
  //         console.log(res.data);
  //         //   reset();
  //         alert(res.data.message);
  //         // alert("We got your information. We will call you back soon.");
  //       } else if (res.status === 400) {
  //         console.log(res.data, "400");
  //         alert(res.data.message);
  //       } else {
  //         alert("Something went wrong...Server Error!!");
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //       console.log(error.message);
  //       alert(error.message);
  //       // alert("Refused Connection...Try again later", error);
  //     }
  //   );
  // }

  // editing asset api call
  // const editUserUrl = "http://3.110.222.142:5002/update_asset_details";
  // const editUserUrl = "http://localhost:5002/update_users";
  // function submitEditedUserFn(e) {
  //   e.preventDefault();
  //   console.log("edited data");
  //   let postData = {
  //     User_ID: parseInt(User_ID),
  //     Email_ID: Email_ID,
  //     First_Name: First_Name,
  //     Last_Name: Last_Name,
  //     Updated_by: Updated_by,
  //     Role: Role,
  //     Teams: Teams,
  //   };
  //   console.log(postData, "postData of update user");
  //   let jsonAssign = JSON.stringify(postData);
  //   console.log(jsonAssign, "jsonAssign update");

  //   axios.put(editUserUrl, jsonAssign).then(
  //     (res) => {
  //       if (res.status === 200) {
  //         console.log(res);
  //         //   reset();
  //         alert(res.data.Data);
  //         handleEditUserClose();
  //       } else {
  //         alert("Something went wrong...Server Error!!");
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //       alert("Refused Connection...Try again later", error);
  //     }
  //   );
  // }

  //   const getUsersUrl = "http://127.0.0.1:5002/list_users";
  //   const getUsersUrl = "http://3.110.222.142:5002/view_users";http://localhost:5002/historic_details
  // const getUsersUrl = "http://localhost:5002/historic_details";
  // useEffect(() => {
  //   axios.get(getUsersUrl).then((res) => {
  //     setUsersData(res.data.Historic_Details);
  //     console.log(res);
  //   });
  // }, []);
  useEffect(() => {
    getUsersUrl();
  }, []);
  const getUsersUrl = async () => {
    const url = "http://localhost:5002/historic_details";
    const response = await fetch(url);
    const datapoint = await response.json();
    setUsersData(datapoint.Historic_Details);
    console.log("mm", datapoint);
  };
  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <Box sx={{ width: "100%", typography: "body2" }}>
          <div>
            <MUIDataTable
              title={"History Table"}
              data={usersData}
              columns={columns}
              options={options}
            />

            {/* <MaterialTable title={"Users"} columns={columns} data={usersData} /> */}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Historic;
