import React, { useState, useContext } from "react";
import "./LoginModal.scss";
import Modal from "../Modal/Modal";
import { AuthContext } from "../../context/AuthContext";
import SignupContainer from "./SignupContainer";

export default function SignupModal({ showModal, onClose }) {
  return (
    <Modal showModal={showModal} onClose={onClose}>
      <SignupContainer />
    </Modal>
  );
}
