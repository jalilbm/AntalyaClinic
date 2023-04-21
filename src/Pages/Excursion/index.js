import BriefDescription from "../../Components/BriefDescription";
import {Col, Row, Spin} from 'antd';
import ExcursionListItem from "./Components/ExcursionListItem";
import {useEffect, useState} from 'react'
import axios from "axios";

export default function Excursion() {
    const {brief_header: title, brief_description: description} = {
        brief_header: 'ЭКСКУРСИИ В АНТАЛИИ',
        brief_description: 'Многие из наших пациентов предпочитают приезжать в Турцию не только из-за качества медицинского обслуживания, но и из-за исключительного культурного опыта.\n' +
            'Турция – уникальная и красивая страна с богатой историей и невероятными природными ландшафтами: руины городов древнего Рима, византийские амфитеатры, песчаные пляжи, горнолыжные курорты и даже чудо света  — здесь каждый найдет что-то для себя. \n' +
            'Мы хотим, чтобы наши пациенты во время пребывания на лечении имели возможность увидеть не только стены отеля, но и красоты Средиземноморья. Вот почему мы приглашаем вас присоединиться к нам на экскурсиях, которые станут неотъемлемой частью вашего путешествия. Наши экскурсии разработаны так, чтобы продемонстрировать лучшее из турецкой культуры и истории: от посещения известных достопримечательностей до знакомства с традиционной турецкой кухней.'
    };

    const [currentBg, setCurrentBg] = useState(0);
    const [loading, setLoading] = useState(true);
    const [excursions, setExcursions] = useState([]);
    useEffect(() => {
        setLoading(true);
        axios.get('/get/excursions/').then(({data}) => {
            setExcursions(data.map(e => ({
                ...e,
                panels: [
                    {header: 'ЧТО ВХОДИТ В СТОИМОСТЬ', text: e.price_includes},
                    {header: 'ДЕТАЛИ ЭКСКУРСИИ', text: e.details}
                ],
                images: e.images.map(i => i.image),
            })));
            setLoading(false);
        });
    }, []);

    return (
        loading
            ? <Row justify='center' align='middle' style={{minHeight: '100vh'}}>
                <Spin size='large'/>
            </Row>
            : excursions.length && <div>
            <Row
                gutter={16}
                style={{
                    height: '25rem',
                    backgroundImage: `url(${excursions[currentBg].images[0]})`,
                }}
                className='p-5'
            >
                {excursions.map((e, i) => (
                    <Col
                        sm={24}
                        key={i}
                        className='mt-3'
                        onMouseEnter={() => setCurrentBg(i)}
                    >
                        <h2
                            className={`${currentBg === i ? 'text-light' : 'text-muted'}`}
                        >{e.name}</h2>
                    </Col>
                ))}
            </Row>

            <BriefDescription title={title} description={description}/>

            <Row gutter={16} className='m-5'>
                {
                    excursions.map((e, i) => (
                        <Col sm={12} className='my-2' key={i}>
                            <ExcursionListItem
                                name={e.name}
                                images={e.images}
                                panels={e.panels}
                                price={e.price}
                            />
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
}