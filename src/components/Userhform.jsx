import { useState } from "react";

const Userhform = () => {
  const [firstname, SetfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasBeenSumited, setHasBeenSubmited] = useState(false);
  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    setHasBeenSubmited(true);
  };
  const firstNameHandler = (e) => {
    SetfirstName(e.target.value);
    if (e.target.value.length < 2) {
      setNameError("must be at least 2 character")
    } else {
      setNameError(null);
    }
  };

  const lastNameHandler = (e) => {
    setlastName(e.target.value);
    if (e.target.value.length < 2) {
      setLastNameError("must be at least 2 character")
    } else {
      setLastNameError(null);
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError("must be at least 8 character");
    }
    else {
      setPasswordError(null);
    }
  };

  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value)
    if (e.target.value.length < 8 || e.target.value === 0) {
      setPasswordError("must match");
    }
    else {
      setPasswordError(null);
    }
  }

  return (
    <div className="card">
      <h5 className="card-header">Create individual</h5>
      {hasBeenSumited
        ? "thank you for submitting the form"
        : "Please enter your information"}
      <div className="card-body">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              name="firstname"
              id="name"
              className="form-control"
              value={firstname}
              onChange={firstNameHandler}
            />
            {nameError && (
              <span className="form-text text-danger">
                {nameError}
              </span>)
            }
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Last Name:
            </label>
            <input type="text" name="lastname" id="" className="form-control"
              value={lastname} onChange={lastNameHandler} />
          </div>
          {lastNameError && (
            <span className="form-text text-danger">
              {lastNameError}
            </span>)
          }
          <div className="mb-3">
            <div className="label form-label">Password</div>
            <input type="text" name="password" id="" className="form-control"
              value={password} onChange={passwordHandler} />
          </div>
          {passwordError && (
            <span className="form-text text-danger">
              {passwordError}
            </span>)
          }
          <div className="mb-3">
            <div className="label form-label">Confirm Password</div>
            <input type="text" name="confirmpassword" id="" className="form-control" value={confirmPassword} onChange={confirmPasswordHandler} />
          </div>
          <div className="d-flex">
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Userhform;
