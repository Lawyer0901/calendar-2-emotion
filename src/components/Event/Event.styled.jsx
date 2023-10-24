import styled from '@emotion/styled'
// import { computeHeadingLevel } from '@testing-library/react'

export const Wrapper = styled.div`
     position: relative;
    border: ${ props=> `2px dashed ${ props.theme.color.black }`};
    padding: 8px;
    border-radius: 4px;
`
export const EventTitle = styled.h2`
     margin-top: 0;
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
`

export const EventInfo = styled.p`
     display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 8px;
    color: ${props=> props.theme.color.primaryText};
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: 0.25px;

    svg {
        display: block;
    margin-right: 8px;
    color: ${props=>props.theme.color.secondaryText};
    }
`
const bgColor = (props) => {
    switch (props.eventType) {
        case "free":
      return `${props.theme.color.green}`
        case "paid":
            return `${props.theme.color.blue}`
        case "vip":
            return `${props.theme.color.red}`
        default: return `${props.theme.color.black}`
    }
}
export const EventType = styled.span`
    position: absolute;
    top: 4px;
    right: 4px;
    padding: 4px 8px;
    border-radius: 4px;
    text-transform: uppercase;
    background-color: ${props=>props.theme.color.black};
    color: #fff;
    background-color: ${bgColor}
`