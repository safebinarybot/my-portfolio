import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { FaPlay, FaCode } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

import placeholder from '../../../assets/png/placeholder.png'
import './SingleProject.css'


import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

function SingleProject({ id, name, desc, tags, code, demo, image, theme, imageslist }) {

    const useStyles = makeStyles((t) => ({
        iconBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 50,
            border: `2px solid ${theme.tertiary}`,
            color: theme.tertiary,
            transition: 'all 0.2s',
            "&:hover": {
                backgroundColor: theme.secondary,
                color: theme.primary,
                transform: 'scale(1.1)',
                border: `2px solid ${theme.secondary}`,
            },
        },
        icon: {
            fontSize: '1.1rem',
            transition: 'all 0.2s',
            "&:hover": {

            },
        }
    }));


    const classes = useStyles();

    const images = imageslist;

    const [isOpen, setToggler] = useState(false);

    const [photoIndex, changeimgae] = useState(0)



    return (
        <Fade bottom>
            <div key={id} className="singleProject" style={{ backgroundColor: theme.primary400 }} >
                <div className="projectContent">
                    <h2 style={{ color: theme.tertiary }}>{name}</h2>
                    <img src={image ? image : placeholder} alt={name} />
                    <div className="project--showcaseBtn">

                        <a onClick={() => {if (images)setToggler(!isOpen)}} rel="noreferrer" className={classes.iconBtn}>
                            <FaPlay className={classes.icon} />
                        </a>


                        <a href={code} target="_blank" rel="noreferrer" className={classes.iconBtn}>
                            <FaCode className={classes.icon} />
                        </a>
                    </div>
                </div>
                <p className="project--desc" style={{ background: theme.secondary, color: theme.tertiary }}>
                    {desc}
                </p>
                <div className="project--lang" style={{ background: theme.secondary, color: theme.tertiary80 }}>
                    {tags.map((tag, id) => (
                        <span key={id}>{tag}</span>
                    ))}
                </div>
            </div>

            <div>

                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setToggler(!isOpen)}
                        onMovePrevRequest={() => changeimgae((photoIndex + images.length - 1) % images.length)}
                        onMoveNextRequest={() => changeimgae((photoIndex + 1) % images.length)}
                    />
                )}
            </div>


        </Fade>
    )
}

export default SingleProject
