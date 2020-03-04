import React from "react";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormHelperText from "@material-ui/core/FormHelperText";

const styles = theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  fcWidth: {
    width: "100%"
  },
  buttonProgress: {
    color: "#fff"
  }
});
class component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      email: "",
      password: "",
      loading: false,
      remember: false,
      errorEmail: false,
      errorPass: false,
      errorEmailMsg: "",
      errorPassMsg: "",
      errorAll: false,
      errorAllMsg: "Fill all fields"
    };
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
  }

  componentDidMount() {
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    if (email && password) {
      this.setState({
        email: email,
        password: password,
        remember: true
      });
    }
  }

  handleClickShowPassword() {
    this.setState({
      showPassword: !this.state.showPassword
    });
  }

  handleMouseDownPassword(e) {
    e.preventDefault();
  }

  handleChangeEmail(e) {
    function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
    let email = e.target.value;
    validateEmail(email)
      ? this.setState({
          email: email,
          errorEmail: false,
          errorEmailMsg: ""
        })
      : this.setState({
          errorEmail: true,
          errorEmailMsg: "Email is not valid"
        });
    email === ""
      ? this.setState({
          errorEmail: false,
          errorEmailMsg: ""
        })
      : this.setState({
          email: email
        });
    this.setState({
      email: email
    });
  }

  handleChangePassword(e) {
    e.target.value === ""
      ? this.setState({
          errorPass: false,
          errorPassMsg: ""
        })
      : this.setState({
          password: e.target.value
        });
    this.setState({
      password: e.target.value
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    let dEmail = "irfan@mail.com";
    let dPass = "irfan321";
    let email = this.state.email;
    let password = this.state.password;
    if (email !== dEmail) {
      this.setState({
        errorEmail: true,
        errorEmailMsg: "Email not found"
      });
    }
    if (password !== dPass) {
      this.setState({
        errorPass: true,
        errorPassMsg: "Password combination is incorrect"
      });
    }
    if (!email && !password) {
      this.setState({
        errorAll: true
      });
    } else {
      if (email === dEmail && password === dPass) {
        localStorage.setItem("Login", "true");
        if (this.state.remember === true) {
          this.handleRemember({ email, password });
          window.location.reload();
        } else {
          localStorage.removeItem("email");
          localStorage.removeItem("password");
          window.location.reload();
        }
      } else {
        localStorage.setItem("Login", "false");
      }
    }
  }

  handleChangeRemember(e) {
    if (e.target.value) {
      this.setState({
        remember: !this.state.remember
      });
    }
  }

  handleRemember({ email, password }) {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.form} onSubmit={e => this.handleOnSubmit(e)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl className={classes.fcWidth} variant="outlined">
              <InputLabel
                htmlFor="email"
                error={this.state.errorEmail ? true : false}
              >
                Email Address
              </InputLabel>
              <OutlinedInput
                required
                fullWidth
                autoFocus
                error={
                  this.state.errorEmail || this.state.errorAll ? true : false
                }
                type="email"
                id="email"
                onChange={e => this.handleChangeEmail(e)}
                value={this.state.email}
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              {this.state.errorEmailMsg !== "" ? (
                <FormHelperText error>
                  {this.state.errorEmailMsg}
                </FormHelperText>
              ) : (
                ""
              )}
              {this.state.errorAll === true ? (
                <FormHelperText error>{this.state.errorALlMsg}</FormHelperText>
              ) : (
                ""
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.fcWidth} variant="outlined">
              <InputLabel
                error={
                  this.state.errorPass || this.state.errorAll ? true : false
                }
                htmlFor="outlined-adornment-password"
              >
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={this.state.showPassword ? "text" : "password"}
                onChange={e => this.handleChangePassword(e)}
                value={this.state.password}
                error={
                  this.state.errorPass || this.state.errorAll ? true : false
                }
                label="Password"
                name="password"
                autoComplete="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={this.handleClickShowPassword}
                      onMouseDown={this.handleMouseDownPassword}
                      edge="end"
                    >
                      {this.state.showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
              {this.state.errorPassMsg !== "" ? (
                <FormHelperText error>{this.state.errorPassMsg}</FormHelperText>
              ) : (
                ""
              )}
              {this.state.errorAll === true ? (
                <FormHelperText error>{this.state.errorALlMsg}</FormHelperText>
              ) : (
                ""
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={e => this.handleChangeRemember(e)}
                  checked={this.state.remember}
                  value={this.state.remember}
                  color="primary"
                />
              }
              label="Remember me"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {this.state.loading ? (
            <CircularProgress size={24} className={classes.buttonProgress} />
          ) : (
            this.props.type
          )}
        </Button>
      </form>
    );
  }
}

export default withStyles(styles, { withTheme: true })(component);
