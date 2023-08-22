// just like we put <script> in pure react app
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fatty Jimmy's Pizza shop</h1>
    </header>
  );
}

function Menu() {
  const num = pizzaData.length;

  return (
    <main className="menu">
      <h2>Delicious Pizza</h2>
      {num > 0 ? (
        <>
          <p>Happy Eating</p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>No pizza today</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  //if (pizzaObj.soldOut) return null;

  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + 5}</span>
      </div>
    </div>
  );
}

function Footer() {
  const start = 9;
  const end = 22;
  const hour = new Date().getHours();
  const isOpen = (hour >= start) & (hour <= end);

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <h3> {new Date().toLocaleTimeString()}</h3>
          <p>
            We are open until {end}:00, Please order online or come to visit
          </p>
          <button className="btn"> Order </button>
        </div>
      ) : (
        <div className="order">
          <h3> {new Date().toLocaleTimeString()}</h3>
          <p>We are closed</p>
        </div>
      )}
    </footer>
  );
}
// A way to render app
// StrictMode render page twice to find any bugs
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
