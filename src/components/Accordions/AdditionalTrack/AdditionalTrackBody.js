import React, {useState, useEffect} from "react";
import AdditionalTrackBtn from "./AdditionalTrackBtn";

// TODO сеттер из родителя
const AdditionalTrackBody = ({product, setAdditionalTracks, price}) => {
    // методы загрузки трека
    const [link, setLink] = useState(false);
    const [file, setFile] = useState(false);
    const [catalog, setCatalog] = useState(false);
    const [trackLink, setTrackLink] = useState('');
    const [trackFile, setTrackFile] = useState(null);
    const [searchInput, setSearchInput] = useState('')
    const [trackCatalog, setTrackCatalog] = useState(null);

    // auto, manual
    const [compositionType, setCompositionType] = useState('auto');
    // TODO заносить в массив данные вида {'action', 'start', 'end'}
    const [compositionSegments, setCompositionSegments] = useState(() => []);
    const [compositionSegment1, setCompositionSegment1] = useState('');
    const [compositionSegment2, setCompositionSegment2] = useState('');

    const [commentary, setCommentary] = useState('');

    useEffect(() => {
        let orderSegmentAdd = []
        let orderSegmentDelete = []

        // TODO временное решение, потом пофиксить с единым массивом compositionSegments
        if (compositionSegment1 === 'add') {
            orderSegmentAdd.push(compositionSegment1);
        } else {
            orderSegmentDelete.push(compositionSegment1);
        }

        // TODO временное решение, потом пофиксить с единым массивом compositionSegments
        if (compositionSegment2 === 'delete') {
            orderSegmentAdd.push(compositionSegment2);
        } else {
            orderSegmentDelete.push(compositionSegment2);
        }

        let additionaTrackObj = {
            'composition': compositionType,
            'commentary': commentary,
            'order_segment_add': orderSegmentAdd,
            'order_segment_delete': orderSegmentDelete,
        }

        if (file) {
            additionaTrackObj['file'] = trackFile;
        }
        if (link) {
            additionaTrackObj['link'] = trackLink;
        }
        if (catalog) {
            additionaTrackObj['track'] = trackCatalog;
        }

        // создаем объект в соответствии с полями на беке
        setAdditionalTracks(additionaTrackObj);
    },[trackLink, trackFile, trackCatalog, compositionType, commentary, compositionSegment1,
        compositionSegment2, catalog, file, link, setAdditionalTracks])

    const handleAuto = () => {
        setCompositionType('auto');
    };
    const handleManual = () => {
        setCompositionType('manual');
    };

    const handleLink = () => {
        setLink(true);
        setFile(false);
        setCatalog(false);
    };
    const handleFile = () => {
        setLink(false);
        setFile(true);
        setCatalog(false);
    };
    const handleCatalog = () => {
        setLink(false)
        setFile(false)
        setCatalog(true)
    };

    const searchFetch = (event) => {
        setSearchInput(event.target.value);
        const searchResult = '?search=' + searchInput
        fetch(process.env.REACT_APP_MUZSPORT_API + '/tracks/' + searchResult)
            .then(response => response.json())
            .then(data => setCatalog(data))
    }
    // console.log(catalog.results)

    return(
        <div id={'additional_track' + product.id} className="accordion-collapse collapse " aria-labelledby="headingOne"
             data-bs-parent="#accordionExample">
            <button type="button"
                    data-bs-toggle="collapse"
                    className="btn-close shadow-none close-accordion"
                    data-bs-target={'#additional_track' + product.id}
                    aria-expanded="true"
                    style={{borderRadius:"12px"}}
                    aria-controls="collapseOne">
            </button>
            <div className="card background-accordion ps-4 container">

                <h5 className="text-white position-relative" style={{right:"33%", top:"10px"}}>Добавить трек к
                    программе</h5>
                <div className=" imgblock-accordion">
                <img src='/assets/icons/price-tag.png' className='price-icon-accordion'/>
                <span>{price.price_additional_track} ₽</span>
            </div>
            <div className="accordion-body row justify-content-center">
                <div className="card style-accordion p-5" style={{borderRadius:"12px"}}>

                    <h5 className="text-start ">Материал (трек) для компановки программы*:</h5>
                    <div className="d-inline-flex pt-3">
                        <div className="float-start">
                            <button className="btn btn-sm shadow-none" onClick={handleLink}>
                                <img src="/assets/icons/www.png" className="card p-1" height="50px"/>
                            </button>
                            <button className="btn btn-sm shadow-none" onClick={handleFile}>
                                <img src="/assets/icons/download.png" className="card p-1" height="50px"/>
                            </button>
                            <button className="btn btn-sm shadow-none" onClick={handleCatalog}>
                                <img src="/assets/icons/list.png" className="card p-1" height="50px"/>
                            </button>
                        </div>
                    </div>

                    {link ?
                        <div className="col-6 pt-4 pb-2">
                            <input type="url" required
                                   value={trackLink}
                                   placeholder="Ссылка на файл..."
                                   className="form-control input-box"
                                   onChange={(e) => setTrackLink(e.target.value)}
                            />
                        </div>
                            :
                            null
                    }

                    {/* TODO хз как запихивать файл в value, мб без этого обойдемся */}

                    {file ?
                        <div className="col-6 pt-2 pb-2">
                            <input type="file"
                                   placeholder="формат mp3, mpeg"
                                   className="form-control input-box mt-3"
                                   onChange={(e) => setTrackFile(e.target.files)}
                            />
                        </div>
                        :
                        null
                    }

                    {/* TODO доделать здесь поиск по имеющимся трекам на сайте */}
                    {catalog ?
                        <div className="col-6 pt-4 pb-2">
                            <input type="search"
                                   value={searchInput}
                                   className="form-control shadow-none"
                                   placeholder="Начните вводить название"
                                   aria-label="Search"
                                   aria-describedby="search-addon"
                                   list="tracks"
                                   onChange={searchFetch}
                            />
                            <datalist id="tracks">
                                {catalog.results.map((track, index) =>
                                    <option key={track.value + '_' + index} value={track.value}>
                                        {track.author} - {track.title}
                                    </option>
                                )}
                            </datalist>

                            </div>
                        // TODO доделать тут еще выбор из существующих треков на сайте
                        :
                        null
                    }

                    <h5 className="text-start">
                        <img src="/assets/icons/info.png" className="mb-1 me-1" width="12px"/>
                        Компоновка*</h5>
                    <div className="float-start d-flex">
                        <button className="btn btn-sm shadow-none" onClick={handleAuto}>
                            <img src="/assets/icons/auto.png" className="float-start" height="50px"/>
                        </button>
                        <button className="btn btn-sm shadow-none" onClick={handleManual}>
                            <img src="/assets/icons/palm-of-hand.png" className="float-start" height="50px"/>
                        </button>
                    </div>

                    {compositionType === 'auto' ?
                        null
                        :
                        null
                    }

                    {compositionType === 'manual' ?
                        // TODO сделать цикл и добавлять в цикле новую строчку
                        <div className="float-start">
                            <div className="row">
                                <div className="buttons d-grid pt-4">
                                    <input label="Удалить отрезок" type="radio" name="segment-1" value="delete"
                                           checked={compositionSegment1 === 'delete'}
                                           onChange={(e) => {
                                               setCompositionSegment1(e.target.value)
                                           }}
                                    />
                                    <input label="Добавить отрезок" type="radio" name="segment-1" value="add"
                                           checked={compositionSegment1 === 'add'}
                                           onChange={(e) => {
                                               setCompositionSegment1(e.target.value)
                                           }}
                                    />
                                </div>
                                    :
                                    <span className="font-weight-bold d-block col pt-5">от
                                            <input type="time" id="appt" name="appt" style={{
                                                backgroundColor: "#948eba",
                                                borderRadius: "10px"
                                            }} min="00:00" max="24:00" className="me-2 ms-2 text-white"
                                                   required/>до
                                             <input type="time" id="appt" name="appt" style={{
                                                 backgroundColor: "#948eba",
                                                 borderRadius: "10px"
                                             }} min="00:00" max="24:00" className="me-2 ms-2 text-white"
                                                    required/>на
                                            <input type="time" id="appt" name="appt" style={{
                                                backgroundColor: "#948eba",
                                                borderRadius: "10px"
                                            }} min="00:00" max="24:00" className="me-2 ms-2 text-white"
                                                   required/>
                                            <button type="button" className="btn mb-2">
                                                <img src="/assets/icons/plus-purple.png" height="25px"/>
                                            </button>
                                            <button type="button" className="btn mb-2">
                                                <img src="/assets/icons/minus-pink.png" height="25px"/>
                                            </button>

                                    </span>
                            </div>
                            <div className="row col-12">
                                <div className="buttons d-grid pt-4">
                                    <input label="Удалить отрезок" type="radio" name="segment-2" value="delete"
                                           checked={compositionSegment2 === 'delete'}
                                           onChange={(e) => {
                                               setCompositionSegment2(e.target.value)
                                           }}
                                    />
                                    <input label="Добавить отрезок" type="radio" name="segment-2" value="add"
                                           checked={compositionSegment2 === 'add'}
                                           onChange={(e) => {
                                               setCompositionSegment2(e.target.value)
                                           }}
                                    />
                                </div>
                                <span className="font-weight-bold col-7 pt-5">от
                                        <input type="time" id="appt" name="appt" style={{
                                            backgroundColor: "#948eba",
                                            borderRadius: "10px"
                                        }} min="00:00" max="24:00" className="me-2 ms-2 text-white"
                                               required/>до
                                        <input type="time" id="appt" name="appt" style={{
                                            backgroundColor: "#948eba",
                                            borderRadius: "10px"
                                        }} min="00:00" max="24:00" className="me-2 ms-2 text-white"
                                               required/>на
                                        <input type="time" id="appt" name="appt" style={{
                                            backgroundColor: "#948eba",
                                            borderRadius: "10px"
                                        }} min="00:00" max="24:00" className="me-2 ms-2 text-white"
                                               required/>

                                        <button type="button" className="btn mb-2">
                                            <img src="assets/icons/plus-purple.png" height="25px"/>
                                        </button>
                                        <button type="button" className="btn mb-2">
                                            <img src="assets/icons/minus-pink.png" height="25px"/>
                                        </button>
                                        </span>
                                }
                            </div>
                        </div>
                        :
                        null
                    }
                    <div className="text-start pt-3">
                        <h5>Комментарии к данному треку:</h5>
                        <h6>По желанию. Только если остались какие-то неуточненные моменты</h6>
                        <textarea type="text"
                                  value={commentary}
                                  className="form-control input-box"
                                  style={{minHeight: "150px", backgroundColor: "#f4f4f4"}}
                                  placeholder="Пример:
                                   -Оставить все энергичные части трека
                                   или
                                   -Убрать все части с вокалом"
                                  onChange={(e) =>
                                      setCommentary(e.target.value)}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default AdditionalTrackBody;
