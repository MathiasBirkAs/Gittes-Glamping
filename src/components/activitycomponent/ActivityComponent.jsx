import React, { useState } from "react";
import styles from "./activityComponent.module.css";
import activitiesData from "../../data/activities.json";

import fireImg from "../../assets/activities/kano.jpg";
import canoeImg from "../../assets/activities/naturvandring.jpg";
import hikeImg from "../../assets/activities/yoga.jpg";
import yogaImg from "../../assets/activities/vinsmagning.jpg";
import wineImg from "../../assets/activities/baal.jpg";

const imageMap = {
  Fællesbål: fireImg,
  Kanotur: canoeImg,
  Naturvandring: hikeImg,
  "Yoga i det fri": yogaImg,
  Vinsmagning: wineImg,
};

export default function ActivityComponent() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (title) => {
    setExpanded((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <>
      {activitiesData.activities.map((activity, index) => (
        <div key={index} className={styles.activityCardWrapper}>
          <div className={styles.activityImageContainer}>
            <img
              src={imageMap[activity.title] || ""}
              alt={activity.title}
              className={styles.activityImage}
            />

            <div className={styles.activityOverlay}></div>

            {/* Title Box */}
            <div className={styles.activityTitleBox}>
              <h3 className={styles.activityTitle}>{activity.title}</h3>
            </div>

            {/* Bottom Box */}
            <div className={styles.activityInfoBox}>
              <p className={styles.activityDate}>
                {activity.date || activity.weekday}
              </p>
              <p className={styles.activityTime}>{activity.time}</p>
              <button
                className={styles.readMoreButton}
                onClick={() => toggleExpand(activity.title)}
              >
                Læs mere
              </button>
            </div>
          </div>

          {/* Expanded description */}
          {expanded[activity.title] && (
            <div className={styles.activityDescription}>
              <p>{activity.description}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
