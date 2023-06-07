import PropTypes from 'prop-types';

export const GifItem = ({title, url}) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
        // <li>{title}</li>

    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

