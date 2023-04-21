import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import Table from '../../../components/shared/Tables/cliente/Table_citas_cl';


const Citas_cl = () => {
  return (
    <PageContainer title="Mis Citas" description="Mis citas agendadas">

      <DashboardCard title="Mis citas agendadas">
        <Table/>
      </DashboardCard>
    </PageContainer>
  );
};

export default Citas_cl;
