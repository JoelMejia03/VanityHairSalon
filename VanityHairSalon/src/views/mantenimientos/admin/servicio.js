import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import Table from '../../../components/shared/Tables/admin/Table_servicios';


const Servicios = () => {
  return (
    <PageContainer title="Servicios" description="Servicios registrados">

      <DashboardCard title="Servicios registrados">
        <Table/>
      </DashboardCard>
    </PageContainer>
  );
};

export default Servicios;
