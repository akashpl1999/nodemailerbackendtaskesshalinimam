import React from 'react'
import './Layout.css'

import styled from 'styled-components';
import { Button } from '@material-ui/core';


const Layout = () => {




    //     const Container = styled.div`
    // position: relative;
    // width: 100%;
    // height: 500px;
    // display: flex;
    // `;

    //     const WaveShape = styled.div`
    // position: relative;
    // width: 100%;
    // height: 100%;
    // background-color: #3F51B5;
    // clip-path: polygon(0 0, 100% 0, 100% 20%, 50% 40%, 0 20%);
    // `;

    //     const LeftHalf = styled.div`
    // position: relative;
    // flex: 1;
    // background-color: #3F51B5;
    // `;

    //     const RightHalf = styled.div`
    // position: relative;
    // flex: 1;
    // background-color: #FFFFFF;
    // `;

    //     const Content = styled.div`
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    // width: 80%;
    // text-align: center;
    // `;





    return (

        <div>


            <div className='main'>
                <img src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/5e13add65e1f566ba267948b/8458756_3801482.jpg" />
                <div className='card'>

                    <h1>
                        Memberships as low as $9.99/month

                    </h1>

                    <p>We are all about community, inclusiveness, spreading the love (and ENERGY), affordable classes with professional teachers, classes in English, a traditional yoga style for mind-body balance

                    </p>


                    <Button className='btn' type='submit'> Submit </Button>


                </div>
            </div>



            <div className='main2'>

                <div className='imgcard'>

                    <img src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/5e13add65e1f566ba267948b/8458756_3801482.jpg" />

                </div>

                <div className='imgcard'>


                    <img src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/12e86ddea48b5c9c9c25deb7/8458756_3801483.jpg" />

                </div>

                <div className='imgcard'>

                    <img src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/03bfaef928b85795bdb2905a/8458756_3801485.jpg" />

                </div>

                <div className='imgcard'>

                    <img src='https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/b33c4a7302b05a19b56fbf75/8458756_3801488.jpg' />

                </div>


            </div>


            <div className='main3'>

                <div className='cardmain3'>

                    <img src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/03bfaef928b85795bdb2905a/8458756_3801485.jpg" />

                    <h1>
                        How to start running today
                    </h1>


                </div>
            </div>



            <div className='cardmain3sub1'>


                <div className='subcard2'>

                    <div className='sub1'>

                        <div className='card1'>

                            <h1>
                                Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident.
                            </h1>



                        </div>


                    </div>


                    <div className='sub2'>

                        <div className='card2'>


                            <h1>Nec feugiat nisl pretium fusce id. Justo laoreet sit amet cursus sit amet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero.</h1>

                            <ul>
                                <li>Lorem ipsum dolor sit amet
                                </li>
                                <li>Excepteur sint occaecat
                                </li>
                                <li>Ut enim ad minim veniam</li>
                            </ul>

                        </div>
                    </div>


                </div>


            </div>







            <div className='imgcard1'>

                <img className='img' src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/03bfaef928b85795bdb2905a/8458756_3801485.jpg" />


                <div className='maincard'>

                    <div className='card1'>
                        <h1>COMMUNITY</h1>
                        <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        <button>learn More</button>

                    </div>

                    <div className='card1'>
                        <h1>COMMUNITY</h1>
                        <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        <button>learn More</button>


                    </div>

                    <div className='card1'>
                        <h1>COMMUNITY</h1>
                        <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        <button>learn More</button>


                    </div>

                    <div className='card1'>
                        <h1>COMMUNITY</h1>
                        <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        <button>learn More</button>


                    </div>

                </div>



            </div>



        </div>





    )
}

export default Layout


