import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { fadeIn, bounce } from 'react-animations';

const AnimatedWrapper = styled.div`
    animation: 1s ${props => props.animation}
`

const withAnimation = (Component, animationName) => {

    console.log(keyframes)
    return (props) => (
        <AnimatedWrapper animation={keyframes`${animationName}`} style={{flexGrow: 1}}>
            <Component
                {...props}
            />
        </AnimatedWrapper>
    )
}

export default withAnimation;