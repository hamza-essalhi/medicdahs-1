import React from 'react';

import { motion } from 'framer-motion';
import { FaInfoCircle } from 'react-icons/fa';
import { FaCheck, FaX } from 'react-icons/fa6';

export default function BackDropAlertMessage({
    valueOfBackdrop,
    setShowBackDRropAlertMessage,
}) {
    const handellDelete = () => {
        console.log(valueOfBackdrop, 'is deleted');
        setShowBackDRropAlertMessage(false);
    };

    const handellClose = () => {
        setShowBackDRropAlertMessage(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.05 }}
            className= 'BackDropAlertMessageRow backdrop-blur-sm'

        >
            <div className="flex flex-col justify-center p-8 BackDropAlertMessage backdrop-blur-sm md:top-1/4 max-sm:top-1/4 max-sm:w-4/5 mt-20 items-center lg:w-1/2 md:w-3/4 sm:w-full max-sm:w-90%">


                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="flex items-start p-4"
                >
                    <FaInfoCircle className="info " />
                    <motion.h1 className='max-sm:text-sm'>
                        Veuillez confirmer votre décision de procéder à l'action pour.{' '}
                        <span className="font-extrabold text-red-500 hover:scale-110 ">
                            {valueOfBackdrop}
                        </span>
                        . Sélectionnez "OK" pour procéder ou "Annuler" pour annuler..
                    </motion.h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="flex justify-between w-full mt-5 p-4"
                >
                    <FaCheck onClick={handellDelete} className="delete-icon icon " />
                    <FaX onClick={handellClose} className="close-icon icon" />
                </motion.div>
            </div>
        </motion.div>
    );
}
