import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Receba no seu e-mail, dicas e promoções em primeira mão.
        </p>
        
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Seu e-mail'
            />
            <Button buttonStyle='btn--outline'>Inscreva-se</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>reCoffee</h2>
            <Link to='/'>Quem somos</Link>
            <Link to='/'>Depoimentos</Link>
            <Link to='/'>Termos de Serviço</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Fale conosco</h2>
            <Link to='/'>Contato</Link>
            <Link to='/'>Dúvidas</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Vídeos</h2>
            <Link to='/'>Receitas</Link>
            <Link to='/'>Curiosidades</Link>
            <Link to='/'>Métodos</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Midias Sociais</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              reCoffe
              <i style={{margin: 10}} class='fas fa-mug-hot' />
            </Link>
          </div>
          <small class='website-rights'>reCoffee © 2020</small>
          <div class='social-icons'>
            {/* <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link> */}
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://github.com/menezesmario/shop_blog'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-github'/>
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
