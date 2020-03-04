import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
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
    marginTop: theme.spacing(3)
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
      showPasswordConfirm: false,
      password: "",
      nama: "",
      email: "",
      password2: "",
      agree: false,
      loading: false,
      errorAll: false,
      errorAllMsg: "Fill all field",
      errorName: false,
      errorNameMsg: "",
      errorEmail: false,
      errorEmailMsg: "",
      errorPass: false,
      errorPassMsg: "",
      errorCPass: false,
      errorCPassMsg: ""
    };
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleClickShowPasswordConfirm = this.handleClickShowPasswordConfirm.bind(
      this
    );
  }

  handleClickShowPassword() {
    this.setState({
      showPassword: !this.state.showPassword
    });
  }

  handleClickShowPasswordConfirm() {
    this.setState({
      showPasswordConfirm: !this.state.showPasswordConfirm
    });
  }

  handleMouseDownPassword(e) {
    e.preventDefault();
  }

  handleChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleChangePasswordConfirm(e) {
    e.target.value !== this.state.password
      ? this.setState({
          errorCPass: true,
          errorCPassMsg: "Password is not match"
        })
      : this.setState({
          password2: e.target.value,
          errorCPass: false,
          errorCPassMsg: ""
        });
    e.target.value === ""
      ? this.setState({
          errorCPassMsg: "",
          errorCPass: false
        })
      : this.setState({
          password2: e.target.value
        });
    this.setState({
      password2: e.target.value
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="fname"
              name="name"
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Your Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.fcWidth} variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type={this.state.showPassword ? "text" : "password"}
                onChange={e => this.handleChangePassword(e)}
                value={this.state.password}
                label="Password"
                name="password"
                required
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
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.fcWidth} variant="outlined">
              <InputLabel
                error={this.state.errorCPass ? true : false}
                htmlFor="outlined-adornment-password"
              >
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={this.state.showPasswordConfirm ? "text" : "password"}
                onChange={e => this.handleChangePasswordConfirm(e)}
                name="confirmPass"
                label="Confirm Password"
                error={this.state.errorCPass ? true : false}
                required
                value={this.state.password2}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={this.handleClickShowPasswordConfirm}
                      onMouseDown={this.handleMouseDownPassword}
                      edge="end"
                    >
                      {this.state.showPasswordConfirm ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
              {this.state.errorCPassMsg !== "" ? (
                <FormHelperText error>
                  {this.state.errorCPassMsg}
                </FormHelperText>
              ) : (
                ""
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox required value="allowExtraEmails" color="primary" />
              }
              label={
                <div>
                  <span>I agree to the </span>
                  <Link
                    href="https://www.termsfeed.com/terms-conditions/c4152b0db055858686b2f4e5700f817a"
                    target="_blank"
                    variant="body2"
                  >
                    Terms and Condition
                  </Link>
                </div>
              }
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
            <CircularProgress className={classes.buttonProgress} />
          ) : (
            "Register"
          )}
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link to="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default withStyles(styles, { withTheme: true })(component);
