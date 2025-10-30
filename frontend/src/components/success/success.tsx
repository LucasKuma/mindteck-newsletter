import SVGCheck from '../../icons/SVGCheck';
import SVGLogo from '../../icons/SVGLogo';
import './success.css'

export default function Success() {
  return (
    <div className="container-suc">
        <SVGCheck className='svg-suc'/>
        <div className="msg-suc">
          <h1>Obrigado por se inscrever na nossa newsletter!</h1>
          <p>Agora você faz parte da comunidade Mindtech e está a um passo de ficar atualizado com as últimas inovações e tendências em Internet das Coisas (IoT)</p>
          <SVGLogo className='svg-logo-suc'/>
        </div>
    </div>
  );
}