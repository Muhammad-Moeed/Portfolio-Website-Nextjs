import React from "react";
import { motion } from "framer-motion";

// Define the props interface
interface TabButtonProps {
  active: boolean; // Indicates if the button is active
  selectTab: () => void; // Function to call when the button is clicked
  children: React.ReactNode; // Content to display inside the button
}

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  console.log("Active State:", active); // Debugging line

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-teal-400 mt-2 mr-3"
        transition={{ duration: 0.3 }} // Add a transition for smoother animation
      />
    </button>
  );
};

export default TabButton;
