import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Products.css";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";


export default function Products() {
  const [productData, setproductData] = useState([]);
  const [getData, setgetData] = useState(false);
  const [idproductr, setididproductr] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(()=>{
    async function fetchProductData(){
      await fetch('http://localhost:3000/product')
      .then(respons=>respons.json())
      .then(data=>setproductData(data))
    }
    fetchProductData()
  })


  const deleteproductHandler = () => {
    async function deleteUser() {
      await fetch(`http://localhost:3000/product/${idproductr}`, {
        method: "DELETE",
      }).then((respons) => {
        if (respons.status == 200) {
          handleClose();
          setgetData((prev) => !prev);
        }
      });
    }

    deleteUser();
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "محصول",
      width: 200,
      renderCell: (params) => {
        return (
            <div className="userListUser">
              <img src={params.row.img} className="imgUser" />
              {params.row.title}
            </div>
        );
      },
    },
    {
      field: "price",
      headerName: "قیمت",
      width: 200,
    },
    {
      field: "action",
      headerName: "عملیات",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className="link">
                <button className="userListEdit" >ویرایش</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => {
                setididproductr(params.row.id);
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
      rows={productData}
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
        <Modal.Title>حذف محصول</Modal.Title>
      </Modal.Header>
      <Modal.Body> آیا مطمئن هستید ؟</Modal.Body>
      <Modal.Footer>
        <Button className="modal-btn__close" onClick={handleClose}>
          بستن
        </Button>
        <Button className="modal-btn__yes" onClick={deleteproductHandler}>
          بله
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
  )
}
