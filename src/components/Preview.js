import React from "react";
import { Row, Col, Button } from "reactstrap";
import { useSelector } from "react-redux";

const Preview = () => {
  /***************** Redux Hook ******************/
  const parentName = useSelector((state) => state.auth.parent);
  const parentAge = useSelector((state) => state.auth.age);
  const childList = useSelector((state) => state.auth.childList);

  return (
    <div
      className="container p-5 rounded"
      style={{ width: "45%", height: "80vh" }}
    >
      <Row className="mt-3 mb-3">
        <p className="title-text">Персональные данные</p>
      </Row>
      {parentName || parentAge ? (
        <Row className="mb-1">
          <p className="name-text">
            {parentName}, {parentAge}
          </p>
        </Row>
      ) : (
        "Нет данных"
      )}

      <Row className="mt-5">
        <p className="title-text">Дети</p>
      </Row>

      {childList.map((item) => {
        return (
          item.childName !== "" && (
            <Row className=" my-3">
              <span className="child-box">
                <p className="child-item mb-0">
                  {item.childName}, {item.childAge}
                </p>
              </span>
            </Row>
          )
        );
      })}
    </div>
  );
};

export default Preview;
