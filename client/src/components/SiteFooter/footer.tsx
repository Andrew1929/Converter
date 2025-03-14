import { Link } from 'react-router-dom';
import '../../style/footerComponentsStyle/footerStyle.css';

export const Footer : React.FC = () => {
    return (
        <footer  className="footer">
            <div className='footer__content'>
                <div className="content__site-map">
                    <h3 className='site-map__title'>Карта сайту</h3>
                    
                    <ul className='site-map__list'>
                        <Link className="site-map__link" to='/головна'>
                            <li className='site-map__item'>Головна</li>
                        </Link>

                        <Link className="site-map__link" to='/про_нас'>
                            <li className='site-map__item'>Про нас</li>
                        </Link>

                        <Link className="site-map__link" to='/контакти'>
                            <li className='site-map__item'>Контакти</li>
                        </Link>
                    </ul>
                </div>
                
                <div className="content__social-media">
                    <h3 className='social-media__title'>Соціальні мережі</h3>

                    <ul className='social-media__list'>
                        <li className='social-media__item'>Facebook</li>
                        <li className='social-media__item'>Instagram</li>
                        <li className='social-media__item'>Twitter</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}