import PrimaryButton from "@/utils/Button/PrimaryButton";
import SecondaryButton from "@/utils/Button/SecondaryButton";
import React from "react";

const index = () => {
  return (
    <main className="py-96">
      {/* <PrimaryButton
        type={"hyperlink"}
        content={"Follow Me"}
        targetLink={"/home"}
        bgColor={"white"}
        disabled={false}
      /> */}
      <SecondaryButton
        type={"hyperlink"}
        content={"Contact Me"}
        targetLink={"/contact"}
        bgColor={"primary"}
        disabled={false}
      />
    </main>
  );
};
export default index;
