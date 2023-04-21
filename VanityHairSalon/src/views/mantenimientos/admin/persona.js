import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import Table from '../../../components/shared/Tables/admin/Table_personas';


const Personas = () => {
  return (
    <PageContainer title="Personas" description="Personas registradas">

      <DashboardCard title="Personas registradas">
        <Table/>
      </DashboardCard>
    </PageContainer>
  );
};

export default Personas;
