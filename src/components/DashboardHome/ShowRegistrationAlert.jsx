import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

function ShowRegistrationAlert({ showAlert, onClose }) {
  return (
    <>
      {showAlert && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "90%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
            <AlertTitle mt={4} mb={1} fontSize="lg">
              User Registration has been Successful
            </AlertTitle>
            <AlertDescription maxWidth="m" color={"green"}>
              Thanks for registration. We will send you a zoom link to your email.
            </AlertDescription>
          </Alert>
        </div>
      )}
    </>
  );
}

export default ShowRegistrationAlert;
