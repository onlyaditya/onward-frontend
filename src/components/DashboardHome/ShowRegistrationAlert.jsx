import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
} from "@chakra-ui/react";

function ShowRegistrationAlert({ showAlert, onClose }) {
  return (
    <>
      {showAlert && (
        <Box
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            zIndex: 100000000,
          }}
        >
          <Alert
            opacity={"1"}
            background={"transparent"}
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <AlertIcon boxSize="70px" mt={"0"} color={"green"} />
            <AlertTitle mt={4} mb={1} fontSize="20px" color={"white"}>
              User Registration has been Successful
            </AlertTitle>
            <AlertDescription maxWidth="m" color={"white"} fontSize={"15px"}>
              Thanks for registration. We will send you a zoom link to your
              email.
            </AlertDescription>
          </Alert>
        </Box>
      )}
    </>
  );
}

export default ShowRegistrationAlert;
