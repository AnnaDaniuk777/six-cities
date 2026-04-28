import { useState } from 'react';
import { SortType } from '../../types';

type SortingFormProps = {
  onSortChange: (sortType: SortType) => void;
  sortTypes: SortType[];
  defaultSort?: SortType;
}

function SortingForm({ onSortChange, sortTypes, defaultSort = 'Popular' }: SortingFormProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSort, setActiveSort] = useState<SortType>(defaultSort);

  const handleSortClick = (sortType: SortType) => {
    setActiveSort(sortType);
    setIsOpen(false);
    onSortChange(sortType);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>{' '}
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {sortTypes.map((sortType) => (
          <li
            key={sortType}
            className={`places__option ${activeSort === sortType ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => handleSortClick(sortType)}
          >
            {sortType}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingForm;
