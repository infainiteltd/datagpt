import React from "react";
import { Stack } from "@fluentui/react";
import InfinityLogo from "../../assets/InfinityLogo";
import Cards from "../../pages/chat/Cards_contract/Cards";
import styles from "./AssistantTypeSection.module.css";
import DataGptText from '../../assets/DataGptText';

type AssistantTypeSectionProps = {
  assistantType: string;
  isAssistantAPILoading: boolean;
};

enum assistantTypes {
  default = "default",
  contractAssistant = "contract assistant",
}

export const AssistantTypeSection: React.FC<AssistantTypeSectionProps> = ({
  assistantType,
  isAssistantAPILoading,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoStack}>
      </div>
    </div>
  );
};
