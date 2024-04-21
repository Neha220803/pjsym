import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import herosbg from '../images/herosimg.png';
import { motion } from 'framer-motion';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Footer } from '../resuable/footer';
// import hero1 from '../images/Heros/hero1.png';
// import hero2 from '../images/Heros/hero2.png';
// import hero3 from '../images/Heros/hero3.png';

const upvariants = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        }
    }
};

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <Button variant='primary' onClick={decoratedOnClick}> {children}</Button>
    );
}

const HerosPage = () => {

    return (
        <div>
            <img alt="mission img" src={herosbg} className="img-fluid w-100" />
            <Container>
                <Row>
                    <motion.div variants={upvariants} initial="initial" animate="animate" className='each-head d-flex justify-content-center my-4'>~ Heros Stories ~</motion.div>
                </Row>
                <motion.div variants={upvariants} initial="initial" animate="animate">
                    <CardContainer
                        imgSrc={require('../images/Heros/hero1.png')}
                        title="Sainuma Kumari"
                        text="In the sun-kissed valleys of North-East of India, where ancient traditions wove the fabric of existence, Sainuma Kumari’s story unfold - a symphony of resilience, courage and confidence. Born in a family of seven sisters and one brother, Sainuma was the unexpected note - the girl when a boy was anticipated. Her father, a man shackled by societal norms, saw her as excess baggage. The weight of her existence pressed upon her like monsoon clouds, threatening to drown her spirit. \n
                        But destiny had other plans; there appeared Tony Penda, a Jesuit with eyes that held galaxies. His empathy wrapped around Sainuma like a protective cloak. “You can,” he whispered, and those two words became her anthem. Tony was more than a guide; he was a loving father figure who chiseled strength from her fragility. The Society of Jesus, in the form of three Jesuits, extended their hands. Their mission was to uplift souls and nurture minds. They saw Sainuma’s potential—the one strength she possessed - the ability to learn and persevere. They ignited her longing for freedom, stoking the fire to prove that she could defy gravity.
                        \nThe plan unfolded. Sainuma taught 15 to 20 children; her voice weaving dreams into their hearts. For six to seven years, she balanced between studies and mentoring. The classroom became her sanctuary, where she sculpted futures while shaping her own. Transitional moments bloomed. Counselling sessions were her compass that guided her through storms of self-doubt. Macro-level care enveloped her, while micro-level lessons taught her resilience. Dancing and music became her secret gardens where she blossomed. The platform beneath her feet whispered, ‘Realize your worth’.
                        \nIn the meantime, challenges loomed; proposals arrived like moths drawn to her beauty. But Sainuma resisted. Marriage wasn’t her destiny but liberation was. She defied norms, refusing to be a pawn in society’s game. And then, there was a transformation. From a timid soul to a beacon of hope. Hopeless whispers became anthems of courage. She donned the nurse’s uniform, stitching wounds with compassion. The children she mentored multiplied - five more souls dancing to her rhythm.
                        \nFrom forested hills to New Delhi’s bustling streets, Sainuma's journey echoed. She was no longer a burden; she was a symphony - a testament to love, resilience, and the power of 'YOU CAN'. In her eyes, galaxies sparkled - the legacy of Tony Penda and the Jesuits who believed in her
                        \nSainuma says, “The path was not easy and many said I CANNOT and I say today, look at me I CAN and I DID with the little help and constant encouragement. If I can – many others can too”. "
                        buttonText="Read her story..."
                    />
                    <CardContainer
                        imgSrc={require('../images/Heros/hero2.png')}
                        title="AVINASH MAHATO "
                        text="In the heart of a forgotten village, where poverty clung to every mud-brick wall, Avinash Mahato’s life unfolded like a tattered scroll. His father, a drunken specter, had sold their ancestral land, leaving the family adrift in a sea of deprivation. His mother, a silent warrior, stitched together their survival with frayed threads of love and resilience.
                        \nAvinash’s existence was etched in shadows - the forgotten child of a forsaken corner house. The Tharu community, belittled and excommunicated, whispered tales of their misfortune. Yet, within this desolation, a spark flickered - a hunger for knowledge, a thirst for learning and a desire for escape.
                        \nThere come the Jesuits of Patna Province - their presence like a celestial alignment. Three JESUITS of purpose, their cassocks billowing with hope. They saw Avinash’s potential, hidden beneath rags and hunger. Their plan was audacious: to nurture a boy who wasn’t their kin, who had been robbed of childhood, who clung to the fringes of relevance. The process began - a symphony of mentorship and education. Avinash, studious and ambitious, absorbed knowledge like parched earth after rain. His energy, once scattered, found rhythm - a channeling of purpose. Computers hummed under his fingertips, and Tally sheets danced to his command.
                        \nBut the agreement weighed heavy. He would halt his own studies, dedicating a year to service. The center became his sanctuary - a place where bytes and balance sheets intertwined. Amidst the whir of machines, he discovered more than algorithms; he found himself. Transitional moments arrived. Avinash faced his father - a man who had abandoned love for liquor. Their conversations were bridges - rickety but vital. He accepted his mentally handicapped brother, bridging chasms of disassociation. Healing flowed like monsoon rain, washing away anger and hurt.
                        \nChallenges loomed. Poverty gnawed at his dreams. The internal battle—the need to prove himself, to defy failure’s icy grip—threatened to consume him. Yet, he persisted. Fluency in English became his armor, confidence its sheen. Avinash was transformed—an emotional tempest now a steady ship navigating life’s tempests.
                        \nAnd so, he pursued M.Com - a beacon of resilience. The boy who once clenched fists in rage now faced life’s storms with courage. His brand story? It echoed through the village - a testament to the Society of Jesus, to mentors who believed in more than textbooks. Avinash Mahato, the phoenix rising from the ashes - carved his legacy. His footsteps, once hesitant, now imprinted the path for others. Poverty no longer defined him; it fueled his ascent. And as he balanced ledgers and dreams, he whispered, “I am enough.”
                        \nIn the quiet of night, the Jesuits watched, a constellation of pride. Avinash’s transformation was their symphony, the notes of grace, resilience, and hope. For, in the heart of a forgotten village, a brand was born - one that defied poverty, embraced vulnerability, and dared to dream.
                        "
                        buttonText="Read his story..."
                    />
                    <CardContainer
                        imgSrc={require('../images/Heros/hero3.png')}
                        title="LOVELY KUMARI"
                        text="Lovely Kumari’s life began in the shadows of adversity. Born into a broken family, she lost her mother at a tender age, leaving her unwanted and vulnerable. Her father’s rejection and her stepmother’s indifference further compounded her struggles; yet, amidst the chaos, two pillars of support emerged: her grandmother and later her uncle.
                        \nThe community they belonged to adhered strictly to the caste system, where Lovely’s Catholic faith also set her apart. She was a girl without parental backing, navigating poverty’s harsh currents. But her grandmother’s protective cocoon kept her from discovering her true self. Fear clung to her like a shadow, stifling her potential.
                        \nThen, fate intervened. Sister Jessy, a Canossian nun, along with two other Jesuit priests stepped into Lovely’s life. With empathy and unwavering commitment, Sister Jessy and Fathers Jesuraj SJ and Joyson SJ became her beacon. Financially and morally, they lifted Lovely’s spirit, accompanying her through every twist and turn. In those moments, they were more than a guide; she was a motherly presence, nurturing Lovely’s dreams.
                        \nThe religious social action structure provided a path for Lovely’s upliftment. A youth animation program ignited her confidence, urging her to stand independently. Nursing, however, wasn’t her initial choice. The hospital walls became her classroom, and medical care her curriculum. The caste system had earmarked her for midwifery, but Lovely defied those boundaries. She broke free from societal norms, embracing the noble profession of nursing.
                        \nChallenges persisted. Her father, though employed, remained distant. Poverty and social structures threatened her resolve. Internally, she grappled with fragility - a consequence of being overprotected. The warmth of parental love eluded her.
                        \nYet, Lovely was transformed. From a timid girl, she emerged as a liberated force. Her voice, once silenced, now echoed through the hospital corridors. She stood tall, a testament to resilience. The fragile bud had blossomed into a strong, compassionate nurse - a beacon of hope for others. Lovely Kumari’s journey wasn’t just about overcoming odds; it was about rewriting her narrative. In the quiet moments, she whispers gratitude to the Jesuits and Sister Jessy, the woman who believed in her when the world turned away. And as she tended the patients, Lovely knew that her transformation was a tribute to love, faith, and the unwavering spirit within her. She continues her transforming career while pursuing her degree – she works and convinced to uplift girls like her. "
                        buttonText="Read her story..."
                    />
                </motion.div>
            </Container>
            <Footer />
        </div>
    )
}

const CardContainer = ({ imgSrc, title, text, buttonText }) => {
    const paragraphs = text.split("\\n");
    return (
        <motion.div variants={upvariants} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
            <Accordion>
                <Accordion.Item className='mb-4'>
                    <Accordion.Header style={{cursor:'default'}}>
                        <div>
                            <img src={imgSrc} style={{ width: '150px', height: 'auto' }} className="align-self-center me-4" alt="Hero" />
                        </div>
                        <div>
                            <h3>{title}</h3>
                            <CustomToggle eventKey="0">{buttonText}</CustomToggle>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        {paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </motion.div>
    );
}

export default HerosPage;