function GoTop(props) {
  return (
    <>
      <div className={props.showGoTop} onClick={props.scrollUp}>
        <button className="goTop">
          <i class="fas fa-angle-double-up goTop_text"></i>
        </button>
      </div>
    </>
  );
}

export default GoTop;
