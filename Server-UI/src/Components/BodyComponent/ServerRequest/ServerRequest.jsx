import React from "react";
import { useState } from "react";
// import "./App.css";
import { Grid, Button, Card, CardContent, Typography } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Axios from "axios";

const filter = createFilterOptions();
const manufacturer = [
  { title: "DELL" },
  { title: "HP" },
  { title: "LENOVO" },
  { title: "ASUS" },
];
const CPU_Sockets = [{ label: "1" }, { label: "2" }, { label: "3" }];
const Cpu_model = [{ label: "Neples" }, { label: "Rome" }, { label: "Milan" }];

const Storage_Vendor = [
  { label: "Samsung" },
  { label: "Seagate" },
  { label: "Western Digital" },
];

const Storage_Controller = [
  { label: "SATA" },
  { label: "SAS" },
  { label: "Nvme" },
  { label: "Mixed" },
];

const Number_Of_Network_Ports = [
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "4" },
];

const Network_speed = [
  { label: "1 Gb " },
  { label: "10 Gb" },
  { label: "25 Gb" },
  { label: "100 Gb" },
];
// const options1 = ["Neples ", "Rome", "Milan", "Milan X", "Genova", "Burgamo "];
// const options1 = [
//   { title: "Neples", value: "Neples" },
//   { title: "Rome", value: "Rome" },
//   { title: "Milan", value: "Milan" },
// ];
// const options2 = [
//   { title: "DELL" },
//   { title: "HP" },
//   { title: "LENOVO" },
//   { title: "ASUS" },
// ];
// const options3 = ["Samsung ", "Seagate", "Western Digital"];
// const options4 = ["SATA ", "SAS", "Nvme", "Mixed"];
// const options5 = ["1 ", "2", "3", "4"];
// const options6 = ["1 Gb ", "10 Gb ", "25 Gb", "100 Gb"];
function App() {
  const margin = { margin: "0 5px" };
  // const options = ["DELL", "HP", "LENOVO", "ASUS"];

  // const options = [
  //   { title: "DELL", value: "DELL" },
  //   { title: "HP", value: "HP" },
  // ];
  const [value, setValue] = React.useState(null);
  console.log("ggggg", value);
  const [network_Type, setNetwork_Type] = useState("public");
  // const [model, setModel] = useState(options1[0]);
  // const [inputValues0, setInputValues0] = useState("");
  // console.log("data", model);
  // const [socket, setSocket] = useState(options2[0]);
  // const [inputValue2, setInputValue2] = useState("");

  // const [osventer, setOsventer] = useState(options3[0]);
  // const [inputValue3, setInputValue3] = useState("");

  // const [controller, setController] = useState(options4[0]);
  // const [inputValue4, setInputValue4] = useState("");

  // const [networkPort, setNetworkPort] = useState(options5[0]);
  // const [inputValue5, setInputValue5] = useState("");

  // const [networSpeed, setNetworSpeed] = useState(options6[0]);
  // const [inputValue6, setInputValue6] = useState("");

  // const [val, setVal] = (useState < String) | (null > null);
  // console.log("val", val);
  const url = "http://localhost:5002/create_request";
  const [data, setData] = useState({
    Creator: "",
    Start_Date: "",
    End_Date: "",
    Manufacturer: "",
    Number_Of_Servers: "",

    CPU_Sockets: "",
    DIMM_Size: "",
    DIMM_Capacity: "",
    Storage_Vendor: "",
    Storage_Controller: "",
    Storage_Capacity: "",
    Network_Type: "",
    Network_speed: "",
    Number_Of_Network_Ports: "",
    Special_Switching_Needs: "",
  });

  function Submit(e) {
    e.preventDefault();
    // let a = {
    //   Creator: data.Creator,
    //   Start_Date: data.Start_Date,
    //   End_Date: data.End_Date,
    //   Manufacturer: value.title,
    // };
    // console.log(a, "a");
    Axios.post(url, {
      Creator: data.Creator,
      Start_Date: data.Start_Date,
      End_Date: data.End_Date,
      Manufacturer: value,
      CPU_Sockets: value,
    }).then((res) => {
      console.log(res.data);
    });
  }
  function handlechange(e) {
    console.log("kkk", e);
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    // setValue(manufacturer['']);
    console.log(newdata);
    console.log("nn", e.target.value);
  }

  return (
    <div className="App">
      <Typography gutterBottom variant="h3" align="center"></Typography>
      <Grid>
        <Card style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography variant="h4" color="primary">
              Request Form
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Fill all the mandatory fields to request servers.
            </Typography>
            <form onSubmit={Submit}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    id="Creator"
                    onChange={(e) => handlechange(e)}
                    value={data.Creator}
                    type={"text"}
                    placeholder="creator"
                    label="creator"
                    variant="outlined"
                    fullWidth="true"
                    required="true"
                    xs={12}
                    ms={6}
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    id="Start_Date"
                    type={"Date"}
                    onChange={(e) => handlechange(e)}
                    value={data.Start_Date}
                    placeholder="Start_Date"
                    label="created date"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                {/* <Typography variant="body2" align="left" gutterBottom>
                  Storage : Disk boot
                </Typography> */}
                {/* <Grid container spacing={1}> */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="End_Date"
                    type={"date"}
                    onChange={(e) => handlechange(e)}
                    value={data.End_Date}
                    placeholder="End date"
                    label="End date"
                    variant="outlined"
                    fullWidth="true"
                    required="true"
                    xs={12}
                    ms={6}
                  />
                  {/* </Grid> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* <TextField
                    id="Manufacturer"
                    type={"text"}
                    placeholder="Manufacturer"
                    label="Manufacturer"
                    variant="outlined"
                    fullWidth="true"
                    required="true"
                    xs={12}
                    ms={6}
                  /> */}
                  {/* <Autocomplete
                    filterOptions={(options, params) => {
                      const filtered = filter(options, params);
                      // Suggest the creation of a new value
                      if (params.inputValue !== "") {
                        filtered.push(`Add "${params.inputValue}"`);
                      }
                      return filtered;
                    }}
                    selectOnFocus
                    id="Manufacturer"
                    onChange={(e) => handlechange(e)}
                    // value={options.values}
                    clearOnBlur
                    handleHomeEndKeys
                    options={options}
                    renderOption={(option) => option}
                    // getOptionLabel={(option) => (options ? options.value : "")}
                    style={{ width: 280 }}
                    freeSolo
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        id="Manufacturer"
                        label="Manufacturer"
                        variant="outlined"
                      />
                    )}
                  /> */}

                  <Autocomplete
                    value={value}
                    onInputChange={(event, newValue) => {
                      if (typeof newValue === "string") {
                        setValue({
                          title: newValue,
                        });
                      } else if (newValue && newValue.inputValue) {
                        // Create a new value from the user input
                        setValue({
                          title: newValue.inputValue,
                        });
                      } else {
                        setValue(newValue);
                      }
                    }}
                    filterOptions={(options, params) => {
                      const filtered = filter(options, params);

                      const { inputValue } = params;
                      // Suggest the creation of a new value
                      const isExisting = options.some(
                        (option) => inputValue === option.title
                      );
                      if (inputValue !== "" && !isExisting) {
                        filtered.push({
                          inputValue,
                          title: `Add "${inputValue}"`,
                        });
                      }

                      return filtered;
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="Manufacturer"
                    onSelect={(e) => handlechange(e)}
                    options={manufacturer}
                    getOptionLabel={(option) => {
                      // Value selected with enter, right from the input
                      if (typeof option === "string") {
                        return option;
                      }
                      // Add "xxx" option created dynamically
                      if (option.inputValue) {
                        return option.inputValue;
                      }
                      // Regular option
                      return option.title;
                    }}
                    renderOption={(props, option) => (
                      <li {...props}>{option.title}</li>
                    )}
                    sx={{ width: 280 }}
                    freeSolo
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        onChange={(e) => handlechange(e)}
                        label="Manufacturer"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="Number_Of_Servers"
                    type={"number"}
                    onChange={(e) => handlechange(e)}
                    value={data.Number_Of_Servers}
                    placeholder="Numer of server"
                    label="Numer of server"
                    variant="outlined"
                    fullWidth="true"
                    required="true"
                    xs={12}
                    ms={6}
                  />
                </Grid>
                <Grid container spacing={1}>
                  <Typography variant="body2" align="left" gutterBottom>
                    CPU :{""}
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                      {/* <TextField
                        id="CPU Model"
                        type={"text"}
                        placeholder="CPU Model"
                        label="CPU Model"
                        variant="outlined"
                        fullWidth="true"
                        required="true"
                        xs={12}
                        ms={6}
                      /> */}
                      {/* </Grid> */}
                      {/* <Autocomplete
                        value={model}
                        onChange={(event, newValue) => {
                          setModel(newValue);
                        }}
                        inputValue={inputValues0}
                        onInputChange={(event, newInputValue) => {
                          setInputValues0(newInputValue);
                        }}
                        id="controllable-states-demo"
                        options={options1}
                        getOptionLabel={(options1) =>
                          options1 ? options1.value : ""
                        }
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="CPU Model"
                            value={data.Cpu_model}
                            variant="outlined"
                          />
                        )}
                      /> */}
                      <Autocomplete
                        disablePortal
                        id="Cpu_model"
                        onSelect={(e) => handlechange(e)}
                        options={Cpu_model}
                        sx={{ width: 280 }}
                        renderInput={(params) => (
                          <TextField {...params} label="CPU Model" />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      {/* <TextField
                        id="CPU Sockets"
                        type={"text"}
                        placeholder="CPU Sockets"
                        label="CPU Sockets"
                        variant="outlined"
                        fullWidth="true"
                        required="true"
                        xs={12}
                        ms={6}
                        gutterBottom
                      /> */}
                      {/* </Grid> */}

                      {/* <Autocomplete
                        value={socket}
                        onChange={(event, newValue) => {
                          setSocket(newValue);
                        }}
                        inputValue={inputValue2}
                        onInputChange={(event, newInputValue) => {
                          setInputValue2(newInputValue);
                        }}
                        id="controllable-states-demo"
                        options={options2}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="CPU Sockets"
                            onChange={(e) => handlechange(e)}
                            value={data.CPU_Sockets}
                            variant="outlined"
                          />
                        )}
                      /> */}
                      <Autocomplete
                        disablePortal
                        id="CPU_Sockets"
                        onSelect={(e) => handlechange(e)}
                        options={CPU_Sockets}
                        sx={{ width: 280 }}
                        renderInput={(params) => (
                          <TextField {...params} label="CPU Sockets" />
                        )}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                {/* <Grid container spacing={1}> */}
                <Typography variant="body2" align="left" gutterBottom>
                  RAM :{""}
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="DIMM Size"
                      // onChange={(e) => handlechange(e)}
                      // value={data.DIMM_Size}
                      type={"text"}
                      placeholder="DIMM Size"
                      label="DIMM Size"
                      variant="outlined"
                      fullWidth="true"
                      required="true"
                      xs={12}
                      ms={6}
                    />
                    {/* </Grid> */}
                  </Grid>
                  <Grid item xs={12} sm={6} gutterBottom>
                    <TextField
                      id="DIMM Capacity"
                      onhange={(e) => handlechange(e)}
                      value={data.DIMM_Capacity}
                      type={"text"}
                      placeholder="DIMM Capacity"
                      label="DIMM Capacity"
                      variant="outlined"
                      fullWidth="true"
                      required="true"
                      xs={12}
                      ms={6}
                      gutterBottom
                    />
                    {/* </Grid> */}
                  </Grid>
                  {/* </Grid> */}
                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Typography variant="body2" align="left" gutterBottom>
                  Storage :{"OS Boot"}
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6}>
                    {/* <TextField
                      id="OS Vender"
                      type={"text"}
                      placeholder="OS Vender"
                      label="OS Vender"
                      variant="outlined"
                      fullWidth="true"
                      required="true"
                      xs={12}
                      ms={6}
                    />  */}
                    {/* </Grid> */}

                    {/* <Autocomplete
                      value={osventer}
                      onChange={(event, newValue) => {
                        setOsventer(newValue);
                      }}
                      inputValue={inputValue3}
                      onInputChange={(event, newInputValue) => {
                        setInputValue3(newInputValue);
                      }}
                      id="controllable-states-demo"
                      options={options3}
                      sx={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="OS Vender"
                          onChange={(e) => handlechange(e)}
                          value={data.Storage_Vendor}
                          placeholder="OS Vender"
                          variant="outlined"
                        />
                      )}
                    /> */}
                    <Autocomplete
                      disablePortal
                      id="Storage_Vendor"
                      onSelect={(e) => handlechange(e)}
                      options={Storage_Vendor}
                      sx={{ width: 280 }}
                      renderInput={(params) => (
                        <TextField {...params} label="Storage Vendor" />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {/* <TextField
                      id="OS Controller"
                      type={"text"}
                      placeholder="OS Controller"
                      label="OS Controller"
                      variant="outlined"
                      fullWidth="true"
                      required="true"
                      xs={12}
                      ms={6}
                    /> */}
                    {/* </Grid> */}

                    {/* <Autocomplete
                      value={controller}
                      onChange={(event, newValue) => {
                        setController(newValue);
                      }}
                      inputValue={inputValue4}
                      onInputChange={(event, newInputValue) => {
                        setInputValue4(newInputValue);
                      }}
                      id="controllable-states-demo"
                      options={options4}
                      sx={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="OS Controller"
                          onChange={(e) => handlechange(e)}
                          value={data.Storage_Controller}
                          placeholder="OS Controller"
                          variant="outlined"
                        />
                      )}
                    /> */}
                    <Autocomplete
                      disablePortal
                      id="Storage_Controller"
                      onSelect={(e) => handlechange(e)}
                      options={Storage_Controller}
                      sx={{ width: 280 }}
                      renderInput={(params) => (
                        <TextField {...params} label="Storage_Controller" />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="OS Capacity"
                      type={"text"}
                      onChange={(e) => handlechange(e)}
                      value={data.Storage_Capacity}
                      placeholder="OS Capacity"
                      label="OS Capacity"
                      variant="outlined"
                      fullWidth="true"
                      required="true"
                      xs={12}
                      ms={6}
                      gutterBottom
                    />
                    {/* </Grid> */}
                  </Grid>
                </Grid>
                {/* <Grid container spacing={1}> */}
                {/* <Typography variant="body2" align="left" gutterBottom>
                    Storage :{"Data Boot"}
                  </Typography> */}
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6}>
                    {/* <TextField
                      id="Disk Vender"
                      type={"text"}
                      placeholder="Disk Vender"
                      label="Disk Vender"
                      variant="outlined"
                      fullWidth="true"
                      required="true"
                      xs={12}
                      ms={6}
                    /> */}
                    {/* </Grid> */}
                    {/* </Grid> */}
                    {/* <Grid item xs={12} sm={6} gutterBottom> */}
                    {/* <TextField
                      id="Disk Controller"
                      type={"text"}
                      placeholder="Disk Controller"
                      label="Disk Controller"
                      variant="outlined"
                      fullWidth="true"
                      required="true"
                      xs={12}
                      ms={6}
                    /> */}
                    {/* </Grid> */}
                    {/* </Grid> */}
                    <Grid item xs={12} sm={6}>
                      {/* <TextField
                        id="Disk Capacity"
                        type={"text"}
                        placeholder="Disk Capacity"
                        label="Disk Capacity"
                        variant="outlined"
                        fullWidth="true"
                        required="true"
                        xs={12}
                        ms={6}
                      /> */}
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Typography variant="body2" align="left" gutterBottom>
                      Network :{""}
                    </Typography>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={6}>
                        {/* <TextField
                          id="Network Type"
                          type={"text"}
                          placeholder="Network Type"
                          label="Network Type"
                          variant="outlined"
                          fullWidth="true"
                          required="true"
                          xs={12}
                          ms={6}
                        /> */}
                        {/* </Grid> */}
                        {/* <TextField
                          id="Network Port"
                          type={"text"}
                          placeholder="Network Port"
                          label="Network Port"
                          variant="outlined"
                          fullWidth="true"
                          required="true"
                          xs={12}
                          ms={6}
                        /> */}

                        {/* <Autocomplete
                          value={networkPort}
                          onChange={(event, newValue) => {
                            setNetworkPort(newValue);
                          }}
                          inputValue={inputValue5}
                          onInputChange={(event, newInputValue) => {
                            setInputValue5(newInputValue);
                          }}
                          id="controllable-states-demo"
                          options={options5}
                          sx={{ width: 300 }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Network Port"
                              placeholder="Network Port"
                              variant="outlined"
                            />
                          )}
                        /> */}
                        <Autocomplete
                          disablePortal
                          id="Number_Of_Network_Ports"
                          onSelect={(e) => handlechange(e)}
                          options={Number_Of_Network_Ports}
                          sx={{ width: 280 }}
                          renderInput={(params) => (
                            <TextField {...params} label="Network Ports" />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} gutterBottom>
                        {/* <TextField
                          id="Network Speed"
                          type={"text"}
                          placeholder="Network Speed"
                          label="Network Speed"
                          variant="outlined"
                          fullWidth="true"
                          required="true"
                          xs={12}
                          ms={6}
                        /> */}
                        {/* </Grid> */}

                        {/* <Autocomplete
                          value={networSpeed}
                          onChange={(event, newValue) => {
                            setNetworSpeed(newValue);
                          }}
                          inputValue={inputValue6}
                          onInputChange={(event, newInputValue) => {
                            setInputValue6(newInputValue);
                          }}
                          id="controllable-states-demo"
                          options={options6}
                          sx={{ width: 300 }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Network Speed"
                              placeholder="Network Speed"
                              variant="outlined"
                            />
                          )}
                        /> */}
                        <Autocomplete
                          disablePortal
                          id="Network_speed"
                          onSelect={(e) => handlechange(e)}
                          options={Network_speed}
                          sx={{ width: 280 }}
                          renderInput={(params) => (
                            <TextField {...params} label="Network speed" />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        {/* <TextField
                          id="Network Port"
                          type={"text"}
                          placeholder="Network Port"
                          label="Network Port"
                          variant="outlined"
                          fullWidth="true"
                          required="true"
                          xs={12}
                          ms={6}
                        /> */}
                        <FormControl>
                          <FormLabel id="demo-row-radio-buttonslabel-group-">
                            Network type
                          </FormLabel>
                          <RadioGroup
                            value={network_Type}
                            onChange={(e) => setNetwork_Type(e.target.value)}
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                          >
                            <FormControlLabel
                              value="priviet"
                              control={<Radio />}
                              label="private"
                            />
                            <FormControlLabel
                              value="public"
                              control={<Radio />}
                              label="public"
                            />
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Special Switching Need"
                        multiline
                        rows={4}
                        placeholder="Type your  here"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} align="right">
                    <Button
                      style={margin}
                      type="reset"
                      variant="outlined"
                      color="primary"
                    >
                      Reset
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default App;
