import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUpRightFromSquare,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

const TertiaryButton = (props) => {
  const { type, content, targetLink, size, disabled } = props;
  return (
    <Link href={targetLink}>
      <button
        disabled={disabled}
        className={`btn btn-tertiary rounded-sm flex flex-row gap-3 items-center justify-between`}
        style={{ fontSize: `${size === "xl" ? "19px" : "16px"}` }}
      >
        {content}
        {type === "external" ? (
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
        ) : type === "internal" ? (
          <FontAwesomeIcon icon={faArrowDown} size="sm" />
        ) : type === "hyperlink" ? (
          <FontAwesomeIcon icon={faLink} size="sm" />
        ) : (
          <></>
        )}
      </button>
    </Link>
  );
};

export default TertiaryButton;
