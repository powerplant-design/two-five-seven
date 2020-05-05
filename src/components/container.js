import React from "react"
import styled from "styled-components"

const ContainerComponent = styled.div`
    margin: 0 auto;
    max-width: 960px;
`

function Container ({ children }) {
    return (
    <ContainerComponent>{children}</ContainerComponent>
    )
}

export default Container