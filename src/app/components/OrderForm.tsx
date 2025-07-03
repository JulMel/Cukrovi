import React, { useState } from "react";
import { data as allCukrovi } from "../../data/cukrovi";
import "./OrderForm.css";

interface OrderItem {
  name: string;
  amount: number;
}

const OrderForm: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<OrderItem[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleCheckboxChange = (cukroviName: string) => {
    setSelectedItems((prev) => {
      const alreadySelected = prev.find((item) => item.name === cukroviName);
      if (alreadySelected) {
        return prev.filter((item) => item.name !== cukroviName);
      } else {
        return [...prev, { name: cukroviName, amount: 1 }];
      }
    });
  };

  const updateAmount = (name: string, delta: number) => {
    setSelectedItems((prev) =>
      prev.map((item) =>
        item.name === name
          ? { ...item, amount: Math.max(0, item.amount + delta) }
          : item
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, selectedItems });
    alert("Objednávka byla odeslána!");

    // 🧼 Resetujeme formulář
    setName("");
    setEmail("");
    setSelectedItems([]);
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h1>Objednávka cukroví</h1>
      <div className="form">
        <h2>Kontaktní údaje</h2>
        <div className="order-contact">
          <label>Jméno a příjmení: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <h2>Vyberte cukroví:</h2>
        <div className="cukrovi-list">
          {allCukrovi.map((cukrovi) => (
            <label key={cukrovi.id} className="cukrovi-option">
              <input
                type="checkbox"
                checked={selectedItems.some(
                  (item) => item.name === cukrovi.name
                )}
                onChange={() => handleCheckboxChange(cukrovi.name)}
              />
              {cukrovi.name}
            </label>
          ))}
        </div>

        <h2>Vybrané položky:</h2>
        {selectedItems.length === 0 ? (
          <p>Nic jste zatím nevybrali.</p>
        ) : (
          <ul>
            {selectedItems.map((item) => (
              <li key={item.name}>
                <strong>{item.name}</strong>:{" "}
                <button
                  type="button"
                  onClick={() => updateAmount(item.name, -1)}
                >
                  -
                </button>
                <span className="amount-label">{item.amount} kg</span>
                <button
                  type="button"
                  onClick={() => updateAmount(item.name, +1)}
                >
                  +
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="form-button-wrapper">
        <button type="submit" className="submit-btn">
          Odeslat objednávku
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
