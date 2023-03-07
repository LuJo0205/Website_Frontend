import React, { useState } from "react";
import {Avatar, Box, Button, Container, Grid, IconButton, Link, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import md5 from "md5";
import "./styles/SignUp.scss";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

function SignUp() {
    const [userName, setUserName]: any = useState("");
    const [firstName, setFirstName]: any = useState("");
    const [lastName, setLastName]: any = useState("");
    const [email, setEmail]: any = useState("");
    const [password, setPassword]: any = useState("");
    const [confirmPassword, setConfirmPassword]: any = useState("");
    const [street, setStreet]: any = useState("");
    const [number, setNumber]: any = useState("");
    const [plz, setPlz]: any = useState("");
    const [city, setCity]: any = useState("");
    const [isLoading, setIsLoading]: any = useState(false);
    const [error, setError]: any = useState({ isError: false, msg: "No Error" });
    const [agree, setAgree]: any = useState(false);
  
    const {
      setValue,
      handleSubmit,
      formState: { errors },
      control,
    } = useForm();
  
    const apiUrlAll = `http://localhost:8080/users`;
  
    const redirectToHome = () => {
      navigate("/");
    };
  
    const redirectToLogin = () => {
      navigate("/SignIn2");
    };
  
    const handleSubmitClick = async () => {
      let redirectHome: boolean = false;
      setIsLoading(true);
  
      if (password === confirmPassword) {
        const requestOptions = {
          method: "Post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: userName,
            firstName: firstName,
            name: lastName,
            email: email,
            passwordHash: md5(password),
            passwordConfirmHash: md5(confirmPassword),
            street: street,
            number: number,
            plz: parseInt(plz),
            city: city,
          }),
        };
        const response = await fetch(apiUrlAll, requestOptions);
        if (!response.ok) {
          setError({ isError: true, msg: `Fehler: ${response.statusText}` });
          setAgree(false);
        } else if (response.ok) {
          const data: any = await response.json();
          setError({ isError: false, msg: "No error" });
          redirectHome = true;
        }
        setIsLoading(false);
        if (redirectHome) {
          redirectToHome();
        }
      } else {
        setError({
          isError: true,
          msg: "Fehler: Das eingegebene Passwort stimmt nicht mit dem zur Überprüfung überein!",
        });
      }
      setIsLoading(false);
    };
    if (isLoading)
      return (<p>Loading</p>
      );
  
    function checkboxHandler() {
      setAgree(!agree);
    }
  
    function redirectToTerms() {
      navigate("/AGB");
    }
    let navigate = useNavigate();

    function goBack() {
        navigate(-1)
    }

    return (
        
        <div>
            <Header /> 
            
            <NavBar />
            <Container sx={{mt: 2}}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "#1976d2" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" className="text">
                        Registrierung
                    </Typography>
                    <form noValidate> 
                    <Box component="form" noValidate sx={{ mt: 3 }}> 
                        <Grid container spacing={2}> 
                        <Grid item xs={12}>
                            <Controller
                            name="userName"
                            control={control}
                            rules={{ required: true, minLength: 3 }}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                required
                                fullWidth
                                label="Benutzername"
                                autoFocus
                                onChange={(e: any) => {
                                    setUserName(e.target.value);
                                    setValue("userName", e.target.value);
                                    return;
                                }}
                                value={userName}
                                
                                InputLabelProps={{
                                  style: {
                                    color: "white"
                                  }
                                }}
                                />
                            )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                            name="firstName"
                            control={control}
                            rules={{ required: true, minLength: 2 }}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                autoComplete="given-name"
                                required
                                fullWidth
                                label="Vorname"
                                autoFocus
                                onChange={(e: any) => {
                                    setFirstName(e.target.value);
                                    setValue("firstName", e.target.value);
                                    return;
                                }}
                                value={firstName}
                               
                                InputLabelProps={{
                                  style: {
                                    color: "white"
                                  }
                                }}
                                />
                            )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                            name="lastName"
                            control={control}
                            rules={{ required: true, minLength: 2 }}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                required
                                fullWidth
                                label="Nachname"
                                autoComplete="family-name"
                                onChange={(e: any) => {
                                    setLastName(e.target.value);
                                    setValue("lastName", e.target.value);
                                    return;
                                }}
                                value={lastName}
                                
                                InputLabelProps={{
                                  style: {
                                    color: "white"
                                  }
                                }}
                                />
                            )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: true,
                                minLength: 2,
                                // => RFC 2822 Email
                                pattern:
                                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i, // eslint-disable-line no-useless-escape
                            }}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                required
                                fullWidth
                                label="E-Mail-Adresse"
                                autoComplete="email"
                                onChange={(e: any) => {
                                    setEmail(e.target.value);
                                    setValue("email", e.target.value);
                                    return;
                                }}
                                value={email}
                                
                                InputLabelProps={{
                                  style: {
                                    color: "white"
                                  }
                                }}
                                />
                            )}
                            />

                            <small  style={{color: "#65615a"}}>Wir werden Deine E-Mail niemals mit einem Dritten teilen!</small>
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: true,
                                minLength: 7,
                                maxLength: 32,
                                pattern:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!@#\$%\^&\*])(?=.{7,})?/i, //eslint-disable-line no-useless-escape
                            }}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                required
                                fullWidth
                                label="Passwort"
                                type="password"
                                autoComplete="new-password"
                                onChange={(e: any) => {
                                    setPassword(e.target.value);
                                    setValue("password", e.target.value);
                                    return;
                                }}
                                value={password}
                                
                                InputLabelProps={{
                                  style: {
                                    color: "white"
                                  }
                                }}
                                />
                            )}
                            />

                            {errors.password && (
                            <small>
                                Bitte geben Sie eine gültiges Password ein! Anforderungen:
                                mind. 7 Zeichen, ein Großbuchstabe, ein Kleinbuchstabe, eine
                                Zahl und ein Sonderzeichen.
                            </small>
                            )}
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                            name="confirmPassword"
                            control={control}
                            rules={{
                                required: true,
                                minLength: 7,
                                maxLength: 32,
                                pattern:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!@#\$%\^&\*])(?=.{7,})?/i, //eslint-disable-line no-useless-escape
                            }}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                required
                                fullWidth
                                label="Bestätige Password"
                                type="password"
                                value={confirmPassword}
                                onChange={(e: any) => {
                                    setConfirmPassword(e.target.value);
                                    setValue("confirmPassword", e.target.value);
                                    return;
                                }}
                                
                                InputLabelProps={{
                                  style: {
                                    color: "white"
                                  }
                                }}
                                />
                            )}
                            />
                        </Grid>
                            <Grid item xs={8}>
                            <Controller
                                name="street"
                                control={control}
                                rules={{ required: true, minLength: 3 }}
                                render={({ field }) => (
                                <TextField
                                    {...field}
                                    required
                                    fullWidth
                                    label="Straße"
                                    value={street}
                                    onChange={(e: any) => {
                                    setStreet(e.target.value);
                                    setValue("street", e.target.value);
                                    return;
                                    }}
                                    
                                    InputLabelProps={{
                                      style: {
                                        color: "white"
                                      }
                                    }}
                                />
                                )}
                            />
                            </Grid>
                            <Grid item xs={4}>
                            <Controller
                                name="number"
                                control={control}
                                rules={{ required: true, minLength: 1 }}
                                render={({ field }) => (
                                <TextField
                                    {...field}
                                    required
                                    fullWidth
                                    label="Hausnummer"
                                    value={number}
                                    onChange={(e: any) => {
                                    setNumber(e.target.value);
                                    setValue("number", e.target.value);
                                    return;
                                    }}
                                    
                                    InputLabelProps={{
                                      style: {
                                        color: "white"
                                      }
                                    }}
                                />
                                )}
                            />
                            </Grid>
                        <Grid item xs={4}>
                            <Controller
                            name="PLZ"
                            control={control}
                            rules={{
                                required: true,
                                minLength: 5,
                                maxLength: 5,
                            }}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                required
                                fullWidth
                                label="PLZ"
                                value={plz}
                                onChange={(e: any) => {
                                    setPlz(e.target.value);
                                    setValue("PLZ", e.target.value);
                                    return;
                                }}
                                
                                InputLabelProps={{
                                  style: {
                                    color: "white"
                                  }
                                }}
                                />
                            )}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <Controller
                            name="city"
                            control={control}
                            rules={{ required: true, minLength: 3 }}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                required
                                fullWidth
                                label="Ort"
                                value={city}
                                onChange={(e: any) => {
                                    setCity(e.target.value);
                                    setValue("city", e.target.value);
                                    return;
                                }}
                                
                                InputLabelProps={{
                                  style: {
                                    color: "white"
                                  }
                                }}
                                />
                            )}
                            />{" "}
                            {error.isError && (
                            <small style={{ color: "red" }}>
                                Ein Fehler ist aufgetreten. Bitte überprüfen Sie ihre
                                Eingaben. Bei technischen Problemen wenden Sie sich bitte an
                                den Admin dieser Website. {error.msg}
                            </small>
                            )}
                        </Grid>

                        <Grid item xs={12}>
                            <input
                            type="checkbox"
                            value="allowExtraEmails"
                            color="primary"
                            />
                            <label style={{color: "#65615a"}}>
                            {" "}
                                Ich möchte Inspiration, Marketingaktionen und Updates per E-Mail erhalten.
                            </label>
                        </Grid>

                        <Grid item xs={12}>
                            <input type="checkbox" id="agree" onChange={checkboxHandler} />
                            <label htmlFor="agree" style={{color: "#65615a"}}> Ich stimme den </label>
                            <Link sx={{color: "#65615a"}} onClick={redirectToTerms}>Allgemeinen Geschäftsbedingungen (AGBs)</Link>
                            <label style={{color: "#65615a"}}> zu.</label>
                        </Grid>
                        </Grid>
                        <Button
                        id="signUp-button"
                        disabled={!agree}
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={handleSubmit(handleSubmitClick)}
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        Registrieren
                        </Button>
                        <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link className="loginText" sx={{color: "#65615a"}} onClick={() => redirectToLogin()}>
                                Du hast bereits einen Account? Logge Dich hier ein!
                            </Link>
                        </Grid>
                        </Grid>
                    </Box>
                    </form>
                </Box>
            </Container>
        </div>
    );
}

export default SignUp;