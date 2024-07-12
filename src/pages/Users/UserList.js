import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./UserList.css";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function UserList() {
  
  const [userData, setuserData] = useState([]);
  const [getData, setgetData] = useState(false);
  const [iduser, setiduser] = useState("");
  const [statusInput,setstatusInput]=useState(false);


  const [usernameinfo, setUsername] = useState("");
  const [emailinfo, setEmail] = useState("");
  const [statusinfo, setStatus] = useState("");
  const [transactioninfo, setTransaction] = useState("");
  const [imginfo, setimginf] = useState("");


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [showEdt, setShowEdit] = useState(false);
  const handleEditClose = () => {
    setShowEdit(false)
    setstatusInput(false)
  };
  const handleEditShow = () => setShowEdit(true);

  useEffect(() => {
    async function fetchUserData() {
      await fetch("http://localhost:3000/userRow")
        .then((respons) => respons.json())
        .then((data) => setuserData(data));
    }
    fetchUserData();
  }, [getData]);

  const deleteUserHandler = () => {
    async function deleteUser() {
      await fetch(`http://localhost:3000/userRow/${iduser}`, {
        method: "DELETE",
      }).then((respons) => {
        if (respons.status == 200) {
          handleClose()
          setgetData((prev) => !prev);
        }
      });
    }

    deleteUser();
  };

  useEffect(() => {
    let infouser = userData.find((user) => user.id == iduser);

    if (infouser) {
      setUsername(infouser.username);
      setEmail(infouser.email);
      setStatus(infouser.status);
      setTransaction(infouser.transaction);
      setimginf(infouser.img);
    }
  }, [iduser]);

  const editUserHandler = () => {
    if(usernameinfo && emailinfo && statusinfo && transactioninfo){
      setstatusInput(false)
      let newUserinfo = {
        id: iduser,
        username: usernameinfo,
        email: emailinfo,
        status: statusinfo,
        transaction: transactioninfo,
        img: imginfo,
      };
  
      async function edituser() {
        await fetch(`http://localhost:3000/userRow/${iduser}`, {
          method: "PUT",
          body: JSON.stringify(newUserinfo),
        }).then((respons) => {
          if (respons.status == 200) {
            handleEditClose();
            setgetData((prev) => !prev);
          }
        })
      }
  
      edituser()
    }else{
          setstatusInput(prev=>!prev)
    }
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "نام کاربری",
      width: 200,
      renderCell: (params) => {
        return (
            <div className="userListUser">
              <img src={params.row.img} className="imgUser" />
              {params.row.username}
            </div>
        );
      },
    },
    {
      field: "email",
      headerName: "ایمیل",
      width: 200,
    },
    {
      field: "status",
      headerName: "وضعیت",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "تراکنش",
      width: 160,
    },
    {
      field: "action",
      headerName: "عملیات",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <button
              className="userListEdit"
              onClick={() => {
                setiduser(params.row.id);
                handleEditShow();
              }}
            >
              ویرایش
            </button>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => {
                setiduser(params.row.id);
                handleShow();
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={userData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[8]}
        disableRowSelectionOnClick
      ></DataGrid>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>حذف کاربر</Modal.Title>
        </Modal.Header>
        <Modal.Body> آیا مطمئن هستید ؟</Modal.Body>
        <Modal.Footer>
          <Button className="modal-btn__close" onClick={handleClose}>
            بستن
          </Button>
          <Button className="modal-btn__yes" onClick={deleteUserHandler}>
            بله
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showEdt}
        onHide={handleEditClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>ویرایش کاربر</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-style">
            <div className="div__inputList">
              <div className="usernameStyle">
                <span className="username__Title">{usernameinfo}</span>
                <img src={imginfo} className="usernameStyle__profile" />
              </div>
              <div className="div__inputitem">
                <input
                  className="input-style"
                  placeholder="نام کاربری"
                  value={usernameinfo}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <input
                  className="input-style"
                  placeholder="ایمیل"
                  value={emailinfo}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="div__inputitem">
                <input
                  className="input-style"
                  placeholder="تراکنش"
                  value={transactioninfo}
                  onChange={(event) => setTransaction(event.target.value)}
                />
                <select
                  name="status"
                  id="status"
                  className="select__input-style"
                  value={statusinfo}
                  onChange={(event) => setStatus(event.target.value)}
                >
                  <option value="active">active</option>
                  <option value="non-active">non-active</option>
                </select>
              </div>
              {statusInput && <h5 className='input-message'>لطفا اطلاعات را کامل وارد کنید</h5>}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modal-btn__close" onClick={handleEditClose}>
            بستن
          </Button>
          <Button className="modal-btn__yes" onClick={editUserHandler}>
            ویرایش
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
