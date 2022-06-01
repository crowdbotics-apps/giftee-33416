import React from 'react';
import { GridList, LoadingLogo, MainWrapper } from '../../../Components';
import { ITEM_LIST } from '../../../Config/MockData';

function GridMode() {
  return (
    <MainWrapper headerTitle="Gift results for Jon">
      <GridList
        flatListProps={{
          data: ITEM_LIST,
        }}
      />
      <LoadingLogo show={false} />
    </MainWrapper>
  );
}

export default React.memo(GridMode);
