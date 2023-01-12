import PropTypes from 'prop-types';
import styles from './Section.module.scss'

export const Section = ({ title, children }) => {
    const {section} = styles
    return (
        <section className={section}>
            <h2>{title}</h2>
            {children}
        </section>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}