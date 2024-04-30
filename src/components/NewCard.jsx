import React, { useState } from "react";
import Card from "react-bootstrap/Card";
const NewCard = (props) => {
  return (
    <div className="row">
      <div className="col-12">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            justifyContent: "flex-start",
          }}
          className="card-main-div"
        >
          <Card
            style={{
              width: "16rem",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              borderRadius: "8px",
            }}
          >
            <Card.Img
              variant="top"
              src={props.img}
              style={{
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
              }}
            />
            <Card.Body>
              <Card.Title
                className="name"
                style={{ fontWeight: "bold", fontSize: "1.25rem" }}
              >
                {props.name}
              </Card.Title>
              <Card.Text
                className="details"
                style={{ color: "#6c757d", marginBottom: "1rem" }}
              >
                {props.details}
              </Card.Text>
              <Card.Text
                className="price"
                style={{ fontSize: "1.1rem", color: "#28a745" }}
              >
                {`Price: ${props.price}`}
              </Card.Text>
              {/* <Button variant="primary">Learn More</Button> */}
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
