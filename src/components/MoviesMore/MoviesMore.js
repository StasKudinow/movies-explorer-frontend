function MoviesMore(props) {

  return (
    <section className="more">
      <button className="more__button" type="button" onClick={props.onShowMoreClick}>Ещё</button>
    </section>
  );
}

export default MoviesMore;
