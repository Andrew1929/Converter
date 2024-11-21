import backgroundImg1 from '../../style/images/Group-21.png';
import backgroundImg2 from '../../style/images/Group-22.png';
import '../../style/MainPageComponentsStyle/BusinessCardStyle.css';

export const BusinessCard : React.FC = () => {
    return (
        <section className="business-card-section">
            <img id='business-card-section__first-img' src={backgroundImg1} alt="" />

            <div className="business-card-section__content">
                <p className='business-card-section__content-title'>Конвертуй швидко та легко</p>

                <p className='business-card-section__content-text'>  Завантажте ваш файл, оберіть формат, і отримайте результат за кілька секунд. 
                <br/> Наш сервіс підтримує найпопулярніші формати файлів, забезпечуючи високу якість конверсії. 
                <br/> Почніть просто зараз – це швидко, зручно і безкоштовно!</p>

                <button className='business-card-section__content-button'>Вибрати файл</button>
            </div>

            <img id='business-card-section__second-img' src={backgroundImg2} alt="" />
        </section>
    )
}