import Title from "../Title/Title";

function AboutProject() {
  return (
    <section className="project" id="about-project">
      <Title title="О проекте"/>
      <div className="project__info">
        <div className="project__info-container">
          <h3 className="project__info-title">Дипломный проект включал 5 этапов</h3>
          <p className="project__info-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="project__info-container">
          <h3 className="project__info-title">На выполнение диплома ушло 5 недель</h3>
          <p className="project__info-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="project__timeline">
        <div className="project__timeline-block">
          <p className="project__timeline-text">1 неделя</p>
        </div>
        <div className="project__timeline-block">
          <p className="project__timeline-text project__timeline-text_black">4 недели</p>
        </div>
        <div className="project__timeline-block project__timeline-block_white">
          <p className="project__timeline-caption">Back-end</p>
        </div>
        <div className="project__timeline-block project__timeline-block_white">
          <p className="project__timeline-caption">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
