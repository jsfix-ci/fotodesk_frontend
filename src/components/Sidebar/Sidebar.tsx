import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {RootState} from '../../store';
import {IStatistic} from '../../store/slices/statistics.slice';
import {adminLinks, ILink, userLinks} from '../../utilities/nav-links';

export default function SideBar({isAdmin}: any) {
  const statistics = useSelector((state: RootState) => state.statistics);

  const generateCount = (key: string) => {
    const data = statistics[key as unknown as keyof IStatistic];
    if (!data) return null;
    return <span>({data})</span>;
  };

  return (
    <div className="sidebar col-2 mt-4">
      <div className="list-group">
        {isAdmin
          ? adminLinks.map((adminLink: ILink) => (
              <Link key={adminLink.label} to={adminLink.path} className={'list-group-item list-group-item-action'}>
                {adminLink.label} {generateCount(adminLink.key!)}
              </Link>
            ))
          : userLinks.map((userLink: ILink) => (
              <Link key={userLink.path} to={userLink.path} className={'list-group-item list-group-item-action'}>
                {userLink.label}
              </Link>
            ))}
      </div>
    </div>
  );
}
