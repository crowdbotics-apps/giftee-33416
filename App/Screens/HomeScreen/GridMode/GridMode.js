import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { GridList, MainWrapper, LoadingLogo } from '../../../Components';

const DATA_LIST = [
  {
    id: 0,
    title: 'Product Title',
    img: '',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    id: 1,
    title: 'Product Title',
    img: '',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    id: 2,
    title: 'Product Title',
    img: '',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    id: 3,
    title: 'Product Title',
    img: '',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    id: 4,
    title: 'Product Title',
    img: '',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    id: 5,
    title: 'Product Title',
    img: '',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
];

function GridMode() {
  const navigation = useNavigation();

  return (
    <MainWrapper headerTitle="Gift results for Jon">
      <GridList
        flatListProps={{
          data: DATA_LIST,
        }}
      />
      <LoadingLogo show={false} />
    </MainWrapper>
  );
}

export default React.memo(GridMode);
