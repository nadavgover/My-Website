import React from "react";
import styled, {css} from "styled-components";
import PropTypes from "prop-types";


const Paragraph = styled.p`
  margin: 0;
  ${props => {
    switch (props.variant) {
      case "h1":
        return css`
          font-size: 24px;
          font-weight: 400;
          line-height: 28px;
          letter-spacing: -0.015em;
        `;
      case "h2":
        return css`
          font-size: 18px;
          font-weight: 400;
          line-height: 28px;
          letter-spacing: -0.005em;
        `;
      case "h3": 
        return css`
          font-size: 16px;
          font-weight: 400;
          line-height: 28px;
        `;
      case "body1":
        return css`
          font-size: 14px;
          font-weight: 300;
          line-height: 20px;
          letter-spacing: 0.005em;
        `;
      case "body2":
        return css`
          font-size: 13px;
          font-weight: 300;
          line-height: 20px;
          letter-spacing: 0.0025em;
        `;
      case "body1-bold":
        return css`
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0.005em;
        `;
      case "body2-bold":
        return css`
          font-size: 13px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0.0025em;
        `;
      case "button":
        return css`
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0.0125em;
          text-transform: none;
        `;
      case "hero1":
        return css`
          font-size: 40px;
          font-weight: 700;
          line-height: 52px;
        `;
      default:
        return css`
          font-size: 13px;
          font-weight: 300;
          line-height: 20px;
          letter-spacing: 0.0025em;
        `;
    }
  }
}}
`;

const Typography = React.forwardRef(({variant = "body2", className, children, ...rest}, ref) => {
  return (
    <Paragraph ref={ref} variant={variant} className={className} {...rest}>
      {children}
    </Paragraph>
  )
});

Typography.propTypes = {
  variant: PropTypes.oneOf(["h1", "h2", "h3", "body1", "body2", "body1-bold", "body2-bold", "button", "hero1"]).isRequired
}

export default Typography;