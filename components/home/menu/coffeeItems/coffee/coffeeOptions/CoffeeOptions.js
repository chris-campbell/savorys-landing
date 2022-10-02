import { useEffect, useState } from "react";
import InfuserOptions from "./infuserOptions/InfuserOptions";
import SizeOptions from "./sizeOptions/SizeOptions";
import styled from "styled-components";

const CoffeeOptionsContainer = styled.div`
  .coffee-option-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const CoffeeOptions = ({
  variants,
  setInfuser,
  setSize,
  setInfuserGroupId,
  setSizeGroupId,
}) => {
  const [infusers, setInfusers] = useState([]);
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    variants.map(({ options, name, id }) => {
      if (name === "Infusers") {
        setInfuserGroupId(id), setInfusers(options);
      }

      if (name === "Sizes") {
        setSizeGroupId(id);
        setSizes(options);
      }
    });
  }, []);

  return (
    <CoffeeOptionsContainer>
      <div className="coffee-option-wrapper">
        <SizeOptions
          sizes={sizes}
          setSize={setSize}
          variantGroupId={variants[0].id}
        />
        <InfuserOptions
          infusers={infusers}
          setInfuser={setInfuser}
          variantGroupId={variants[1].id}
        />
      </div>
    </CoffeeOptionsContainer>
  );
};

export default CoffeeOptions;
