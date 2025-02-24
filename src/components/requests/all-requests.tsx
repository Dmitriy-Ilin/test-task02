import Text from '../ui/text/Text';
import './all-requests.scss';
import edit from '../../assets/Edit.svg';
import mark from '../../assets/Map_Pin.svg';
import metro from '../../assets/Metro.svg';
import { useVacancies } from '../../context/vacancy-context';
import { useNavigate } from 'react-router-dom';

const AllRequests = () => {
  const { vacancies } = useVacancies();
  const navigate = useNavigate();

  return (
    <div className='form-container'>
      <Text weight='regular' size='xl' lineHeight='xl2' className='form-text'>
        Заявки на размещение вакансий
      </Text>
      <div className='all-requests'>
        {vacancies.map((vacancy) => {
          return (
            <div className='form-main' key={vacancy.id}>
              <div className='requests-edit'>
                <Text size='sm' weight='regular' lineHeight='sm'>
                  {/* Дата публикации: 23.01.2023 */}
                  Дата публикации:&nbsp;
                  {vacancy.openingDate?.toLocaleDateString('ru-RU', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })}
                </Text>
                <button onClick={() => navigate(`/edit/${vacancy.id}`)}>
                  <img src={edit} alt='edit' />
                </button>
              </div>
              <Text size='lg2' weight='lg2' lineHeight='xl1'>
                {/* Backend-разработчик */}
                {vacancy.vacancyTitle}
              </Text>
              <div className='requests-data'>
                <div className='requests-address'>
                  <img src={mark} alt='map pin' />
                  <Text lineHeight='md' size='md'>
                    {/* Москва, Походный проезд, 3с1 */}
                    {vacancy.region}&nbsp;
                    {vacancy.address}
                  </Text>
                </div>
                <div className='requests-salary'>
                  <Text className='requests-salary__text'>
                    {/* от 70 000<span>на руки</span> */}

                    {vacancy.from && <>от {vacancy.from}</>}
                    <span>{vacancy.salary.toLocaleLowerCase()}</span>
                  </Text>
                  <Text className='requests-salary__text'>
                    {/* <span>Требуемый опыт:</span>от 1 до 3 лет */}
                    <span>Требуемый опыт:</span>
                    {vacancy.expirience}
                  </Text>
                  {vacancy.metroStation && (
                    <div>
                      <img src={metro} alt='metro' />
                      <Text
                        size='md'
                        weight='regular'
                        lineHeight='sm'
                        className='requests-metro__text'
                      >
                        {/* Сходненская, Трикотажная и Волоколамская */}
                        {vacancy.metroStation}
                      </Text>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllRequests;
