import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUpRightFromSquare,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

const PrimaryButton = (props) => {
  const { type, content, targetLink, bgColor, disabled } = props;
  return (
    <Link href={targetLink}>
      <button
        disabled={disabled}
        className={`btn ${
          bgColor === "white" ? "btn-white" : "btn-primary"
        } rounded-sm flex flex-row gap-3 items-center justify-between`}
      >
        {content}
        {type === "external" ? (
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
        ) : type === "internal" ? (
          <FontAwesomeIcon icon={faArrowDown} size="lg" />
        ) : type === "hyperlink" ? (
          <FontAwesomeIcon iconName={faLink} size="lg" />
        ) : (
          <></>
        )}
      </button>
    </Link>
  );
};

export default PrimaryButton;
