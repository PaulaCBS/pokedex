import '../styles/spinner.css'

function Spinner() {
  return (
    <div id="pokeball" className="animate">
      <div className="poketop"></div>
      <div className="pokebottom"></div>
      <div className="opening"></div>

      <div className="button-black-circle">
          <div className="button-white-circle">
              <div className="open-button"></div>
          </div>
      </div>
    </div>
  );
}

export default Spinner;
