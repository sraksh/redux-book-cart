import React from 'react';
import PropTypes from 'prop-types';
// import img from '../../images/Spinner.gif';

class Loader extends React.Component {
  render() {
    return (
      <div>
        {/* { this.props.loading ? ( <img src={img} alt='loading' /> ) : null } */}
      </div>
    );
  }
}

Loader.propTypes = {
  loading: PropTypes.bool,
};

export default Loader;