import { motion } from 'framer';
import { Container } from 'reactstrap';

export function FocusedProject(props) {

    return (
        <motion.div className="project-focused"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>
            <button className="close" onClick={props.onClose}><i className="fas fa-chevron-left"></i></button>
            {props.project.link &&
                <button className="link" onClick={()=>{window.open(props.project.link)}}><i className="fas fa-external-link-alt"></i></button>
            }
            <Container className="pt-5">
                <h1>{props.project.title}</h1>
                {props.project.description.map((line) => <p>{line}</p>)}
            </Container>
        </motion.div>
    );

}