import PropTypes from 'prop-types';
// import css from './PageTitle.module.css'
import { TitleText } from './PageTitle.styled';

export const PageTitle = ({ text }) => {
    return <TitleText >{ text}</TitleText>
}

PageTitle.prototype = {
    text:PropTypes.string.isRequired,
}