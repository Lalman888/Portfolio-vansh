import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Vansh. I am a Full-Stack Developer and a <b>Programer and Blogger</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/VRRANSH" target="black">
          <BsGithub />
        </a>
        {/* <a href="https://youtube.com/6packprogrammer/" target="black"> */}
          <BsYoutube />
        {/* </a> */}
        <a href="https://www.instagram.com/va.nsh753/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/vansh-sharma-b2360a218/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;