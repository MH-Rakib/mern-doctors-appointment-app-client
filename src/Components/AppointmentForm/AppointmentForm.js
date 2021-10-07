import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import "./AppointmentForm.css";
import { UserContext } from "./../../App";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 0 25px 10px #ddd",
    border: "none",
    borderRadius: "5px",
  },
};
Modal.setAppElement("#root");

const AppointmentForm = ({ modalIsOpen, closeModal, value, date }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    closeModal();
  };

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3 style={{ textAlign: "center", color: "var(--cyan)" }}>
          {value.title}
        </h3>
        <p
          style={{
            textAlign: "center",
            color: "var(--blue)",
            fontWeight: "500",
          }}
        >
          On {date.toDateString()}
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="appointmentForm">
          <div className="form-group inputField">
            <input
              {...register("name", { required: true })}
              placeholder="Your name"
              type="text"
            />

            {errors.name?.type === "required" && (
              <p style={{ color: "red" }}> Ei value laagbo </p>
            )}
          </div>

          <div className="form-group inputField">
            <input
              {...register("email", { required: true })}
              placeholder="Your email"
              type="text"
            />
            {errors.email?.type === "required" && (
              <p style={{ color: "red" }}> Ei value laagbo </p>
            )}
          </div>

          <div className="form-group inputField">
            <input
              {...register("phone", { required: true })}
              placeholder="Your phone"
              type="text"
            />
            {errors.phone?.type === "required" && (
              <p style={{ color: "red" }}> Ei value laagbo </p>
            )}
          </div>

          <div className="row">
            <div className="form-group inputField col-lg-6">
              <input
                {...register("age", { required: true })}
                placeholder="Your age"
                type="text"
              />
              {errors.age?.type === "required" && (
                <p style={{ color: "red" }}> Ei value laagbo </p>
              )}
            </div>

            <div className="form-group inputField col-lg-6">
              <select
                {...register("gender", { required: true })}
                name="gender"
                id="gender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>

              {/* <input
                {...register("phone", { required: true })}
                placeholder="Your phone"
                type="text"
              /> */}
              {errors.gender?.type === "required" && (
                <p style={{ color: "red" }}> Ei value laagbo </p>
              )}
            </div>
          </div>

          <input type="submit" className="submitAppointmentForm" />
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
