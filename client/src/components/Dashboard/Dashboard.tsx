import styled, { StyleSheetManager } from "styled-components"
import { FiUser } from "react-icons/fi";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import { Card } from "../Layout/Card"
import { 
    DashboardContainer, 
    DashboardSide, 
    DashboardSideNav, 
    DashboardSideNavList, 
    DashboardSideNavListItem,
    DashboardMainContainer,
    DashboardMain,
    LogoutContainer, 
    CardContainer,
    CardInfo,
    DashboardListItem,
    DashboardCardList,
    DashboardChartGrid,
    BarCharContainer,
    DashboardSideClose} from "../Layout/Dashboard/DashboardLayout"
import { LinkButton } from "../UI/Buttons"
import { H2, H3 } from "../UI/Headings"
import { useState } from "react";
import { Data } from "../../utils/Data";
import Charts from "../Charts/Charts";



const Dashboard = () => {
    const [showSide, setShowSide] = useState(true)
    const [chartData, setChartData] = useState({
        labels: Data.map(v => v.year),
        datasets: [
            {
              label: 'Popularity of colours',
              data: Data.map(v => v.userGain),
              // you can set indiviual colors for each bar
              backgroundColor: [
                '#BBDEFB',
                '#EF9A9A',
                '#80CBC4',
              ],
              borderWidth: 1,
            }
        ]
    })
    
    return (
        <>
            <DashboardContainer>
            <DashboardSide width={showSide ? '250px' : '50px'}>
                    <DashboardSideClose left={showSide ? '90%' : '10%'} onClick={() =>{ setShowSide(prev => !prev)}}>
                        {showSide ? <AiOutlineArrowLeft size={30} /> : <AiOutlineArrowRight size={30} />}
                    </DashboardSideClose>
                    {showSide && <H2>user</H2>}
                    {showSide && (
                        <DashboardSideNav>
                        <DashboardSideNavList>
                            <DashboardSideNavListItem>
                                <LinkButton>Dashboard</LinkButton>
                            </DashboardSideNavListItem>
                            <DashboardSideNavListItem>
                                <LinkButton>User Management</LinkButton>
                            </DashboardSideNavListItem>
                            <DashboardSideNavListItem>
                                <LinkButton>Logs</LinkButton>
                            </DashboardSideNavListItem>
                            <DashboardSideNavListItem>
                            <   LinkButton>Settings</LinkButton>
                            </DashboardSideNavListItem>
                        </DashboardSideNavList>
                        <LogoutContainer>
                            <LinkButton>Logout</LinkButton>
                        </LogoutContainer>
                    </DashboardSideNav>
                    )}

                </DashboardSide>
                <DashboardMainContainer>
                    <H2>Dashboard</H2>
                    <DashboardMain>
                        <DashboardCardList>
                            <DashboardListItem>
                                <Card>
                                    <CardContainer>
                                        <FiUser size='3rem' />
                                        <CardInfo>
                                            <H2>User</H2>
                                            <p>123,123</p>
                                        </CardInfo>
                                    </CardContainer>
                                </Card>
                            </DashboardListItem>
                            
                            <DashboardListItem>
                                <Card>
                                    <CardContainer>
                                        <FiUser size='3rem' />
                                        <CardInfo>
                                            <H2>Products</H2>
                                            <p>123,123</p>
                                        </CardInfo>
                                    </CardContainer>
                                </Card>
                            </DashboardListItem>

                            <DashboardListItem>
                                <Card>
                                    <CardContainer>
                                        <FiUser size='3rem' />
                                        <CardInfo>
                                            <H2>Stores</H2>
                                            <p>123,123</p>
                                        </CardInfo>
                                    </CardContainer>
                                </Card>
                            </DashboardListItem>
                            
                        </DashboardCardList>

                        <DashboardChartGrid>
                            <BarCharContainer>
                                <Charts type="bar" data={chartData} />
                            </BarCharContainer>
                            <Card>
                                <Charts type="pie" data={chartData} />
                            </Card>
                            <Card>
                                <Charts type="doughnut" data={chartData} />
                            </Card>
                        </DashboardChartGrid>

                    </DashboardMain>
                </DashboardMainContainer>
            </DashboardContainer>
        </>
    )
}

export default Dashboard