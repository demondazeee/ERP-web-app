import styled from "styled-components"
import { ListItem, UL } from "../../UI/Lists"
import { Card } from "../Card"

interface Props {
    width?: string,
    margin?: string,
    left?: any
}

export const DashboardContainer = styled.div`
    height: 100vh;
    position: relative;
`

export const DashboardSide = styled.aside`
    position: fixed;
    background-color: #3B82F6;
    color: #FAFAFA;
    width: ${(props: Props) => props.width || '250px'};
    height: 100%;
    padding: 1rem;
`

export const DashboardSideClose = styled.div`
    position: absolute;
    background-color: #5B21B6;
    padding: 5px;
    border-radius: 50%;
    left: ${(props: Props) => {
        return props.left || '90%'
    }};

    display: flex;
    cursor: pointer;
`

export const DashboardSideNav = styled.nav`
    height: 50%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
`

export const DashboardSideNavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    list-style: none;
`

export const DashboardSideNavListItem = styled.li`
    padding: 0.5rem;
    &:hover{
        background-color: var(--bg-color-blue-600);
        cursor: pointer;
    }
`

export const LogoutContainer = styled(DashboardSideNavListItem)`
    list-style: none;

`

export const DashboardMainContainer = styled.main`
    background-color: aliceblue;
    height: 100%;
    margin-left: ${(props: Props) => props.margin || '250px'};
    margin-right: 250px;
    padding: 1rem;
`

export const DashboardMain = styled.div`
    margin-top: 50px;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const DashboardCardList = styled(UL)`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

`
export const DashboardListItem = styled(ListItem)`
    flex: 1;
`

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`
export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const DashboardChartGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
`
export const BarCharContainer = styled(Card)`
    grid-column: 1 / 3;
    grid-row: 1 /3;
`