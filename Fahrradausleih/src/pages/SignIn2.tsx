import React, {useState} from "react";

import Grid from "@mui/material/Grid";
import {
    Avatar,
    Box,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel, IconButton,
    TextField,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { createTheme } from "@mui/material/styles";
import LockIcon from "@mui/icons-material/Lock";
import {useNavigate} from "react-router-dom";
import {useForm, Controller} from "react-hook-form";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import md5 from "md5";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import { setCookie } from "../CookieHandler";


export default function SignIn() {

    const [email, setEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const apiUlr = `http://localhost:8080/users/login`;
    const [error, setError] = useState({isError: false, msg: "No Error"});
    const {
        setValue,
        handleSubmit,
        formState: {errors},
        control,
    } = useForm();

    let navigate = useNavigate();

    const redirectToHome = () => {
        navigate('/');
    };

    const handleSubmitClick = async () => {
        let redirectHome: boolean = false;
        let passwordToSend: string;
      //  passwordToSend = passwordMd5(userPassword);
        const requestOptions = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: email,
                password: md5(userPassword),
            }),
        };
        const response = await fetch(apiUlr, requestOptions);
        if (!response.ok) {
            setError({isError: true, msg: `Benutzer oder Passwort falsch!`});
            
        } else if (response.ok) {
            const data: any = await response.json(); 
            setCookie('id', data.id, 100 );
            setCookie('name', data.name, 100 );
            setCookie('firstname', data.firstName, 100 );
            setCookie('email', data.email, 100 );
            setCookie('city', data.city, 100 );
            setCookie('street', data.street, 100 );
            setCookie('number', data.number, 100 );
            setError({isError: false, msg: "No error"});
            redirectToHome();
        }

    };



    return (
        <div >
            <Header />
            <NavBar />
            <Container sx={{mt: 2}}              
            >
                <Box
                    sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" className="text">
                        Einloggen
                    </Typography>
                    <form className="{classes.form}" noValidate>
                        <Controller
                            name="email"
                            control={control}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Email"
                                    autoFocus
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
                        <Controller
                            name="userPassword"
                            control={control}

                            render={({field}) => (
                                <TextField
                                    {...field}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Passwort"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={(e: any) => {
                                        setUserPassword(e.target.value);
                                        setValue("userPassword", e.target.value);
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

                        <Grid item xs={12}>
                            <input
                            type="checkbox"
                            value="allowExtraEmails"
                            color="primary"
                            />
                            <label style={{color: "#65615a"}}>
                            {" "}
                                Angemeldet bleiben.
                            </label>
                        </Grid>
                        <br/>
                        {error.isError && (
                            <small style={{color: "red"}}>
                                {error.msg}
                            </small>
                        )}
                        <br/>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="{classes.submit}"
                            onClick={handleSubmit(handleSubmitClick)}
                        >
                            Anmelden
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="/pw" variant="body2" style={{color: "#65615a"}}>
                                    Passwort vergessen?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/SignUp2" variant="body2" style={{color: "#65615a"}}>
                                    {"Neuer Benutzer?"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
        </div>
    );
}


