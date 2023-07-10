import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return { ...preVal, [name]: value };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome ${data.fullname}`);
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container container_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="form-group mb-3">
                <label for="exampleInputEmail1">Full Name</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter Your Name"
                />{" "}
                <label for="exampleInputEmail1">Phone</label>
                <input
                  type="number"
                  className="form-control mb-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Enter Your Number"
                />{" "}
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group mb-3">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
