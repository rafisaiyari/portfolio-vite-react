import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "rafisaiyari@ymail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <div className="flex flex-col items-center gap-4">
        {/* Gmail Button*/}
        <motion.a
            href={gmailComposeLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={copyToClipboard}
            whileHover={{y:-5}}
            whileTap={{scale:1.05}}
            className="relative px-1 py-4 text-sm text-center rounded-full
            font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
        >
            <motion.p className="flex items-center justify-center gap-2"
            >
            <img src="assets/gmail.svg" className="w-5" alt="mail icon" />
            Send an email
            </motion.p>
        </motion.a>
        {/* Copy Email Button */}
        <motion.button
            onClick={copyToClipboard}
            whileHover={{y:-5}}
            whileTap={{scale:1.05}}
            className="relative px-1 py-4 text-sm text-center rounded-full
            font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
        >
            <AnimatePresence mode="wait">
            {copied ? (
            <motion.p 
            className="flex items-center justify-center gap-2" 
            key="copied"
            initial={{ opacity: 0, y:-10 }}
            animate={{ opacity: 1, y:0 }}
            exit={{ opacity: 0, y:-10 }}
            transition={{duration: 0.1, ease: "easeInOut"}}>
                <img src="assets/copy-done.svg" className="w-5" alt="check icon" />
                Email copied.
            </motion.p>
            ) : (
            <motion.p 
            className="flex items-center justify-center gap-2"
            key="copy"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{duration: 0.1}}
            >
                <img src="assets/copy.svg" className="w-5" alt="copy icon" />
                Copy Email Address
            </motion.p>
            )}
            </AnimatePresence>
        </motion.button>

      
    </div>
  );
};

export default CopyEmailButton;
