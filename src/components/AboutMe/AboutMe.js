import Title from "../Title/Title";
import photo from "../../images/student_photo.jpg";

function AboutMe() {
  return (
    <section className="student" id="student">
      <Title title="Студент" />
      <div className="student__container">
        <div className="student__info">
          <h3 className="student__name">Виталий</h3>
          <h4 className="student__about">Фронтенд-разработчик, 30 лет</h4>
          <p className="student__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по
            веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className="student__link" href="https://github.com/StasKudinow" target="blank">Github</a>
        </div>
        <img className="student__photo" src={photo} alt="Фото студента" />
      </div>
    </section>
  );
}

export default AboutMe;
