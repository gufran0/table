import React from "react";

import {
  TextField,
  FormControlLabel,
  Checkbox,
  FormLabel,
  FormControl,
  FormHelperText,
  RadioGroup,
  Radio,
  InputLabel,

  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  
  KeyboardDatePicker,
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";
import TableData from "./TableData";

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "50%",
    margin: theme.spacing(1, 0),
  },
}));

const Home = () => {
  const [visible,setvisible]=React.useState(false);
  const [data,setdata]=React.useState();
  const classes = useStyles();
  const { register, handleSubmit, control, errors } = useForm();
  const onSubmit = (data) => console.log("On submit",data);
  //console.log(errors);
  return (
    <div className="box">
      
      <div className="box-secondary">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 1) TextField */}
          <TextField
            placeholder="Enter Your First Name"
            label="First Name"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="firstName"
            inputRef={register({
              required: "First Name is required.",
            })}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName?.message}
          />

          {/* 2) TextField */}
          <TextField
            placeholder="Enter Your Last Name"
            label="Last Name"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="lastName"
            inputRef={register({
              required: "Last Name is required.",
            })}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName?.message}
          />

          {/* 3) TextField */}
          <TextField
            placeholder="Enter Your E-mail Address"
            label="E-mail"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="email"
            inputRef={register({
              required: "E-mail Address is required.",
            })}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />

          {/* 4) TextField */}
          <TextField
            placeholder="Enter Your Phone Number"
            label="Phone"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="phone"
            inputRef={register({
              required: "Phone Number is required.",
            })}
            error={Boolean(errors.phone)}
            helperText={errors.phone?.message}
          />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            {/* 5) Date Picker */}
            <Controller
              render={(props) => (
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  label="Date of Birth"
                  value={props.value}
                  onChange={props.onChange}
                  fullWidth
                  error={Boolean(errors.date_of_birth)}
                  helperText={errors.date_of_birth?.message}
                />
              )}
              name="date_of_birth"
              defaultValue={null}
              control={control}
              rules={{
                required: "Date of birth is required.",
              }}
            />

           
         
          </MuiPickersUtilsProvider>

          {/* Radio Buttons */}
          <FormControl
            className={classes.inputField}
            error={Boolean(errors.gender)}
          >
            <FormLabel>Choose Your Gender</FormLabel>
            <RadioGroup row name="gender">
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    inputRef={register({
                      required: "Choose your gender",
                    })}
                  />
                }
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    inputRef={register({
                      required: "Choose your gender",
                    })}
                  />
                }
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={
                  <Radio
                    inputRef={register({
                      required: "Choose your gender",
                    })}
                  />
                }
                label="Other"
              />
            </RadioGroup>
            <FormHelperText>{errors.gender?.message}</FormHelperText>
          </FormControl>

          {/* Select */}
          <FormControl
            fullWidth
            className={classes.inputField}
            error={Boolean(errors.course)}
          >
            <InputLabel id="demo-simple-select-label">
              Select Your Country
            </InputLabel>
            {/* <Controller
              as={
                <Select>
                  <MenuItem value="">Choose your course</MenuItem>
                  <MenuItem value="Web Development">Web Development</MenuItem>
                  <MenuItem value="App Development">App Development</MenuItem>
                  <MenuItem value="UI/UX">UI/UX</MenuItem>
                </Select>
              }
              name="course"
              control={control}
              defaultValue=""
            /> */}
            <Controller
              render={(props) => (
                <Select value={props.value} onChange={props.onChange}>
                  <MenuItem value="">Choose your COUNTRY</MenuItem>
                  <MenuItem value="INDIA">INDIA</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="UK">UK</MenuItem>
                </Select>
              )}
              name="course"
              control={control}
              defaultValue=""
              rules={{
                required: "please choose your course.",
              }}
            />
            <FormHelperText>{errors.course?.message}</FormHelperText>
          </FormControl>

          {/*  Switch */}
         

          {/* Checkbox */}
          <FormControl
            error={Boolean(errors.tnc)}
            style={{ display: "block", marginBottom: 15 }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  name="tnc"
                  inputRef={register({
                    required: "please aggree our terms and condtions",
                  })}
                />
              }
              label="I aggree all terms and conditions"
            />
            <FormHelperText>{errors.tnc?.message}</FormHelperText>
          </FormControl>

          <Button variant="contained" color="primary" onClick = {()=>setvisible(true)} type="submit">
            SUBMIT 
          </Button>
        </form>
        <div>
        <TableData visible={visible} data={onSubmit}/>
        </div>



       
      </div>
      
    </div>
  );
};

export default Home;
