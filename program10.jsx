import React, { useEffect, useState } from "react";

function Fakestoreapi() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div style={styles.container}>
      {product.map((item) => (
        <div key={item.id} style={styles.card}>
          <img src={item.image} alt={item.title} style={styles.img} />

          <h4 style={styles.title}>{item.title}</h4>

          <p>
            <b>Price:</b> ${item.price}
          </p>

          <p style={{ fontSize: "14px" }}>
            <b>Category:</b> {item.category}
          </p>

          <p>
            <b>Rating:</b> {item.rating.rate} ({item.rating.count} reviews)
          </p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f5f5f5",
  },
  card: {
    width: "280px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  img: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
    marginBottom: "10px",
  },
  title: {
    fontSize: "15px",
    marginBottom: "10px",
    height: "40px",
    overflow: "hidden",
  },
};

export default Fakestoreapi;
