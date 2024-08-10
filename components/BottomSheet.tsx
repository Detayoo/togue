import { ReactNode } from "react";

import { ModalContainer } from "./ModalContainer";

export const BottomSheet = ({
  closeModal,
  showModal,
  children,
}: {
  closeModal: () => void;
  showModal: boolean;
  children: ReactNode;
}) => {
  return (
    <ModalContainer showModal={showModal} closeModal={closeModal}>
      <div
        className={`absolute z-[100] w-[100vw] max-h-[90vh] min-h-[50vh] pt-10 px-4 bg-white rounded-t-[50px] ${
          showModal ? "bottom-0" : "bottom-[-32rem]"
        } fast__animation overflow-y-auto`}
      >
        {children}
      </div>
    </ModalContainer>
  );
};
