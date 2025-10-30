import axios from "axios";
import { useState } from "react";
import './newsletter.css'
import SVGCheck from "../../icons/SVGCheck";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NewsletterForm() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

    try {
        const response = await axios.post("http://localhost:8080/api/newsletter", { email });
        console.log("Sucesso:", response.data);
        setEmail("");
        navigate("/success");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response) {
        alert("Erro: Email já cadastrado no sistema");
      }
    }
  };


  return (
    <div className="container">
        <div className="left">
             <h1>Inscreva-se agora!</h1>
        <p>Preencha o formulário abaixo para se inscrever e comece a receber nossas atualizações diretamente em sua caixa de entrada.</p>

        <div className="checks">
            <div className="check">
                <SVGCheck className="svg" />
                <p><b>Guias e Tutoriais: </b>Aprenda como implementar e otimizar soluções de loT para sua empresa.</p>
            </div>

            <div className="check">
                <SVGCheck className="svg" />
                <p><b>Notícias e Tendências: </b>Fique por dentro das últimas novidades e avanços no mundo do loT.</p>
            </div>

            <div className="check">
                <SVGCheck className="svg" />
                <p><b>Ofertas e Promoções: </b>Receba ofertas especiais e promoções exclusivas para assinantes da nossa newsletter.</p>
            </div>
        </div>

        <form onSubmit={handleSubmit}>
            <input type="email"
            required
            placeholder="email@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />  

            <button type="submit">Inscrever-se</button>
            <p className="unsubscribe-link">
                Já é inscrito e deseja sair? {" "}
                <Link to="/unsubscribe">Cancelar inscrição</Link>
            </p>
        </form>
        </div>
        <div className="right">
            <div className="img-wrapper">
                <img className="img-fundo" src="Imagem.png" alt="" />
                <img src="logo-mindtech.svg" alt="" className="logo-overlay" />
            </div>
        </div>
    </div>
    
  )
}