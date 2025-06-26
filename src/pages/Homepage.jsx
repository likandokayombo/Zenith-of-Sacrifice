// import React from 'react';

// const Homepage = () => {
//   return (
//     <div className="bg-black min-h-screen flex flex-col">
//       <div className="flex-grow flex items-center justify-center p-4">
//         <h6 className="Geist-Medium text-center text-white text-2xl md:text-4xl lg:text-5xl
//                        max-w-4xl mx-auto">
//           Welcome, My perspective is forged where ideas meet the soil: I'm an Educated Villager with the pragmatic edge of Pro Baratzish. As a Social Activist and Political Commentator, I challenge systems and amplify voices. At the heart of it all lies a core belief: true Greatness bows before children, prioritizing their world over ego. This is the lens through which I engage
//         </h6>
//       </div>
//     </div>
//   );
// };

// export default Homepage;
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Footerss from './Footerss';

const Homepage = () => {
  // Full text content
  const text = "Welcome, My perspective is forged where ideas meet the soil: I'm an Educated Villager with the pragmatic edge of Pro Baratzish. As a Social Activist and Political Commentator, I challenge systems and amplify voices. At the heart of it all lies a core belief: true Greatness bows before children, prioritizing their world over ego. This is the lens through which I engage";
  
  // Split text into words
  const words = useMemo(() => text.split(/\s+/), []);
  
  // Select 4 random unique indices
  const highlightIndices = useMemo(() => {
    const indices = new Set();
    while (indices.size < 4) {
      const randomIndex = Math.floor(Math.random() * words.length);
      indices.add(randomIndex);
    }
    return Array.from(indices);
  }, [words.length]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (index) => ({
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300,
        delay: index * 0.02
      }
    })
  };

  const highlightVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 400,
        damping: 10
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, -2, 0, 2, 0],
      transition: { 
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center p-4">
        <motion.h6 
          className="Geist-Medium text-center text-white text-2xl md:text-4xl lg:text-5xl max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {words.map((word, index) => {
            const isHighlighted = highlightIndices.includes(index);
            const hasComma = word.endsWith(',') || word.endsWith(':');
            const cleanWord = word.replace(/[.,:;]/g, '');
            
            return (
              <React.Fragment key={index}>
                {isHighlighted ? (
                  <motion.span
                    className="relative inline-block mx-1"
                    variants={highlightVariants}
                    whileHover="hover"
                    custom={index}
                  >
                    <span className="relative z-10 px-1">
                      {cleanWord}
                    </span>
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg transform -rotate-1"
                      initial="hidden"
                      animate="show"
                      style={{ zIndex: -1 }}
                    />
                    {hasComma && <span className="inline-block">{word.slice(-1)}</span>}
                  </motion.span>
                ) : (
                  <motion.span 
                    className="inline-block"
                    variants={wordVariants}
                    custom={index}
                  >
                    {word}
                  </motion.span>
                )}
                <span> </span>
              </React.Fragment>
            );
          })}
        </motion.h6>
      </div>
      <Footerss />
    </div>
  );
};

export default Homepage;