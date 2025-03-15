import '../../style/InfoPagesComponentsStyle/ContactInfoStyle.css';

export const ContactInfo: React.FC = () => {
    return (
        <div className="contact-info__content">
            <h2 className='content__title'>Контактна інформація</h2>
            <p  className='content__subtitle'>Якщо у вас є питання або пропозиції, зв'яжіться з нами:</p>
            <ul className='content__info-list'>
                <li className='info-list__item'>Email: support@fileconverter.com</li>
                <li className='info-list__item'>Телефон: +380 97 123 45 67</li>
                <li className='info-list__item'>Адреса: вул. Хрещатик, 22, Київ, Україна</li>
            </ul>
        </div>
    );
};