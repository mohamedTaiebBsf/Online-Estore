import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background: var(--white);
  position: absolute;
  top: 20%;
  right: 0;
  padding: 1rem;
  z-index: 6;
  visibility: hidden;
  opacity: 0;
  transition: all 0.4s ease-in-out;
  pointer-events: none;
  max-height: 31.25rem;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px var(--gray);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gray);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(141, 143, 154, 0.7);
  }

  &.open {
    top: 100%;
    visibility: visible;
    opacity: 1;
    pointer-events: all;
  }
`;

const Title = styled.h5`
  font-weight: 700;
  margin-bottom: 1.5625rem;
`;

const TotalItems = styled.span`
  font-weight: 500;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
  margin-bottom: 1.875rem;
`;

const Label = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;

const Price = styled.p`
  font-weight: 700;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Anchor = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: var(--black);
  font-weight: 600;
  font-size: 0.875rem;
  padding: 0.8125rem 2.25rem;
  border: 1px solid var(--black);
  transition: all 0.4s ease;

  &:hover {
    color: var(--white);
    background: var(--black);
  }

  &:first-child {
    margin-right: 1rem;
  }

  &:last-child {
    color: var(--white);
    background: var(--green);
    border: none;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export {
  Container,
  Title,
  TotalItems,
  TotalPrice,
  Label,
  Price,
  Actions,
  Anchor,
};
