import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import Table from '../../../components/shared/Tables/admin/Table_especialidades';


const Especialidades = () => {
  return (
    <PageContainer title="Especialidades" description="Especialidades registradas">

      <DashboardCard title="Especialidades registradas">
        <Table/>
      </DashboardCard>
    </PageContainer>
  );
};

export default Especialidades;
