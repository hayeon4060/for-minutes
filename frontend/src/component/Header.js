import React from "react";
import {
  Box,
  Text,
  Link,
  
} from "gestalt";
import "gestalt/dist/gestalt.css";
import "./Header.css";
import Navigation from "./Navigation";
import logo from "../images/fmlogo.png";
import { useHistory } from "react-router";
const Header = () => {
  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };
  return (
    <Box
      paddingY={2}
      paddingX={4}
      mdPaddingX={6}
      color="white"
      display="flex"
      direction="row"
      alignItems="center"
      role="banner"
    >
      <Box marginStart={-2} marginEnd={-2}>
        <Text color="gray" >
          <Link to="/">
            <Box padding={2}>
              <Box
                display="flex"
                direction="row"
                alignItems="center"
                marginStart={-1}
                marginEnd={-1}
              >
                <Box paddingX={2}>
                  <img src={logo} className="header__logo" onClick={goHome} />
                </Box>
                <Box paddingX={1}>For Minutes</Box>
              </Box>
            </Box>
          </Link>
        </Text>
      </Box>

      <Box flex="grow" />
      <Navigation />
    </Box>
  );
};

export default Header;
