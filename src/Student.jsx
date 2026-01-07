import PropTypes from 'prop-types'

function Student(props) {

    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Attack Titan: {props.attackTitan ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    attackTitan: PropTypes.bool,
}

Student.defaultProps = {
    name: 'Guest',
    age: 0,
    attackTitan: false,
}

export default Student