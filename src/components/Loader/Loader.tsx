import React from 'react';
import {Oval} from 'react-loader-spinner';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

export default function Loader() {
  const {isLoading} = useSelector((state: RootState) => state.common);
  if (!isLoading) return null;
  return (
    <>
      {isLoading && (
        <div className="loader-parent">
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      )}
    </>
  );
}
