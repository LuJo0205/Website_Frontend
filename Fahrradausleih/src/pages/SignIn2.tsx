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


export default function SignIn() {

    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const apiUlr = `http://localhost:8080/login`;
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({isError: false, msg: "No Error"});
    const {
        setValue,
        handleSubmit,
        formState: {errors},
        control,
    } = useForm();

    let navigate = useNavigate();

    const redirectToHome = () => {
        navigate("/");
    };

    const handleSubmitClick = async () => {
        let redirectHome: boolean = false;
        setIsLoading(true);
        let passwordToSend: string;
        //passwordToSend = passwordMd5(userPassword);
        const requestOptions = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: userName,
                passwordHash: md5(userPassword),
            }),
        };
        const response = await fetch(apiUlr, requestOptions);
        if (!response.ok) {
            setError({isError: true, msg: `Fehler: ${response.statusText}`});
        } else if (response.ok) {
            const data: any = await response.json();
            setError({isError: false, msg: "No error"});
            redirectHome = true;
        }
        setIsLoading(false);
        if (redirectHome) {
            redirectToHome();
        }
    };

    if (isLoading)
        return (
            <p>Loading</p>
        );

    function goBack() {
        navigate(-1);
    }

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
                            name="userName"
                            control={control}
                            rules={{required: true, minLength: 3}}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    variant="outlined"
                                    margin="normal"
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
                        <Controller
                            name="userPassword"
                            control={control}
                            rules={{
                                required: true,
                                minLength: 7,
                                maxLength: 32,
                            }}
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
                                Angemeldet bleibe.
                            </label>
                        </Grid>
                        <br/>
                        {error.isError && (
                            <small style={{color: "red"}}>
                                Ein Fehler ist aufgetreten. Bitte überprüfen Sie ihren
                                eingegebenen Benutzernamen und das Passwort. Bei technischen
                                Problemen wenden Sie sich bitte an den Admin dieser Website.
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