import { motion } from 'framer';

export function Skills(props) {
    
    let initialCss = {
        opacity: 0
    }
    let animateCss = {
        opacity: 1
    }
    let exitCss = {
        opacity: 0
    }

    return (
        <motion.div
            initial={initialCss}
            animate={animateCss}
            exit={exitCss}>
            <h1>Skills</h1>
        </motion.div>
    );
}