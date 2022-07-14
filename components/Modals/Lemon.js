import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function Lemon({lemon, setLemon}) {
    return (
        <AnimatePresence>
            {lemon && (
                <motion.div className={`fixed z-20 top-0 w-full h-screen bg-black/50 backdrop-blur-md flex items-center justify-center`}
                initial={{ opacity: 0.75 }}
                animate={{ opacity: 1 }}
            >
                <motion.div className={`bg-white shadow-md w-[200px] h-[286px] flex items-center justify-center text-[100px] cursor-pointer`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={spring}
                >🍋</motion.div>
                <motion.div className={`relative bottom-40 bg-white text-4xl rounded-full cursor-pointer`} whileTap={{ scale: 0.5 }} onClick={() => setLemon(false)} >< Icon icon="ant-design:close-circle-outlined"/></motion.div>
            </motion.div>
            )}
        </AnimatePresence>
    )
}

const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
}