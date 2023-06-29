import { CircleNotch } from "phosphor-react";
import { LoadingContainer } from "./style";

export function Loading() {
  return (
    <LoadingContainer className="loading__box">
      <CircleNotch size={24} weight="fill" />
    </LoadingContainer>
  )
}
