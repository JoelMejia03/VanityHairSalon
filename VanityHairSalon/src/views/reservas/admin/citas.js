import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import Table from '../../../components/shared/Tables/admin/Table_citas';


const Citas = () => {
  return (
    <PageContainer title="Mis Citas" description="Mis citas agendadas">

      <DashboardCard title="Mis citas agendadas">
        <Table/>
      </DashboardCard>
    </PageContainer>
  );
};

export default Citas;
