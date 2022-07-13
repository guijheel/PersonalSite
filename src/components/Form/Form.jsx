import React, { useRef, useState } from "react";
import "./Myfont.scss";

import styled from "styled-components";
import useWindows from "../../functions/useWindows";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AlertTitle, Button, Typography } from "@mui/material";

import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import ReCAPTCHA from "react-google-recaptcha";
import isEmail from "validator/lib/isEmail";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Name = styled.div`
  display: flex;
  width: 80%;
  height: 20%;
`;
const InputName = styled.input`
  display: flex;
  width: 80%;
  text-align: center;
`;
const LabelName = styled.label`
  display: flex;
`;

const Test = styled.div`
  border: 1px solid black;
`;

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Form = () => {
  
  const [fullname, setFullName] = useState();
  const [fullnameerror, setFullNameError] = useState();
  const [email, setEmail] = useState();
  const [emailerror, setEmailError] = useState();
  const [subject, setSubject] = useState();
  const [subjecterror, setSubjectError] = useState();
  const [message, setMessage] = useState();
  const [messageerror, setMessageError] = useState();
  const [captcha, setCaptcha] = useState(false);
  const [captchaerror, setCaptchaError] = useState();

  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  
  
  const form = useRef();


  function onChange(value) {
    console.log("Captcha value:", value);
    if (value) {
      setCaptcha(true);
      setCaptchaError();
      return;
    } else setCaptcha(false);
    setCaptchaError("Captcha is required ! ");
    return;
  }

  const OnFullName = (event) => {
    console.log(event.target.value);
    setFullName(event.target.value);
    if (event.target.value) {
      setFullNameError("");
    } else {
      setFullNameError("Full name is required !");
    }
  };

  const OnEmail = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
    if (!isEmail(event.target.value)) {
      setEmailError(" Invalid Email ! ");
    } else {
      setEmailError();
    }
  };

  const OnSubject = (event) => {
    console.log(event.target.value);
    setSubject(event.target.value);
    if (event.target.value) {
      setSubjectError("");
    } else {
      setSubjectError("Subject is required !");
    }
  };

  const OnMessage = (event) => {
    console.log(event.target.value);
    setMessage(event.target.value);

    if (event.target.value) {
      setMessageError("");
    } else {
      setMessageError("Message is required !");
    }
  };
  const ResetCaptcha = () => {
    window.grecaptcha.reset();
    setCaptcha(false);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (
      captcha === false &&
      fullnameerror !== "" &&
      emailerror !== "" &&
      subjecterror !== "" &&
      messageerror !== ""
    ) {
      console.log("error");
      if (captcha === false) {
        console.log("captach error");
        setCaptchaError("Captcha is required ! ");
      }
      if (captcha === true) {
        console.log("captach error");
        setCaptchaError();
      }
      if (!fullnameerror) {
        setFullNameError("Full name is required !");
      }
      if (!emailerror) {
        setEmailError("Email is required !");
      }
      if (!subjecterror) {
        setSubjectError("Subject is required !");
      }
      if (!messageerror) {
        setMessageError("Message is required !");
      }
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE,
          process.env.REACT_APP_TEMPLATE,
          form.current,
          process.env.REACT_APP_ID
        )
        .then(
          (result) => {
            console.log(result.text);
            setOpen(true);
            setEmail("");
            setFullName("");
            setSubject("");
            setMessage("");
            window.grecaptcha.reset();
            setCaptcha(false);
          },
          (error) => {
            console.log(error.text);
            setOpenError(true);
          }
        );
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  console.log(inView)
  return (

    <motion.div
   className="divForm"
    ref={ref}
    variants={boxVariant}
    initial="hidden"
    animate={control}>

   
      <form
      ref={form}
      onSubmit={sendEmail}
      className="formContact slide-in-left"
      id="form-contact"
    >
      <br />
      <Typography fontWeight={400} fontSize="1.5rem" className="pointer">
        Contact us
      </Typography>
      <br />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Fullname"
        variant="outlined"
        margin="normal"
        name="user_name"
        value={fullname}
        onChange={OnFullName}
        error={fullnameerror}
        helperText={fullnameerror}
      />

      <TextField
        fullWidth
        id="outlined-basic"
        label="Email"
        variant="outlined"
        margin="normal"
        name="user_email"
        value={email}
        onChange={OnEmail}
        error={emailerror}
        helperText={emailerror}
      />

      <TextField
        fullWidth
        id="outlined-basic"
        label="Subject"
        variant="outlined"
        margin="normal"
        name="user_subject"
        value={subject}
        onChange={OnSubject}
        error={subjecterror}
        helperText={subjecterror}
      />
      <TextField
        className="textfield"
        fullWidth
        multiline
        label="Your message"
        rows="7"
        margin="normal"
        color="primary"
        name="message"
        id="form-message"
        value={message}
        onChange={OnMessage}
        error={messageerror}
        helperText={messageerror}
      />

      <ReCAPTCHA
        sitekey="6Lde14ogAAAAABynRN1N2qekpdAZDG6cHPPWBxvx"
        onChange={onChange}
        theme="dark"
        className="captchaGoogle pointer"
        size="normal"
        badge="inline"
        onExpired={ResetCaptcha}
      />
      {console.log(captchaerror)}
      {captchaerror !== "" && (
        <Typography fontWeight={400} fontSize="0.75rem" color="#d32f2f">
          {" "}
          {captchaerror}
        </Typography>
      )}
      <br />
      <Button type="submit" value="send" onClick={sendEmail} variant="outlined">
        {" "}
        SEND
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        className="topAlert"
      >
        <Alert
          variant="outlined"
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          <AlertTitle>Success</AlertTitle>
          <strong>Message Send !</strong>
        </Alert>
      </Snackbar>
      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={handleClose}
        className="topAlert"
      >
        <Alert
          variant="outlined"
          onClose={handleClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          <AlertTitle>Error</AlertTitle>
          <strong>Error Message !</strong>
        </Alert>
      </Snackbar>
    </form>

    </motion.div>
     
      
    
  );
};

export default Form;
