import React, { useState } from "react";
import { connect } from "react-redux";
import { saveName } from "../actions/auth";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";
import union from "../assets/images/Union.png";

const Form = ({ saveName }) => {
  const [formData, setFormData] = useState({
    parent: "",
    age: "",
  });
  const [childList, setChildList] = useState([{ childName: "", childAge: "" }]);

  const { parent, age } = formData;

  const onChangeParent = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...childList];
    list[index][name] = value;
    setChildList(list);
  };
  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...childList];
    list.splice(index, 1);
    setChildList(list);
  };
  const handleAddClick = () => {
    setChildList([...childList, { childName: "", childAge: "" }]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    saveName(parent, age, childList);
  };

  return (
    <div className="container p-5 rounded col-md-6 col-sm-12">
      {/********************* PARENT BLOCK  *******************/}
      <p className="title-text">Персональные данные</p>
      <form onSubmit={(e) => onSubmit(e)} className="pb-5">
        <div className="input-container mb-5 form-group">
          <input
            type="text"
            value={parent}
            name="parent"
            onChange={(e) => onChangeParent(e)}
            required
          />
          <label className={parent && "filled"}>Имя</label>
        </div>
        <div className="input-container mb-5 form-group">
          <input
            type="number"
            value={age}
            name="age"
            onChange={(e) => onChangeParent(e)}
            required
          />
          <label className={age && "filled"}>Возраст</label>
        </div>

        {/******************* CHILDS BLOCK  *******************/}
        <Row className="mb-3">
          <Col md={6}>
            <p className="title-text mt-3">Дети (макс. 5)</p>
          </Col>
          <Col className="d-flex justify-content-end" md={6}>
            {childList.length <= 4 && (
              <button
                className="add-child-btn "
                style={{ backgroundColor: "transparent" }}
                onClick={(e) => handleAddClick()}
              >
                <img src={union} className="mr-2" /> Добавить ребенка
              </button>
            )}
          </Col>
        </Row>

        {childList.map((x, i) => {
          return (
            <>
              <Row>
                <Col md={5}>
                  <div className="input-container mb-5 form-group">
                    <input
                      type="text"
                      value={x.childName}
                      name="childName"
                      onChange={(e) => handleInputChange(e, i)}
                      required
                    />
                    <label className={parent && "filled"}>Имя</label>
                  </div>
                </Col>
                <Col md={5}>
                  <div className="input-container mb-0 form-group">
                    <input
                      type="number"
                      value={x.childAge}
                      name="childAge"
                      onChange={(e) => handleInputChange(e, i)}
                      required
                    />
                    <label className={age && "filled"}>Возраст</label>
                  </div>
                </Col>
                <Col md={2}>
                  <Button
                    className="delete-child-btn align-middle  mt-0 mt-md-3 mb-3"
                    style={{ backgroundColor: "transparent" }}
                    onClick={() => handleRemoveClick(i)}
                  >
                    Удалить
                  </Button>
                </Col>
              </Row>
            </>
          );
        })}

        {/******************* BOTTOM BLOCK ******************/}
        <Link to="/preview">
          <Button
            to="/preview"
            className="btn btn-info btn-save"
            type="submit"
            onFocus={onSubmit}
          >
            Сохранить
          </Button>
        </Link>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  saveName: state.auth.saveName,
});

export default connect(mapStateToProps, { saveName })(Form);
