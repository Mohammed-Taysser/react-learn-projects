import React from 'react';
import { Link } from './CustomRouter';

function Dashboard(props) {
  function version_items() {
    return props.versions.map((version, index) => (
      <Link className='text-dark m-3' href={version.href} key={index}>
        {version.title}
      </Link>
    ));
  }

  function version_list() {
    return <div className=''>{version_items()}</div>;
  }

  return (
    <div className='bg-light my-5 py-5'>
      <div className='my-5 py-5 text-center'>
        <h1 className='display-1 '>{props.label}</h1>
        {version_list()}
      </div>
    </div>
  );
}

Dashboard.defaultProps = {
  versions: [],
  label: 'dashboard',
};

export default Dashboard;
