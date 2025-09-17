import React, { useEffect, useState } from "react";

function useNavToggle() {
  const [isNavToggled, setIsNavToggled] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isNavToggled ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavToggled]);

  return { isNavToggled, setIsNavToggled };
}

export default useNavToggle;
