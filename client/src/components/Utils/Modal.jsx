import React, { useState } from "react";
import { useForm, get } from "react-hook-form";

function Modal({ fields, onSubmit, modalID }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    const { name, date, ...players } = data;
    console.log(players['players']);
    const formattedPlayers = [];
    for (let i = 1; i <= playerCount; i++) {
      formattedPlayers.push({
        playerName: players['players'][`playerName${i}`],
        playerBootAmt: players['players'][`playerBootAmt${i}`],
        playerFinalAmt: players['players'][`playerFinalAmt${i}`],
      });
    }

    const finalData = {
      name,
      date,
      players: formattedPlayers,
    };
    onSubmit(finalData);
  };

  const [playerCount, setPlayerCount] = useState(0);

  const addPlayer = () => {
    setPlayerCount((prevCount) => prevCount + 1);
  };

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
          <div className="modal-header justify-content-between">
            <h5 className="modal-title fw-bold" id={`${modalID}Label`}>
              Dynamic Form Modal
            </h5>
            <div className="d-flex align-items-center justify-content-center">
              <button
                className="btn btn-link d-flex justify-content-center align-items-center gap-1"
                onClick={addPlayer}
              >
                <i className="bi bi-plus-square"></i>Add Player
              </button>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          </div>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="modal-body">
              <div className="mb-3 row">
                {Object.entries(fields).map(([name, type]) => (
                  <div className="col-6" key={name}>
                    <input
                      placeholder={`Enter Game ${name}`}
                      id={name}
                      type={type}
                      {...register(name, { required: true })}
                      className="form-control"
                    />
                    {errors[name] && (
                      <div className="text-danger">This field is required</div>
                    )}
                  </div>
                ))}
              </div>

              {Array.from({ length: playerCount }).map((_, idx) => (
                <div key={idx + 1} className="row mb-3">
                  {/* <div className="mb-3 row"> */}
                  <div className="col-4">
                    <input
                      placeholder={`P${idx + 1} Name`}
                      id={`playerName${idx + 1}`}
                      type="text"
                      {...register(`players.playerName${idx + 1}`, {
                        required: true,
                      })}
                      className="form-control"
                    />
                    {get(errors, `players.playerName${idx + 1}`) && (
                      <div className="text-danger">Required</div>
                    )}
                  </div>
                  {/* </div> */}

                  {/* <div className="mb-3 row"> */}
                  <div className="col-4">
                    <input
                      placeholder={`P${idx + 1} Boot`}
                      id={`playerBootAmt${idx + 1}`}
                      type="number"
                      {...register(`players.playerBootAmt${idx + 1}`, {
                        required: true,
                      })}
                      className="form-control"
                    />
                    {get(errors, `players.playerBootAmt${idx + 1}`) && (
                      <div className="text-danger">Required</div>
                    )}
                  </div>
                  {/* </div> */}

                  {/* <div className="mb-3 row"> */}
                  <div className="col-4">
                    <input
                      placeholder={`P${idx + 1} Final Amt`}
                      id={`playerFinalAmt${idx + 1}`}
                      type="number"
                      {...register(`players.playerFinalAmt${idx + 1}`, {
                        required: true,
                      })}
                      className="form-control"
                    />
                    {get(errors, `players.playerFinalAmt${idx + 1}`) && (
                      <div className="text-danger">Required</div>
                    )}
                  </div>
                </div>
                // </div>
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
