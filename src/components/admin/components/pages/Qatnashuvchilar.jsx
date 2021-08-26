import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Radio from "@material-ui/core/Radio";
import { FormLabel } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

//import img
import idea from "../icons/idea.svg";
import warning from "../icons/warning.svg";
import close from "../icons/close.svg";
import filter from "../icons/Filter.svg";
import search from "../icons/Search.svg";
import yes from "../icons/yes.svg";
import no from "../icons/no.svg";
import userpic from "../icons/userpic.svg";

//import css
import "react-datepicker/dist/react-datepicker.css";
import "../css/style.css";
import axios from "axios";

const Qatnashuvchilar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [userList, setUserList] = useState([]);
  const [status, setStatus] = useState(false);
  const [filters, setfilters] = useState(false);
  const [submitID, setSubmitID] = useState(null);
  const [cancelID, setCancelID] = useState(null);
  const [cause, setCause] = useState(null);
  const [causeShow, setCauseShow] = useState(false);
  const [f_name, setFullName] = useState("");

  const [key, setkey] = React.useState("");

  function handleChange(event) {
    setkey(event.target.value);
  }

  const [openy, setOpeny] = React.useState(false);
  const handleOpeny = (id, f_name, l_name) => {
    setOpeny(true);
    setSubmitID(id);
    setFullName(f_name + " " + l_name);
  };
  const handleClosey = () => {
    setOpeny(false);
  };
  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = (id) => {
    setOpenx(true);
    setCancelID(id);
  };
  const handleClosex = () => {
    setOpenx(false);
  };
  useEffect(() => {
    GetUsers();
  }, []);
  const Search = (e) => {
    e.preventDefault();
    GetUsers();
  };
  const GetUsers = async () => {
    const url = "/backoffice/users/";
    await axios
      .get(url, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
        params: {
          status: status,
          start_date: startDate,
          end_date: endDate,
          full_name: key,
          is_cancelled: causeShow,
        },
      })
      .then((response) => {
        setUserList(response.data);
        setfilters(false);
      });
  };
  const submitUser = () => {
    eventUser(submitID, true);
  };
  const cancelUser = () => {
    eventUser(cancelID, false, cause);
  };
  const handleCause = (event) => {
    setCause(event.target.value);
  };
  const handleStatus = (status) => {
    setStatus(status);
    setCauseShow(false);
  };
  const eventUser = async (id, status, des) => {
    const url = `/backoffice/users/${id}/`;
    const data = {
      status: status,
      note_when_cancelled: des,
    };
    axios
      .put(url, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then(() => {
        GetUsers();
        handleClosey();
        handleClosex();
      })
      .catch(() => {
        alert("Izoh yozilmagan!");
      });
  };
  return (
    <React.Fragment>
      <div className="up_nav">
        <div>
          <h1 className="link_h1">Qatnashchilar</h1>
        </div>
        <div className="user_info">
          <img src={userpic} alt="" />
          <div>
            <h1>Ibrohim Gulyamov</h1>
            <h2>Biznes Egasi</h2>
          </div>
        </div>
      </div>
      <div className="abiturients">
        <div className="ab_1">
          <div className="excel">
            <Link to="/register">
              <img src="" alt="" />
              Yangi qo'shish
            </Link>
          </div>
          <div className="search">
            <div className="input">
              <button>
                <img src={search} alt="" />
              </button>
              <form onSubmit={Search}>
                <input
                  type="text"
                  onChange={handleChange}
                  placeholder="Qatnashuvchilarni qidirish"
                />
              </form>
            </div>
            <div className="filtr_btn">
              <button
                onClick={() => {
                  setfilters(!filters);
                }}
              >
                <img src={filter} alt="" />
              </button>
            </div>
          </div>
          <div className="table">
            <h1>Qatnashuvchilar ro'yhati</h1>
            <table className="text-left">
              <thead className="text-left">
                <th>T/R</th>
                <th>FISh</th>
                <th>Koaching</th>
                <th>Guruh</th>
                <th>Status</th>
              </thead>
              <tbody>
                {userList.map((data, count) => {
                  count++;
                  return (
                    <tr key={data.data.id}>
                      <th>{count}</th>
                      <th>
                        <Link
                          to="/admin/singlepage"
                          onClick={() =>
                            localStorage.setItem("userID", data.data.id)
                          }
                        >
                          {data.data.first_name +
                            " " +
                            data.data.last_name +
                            " " +
                            data.data.middle_name}
                        </Link>
                      </th>
                      <th>
                        {data.data.psgroups_list[0] === undefined
                          ? ""
                          : data.data.psgroups_list[0].coaching_number}
                      </th>
                      <th>
                        {data.data.psgroups_list[0] === undefined
                          ? ""
                          : data.data.psgroups_list[0].group_number}
                      </th>
                      <th>
                        <div className={data.data.status ? "d-none" : ""}>
                          <button
                            onClick={() =>
                              handleOpeny(
                                data.data.id,
                                data.data.first_name,
                                data.data.last_name
                              )
                            }
                          >
                            <img src={yes} alt="" />
                          </button>
                          <button onClick={() => handleOpenx(data.data.id)}>
                            <img src={no} alt="" />
                          </button>
                        </div>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="ab_2" id={filters ? "right_0" : "right_100"}>
          <button
            onClick={() => {
              setfilters(!filters);
            }}
            className="ab_2_close"
          >
            <img src={close} alt="" />
          </button>
          <h1>Filterlar</h1>
          <div className="form_ab">
            <h2>Выберите период</h2>
            <div className="form_div">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat="dd MMM yyyy"
                placeholderText=""
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                dateFormat="dd MMM yyyy"
                minDate={startDate}
                placeholderText=""
              />
            </div>
          </div>
          {/* <div className="form_ab">
            <h2>Выберите страну</h2>
            <div className="form_div">
              <select name="" id="">
                <option value="">11111</option>
                <option value="">22222</option>
                <option value="">33333</option>
                <option value="">44444</option>
              </select>
            </div>
          </div>
          <div className="form_ab">
            <h2>Выберите город</h2>
            <div className="form_div">
              <select name="" id="">
                <option value="">aaaaaa</option>
                <option value="">ssssss</option>
                <option value="">dddddd</option>
                <option value="">ffffff</option>
              </select>
            </div>
          </div> */}
          <div className="form_ab">
            <FormControl component="fieldset">
              <FormLabel component="legend">Filter Status</FormLabel>
              <RadioGroup
                aria-label="gender"
                defaultValue="tasdiqlanmagan"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="tasdiqlangan"
                  control={<Radio />}
                  label="Tasdiqlangan"
                  onChange={() => handleStatus(true)}
                />
                <FormControlLabel
                  value="tasdiqlanmagan"
                  control={<Radio />}
                  label="Tasdiqlanmagan"
                  onChange={() => handleStatus(false)}
                />
                <FormControlLabel
                  value="all"
                  control={<Radio />}
                  label="Barchasi"
                  onChange={() => handleStatus(null)}
                />
                <FormControlLabel
                  value="causeShow"
                  control={<Radio />}
                  label="Qaytarilgan"
                  onChange={(e) => setCauseShow(true)}
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="form_ab">
            <button className="form_button" onClick={Search}>
              Применить
            </button>
          </div>
        </div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className="class_modal"
          open={openy}
          onClose={handleClosey}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openy}>
            <div className="modal">
              <div className="close_btn">
                <img onClick={handleClosey} src={close} alt="" />
              </div>
              <img src={warning} alt="" />
              <h1>
                Вы действительно хотите принять <span>{f_name} </span>
                на учебу?
              </h1>
              <div className="modal_btn">
                <button onClick={handleClosey}>Отменить</button>
                <button onClick={submitUser}>Принять</button>
              </div>
            </div>
          </Fade>
        </Modal>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className="class_modal"
          open={openx}
          onClose={handleClosex}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openx}>
            <div className="modal">
              <div className="close_btn">
                <img onClick={handleClosex} src={close} alt="" />
              </div>
              <img src={idea} alt="" />
              <h1>Причина отказа:</h1>
              <input
                type="text"
                placeholder="Напишите причину отказа"
                onChange={handleCause}
              />
              <div className="modal_btn">
                <button onClick={handleClosex}>Отменить</button>
                <button onClick={cancelUser}>Отправить</button>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default Qatnashuvchilar;
