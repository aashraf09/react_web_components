import PrimaryButton from "@/utils/Button/PrimaryButton";
import SecondaryButton from "@/utils/Button/SecondaryButton";
import TertiaryButton from "@/utils/Button/TertiaryButton";
import React from "react";
import Link from "next/link";
import IconButton from "@/utils/Button/IconButton";
import Checkbox from "@/utils/Inputs/Checkbox";
import RadioButton from "@/utils/Inputs/RadioButton";

const index = () => {
  return (
    <main className="py-96">
      <PrimaryButton
        type={"hyperlink"}
        content={"Follow Me"}
        targetLink={"/home"}
        bgColor={"primary"}
        disabled={false}
      />
      <SecondaryButton
        type={"external"}
        content={"Contact Me"}
        targetLink={"/contact"}
        disabled={true}
        size={"sm"}
      />
      <TertiaryButton
        type={"external"}
        content={"Contact Me"}
        targetLink={"/contact"}
        disabled={true}
        size={"xl"}
      />
      <Link href={"/"}>ldfjksjhgksgfh</Link>
      <IconButton iconName={"share"} targetLink={"/home"} disabled={false} />
      <Checkbox />
      <RadioButton />
    </main>
  );
};
export default index;
