import React, { useEffect, useState } from "react";

const useDeviceType = () => {
  const [device, setDevice] = useState("desktop");

  // 디바이스 크기 체크
  useEffect(() => {
    const width = window.innerWidth;

    const updateDevice = () => {
      if (width <= 768) {
        setDevice("mobile");
      } else if (width <= 1024) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
    };

    updateDevice(); // 초기 실행
    window.addEventListener("resize", updateDevice);

    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  return device;
};

export default useDeviceType;
