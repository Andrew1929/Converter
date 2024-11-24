import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaugeHigh, faFire, faWandMagicSparkles, faShieldHalved, faHouseLaptop} from '@fortawesome/free-solid-svg-icons';
import { faCreativeCommonsNc} from '@fortawesome/free-brands-svg-icons';
import '../../style/MainPageComponentsStyle/AdvantagesStyle.css';

export const Advantages : React.FC = () => {
    return (
        <section className="advantages-section">
            <p className="advantages-section__title">Переваги</p>

            <div className="advantages-section__advantages-list">
                <div className="advantages-section__advantage">
                    <FontAwesomeIcon  id='advantage__firs-icon' className='advantages-section__advantage-icon' icon={faGaugeHigh} />

                    <p className='advantages-section__advantage-title'>Швидкість конверсії</p>

                    <p className='advantages-section__advantage-description'>Файли обробляються за лічені секунди, економлячи ваш час.</p>
                </div>

                <div className="advantages-section__advantage">
                    <FontAwesomeIcon id='advantage__firs-icon' className='advantages-section__advantage-icon' icon={faFire} />

                    <p className='advantages-section__advantage-title'>Підтримка популярних форматів</p>

                    <p className='advantages-section__advantage-description'>Конвертуйте документи, зображення, відео та аудіо в найпоширеніші формати.</p>
                </div>

                <div className="advantages-section__advantage">
                    <FontAwesomeIcon  id='advantage__firs-icon' className='advantages-section__advantage-icon' icon={faWandMagicSparkles} />

                    <p className='advantages-section__advantage-title'>Інтуїтивний інтерфейс</p>

                    <p className='advantages-section__advantage-description'>Зручний дизайн, який не потребує додаткових навичок чи інструкцій.</p>
                </div>

                <div className="advantages-section__advantage">
                    <FontAwesomeIcon id='advantage__firs-icon' className='advantages-section__advantage-icon' icon={faShieldHalved} />

                    <p className='advantages-section__advantage-title'>Безпека даних</p>

                    <p className='advantages-section__advantage-description'>Всі завантажені файли автоматично видаляються після конверсії.</p>
                </div>

                <div className="advantages-section__advantage">
                    <FontAwesomeIcon id='advantage__firs-icon' className='advantages-section__advantage-icon' icon={faCreativeCommonsNc}/>

                    <p className='advantages-section__advantage-title'>Безкоштовне використання</p>

                    <p className='advantages-section__advantage-description'>Використовуйте наш сервіс без прихованих оплат чи підписок.</p>
                </div>

                <div className="advantages-section__advantage">
                    <FontAwesomeIcon id='advantage__firs-icon' className='advantages-section__advantage-icon' icon={faHouseLaptop} />

                    <p className='advantages-section__advantage-title'>Доступність на всіх пристроях</p>

                    <p className='advantages-section__advantage-description'>Працює на комп’ютерах, планшетах і смартфонах для вашої зручності.</p>
                </div>
            </div>
        </section>
    )
}