import { useState, useId, useEffect } from "react";
import { motion } from "framer-motion";
import "./Segmentcontrol.css";

export default function Segmentcontrol({
  items = ["one", "two", "three"],
  initialIndex = 0,
  onChange,
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const id = useId();

  useEffect(() => {
    onChange(currentIndex, items[currentIndex]);
  }, [currentIndex]);

  return (
    <>
      <div className="control-container">
        {items.map((item, index) => {
          return (
            <div className="control-item" onClick={() => setCurrentIndex(index)}>
              {currentIndex === index && (
                <motion.div layoutId={id} className="control-item-bg"></motion.div>
              )}
              <div className="control-item-text"> {item}</div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: "16px" }}></div>
      <div>selected item : {items[currentIndex]}</div>
      <div>selected index: {currentIndex}</div>
    </>
  );
}
