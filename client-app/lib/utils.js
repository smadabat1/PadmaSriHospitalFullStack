import { useState, useEffect } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import { calculatedDataKeys } from "./constants";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

//prevPeriodStartingDateString - string
//averageInterval - number
export const calculateOvulationData = (prevPeriodStartingDateString, averageInterval = 28) => {
  const lutealPhase = 14; //average value

  const prevPeriodStartingDate = dayjs.utc(prevPeriodStartingDateString, "YYYY-MM-D");
  const ovulationDate = dayjs(prevPeriodStartingDate).add(averageInterval - lutealPhase, "day");

  const fertileWindowStart = dayjs(ovulationDate).subtract(5, "day");

  const nextPeriod = dayjs(prevPeriodStartingDate).add(averageInterval, "day");

  const earliestPossibleTest = dayjs(ovulationDate).add(10, "day");

  return {
    prevPeriodStartingDate,
    ovulationDate,
    fertileWindowStart,
    nextPeriod,
    earliestPossibleTest,
  };
};

//ex: startDate -> 2024-11-11 endDate -> 2024-11-14
//return - [2024-11-11, 2024-11-12, 2024-11-13, 2024-11-14]
export const getDatesBetween = (startDate, endDate) => {
  const dates = [];
  let currentDate = dayjs(startDate);
  let lastDate = dayjs(endDate);

  while (currentDate.isSameOrBefore(lastDate)) {
    dates.push(currentDate.format("YYYY-MM-DD"));
    currentDate = currentDate.add(1, "day");
  }
  return dates;
};

//ex: startDate -> 2024-11-11
//return - [2024-11-11, 2024-11-12, 2024-11-13, 2024-11-14, 2024-11-14]
export const getPeriodDates = (startDate, averageInterval = 4) => {
  const dates = [];

  let currentDate = dayjs(startDate);
  let lastDate = currentDate.add(averageInterval, "days");

  while (currentDate.isSameOrBefore(lastDate)) {
    dates.push(currentDate.format("YYYY-MM-DD"));
    currentDate = currentDate.add(1, "day");
  }

  return dates;
};

export const getCalculatedDataTitle = (key) => {
  switch (key) {
    case calculatedDataKeys.fertileWindowStart:
      return "Fertile Window";
    case calculatedDataKeys.nextPeriod:
      return "Next Period";
    case calculatedDataKeys.ovulationDate:
      return "Approximate Ovulation date";
    case calculatedDataKeys.prevPeriodStartingDate:
      return "Prev period";
    case calculatedDataKeys.earliestPossibleTest:
      return "Pregnancy Test Day";
    default:
      return key;
  }
};

//reference - https://www.ncbi.nlm.nih.gov/books/NBK541070/
//height - string in cm
//weight - string in kg
//returns bmi as string.
export const calculateBmi = (height, weight) => {
  if (!height || !weight) return "0";
  const h = parseInt(height) / 100; //conversion from cm to m.
  const w = parseInt(weight);

  //bmi = weight/(height)^2
  return (w / Math.pow(h, 2)).toFixed(2);
};

//bmi - string
//returns string
export const bmiClassification = (bmi) => {
  if (!bmi || bmi === "0") return "";

  const bmiNumber = parseFloat(bmi);
  if (bmiNumber < 18.5) {
    return { id: 1, subtitle: "Under Weight" };
  } else if (bmiNumber >= 18.5 && bmiNumber <= 24.9) {
    return { id: 2, subtitle: "Normal Weight" };
  } else if (bmiNumber >= 25 && bmiNumber <= 29.9) {
    return { id: 3, subtitle: "Over Weight" };
  } else if (bmiNumber >= 30 && bmiNumber <= 34.9) {
    return { id: 4, subtitle: "Obesity class I" };
  } else if (bmiNumber >= 35 && bmiNumber <= 39.9) {
    return { id: 5, subtitle: "Obesity class II" };
  } else if (bmiNumber >= 40) {
    return { id: 6, subtitle: "Obesity class III" };
  } else {
    return "";
  }
};

export const getBmiSliderColor = (bmiObject) => {
  switch (bmiObject.id) {
    case 1:
      return {
        tc: "#FFA500",
        lg: [
          { offset: "0%", color: "white" },
          { offset: "100%", color: "#FFA500" },
        ],
      };
    case 2:
      return {
        tc: "#4CAF50",
        lg: [
          { offset: "0%", color: "white" },
          { offset: "100%", color: "#4CAF50" },
        ],
      };
    case 3:
      return {
        tc: "#FF6B00",
        lg: [
          { offset: "0%", color: "white" },
          { offset: "100%", color: "#FF6B00" },
        ],
      };
    case 4:
    case 5:
    case 6:
      return {
        tc: "#FF0000",
        lg: [
          { offset: "0%", color: "white" },
          { offset: "100%", color: "#FF0000" },
        ],
      };
    default:
      return {
        tc: "#7c3aed",
        lg: [
          { offset: "0%", color: "white" },
          { offset: "100%", color: "#7c3aed" },
        ],
      };
  }
};

export const bpClassification = (upper, lower) => {
  if (!upper || !lower) return "";

  const upperNumber = parseInt(upper);
  const lowerNumber = parseInt(lower);

  if (upperNumber < 120 && lowerNumber < 80) {
    return { id: 1, title: "Normal Blood pressure" };
  } else if (upperNumber >= 120 && upperNumber <= 129 && lowerNumber < 80) {
    return { id: 2, title: "Elevated Blood Pressure" };
  } else if (upperNumber >= 130 && upperNumber <= 139 && lowerNumber >= 80 && lowerNumber <= 89) {
    return { id: 3, title: "Hypertension Stage 1" };
  } else if (upperNumber >= 140 && lowerNumber >= 90) {
    return { id: 4, title: "Hypertension Stage 2" };
  } else {
    return { id: 5, title: "" };
  }
};

export const bpTextColor = (bpObject) => {
  switch (bpObject.id) {
    case 1:
      return {
        tc: "#4CAF50",
      };
    case 2:
      return {
        tc: "#FFA500",
      };
    case 3:
      return {
        tc: "#FF6B00",
      };
    case 4:
      return {
        tc: "#FF0000",
      };
    default:
      return { tc: "#7c3aed" };
  }
};

export const bsClassifcation = (bM, aM) => {
  if (!bM || !aM) return "";

  let classification = {
    beforeMealStatus: "",
    afterMealStatus: "",
    generalStatus: "",
    recommendations: [],
  };

  const beforeMeal = parseInt(bM);
  let afterMeal = parseInt(aM);

  if (beforeMeal < 70) {
    classification.beforeMealStatus = "Low (Hypoglycemia)";
    classification.recommendations.push("Consume fast-acting carbohydrates immediately");
  } else if (beforeMeal >= 70 && beforeMeal < 100) {
    classification.beforeMealStatus = "Normal";
  } else if (beforeMeal >= 100 && beforeMeal < 126) {
    classification.beforeMealStatus = "Prediabetes";
    classification.recommendations.push("Consider lifestyle modifications");
  } else if (beforeMeal >= 126) {
    classification.beforeMealStatus = "Diabetic Range";
    classification.recommendations.push("Consult healthcare provider");
  }

  if (afterMeal < 70) {
    classification.afterMealStatus = "Low (Hypoglycemia)";
    classification.recommendations.push("Consume fast-acting carbohydrates immediately");
  } else if (afterMeal >= 70 && afterMeal < 140) {
    classification.afterMealStatus = "Normal";
  } else if (afterMeal >= 140 && afterMeal < 200) {
    classification.afterMealStatus = "Prediabetes";
    classification.recommendations.push("Monitor diet and exercise");
  } else if (afterMeal >= 200) {
    classification.afterMealStatus = "Diabetic Range";
    classification.recommendations.push("Consult healthcare provider");
  }

  if (classification.beforeMealStatus.includes("Diabetic") || classification.afterMealStatus.includes("Diabetic")) {
    classification.generalStatus = "Diabetic Range";
  } else if (classification.beforeMealStatus.includes("Prediabetes") || classification.afterMealStatus.includes("Prediabetes")) {
    classification.generalStatus = "Prediabetes Range";
  } else if (classification.beforeMealStatus.includes("Low") || classification.afterMealStatus.includes("Low")) {
    classification.generalStatus = "Hypoglycemic Range";
  } else {
    classification.generalStatus = "Normal Range";
  }

  classification.recommendations = [...new Set(classification.recommendations)];

  return classification;
};

export const bsTextColor = (generalStatus) => {
  switch (generalStatus) {
    case "Diabetic Range":
      return "#FF0000";
    case "Prediabetes Range":
      return "#FF6B00";
    case "Hypoglycemic Range":
      return "#FFA500";
    case "Normal Range":
      return "#4CAF50";
    default:
      return "#7c3aed";
  }
};

export const getLabel = (label) => {
  switch (label) {
    case "Phone earpiece":
      return "Earpiece";
    case "Speakerphone":
      return "Speaker";
    case "Front camera":
      return "Front";
    case "Rear camera":
      return "Rear";
    default:
      return label;
  }
};

//rating is nuber
export const getRatingColor = (rating) => {
  switch (rating) {
    case 1:
      return "#f44336";
    case 2:
      return "#ff9800";
    case 3:
      return "#ffeb3b";
    case 4:
      return "#2196f3";
    case 5:
      return "#4caf50";
    default:
      return "#7c3aed";
  }
};

//rating - number
export const getFeedbackOptions = (rating) => {
  if (rating <= 2) {
    return [
      { id: 1, feedback: "Appointment Scheduling Problems" },
      { id: 2, feedback: "Difficult scheduling" },
      { id: 3, feedback: "Cancellation/rescheduling challenges" },
      { id: 4, feedback: "Technical glitches" },
      { id: 5, feedback: "Unintuitive interface" },
      { id: 6, feedback: "Slow performance" },
      { id: 7, feedback: "Poor video quality" },
      { id: 8, feedback: "Connection issues/Audio Problems" },
      { id: 9, feedback: "Didn't meet expectations" },
      { id: 10, feedback: "Complexity of use" },
    ];
  } else if (rating === 3) {
    return [
      { id: 1, feedback: "Some features work well" },
      { id: 2, feedback: "Room for improvement" },
      { id: 3, feedback: "Consistent but not exceptional" },
      { id: 4, feedback: "Average performance" },
      { id: 5, feedback: "Potential new features" },
    ];
  } else {
    return [
      { id: 1, feedback: "Ease of use" },
      { id: 2, feedback: "Appointment Scheduling" },
      { id: 3, feedback: "Video quality" },
      { id: 4, feedback: "Consistent performance" },
      { id: 5, feedback: "Multiple useful features" },
      { id: 6, feedback: "Responsive assistance" },
      { id: 7, feedback: "Minimal technical issues" },
    ];
  }
};

//rating - number
export const getFeedbackOptionsTitleSubtitle = (rating) => {
  if (rating <= 2) {
    return {
      title: "Areas for Improvement",
      subtitle: "Help us understand where we can do better"
    };
  } else if (rating === 3) {
    return {
      title: "Room for Growth",
      subtitle: "Your insights can help us improve"
    };
  } else {
    return {
      title: "What We're Doing Right",
      subtitle: "We appreciate your positive feedback"
    };
  }
}

export const getGreetingBasedOnTime = () => {
  const time = dayjs();
  if (time >= 0 && time <= 11) {
    return "Good Morning";
  } else if (time > 11 && time < 16) {
    return "Good Afternoon";
  } else if (time >= 16) {
    return "Good Evening";
  }
};