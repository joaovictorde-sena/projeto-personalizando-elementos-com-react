import React from 'react';

const paragraphStyle = (colorText) => ({
    color: colorText,
    textTransform: 'upperCase'
});
const Paragraph = ({text, colorText}) => {
    
    return <p style={paragraphStyle(colorText)}>{text}</p>
}

export default Paragraph;