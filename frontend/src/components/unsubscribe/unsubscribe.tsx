import { useState } from "react";
import axios from "axios";
import "./unsubscribe.css";

export default function Unsubscribe() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await axios.delete("http://localhost:8080/api/newsletter", {
        params: { email },
      });
      setMessage("Seu e-mail foi removido com sucesso da nossa newsletter.");
      setEmail("");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
      setMessage(
        error.response?.data?.message ||
          "Email não cadastrado!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="unsubscribe-container">
      <h1>Cancelar inscrição</h1>
      <p>
        Sentiremos sua falta 😢<br />
        Insira seu e-mail abaixo para remover sua assinatura da newsletter.
      </p>

      <form onSubmit={handleUnsubscribe}>
        <input
          type="email"
          required
          placeholder="seuemail@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Removendo..." : "Remover inscrição"}
        </button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}