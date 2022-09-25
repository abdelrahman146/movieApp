import { FC, ReactNode, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { ChevronDown } from "tabler-icons-react";
import { slideUp } from "../../theme/animations";

const StyledDropDown = styled.div`
  width: 100%;
  .dropdown-wrapper {
    position: relative;
    display: block;
    &:focus > .dropdown-button {
      background: ${({ theme }) => theme.colors.body[2]};
    }
    .dropdown-button {
      all: unset;
      cursor: pointer;
      background: ${(props) => props.theme.colors.body[1]};
      border: 2px solid ${({ theme }) => theme.colors.body[2]};
      padding: ${({ theme }) => theme.spacing.sm}px;
      display: flex;
      flex-direction: row;
      gap: ${({ theme }) => theme.spacing.sm}px;
      align-items: center;
      &:hover: {
        background: ${({ theme }) => theme.colors.body[2]};
      }
      ,
      .dropdown-button-text {
        flex: 1;
      }
      .dropdown-button-placeholder {
        flex: 1;
        color: ${({ theme }) => theme.colors.text[0]};
      }
      .dropdown-button-icon {
        position: relative;
        transition: transform 0.3s linear;
        &.open {
          transform: rotate(180deg);
        }
      }
    }
    .dropdown-list {
      position: absolute;
      zindex: 1;
      top: 105%;
      width: 100%;
      max-height: 300px;
      overflow: scroll;
      cursor: pointer;
      background: ${({ theme }) => theme.colors.body[1]};
      border: 2px solid ${({ theme }) => theme.colors.body[2]};
      animation: ${slideUp} 0.3s ease;
      .dropdown-list-item {
        padding: ${({ theme }) => theme.spacing.sm}px;
        &:hover {
          background: ${({ theme }) => theme.colors.body[2]};
        }
      }
      .dropdown-list-item .active {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
const Dropdown: FC<{
  options: { value: string; label: ReactNode }[];
  value?: string;
  placeholder?: string;
  onChange?: (val: string) => void;
  disabled?: boolean;
  defaultValue?: string | undefined;
}> = ({ options, defaultValue, value, placeholder, disabled, onChange }) => {
  const [label, setLabel] = useState<ReactNode>("");
  const [openList, setOpenList] = useState(false);
  const area = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setLabel(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    const closeDropdown = (e: MouseEvent | PointerEvent) => {
      if (!area.current?.contains(e.target as Node)) {
        setOpenList(false);
      }
    };
    if (openList) {
      document.addEventListener("click", closeDropdown);
    } else {
      document.removeEventListener("click", closeDropdown);
    }
    return () => document.removeEventListener("click", closeDropdown);
  }, [openList]);

  return (
    <StyledDropDown>
      <div ref={area} className="dropdown-wrapper">
        <div
          onClick={(e) => {
            !disabled && setOpenList(!openList);
          }}
          className="dropdown-button"
        >
          {label ? (
            <div className="dropdown-button-text">{label}</div>
          ) : (
            <div className="dropdown-button-placeholder">{placeholder}</div>
          )}
          <div>
            <ChevronDown
              className={`dropdown-button-icon ${openList ? "open" : ""}`}
              size={18}
            />
          </div>
        </div>
        {openList && (
          <div className="dropdown-list">
            {options.map((item) => {
              return (
                <div
                  key={item.value}
                  className={`dropdown-list-item ${
                    item.label === label ? "active" : ""
                  }`}
                  onClick={() => {
                    onChange && onChange(item.value);
                    setLabel(item.label);
                    setOpenList(false);
                  }}
                >
                  {item.label}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </StyledDropDown>
  );
};

export default Dropdown;
