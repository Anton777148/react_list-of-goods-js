import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const SORT_BY_ALPHABET = 'alphabet';
const SORT_BY_LENGTH = 'length';

export const App = () => {
  const [sortfiled, setSortfiled] = useState('');
  const [isReversed, setIsReversed] = useState(false);

  const visibileGoods = [...goodsFromServer].sort((a, b) => {
    if (sortfiled === SORT_BY_ALPHABET) {
      return a.localeCompare(b);
    }

    if (sortfiled === SORT_BY_LENGTH) {
      return a.length - b.length;
    }

    return 0;
  });

  if (isReversed) {
    visibileGoods.reverse();
  }

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${sortfiled === SORT_BY_ALPHABET ? '' : 'is-light'}`}
          onClick={() => setSortfiled(SORT_BY_ALPHABET)}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${sortfiled === SORT_BY_LENGTH ? '' : 'is-light'}`}
          onClick={() => setSortfiled(SORT_BY_LENGTH)}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${isReversed ? '' : 'is-light'}`}
          onClick={() => setIsReversed(prev => !prev)}
        >
          Reverse
        </button>

        {(sortfiled || isReversed) && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => {
              setSortfiled('');
              setIsReversed(false);
            }}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {visibileGoods.map(good => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
