import React, { useState } from 'react';
import styles from './Dropdown.module.css'; 
import { BiChevronDown } from 'react-icons/bi';

type Option = {
  value: string;
  label: string;
};

interface DropdownProps {
  label: string;
  options: Option[];
  onSelect: (option: Option) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleToggleDropdown = () => setIsOpen(!isOpen);
  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles['dropdown-button']} onClick={handleToggleDropdown}>
        {selectedOption ? selectedOption.label : label}
        
       <BiChevronDown className={`${styles.icon} ${isOpen ? styles.rotate : ''}`} />
      </button>
      {isOpen && (
        <ul className={styles['dropdown-menu']}>
          {options.map((option) => (
            <li
              key={option.value}
              className={styles['dropdown-item']}
              onClick={() => handleSelectOption(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
