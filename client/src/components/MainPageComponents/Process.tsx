import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faList, faDownload} from '@fortawesome/free-solid-svg-icons';
import '../../style/MainPageComponentsStyle/ProcessStyle.css';

export const Process : React.FC = () => {
    return (
        <section className="process-section">
            <p className='process-section__title'>Як це працює</p>

            <div className="process-section__steps-container">
                <div className="process-section__step">
                    <FontAwesomeIcon className='process-section__step-icon' icon={faFileLines} />

                    <p className='process-section__step-description'>1. Виберіть файл</p>
                </div>

                <div className="process-section__step">
                    <FontAwesomeIcon className='process-section__step-icon' icon={faList} />

                    <p className='process-section__step-description'>2. Оберіть формат для конвертації</p>
                </div>

                <div className="process-section__step">
                    <FontAwesomeIcon className='process-section__step-icon' icon={faDownload} />

                    <p className='process-section__step-description'>3. Завантажте готовий файл</p>
                </div>
            </div>
        </section>
    )
}