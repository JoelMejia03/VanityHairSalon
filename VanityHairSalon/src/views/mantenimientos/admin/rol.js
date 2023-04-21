import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import Table from '../../../components/shared/Tables/admin/Table_roles';


const Roles = () => {
  return (
    <PageContainer title="Roles" description="Roles registrados">

      <DashboardCard title="Roles registrados">
        <Table/>
      </DashboardCard>
    </PageContainer>
  );
};

export default Roles;
