import MUIDataTable from "mui-datatables";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
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
import api from "../../../utils/api";
import useAuth from "../../auth";
import swal from "sweetalert";

//--------------Add user pop-up --------------

// const columns = [
//   {
//     field: "User_Id",
//     title: "User ID",
//   },
//   {
//     field: "Email_Id",
//     title: "Email ID",
//   },
//   {
//     field: "First_Name",
//     title: "First Name",
//   },
//   {
//     field: "Last_Name",
//     title: "Last Name",
//   },
//   {
//     field: "Created_on",
//     title: "Created on",
//   },
//   {
//     field: "Created_by",
//     title: "Created by",
//   },
//   {
//     field: "Updated_on",
//     title: "Updated on",
//   },
//   {
//     field: "Updated_by",
//     title: "Updated by",
//   },
//   {
//     field: "Role",
//     title: "Role",
//   },
//   {
//     field: "Teams",
//     title: "Teams",
//   },
//   {
//     field: "Delete",
//     title: "Delete",
//   },
// ];

// const data = [
//   {
//     id: "01",
//     name: "Joe James",
//     role: "User",
//     email: "skarun@gmail.com",
//     Team_Code: "NY",
//   },
//   {
//     id: "02",
//     name: "Joe",
//     role: "User",
//     email: "skarun@gmail.com",
//     Team_Code: "NY",
//   },
//   {
//     id: "03",
//     name: "Joe James",
//     role: "User",
//     email: "skarun@gmail.com",
//     Team_Code: "NY",
//   },
//   {
//     id: "04",
//     name: "Joe James",
//     role: "User",
//     email: "skarun@gmail.com",
//     Team_Code: "NY",
//   },
//   {
//     id: "05",
//     name: "Joe James",
//     role: "User",
//     email: "skarun@gmail.com",
//     Team_Code: "NY",
//   },
//   {
//     id: "06",
//     name: "Sridhar",
//     role: "User",
//     email: "skarun@gmail.com",
//     Team_Code: "NY",
//   },

//   {
//     id: "07",
//     name: "Joe James",
//     role: "User",
//     email: "skarun@gmail.com",
//     Team_Code: "NY",
//   },
//   {
//     id: "08",
//     name: "Joe James",
//     role: "Infra User",
//     email: "skarun@gmail.com",
//     Team_Code: "NY",
//   },
//   {
//     id: "09",
//     name: "Joe James",
//     role: "Infra User",
//     email: "skarun@gmail.com",
//     Team_Code: "NY",
//   },
// ];

// const infra = [
//   {
//     id: "08",
//     name: "Joe James",
//     role: "Infra User",
//     email: "skarun@gmail.com",
//     Team_Code: "NY",
//   },
//   {
//     id: "09",
//     name: "Joe James",
//     role: "Infra User",
//     email: "skarun@gmail.com",
//     Team_Code: "NY",
//   },
// ];

// const user = [
//   {
//     id: "01",
//     name: "Joe James",
//     role: "User",
//     email: "skarun@gmail.com",
//     Team_Code: "NY",
//   },
//   {
//     id: "02",
//     name: "Joe",
//     role: "User",
//     email: "skarun@gmail.com",
//     Team_Code: "NY",
//   },
//   {
//     id: "03",
//     name: "Joe James",
//     role: "User",
//     email: "skarun@gmail.com",
//     Team_Code: "NY",
//   },
//   {
//     id: "04",
//     name: "Joe James",
//     role: "User",
//     email: "skarun@gmail.com",
//     Team_Code: "NY",
//   },
//   {
//     id: "05",
//     name: "Joe James",
//     role: "User",
//     email: "skarun@gmail.com",
//     Team_Code: "NY",
//   },
//   {
//     id: "06",
//     name: "Joe James",
//     role: "User",
//     email: "skarun@gmail.com",
//     Team_Code: "NY",
//   },

//   {
//     id: "07",
//     name: "Joe James",
//     role: "User",
//     email: "skarun@gmail.com",
//     Team_Code: "NY",
//   },
// ];

const UserComponent = () => {
  // checking user role.
  const user = useAuth();
  const classes = useStyles();
  let columns;
  if (user.Role === "infra_admin") {
    columns = [
      {
        name: "Sl no",
        label: "SL.NO",
        options: {
          filter: false,
          sort: true,
          customBodyRender: (value, tableMeta, update) => {
            let rowIndex = Number(tableMeta.rowIndex) + 1;
            return <span>{rowIndex}</span>;
          },
          // setCellProps: () => {
          //   return { align: "center" };
          // },
          setCellProps: () => ({
            style: {
              minWidth: "80px",
              maxHeight: "30px",
              textAlign: "center",
              // maxWidth: "150px",
            },
          }),
        },
      },
      {
        name: "User_Id",
        label: "User ID",
        options: {
          filter: true,
          sort: true,
        display: false,

        },
      },
      {
        name: "Email_Id",
        label: "EMAIL ID",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "First_Name",
        label: "FIRST NAME",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "Last_Name",
        label: "LAST NAME",
        options: {
          filter: true,
          sort: false,
          setCellProps: () => ({
            style: {
              minWidth: "90px",
              maxHeight: "30px",
              textAlign: "center",
              // maxWidth: "150px",
            },
          }),
        },
      },
      {
        name: "Role",
        label: "ROLE",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "Teams",
        label: "TEAMS",
        options: {
          filter: true,
          sort: false,
          setCellProps: () => ({
            style: {
              minWidth: "60px",
              maxHeight: "30px",
              textAlign: "center",
              // maxWidth: "150px",
            },
          }),
        },
      },
      {
        name: "Created_on",
        label: "CREATED ON",
        options: {
          customBodyRender: (value, tableMeta, update) => {
            return <span>{value.slice(0,10)}</span>;
          },
          filter: true,
          sort: false,
          setCellProps: () => ({
            style: {
              minWidth: "120px",
              maxHeight: "30px",
              // textAlign: "center",
              // maxWidth: "150px",
            },
          }),
        },
      },
      {
        name: "Created_by",
        label: "CREATED BY",
        options: {
          filter: true,
          sort: false,
          setCellProps: () => ({
            style: {
              minWidth: "120px",
              maxHeight: "30px",
              // textAlign: "center",
              // maxWidth: "150px",
            },
          }),
        },
      },
      {
        name: "Updated_on",
        label: "UPDATED ON",
        options: {
          customBodyRender: (value, tableMeta, update) => {
            return <span>{value.slice(0,10)}</span>;
          },
          filter: true,
          sort: false,
          setCellProps: () => ({
            style: {
              minWidth: "120px",
              maxHeight: "30px",
              // textAlign: "center",
              // maxWidth: "150px",
            },
          }),
        },
      },
      {
        name: "Updated_by",
        label: "UPDATED BY",
        options: {
          filter: true,
          sort: false,
          setCellProps: () => ({
            style: {
              minWidth: "90px",
              maxHeight: "30px",
              // textAlign: "center",
              // maxWidth: "150px",
            },
          }),
        },
      },
      // {
      //   name: "Delete",
      //   label: "Delete",
      //   options: {
      //     filter: true,
      //     sort: false,
      //   },
      // },
    ];
  } else {
    columns = [
      {
        name: "Sl no",
        label: "Sl.No",
        options: {
          filter: false,
          sort: true,
          customBodyRender: (value, tableMeta, update) => {
            let rowIndex = Number(tableMeta.rowIndex) + 1;
            return <span>{rowIndex}</span>;
          },
          // setCellProps: () => {
          //   return { align: "center" };
          // },
          setCellProps: () => ({
            style: {
              minWidth: "80px",
              maxHeight: "30px",
              textAlign: "center",
              // maxWidth: "150px",
            },
          }),
        },
      },
      {
        name: "User_Id",
        label: "User ID",
        options: {
          filter: true,
          sort: true,
        display: false,

        },
      },
      {
        name: "Email_Id",
        label: "EMAIL ID",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "First_Name",
        label: "FIRST NAME",
        options: {
          filter: true,
          sort: false,
          setCellProps: () => ({
            style: {
              minWidth: "80px",
              maxHeight: "30px",
              textAlign: "center",
              // maxWidth: "150px",
            },
          }),
        },
      },
      {
        name: "Last_Name",
        label: "LAST NAME",
        options: {
          filter: true,
          sort: false,
          setCellProps: () => ({
            style: {
              minWidth: "90px",
              maxHeight: "30px",
              textAlign: "center",
              // maxWidth: "150px",
            },
          }),
        },
      },
      {
        name: "Role",
        label: "ROLE",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "Teams",
        label: "TEAMS",
        options: {
          filter: true,
          sort: false,
          setCellProps: () => ({
            style: {
              minWidth: "60px",
              maxHeight: "30px",
              textAlign: "center",
              // maxWidth: "150px",
            },
          }),
        },
      },
      {
        name: "Created_on",
        label: "CREATED ON",
        options: {
          customBodyRender: (value, tableMeta, update) => {
            return <span>{value.slice(0,10)}</span>;
          },
          setCellProps: () => ({
            style: {
              minWidth: "120px",
              maxHeight: "30px",
              // textAlign: "center",
              // maxWidth: "150px",
            },
          }),
          filter: true,
          sort: false,
        },
      },
      {
        name: "Created_by",
        label: "CREATED BY",
        options: {
          filter: true,
          sort: false,
          setCellProps: () => ({
            style: {
              minWidth: "120px",
              maxHeight: "30px",
              // textAlign: "center",
              // maxWidth: "150px",
            },
          }),
        },
      },
      {
        name: "Updated_on",
        label: "UPDATED ON",
        options: {
          customBodyRender: (value, tableMeta, update) => {
            return <span>{value.slice(0,10)}</span>;
          },
          setCellProps: () => ({
            style: {
              minWidth: "120px",
              maxHeight: "30px",
              // textAlign: "center",
              // maxWidth: "150px",
            },
          }),
          filter: true,
          sort: false,
        },
      },
      {
        name: "Updated_by",        
        label: "UPDATED BY",
        options: {
          filter: true,
          sort: false,
          setCellProps: () => ({
            style: {
              minWidth: "90px",
              maxHeight: "30px",
              // textAlign: "center",
              // maxWidth: "150px",
            },
          }),
        },
      },
      // {
      //   name: "Delete",
      //   label: "Delete",
      //   options: {
      //     filter: true,
      //     sort: false,
      //   },
      // },
      {
        name: "Edit",
        label: "EDIT",
        options: {
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Button
                onClick={() => editableUsersData(tableMeta.rowData)}
                startIcon={<EditIcon />}
                color="primary"
              ></Button>
            );
          },
        },
      },
      {
        name: "Delete",
        label: "DELETE",
        options: {
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Button
                onClick={() => deleteUserApiFn(tableMeta.rowData[1])}
                // onClick={() => console.log(tableMeta, "tableMeta")}
                startIcon={<DeleteIcon />}
                color="primary"
              ></Button>
            );
          },
          setCellProps: () => ({
            style: {
              minWidth: "80px",
              maxHeight: "30px",
              textAlign: "center",
              maxWidth: "150px",
            },
          }),
        },
      },
    ];
  }

  //----------------------- /Add User-----------------
  const role = [
    {
      value: "infra_admin",
      label: "Infra Admin",
    },
    {
      value: "user",
      label: "User",
    },
  ];

  const [userRole, setUserRole] = useState("");
  // editable data
  const [User_Id, setUser_Id] = useState();
  const [Email_Id, setEmail_Id] = useState("");
  const [First_Name, setFirst_Name] = useState("");
  const [Last_Name, setLast_Name] = useState("");
  //   const [Created_by, setCreated_by] = useState("");
  const [Updated_by, setUpdated_by] = useState("");
  const [Role, setRole] = useState("");
  const [Teams, setTeams] = useState("");

  const editableUsersData = (rowDataArr) => {
    handleEditUserOpen();
    console.log(rowDataArr, "rowDataArr");
    if (rowDataArr !== [] || rowDataArr !== null) {
      setUser_Id(rowDataArr[1]);
      // setEmail_Id(rowDataArr[2]);
      setFirst_Name(rowDataArr[3]);
      setLast_Name(rowDataArr[4]);
      //   setCreated_by(rowDataArr[6]);
      setUpdated_by(user.Username);
      setRole(rowDataArr[5]);
      setTeams(rowDataArr[6]);
    }
  };
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
  const [updatedUsers, setUpdatedUsers] = React.useState([]);
  // const [user, setUser] = React.useState([]);
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
    selectableRows: false,
    print: false,
    // filter: false,
    viewColumns: false,

    // onRowClick: handleRowClick,
  };

  // const handleUserUpdate = (updatedRows) => {
  //   setUpdatedUsers(updatedRows);
  //   console.log(updatedUsers);
  // };

  const handleAddUser = () => {
    handleClose();
    // setUser();
    console.log();
  };

  const [date, setDate] = useState();
  const [data, setData] = useState({
    User_Id: "",
    Email_Id: "",
    Password: "",
    First_Name: "",
    Last_Name: "",
    // Created_on: "",
    Created_by: user.Username,
    Role: "",
    Teams: "",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    // console.log(newdata);
    // console.log(userRole);
  }

  //   const url = "http://3.110.222.142:5002/create_role";
  //   const url = "http://localhost:5002/create_user";
  const createUser = async (e) => {
    e.preventDefault();
    // let dateTime = new Date(date).toISOString();

    let postData = {
      // User_Id: parseInt(data.User_Id),
      Email_Id: data.Email_Id,
      Password: data.Password,
      First_Name: data.First_Name,
      Last_Name: data.Last_Name,
      // Created_on: createdDate,
      //   Created_on: dateTime,
      Created_by: data.Created_by,
      Role: userRole,
      Teams: data.Teams,
    };
    console.log(postData, "postData");

    // axios.post(url, postData).then(
    await api.post("create_user", postData).then(
      (res) => {
        if (res.status === 200) {
          // console.log(res.data);
          //   reset();
          // alert(res.data.Message);
          swal(res.data.Message, {
            buttons: false,
            timer: 3000,
          });
          setOpen(false);
          // console.log("created");
          getUsersApi();
          // alert("We got your information. We will call you back soon.");
        } else if (res.status === 202) {
          // console.log(res.data, "202");
          // alert(res.data.message);
          swal(res.data.Message)
        } else {
          alert("Something went wrong...Server Error!!");
        }
      },
      (error) => {
        // console.log(error);
        // console.log(error.message);
        // alert(error.message);
        swal(error.message, {
          // buttons: false,
          timer: 3000,
        });
        // alert("Refused Connection...Try again later", error);
      }
    );
  };
  // editing asset api call
  // const editUserUrl = "http://3.110.222.142:5002/update_asset_details";
  //   const editUserUrl = "http://localhost:5002/update_users";
  const submitEditedUserFn = async (e) => {
    e.preventDefault();
    console.log("edited data");
    let postData = {
      User_Id: parseInt(User_Id),
      // Email_Id: Email_Id,
      First_Name: First_Name,
      Last_Name: Last_Name,
      Updated_by: Updated_by,
      Role: Role,
      Teams: Teams,
    };
    console.log(postData, "postData of update user");
    let jsonAssign = JSON.stringify(postData);
    console.log(jsonAssign, "jsonAssign update");

    // axios.put(editUserUrl, jsonAssign).then(
    await api.put("update_users", postData).then(
      (res) => {
        if (res.status === 200) {
          // console.log(res.data.Message);
          //   reset();
          // alert(res.data.Message);
          swal(res.data.Message, {
            buttons: false,
            timer: 3000,
          });
          setEditUserOpen(false);
          getUsersApi();
        } else if(res.status === 202) {
          // alert(res.data.Message);
          swal(res.data.Message, {
            // buttons: false,
            timer: 3000,
          });
          // console.log(res.data.Message);
        } else {
          alert("Something went wrong...Server Error!!");
        }
      },
      (error) => {
        // console.log(error);
        // alert("Refused Connection...Try again later", error);
        swal(error.message, {
          // buttons: false,
          timer: 3000,
        });
      }
    );
  };

  //delete asset api call
  const deleteUserApiFn = async (UserId) => {
    // if (window.confirm("Are you sure do you want to delete this user ? ")) {
    //   // console.log("deleteUserApiFn", UserId);
    //   let postData = {
    //     User_Id: parseInt(UserId),
    //   };
    //   // console.log(postData, "postData of deleting user");
    //   // let jsonAssign = JSON.stringify(postData);
    //   // console.log(jsonAssign, "jsonAssign");

    //   // axios.post(releaseAssetUrl, postData).then(
    //   await api.put("delete_user", postData).then(
    //     (res) => {
    //       if (res.status === 200) {
    //         // console.log(res.data);
    //         // console.log(typeof res);
    //         //   reset();
    //         // alert(res.data.Message);
    //         swal(res.data.Message, {
    //           buttons: false,
    //           timer: 3000,
    //         });
    //         // setOpen(false);
    //         getUsersApi();
    //         // reservedAssetApi();
    //       } else if(res.status === 202) {
    //         // alert(res.data.Message);
    //         swal(res.data.Message, {
    //           // buttons: false,
    //           timer: 3000,
    //         });
    //         // console.log(res.data.Message, "202 response");
    //         getUsersApi();

    //       }else {
    //         alert("Something went wrong...Server Error!!");
    //       }
    //     },
    //     (error) => {
    //       // console.log(error);
    //       swal(error.message, {
    //         // buttons: false,
    //         timer: 3000,
    //       });
    //       alert("Refused Connection...Try again later", error);
    //     }
    //   );
    // }

    swal({
      // title: "Are you sure you want to delete the user ?  ",
      text: "Are you sure you want to delete the user ? \n Once deleted, you will not be able to recover deleted user!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (data) => {
      if(data) {
        let isuserid = parseInt(user.User_Id)
        if(isuserid !== UserId){
        let postData = {
          User_Id: parseInt(UserId),
        };
        // console.log(postData, "postData of deleting user");
        // let jsonAssign = JSON.stringify(postData);
        // console.log(jsonAssign, "jsonAssign");
  
        // axios.post(releaseAssetUrl, postData).then(
        await api.put("delete_user", postData).then(
          (res) => {
            if (res.status === 200) {
              // console.log(res.data);
              // console.log(typeof res);
              //   reset();
              // alert(res.data.Message);
              swal(res.data.Message, {
                buttons: false,
                timer: 3000,
              });
              // setOpen(false);
              getUsersApi();
              // reservedAssetApi();
            } else if(res.status === 202) {
              // alert(res.data.Message);
              swal(res.data.Message, {
                buttons: false,
                timer: 3000,
              });
              // console.log(res.data.Message, "202 response");
              getUsersApi();
  
            }else {
              alert("Something went wrong...Server Error!!");
            }
          },
          (error) => {
            // console.log(error);
            swal(error.message, {
              // buttons: false,
              timer: 3000,
            });
            alert("Refused Connection...Try again later", error);
          }
        );
        }else{
          swal("LoggedIn user can't be deleted !!")
        }
      }else {

      }
    })
  };

  //   const getUsersUrl = "http://127.0.0.1:5002/list_users";
  //   const getUsersUrl = "http://3.110.222.142:5002/view_users";
  // const getUsersUrl = "http://localhost:5002/view_users";
  const getUsersApi = async () => {
    const getUsersUrl = await api.get("view_users");
    setUsersData(getUsersUrl.data.Listusers);
  };
  const [showUserAddBtn, setShowUserAddBtn] = useState(true);
  const userAddBtn = () => {
    if (user.Role === "infra_admin") {
      setShowUserAddBtn(false);
    } else {
      setShowUserAddBtn(true);
    }
  };
  useEffect(() => {
    userAddBtn();
    // const getUsersUrl = await api.get("view_users");
    // axios.get(getUsersUrl).then((res) => {
    //   setUsersData(res.data.Listusers);
    // });
    getUsersApi();
  }, []);
  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        {showUserAddBtn && (
          <div style={{ paddingLeft: "88%" }} className="">
            {/* <Button
              // variant="standard"
              className={classes.addServerBtn}
              onClick={handleOpen}
              
              
              
              
              color="primary"
            >
              <Typography component="h1" variant="h6">
              Add User
            </Typography>
            </Button> */}

            <Button
        variant="outlined"
        className={classes.addUserBtn}
        // className="addServerBtn"
        onClick={handleOpen}
        startIcon={<DnsIcon />}
        color="primary"
      >
       Add User

      </Button>

            {/* </Stack> */}
            <Dialog open={open} className={classes.dialog}>
              {/* <Box className={classes.dialogPaper}> */}
              <Container component="main" className={classes.dialogContainer}>
                <CssBaseline />
                <div className={classes.dialogPaper}>
                  <h4 className={classes.addUserFormHeading}>Add User</h4>
                  {/* <Button variant="contained" >
                Send
              </Button> */}

                  <form
                    className={classes.form}
                    onSubmit={(e) => createUser(e)}
                  >
                    <Grid container spacing={(0, 0, 0, 2)}>
                      {/* <Grid item xs={12} sm={6}>
                        <TextField
                          name="User_Id"
                          variant="standard"
                          required
                          size="small"
                          id="User_Id"
                          label="User ID"
                          focused
                          type="number"
                          value={data.User_Id}
                          onChange={(e) => handle(e)}
                        />
                      </Grid> */}
                      <Grid item xs={12} sm={4}>
                        <TextField
                          variant="standard"
                          required
                          size="small"
                          id="First_Name"
                          label="First Name"
                          name="First_Name"
                          focused
                          type="text"
                          value={data.First_Name}
                          onChange={(e) => handle(e)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <TextField
                          name="Last_Name"
                          variant="standard"
                          required
                          size="small"
                          id="Last_Name"
                          label="Last Name"
                          focused
                          type="text"
                          value={data.Last_Name}
                          onChange={(e) => handle(e)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        {/* <TextField
                          // variant="standard"
                          id="standard-select-currency"
                          // id="role"
                          select
                          label="Role"
                          value={data.Role}
                          // focused
                          //   helperText="Please select user role"
                          //   onChange={handleUserRole}
                          onChange={(e) => handle(e)}
                        >
                          {role.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField> */}
                        <InputLabel>Role</InputLabel>
                        <Select
                          id="Role"
                          label="Role"
                          name="userrole"
                          variant="standard"
                          required
                          size="small"
                          focused
                          type="text"
                          value={userRole}
                          onChange={(e) => setUserRole(e.target.value)}
                        >
                          {/* <MenuItem value="">
                            <em>None</em>
                          </MenuItem> */}
                          <MenuItem value={"infra_admin"}>Infra Admin</MenuItem>
                          <MenuItem value={"user"}>User</MenuItem>
                        </Select>
                        {/* <TextField
                          variant="standard"
                          id="role"
                          select
                          label="Role"
                          value={data.Role}
                          onChange={(e) => handle(e)}
                        >
                          {role.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}

                        </TextField> */}
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <TextField
                          variant="standard"
                          required
                          size="small"
                          id="Teams"
                          label="Teams"
                          name="Teams"
                          focused
                          type="text"
                          value={data.Teams}
                          onChange={(e) => handle(e)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <TextField
                          variant="standard"
                          required
                          size="small"
                          id="Email_Id"
                          label="Email ID"
                          name="Email_Id"
                          focused
                          type="text"
                          value={data.Email_Id}
                          onChange={(e) => handle(e)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={4}>
                        <TextField
                          variant="standard"
                          required
                          size="small"
                          id="Password"
                          label="Password"
                          name="Password"
                          focused
                          type="password"
                          value={data.Password}
                          onChange={(e) => handle(e)}
                        />
                      </Grid>
                    </Grid>
                    <Button
                      //   type="submit"
                      // fullWidth
                      type="submit"
                      value="SUBMIT"
                      sx={{ width: "25ch" }}
                      variant="contained"
                      color="secondary"
                      className={classes.addUserBtn}
                    >
                      Add
                    </Button>
                    <Button
                      //   type="submit"
                      // fullWidth
                      sx={{ width: "25ch" }}
                      variant="contained"
                      color="primary"
                      className={classes.cancelUSerBtn}
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                    {/* <Grid container justify="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid> */}
                  </form>
                </div>
              </Container>
              {/* </Box> */}
            </Dialog>
          </div>
        )}

        {/* user edit form */}
        <Dialog open={editUserOpen} className={classes.dialog}>
          <Box className={classes.dialogPaper}>
            <Container component="main" className={classes.dialogContainer}>
              <CssBaseline />
              <div className={classes.dialogPaper}>
                <h4 className={classes.addUserFormHeading}>Edit User</h4>

                <form
                  className={classes.form}
                  onSubmit={(e) => submitEditedUserFn(e)}
                >
                  <Grid container spacing={(0, 0, 0, 4)}>
                    {/* <Grid item xs={12} sm={6}>
                      <TextField
                        name="User_Id"
                        variant="standard"
                        required
                        size="small"
                        id="User_Id"
                        label="User ID"
                        focused
                        type="number"
                        value={User_Id}
                        onChange={(e) => setUser_Id(e.target.value)}
                      />
                    </Grid> */}
                    <Grid item xs={12} sm={4}>
                      <TextField
                        variant="standard"
                        required
                        size="small"
                        id="First_Name"
                        label="First Name"
                        name="First_Name"
                        focused
                        type="text"
                        value={First_Name}
                        onChange={(e) => setFirst_Name(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        name="Last_Name"
                        variant="standard"
                        required
                        size="small"
                        id="Last_Name"
                        label="Last Name"
                        focused
                        type="text"
                        value={Last_Name}
                        onChange={(e) => setLast_Name(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <InputLabel>Role</InputLabel>
                      <Select
                        id="Role"
                        label="Role"
                        name="userrole"
                        variant="standard"
                        required
                        size="small"
                        focused
                        type="text"
                        value={Role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        {/* <MenuItem value="">
                            <em>None</em>
                          </MenuItem> */}
                        <MenuItem value={"infra_admin"}>Infra Admin</MenuItem>
                        <MenuItem value={"user"}>User</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        variant="standard"
                        required
                        size="small"
                        id="Teams"
                        label="Teams"
                        name="Teams"
                        focused
                        type="text"
                        value={Teams}
                        onChange={(e) => setTeams(e.target.value)}
                      />
                    </Grid>
                    {/* <Grid item xs={12} sm={6}>
                      <TextField
                        variant="standard"
                        required
                        size="small"
                        id="Email_Id"
                        label="Email ID"
                        name="Email_Id"
                        focused
                        type="text"
                        value={Email_Id}
                        onChange={(e) => setEmail_Id(e.target.value)}
                      />
                    </Grid> */}
                  </Grid>
                  <Button
                    //   type="submit"
                    // fullWidth
                    type="submit"
                    value="SUBMIT"
                    sx={{ width: "25ch" }}
                    variant="contained"
                    color="secondary"
                    className={classes.addUserBtn}
                  >
                    Save
                  </Button>
                  <Button
                    //   type="submit"
                    // fullWidth
                    sx={{ width: "25ch" }}
                    variant="contained"
                    color="primary"
                    className={classes.cancelUSerBtn}
                    onClick={handleEditUserClose}
                  >
                    Cancel
                  </Button>
                </form>
              </div>
            </Container>
          </Box>
        </Dialog>

        <Box sx={{ width: "100%", typography: "body2" }}>
          <div>
            <MUIDataTable
              title={"Users"}
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

export default UserComponent;
