import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";

function Modal({ fields, onSubmit, modalID }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  console.log("sss");

  return (
    <div
      className="modal fade"
      id={modalID}
      tabIndex="-1"
      aria-labelledby={`${modalID}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${modalID}Label`}>
              Dynamic Form Modal
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="modal-body">
              {Object.entries(fields).map(([name, type]) => (
                <div className="mb-3 row" key={name}>
                  <label htmlFor={name} className="form-label col-2 text-start">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </label>
                  <div className="col-10">
                    <input
                      id={name}
                      type={type}
                      {...register(name, { required: true })}
                      className="form-control"
                    />
                    {errors[name] && (
                      <div className="text-danger">This field is required</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
