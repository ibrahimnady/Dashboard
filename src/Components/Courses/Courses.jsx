import React from 'react'
import styleCourses from './Courses.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Courses_01 from '../Images/course-01.jpg'
import Courses_02 from '../Images/course-02.jpg'
import Courses_03 from '../Images/course-03.jpg'
import Courses_04 from '../Images/course-04.jpg'
import Courses_05 from '../Images/course-05.jpg'

export default function Courses() {
    return (
        <>
            <h1 className={'' + ' ' + styleCourses.headName}> <i class="fa-solid fa-school" /> Courses <i class="fa-solid fa-school" /></h1>
            <div className={'gap-20' + ' ' + styleCourses.container}>
                <Card style={{ width: '18rem' }} className='text-center'>
                    <Card.Img variant="top" src={Courses_01} />
                    <Card.Body>
                        <Card.Title className='mb-4 text-center fw-bold'>Mastering Web Design</Card.Title>
                        <Card.Text className={' c-gray text-center' + ' ' + styleCourses.cardInfo}>
                            Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design
                        </Card.Text>
                        <Card.Text className={' d-flex between-flex c-gray text-center'}>
                            <span><i class="fa-regular fa-user" /> 950</span>
                            <span>$ 170</span>
                        </Card.Text>
                        <Button variant="primary">Buy </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='text-center'>
                    <Card.Img variant="top" src={Courses_02} />
                    <Card.Body>
                        <Card.Title className='mb-4 text-center fw-bold'>Data Structure And Algorithms</Card.Title>
                        <Card.Text className={' c-gray text-center' + ' ' + styleCourses.cardInfo}>
                            Master The Art Of Data Structure And Algorithms Like Sorting,dividing And Conquring
                        </Card.Text>
                        <Card.Text className={' d-flex between-flex c-gray text-center'}>
                            <span><i class="fa-regular fa-user" /> 850</span>
                            <span>$ 110</span>
                        </Card.Text>
                        <Button variant="primary">Buy </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='text-center'>
                    <Card.Img variant="top" src={Courses_03} />
                    <Card.Body>
                        <Card.Title className='mb-4 text-center fw-bold'>Responsive Web Design</Card.Title>
                        <Card.Text className={' c-gray text-center' + ' ' + styleCourses.cardInfo}>
                            Mastering Responsive Web Design And Media Queries And know Everything About Breakpoints
                        </Card.Text>
                        <Card.Text className={' d-flex between-flex c-gray text-center'}>
                            <span><i class="fa-regular fa-user" /> 1200</span>
                            <span>$ 225</span>
                        </Card.Text>
                        <Button variant="primary">Buy </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='text-center'>
                    <Card.Img variant="top" src={Courses_04} />
                    <Card.Body>
                        <Card.Title className='mb-4 text-center fw-bold'>Mastering Phton</Card.Title>
                        <Card.Text className={' c-gray text-center' + ' ' + styleCourses.cardInfo}>
                            Master Pyhton And Practise And Preparing For Data Science And AI And Automating Things In Your Life
                        </Card.Text>
                        <Card.Text className={' d-flex between-flex c-gray text-center'}>
                            <span><i class="fa-regular fa-user" /> 1300</span>
                            <span>$ 305</span>
                        </Card.Text>
                        <Button variant="primary">Buy </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='text-center'>
                    <Card.Img variant="top" src={Courses_05} />
                    <Card.Body>
                        <Card.Title className='mb-4 text-center fw-bold'>PHP Examples</Card.Title>
                        <Card.Text className={' c-gray text-center' + ' ' + styleCourses.cardInfo}>
                            PHP Tutorials And Examples And Practise On Web Application And Connecting With Database
                        </Card.Text>
                        <Card.Text className={' d-flex between-flex c-gray text-center'}>
                            <span><i class="fa-regular fa-user" /> 788</span>
                            <span>$ 165</span>
                        </Card.Text>
                        <Button variant="primary">Buy </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='text-center'>
                    <Card.Img variant="top" src={Courses_03} />
                    <Card.Body>
                        <Card.Title className='mb-4 text-center fw-bold'>Javascript Problem Solvings</Card.Title>
                        <Card.Text className={' c-gray text-center' + ' ' + styleCourses.cardInfo}>
                            Javascript Tutorials And Examples And Solving Problems And Mastering The Art Of Front End Websites
                        </Card.Text>
                        <Card.Text className={' d-flex between-flex c-gray text-center'}>
                            <span><i class="fa-regular fa-user" /> 2250</span>
                            <span>$ 420</span>
                        </Card.Text>
                        <Button variant="primary">Buy </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='text-center'>
                    <Card.Img variant="top" src={Courses_01} />
                    <Card.Body>
                        <Card.Title className='mb-4 text-center fw-bold'>Solving Equations On X And Y</Card.Title>
                        <Card.Text className={' c-gray text-center' + ' ' + styleCourses.cardInfo}>
                            Solving Mathematics Equations And Problems And Practising On X And Y And Algebra Equations
                        </Card.Text>
                        <Card.Text className={' d-flex between-flex c-gray text-center'}>
                            <span><i class="fa-regular fa-user" /> 120</span>
                            <span>$ 425</span>
                        </Card.Text>
                        <Button variant="primary">Buy </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='text-center'>
                    <Card.Img variant="top" src={Courses_04} />
                    <Card.Body>
                        <Card.Title className='mb-4 text-center fw-bold'>Balanced Chemical Equations</Card.Title>
                        <Card.Text className={' c-gray text-center' + ' ' + styleCourses.cardInfo}>
                            Master The Art Of Chemical Equations And How To Balance it And Master The Chemical Symbols
                        </Card.Text>
                        <Card.Text className={' d-flex between-flex c-gray text-center'}>
                            <span><i class="fa-regular fa-user" /> 1995</span>
                            <span>$ 625</span>
                        </Card.Text>
                        <Button variant="primary">Buy </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='text-center'>
                    <Card.Img variant="top" src={Courses_02} />
                    <Card.Body>
                        <Card.Title className='mb-4 text-center fw-bold'>MAtering Trading And Markiting</Card.Title>
                        <Card.Text className={' c-gray text-center' + ' ' + styleCourses.cardInfo}>
                            Master The Art Of Trading And Marketing And How To Sell And Buy commodity And Matering Cryptocoins
                        </Card.Text>
                        <Card.Text className={' d-flex between-flex c-gray text-center'}>
                            <span><i class="fa-regular fa-user" /> 950</span>
                            <span>$ 170</span>
                        </Card.Text>
                        <Button variant="primary">Buy </Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
