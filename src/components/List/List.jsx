import PropTypes from "prop-types";

function List({ episodeList }) {
  return (
    <ul>
      {episodeList.map((episode, index) => (
        <li key={index} id={episode}>
          {episode}
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  episodeList: PropTypes.array,
};

export default List;
