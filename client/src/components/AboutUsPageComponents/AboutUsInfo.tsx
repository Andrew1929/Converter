import '../../style/InfoPagesComponentsStyle/AboutUsInfo.css';

export const AboutUsInfo: React.FC = () => {
    return (
        <div className="aboutUs__content">
            <h2 className='content__title'>Про нас</h2>
            <div className="content__text-area">
                <p className='content__text'>Ми команда ентузіастів, яка розробила цей сервіс для швидкого та зручного конвертування файлів.</p>
                <p className='content__text'>Наша місія – зробити процес конвертації максимально простим, безпечним та ефективним.</p>
                <p className='content__text'> Засновано у 2024 році командою розробників з України.</p>
            </div>
        </div>
    );
};
