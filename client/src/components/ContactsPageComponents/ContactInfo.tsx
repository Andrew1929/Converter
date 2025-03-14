import '../../style/InfoPagesComponentsStyle/ContactInfoStyle.css';

export const ContactInfo: React.FC = () => {
    return (
        <div className="contact-info">
            <h2>Контактна інформація</h2>
            <p>Якщо у вас є питання або пропозиції, зв'яжіться з нами:</p>
            <ul>
                <li>Email: support@fileconverter.com</li>
                <li>Телефон: +380 97 123 45 67</li>
                <li>Адреса: вул. Хрещатик, 22, Київ, Україна</li>
            </ul>
        </div>
    );
};