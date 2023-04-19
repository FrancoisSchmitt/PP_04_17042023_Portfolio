import './index.css';

import Card from '../../components/currentObject/card';
import AboutMe from '../../components/about-me';
import CardProject from '../../components/currentObject/cardProject';


export default function Homepage() {
      return (
            <>
                  <section className='aboutme-section'>
                        <AboutMe />
                  </section>
                  <section className='card-section'>
                        <div className="background-homepage-card">
                              <div className="homepage-card-container">
                                    <Card
                                          title={'Intégrateur Web'}
                                          date={'2019'}
                                          name={'Alternance'}
                                          desc={
                                                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ut laboriosam explicabo nesciunt alias vel eum eveniet quisquam vero necessitatibus corporis, doloribus repudiandae earum aut adipisci porro repellendus ullam temporibus.'
                                          }
                                    />
                                    <Card
                                          title={
                                                "Développeur d'application front-end"
                                          }
                                          date={'2022'}
                                          name={'Formation'}
                                          desc={
                                                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ut laboriosam explicabo nesciunt alias vel eum eveniet quisquam vero necessitatibus corporis, doloribus repudiandae earum aut adipisci porro repellendus ullam temporibus.'
                                          }
                                    />
                              </div>
                        </div>
                  </section>
                  <section className="project-section">
                        <h1 className="section-project-title">
                              Projets réaliser 
                        </h1>
                        <CardProject />
                        <CardProject />
                        <CardProject />
                  </section>
            </>
      );
}
