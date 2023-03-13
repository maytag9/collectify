import React from 'react';
import AddMovieForm from './AddMovieForm';
import AddBookForm from './AddBookForm';
import AddAnyForm from './AddAnyForm';
interface IFormByItemType {
  itemType: string | undefined;
}
const FormByItemType: React.FunctionComponent<IFormByItemType> = ({
  itemType
}: IFormByItemType) => {
  switch (itemType) {
    case 'Fashion':
    case 'Any':
      return <AddAnyForm />;
    case 'Book':
      return <AddBookForm />;
    case 'Movie':
      return <AddMovieForm />;
    default:
      return null;
  }
};

export default FormByItemType;
